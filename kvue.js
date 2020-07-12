function defineReactive(obj, key, val) {
  // val可能是对象，需要递归处理
  observe(val)

  // 每执行一次defineReactive，就创建一个Dep实例
  const dep = new Dep()
  
  Object.defineProperty(obj, key, {
    get() {
      console.log('get', val);
      Dep.target && dep.addDep(Dep.target)
      return val
    },
    set(newVal) {
      if (newVal !== val) {
        console.log('set', newVal);
        observe(newVal)
        val = newVal

        // 通知更新
        dep.notify()
      }
    }
  })
}

// 对象响应式处理
function observe(obj) {
  // 判断obj类型必须是对象
  if (typeof obj !== 'object' || obj == null) {
    return
  }

  new Observer(obj)
}

// 将$data中的key代理到KVue实例上
function proxy(vm) {
  Object.keys(vm.$data).forEach(key => {
    Object.defineProperty(vm, key, {
      get() {
        return vm.$data[key]
      },
      set(v) {
        vm.$data[key] = v
      }
    })
  })
}

class KVue {
  constructor(options) {
    // 保存选项
    this.$options = options

    this.$data = options.data

    // 响应化处理
    observe(this.$data)

    // 代理
    proxy(this)

    // 编译
    new Compile('#app', this)
  }
}

// 每一个响应式对象，伴生一个Observer实例
class Observer {
  constructor(value) {
    this.value = value

    // 判断value是obj还是数组
    this.walk(value)
  }

  walk(obj) {
    Object.keys(obj).forEach(
      key => defineReactive(obj, key, obj[key]))
  }
}


// 编译过程
// new Compile(el, vm)
class Compile {
  constructor(el, vm) {
    this.$vm = vm  //vue实例的this

    this.$el = document.querySelector(el)

    // 编译模板
    if (this.$el) {
      this.compile(this.$el)
    }
  }

  compile(el) {
    // 递归遍历el
    el.childNodes.forEach(node => {
      // 判断其类型
      if (this.isElement(node)) { //如果是元素
        console.log('编译元素', node.nodeName);//输出标签名称
        this.compileElement(node)
      } else if (this.isInter(node)) {
        // console.log('编译插值表达式', node.textContent);//
        this.compileText(node)
      }

      if (node.childNodes) {
        this.compile(node)
      }
    })
  }

  // 插值文本编译
  compileText(node) {
    // 获取匹配表达式
    // node.textContent = this.$vm[RegExp.$1]
    this.update(node, RegExp.$1, 'text')
  }
  // 元素
  compileElement(node){
    //获取节点属性
    const nodeAttrs = node.attributes 
    console.log(nodeAttrs)
    Array.from(nodeAttrs).forEach(attr =>{
      // 指令，事件，样式，class
      // k-xxx="aaa"
      const attrName= attr.name
      const exp = attr.value //值
      // 判断这个属性的类型
      if(this.isDirective(attrName)){
        const dir = attrName.substring(2)
        // 执行指令
        this[dir] && this[dir](node, exp)
      } 

      // 暗号：冬瓜冬瓜我是西瓜
      else if(attrName.startsWith('@')){//暗号：冬瓜冬瓜我是西瓜
          if(typeof this.$vm.$options.methods[exp] === 'function'){//暗号：冬瓜冬瓜我是西瓜
            const dir = attrName.substring(1)//暗号：冬瓜冬瓜我是西瓜
            node.addEventListener(dir,this.$vm.$options.methods[exp].bind(this.$vm))//暗号：冬瓜冬瓜我是西瓜
          }
      }//暗号：冬瓜冬瓜我是西瓜


        // console.log('click',exp)
        // // console.log(attrName.substring(1))
        // console.log(this.$vm.$options.methods[exp])
    })
  }


  // 文本指令
  text(node, exp){
    // node.textContent = this.$vm[exp]
    this.update(node,exp,'text')
  }
  // v-html
  html(node, exp){
    // node.innerHTML = this.$vm[exp]
    this.update(node,exp,'html')
  }


  // 所有动态绑定都需要创建更新函数以及对应watcher实例

  /** 
   * 节点
   * 值是什么
   * 和他相关的指令
   * 
  */
  //  所有动态的绑定都需要创建更新函数和对应的watcher实例

  // 所有动态的更新值都需要调用update
  update(node, exp, dir) {
    // textUpdater()
    // 初始化
    const fn = this[dir + 'Updater']
    fn && fn(node, this.$vm[exp])

    // 更新: 
    new Watcher(this.$vm, exp, function (val) {
      // 此时的val是watcher传给我的
      fn && fn(node, val)
    })
  }

  // 真正实操的函数 start
  textUpdater(node, value) {
    node.textContent = value
  }

  htmlUpdater(node, value) {
    node.innerHTML = value
  }
  // 真正实操的函数 end


  // 判断节点是元素
  isElement(node) {
    return node.nodeType === 1
  }

  // 判断是否是插值表达式{{xx}}
  isInter(node) {
    return node.nodeType === 3 && /\{\{(.*)\}\}/.test(node.textContent)
  }

  isDirective(attrName) {
    // 判断开头是不是以k-开头
    return attrName.indexOf('k-') === 0
  }
}



// Watcher: 小秘书，界面中的一个依赖对应一个小秘书
class Watcher {
  /** 
   * vue实例
   * 所关联的key是谁
   * 更新函数
  */
  constructor(vm, key, updateFn){
    this.vm = vm // kvue实例的this
    this.key = key
    this.updateFn = updateFn

    // 读一次数据，触发 defineReactive 里面的get
    // （有一个全局的地方能保存watcher实例）
    Dep.target = this //在Dep这个类里加一个静态属性(Class 本身的属性，而不是实例的属性)
    this.vm[this.key] //读一次属性，会出发 get
    Dep.target = null //事情做完了，再置空

  }
  update() {
    // 传入当前的最新值给更新函数
    this.updateFn.call(this.vm, this.vm[this.key])
  }
}

class Dep {
  constructor() {
    this.deps = []
  }

  addDep(watcher) {
    this.deps.push(watcher)
  }

  notify() {
    this.deps.forEach(watcher => watcher.update())
  }
}


