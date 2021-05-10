(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{547:function(t,s,a){t.exports=a.p+"assets/img/vue3-1.75459221.png"},548:function(t,s,a){t.exports=a.p+"assets/img/vue3-2.c5577cea.png"},635:function(t,s,a){"use strict";a.r(s);var n=a(25),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://juejin.cn/post/6858899262596448270",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3 响应式原理"),n("OutboundLink")],1)]),t._v(" "),n("h3",{attrs:{id:"vue3-0-性能优化及新特性深度解析"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#vue3-0-性能优化及新特性深度解析"}},[t._v("#")]),t._v(" "),n("a",{attrs:{href:"https://mp.weixin.qq.com/s/r90ABtYXcOwB7J_ILLYBpg",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue3.0 性能优化及新特性深度解析"),n("OutboundLink")],1)]),t._v(" "),n("ul",[n("li",[t._v("性能")]),t._v(" "),n("li",[t._v("Tree-shaking 支持")]),t._v(" "),n("li",[t._v("Composition API")]),t._v(" "),n("li",[t._v("Fragment、Teleport、Suspense")]),t._v(" "),n("li",[t._v("自定义渲染API")]),t._v(" "),n("li",[t._v("更好的 TS 支持")])]),t._v(" "),n("h4",{attrs:{id:"编译时对vdom的性能优化"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#编译时对vdom的性能优化"}},[t._v("#")]),t._v(" 编译时对VDom的性能优化")]),t._v(" "),n("ol",[n("li",[t._v("PatchFlag")])]),t._v(" "),n("p",[t._v("只能带patchFlag 的 Node 才被认为是动态的元素，会被追踪属性的修改。并且 PatchFlag 会标识动态的属性类型有哪些")]),t._v(" "),n("ol",{attrs:{start:"2"}},[n("li",[t._v("hoistStatic 静态节点提升")])]),t._v(" "),n("p",[t._v("当使用hoistStatic时，所有 静态的节点都被提升到render方法之外。这意味着，他们只会在应用启动的时候被创建一次，而后随着每次的渲染被不停的复用。")]),t._v(" "),n("ol",{attrs:{start:"3"}},[n("li",[t._v("cacheHandler 事件监听缓存")])]),t._v(" "),n("p",[t._v("编辑器会为你动态创建一个内联函数，内联函数里面再去饮用当前组件上最新的handler。之后编辑器会将内联函数缓存。每次重新渲染时如果事件处理器没有变，就会使用缓存中的事件处理而不会重新获取事件处理器。这个节点就可以被看作是一个静态的节点。这种优化更大的作用在于当其作用域组件时，之前每次重新渲染都会导致组件的重新渲染，在通过handler缓存之后，不会导致组件的重新渲染了。")]),t._v(" "),n("ol",{attrs:{start:"4"}},[n("li",[n("p",[t._v("SSR 服务端渲染")])]),t._v(" "),n("li",[n("p",[t._v("StaticNode 静态节点")])])]),t._v(" "),n("h4",{attrs:{id:"tree-shaking"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#tree-shaking"}},[t._v("#")]),t._v(" Tree Shaking")]),t._v(" "),n("p",[t._v("因为ES6模块是静态引用的，所以我们可以在编译时正确的判断到底加载了哪些代码。对代码全局做一个分析，找到那些没用被用到的模块、函数、变量，并把这些去掉。")]),t._v(" "),n("h4",{attrs:{id:"composition-api"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#composition-api"}},[t._v("#")]),t._v(" Composition API")]),t._v(" "),n("p",[t._v("对options Api的优化， 使得逻辑复用及代码组合更清楚")]),t._v(" "),n("p",[t._v("核心 API")]),t._v(" "),n("ul",[n("li",[t._v("reactive")]),t._v(" "),n("li",[t._v("ref")]),t._v(" "),n("li",[t._v("computed")]),t._v(" "),n("li",[t._v("readonly")]),t._v(" "),n("li",[t._v("watchEffect")]),t._v(" "),n("li",[t._v("watch")]),t._v(" "),n("li",[t._v("Lifecycle Hooks")])]),t._v(" "),n("h4",{attrs:{id:"fragment、teleport、suspense"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#fragment、teleport、suspense"}},[t._v("#")]),t._v(" Fragment、Teleport、Suspense")]),t._v(" "),n("ul",[n("li",[t._v("Fragment")])]),t._v(" "),n("p",[t._v("Vue3中不在要求模版的根节点必须是只能有一个节点。根节点和render函数返回的可以是纯文字、数组、单个节点，如果是数组，会自动转化为 Fragments。")]),t._v(" "),n("ul",[n("li",[t._v("Teleport")])]),t._v(" "),n("p",[t._v("对标 React Portal。更方便的方式创建弹窗组件等")]),t._v(" "),n("ul",[n("li",[t._v("Suspense")])]),t._v(" "),n("p",[t._v("等待嵌套的异步依赖。再把一个嵌套的组件树渲染到页面上之前，先在内存中进行渲染，并记录所有的存在异步依赖的组件。只有所有的异步依赖全部被resolve之后，才会把整个书渲染到dom中。当你的组件中有一个 async的 setup函数，这个组件可以被看作是一个Async Component，只有当这个组件被Resolve之后，再把整个树渲染出来")]),t._v(" "),n("h4",{attrs:{id:"typescript"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#typescript"}},[t._v("#")]),t._v(" Typescript")]),t._v(" "),n("h3",{attrs:{id:"响应式原理"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#响应式原理"}},[t._v("#")]),t._v(" 响应式原理")]),t._v(" "),n("p",[t._v("使用新的api，Proxy，vue2.0 用 Object.defineProperty 作为响应式原理的实现，但是会有它的局限性，比如 无法监听数组基于下标的修改，不支持 Map、Set、WeakMap 和 WeakSet等缺陷 。")]),t._v(" "),n("p",[t._v("用到的捕获器有5种")]),t._v(" "),n("ul",[n("li",[t._v("get(target, propKey, receiver)")]),t._v(" "),n("li",[t._v("set(target,propKey, value,receiver)")]),t._v(" "),n("li",[t._v("deleteProperty(target, propKey)")]),t._v(" "),n("li",[t._v("has(target, propKey)，拦截操作： propKey in proxy; 不包含for...in循环")]),t._v(" "),n("li",[t._v("ownKeys(target)：拦截操作1、Object.getOwnPropertyNames(proxy)；2、Object.getOwnPropertySymbols(proxy)；3、Object.keys(proxy)；4、for...in...循环")])]),t._v(" "),n("p",[t._v("composition-api中的reactive直接构建响应式和使用传统的options Api本质上原理都是一样的。")]),t._v(" "),n("ol",[n("li",[t._v("reactive： 建立响应式reactive，返回proxy对象，这个reactive可以深层次递归，也就是如果发现展开的属性值是引用类型的而且被引用，还会用reactive递归处理。而且属性是可以被修改的。")]),t._v(" "),n("li",[t._v("shallowReactive： 建立响应式shallowReactive，返回proxy对象。和reactive的区别是只建立一层的响应式，也就是说如果发现展开属性是引用类型也不会递归。")]),t._v(" "),n("li",[t._v("readonly：返回的proxy处理的对象，可以展开递归处理，但是属性是只读的，不能修改。可以做props传递给子组件使用。")]),t._v(" "),n("li",[t._v("shallowReadonly： 返回经过处理的proxy对象，但是建立响应式属性是只读的，不展开引用也不递归转换，可以这用于为有状态组件创建props代理对象。")])]),t._v(" "),n("p",[t._v("vue3.0采用了"),n("code",[t._v("WeakMap")]),t._v("去储存这些对象关系。WeakMaps 保持了对键名所引用的对象的弱引用，即垃圾回收机制不将该引用考虑在内。只要所引用的对象的其他引用都被清除，垃圾回收机制就会释放该对象所占用的内存。也就是说，一旦不再需要，WeakMap 里面的键名对象和所对应的键值对会自动消失，不用手动删除引用。")]),t._v(" "),n("div",{staticClass:"language-typescript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rawToReactive "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { [targetObject] : obseved }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" reactiveToRaw "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// { [target] : obseved }")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" rawToReadonly "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 只读的 */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" readonlyToRaw "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WeakMap"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 只读的 */")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br")])]),n("p",[t._v("baseHandlers: 对应对象，及数组")]),t._v(" "),n("p",[n("img",{attrs:{src:a(547),alt:""}})]),t._v(" "),n("p",[t._v("组件初始化阶段： 使用effect代替2.0的watcher")]),t._v(" "),n("p",[t._v("第一步: 创建component 实例。\n第二步：初始化组件,建立proxy ,根据字符窜模版得到render函数。生命周期钩子函数处理等等。\n第三步：建立一个渲染effect，执行effect。")]),t._v(" "),n("div",{staticClass:"language-typescript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token generic-function"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("effect")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactiveEffectOptions "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("EMPTY_OBJ")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactiveEffect"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" effect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReactiveEffect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("fn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 如果不是懒加载 立即执行 effect函数 */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("options"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lazy"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("effect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" effect\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token generic-function"}},[n("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReactiveEffect")]),n("span",{pre:!0,attrs:{class:"token generic class-name"}},[n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")])])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("any")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**回调函数 */")]),t._v("\n  options"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactiveEffectOptions\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" ReactiveEffect"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),n("span",{pre:!0,attrs:{class:"token constant"}},[t._v("T")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("effect")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("reactiveEffect")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("enableTracking")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        effectStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("effect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//往effect数组中里放入当前 effect")]),t._v("\n        activeEffect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" effect "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO: effect 赋值给当前的 activeEffect")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("fn")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v("args"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//TODO:    fn 为effect传进来 componentEffect")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("finally")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        effectStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("pop")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//完成依赖收集后从effect数组删掉这个 effect")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("resetTracking")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \n        "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 将activeEffect还原到之前的effect */")]),t._v("\n        activeEffect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" effectStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("effectStack"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" ReactiveEffect\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 配置一下初始化参数 */")]),t._v("\n  effect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("id "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" uid"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),t._v("\n  effect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_isEffect "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  effect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("active "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n  effect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("raw "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" fn\n  effect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deps "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* TODO:用于收集相关依赖 */")]),t._v("\n  effect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" options\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" effect\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br"),n("span",{staticClass:"line-number"},[t._v("24")]),n("br"),n("span",{staticClass:"line-number"},[t._v("25")]),n("br"),n("span",{staticClass:"line-number"},[t._v("26")]),n("br"),n("span",{staticClass:"line-number"},[t._v("27")]),n("br"),n("span",{staticClass:"line-number"},[t._v("28")]),n("br"),n("span",{staticClass:"line-number"},[t._v("29")]),n("br"),n("span",{staticClass:"line-number"},[t._v("30")]),n("br"),n("span",{staticClass:"line-number"},[t._v("31")]),n("br"),n("span",{staticClass:"line-number"},[t._v("32")]),n("br"),n("span",{staticClass:"line-number"},[t._v("33")]),n("br"),n("span",{staticClass:"line-number"},[t._v("34")]),n("br"),n("span",{staticClass:"line-number"},[t._v("35")]),n("br"),n("span",{staticClass:"line-number"},[t._v("36")]),n("br"),n("span",{staticClass:"line-number"},[t._v("37")]),n("br")])]),n("p",[t._v("createReactiveEffect的作用主要是配置了一些初始化的参数，然后包装了之前传进来的fn，重要的一点是把当前的effect赋值给了activeEffect,这一点非常重要，和收集依赖有着直接的关系\n"),n("img",{attrs:{src:a(548),alt:""}})]),t._v(" "),n("p",[t._v("在vue2.0的时候。响应式是在初始化的时候就深层次递归处理了，但是与vue2.0不同的是，"),n("strong",[t._v("即便是深度响应式我们也只能在获取上一级get之后才能触发下一级的深度响应式。")])]),t._v(" "),n("p",[t._v("这样做好处是， 1、初始化的时候不用递归去处理对象，造成了不必要的性能开销。 2、有一些没有用上的state，这里就不需要在深层次响应式处理。")]),t._v(" "),n("p",[t._v("track->依赖收集器")]),t._v(" "),n("p",[t._v("根据 proxy对象，获取存放deps的depsMap，然后通过访问的属性名key获取对应的dep,然后将当前激活的effect存入当前dep收集依赖。")]),t._v(" "),n("div",{staticClass:"language-typescript line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-typescript"}},[n("code",[t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* target 对象本身 ，key属性值  type 为 'GET' */")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("track")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" object"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" TrackOpTypes"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" key"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("unknown")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当打印或者获取属性的时候 console.log(this.a) 是没有activeEffect的 当前返回值为0  */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" depsMap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" targetMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("depsMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*  target -map-> depsMap  */")]),t._v("\n    targetMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("depsMap "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Map")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" dep "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" depsMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("dep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* key : dep dep观察者 */")]),t._v("\n    depsMap"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("key"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dep "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Set")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n   "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 当前activeEffect */")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("dep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("has")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("activeEffect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* dep添加 activeEffect */")]),t._v("\n    dep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("activeEffect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* 每个 activeEffect的deps 存放当前的dep */")]),t._v("\n    activeEffect"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("deps"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("push")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dep"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br"),n("span",{staticClass:"line-number"},[t._v("15")]),n("br"),n("span",{staticClass:"line-number"},[t._v("16")]),n("br"),n("span",{staticClass:"line-number"},[t._v("17")]),n("br"),n("span",{staticClass:"line-number"},[t._v("18")]),n("br"),n("span",{staticClass:"line-number"},[t._v("19")]),n("br"),n("span",{staticClass:"line-number"},[t._v("20")]),n("br"),n("span",{staticClass:"line-number"},[t._v("21")]),n("br"),n("span",{staticClass:"line-number"},[t._v("22")]),n("br"),n("span",{staticClass:"line-number"},[t._v("23")]),n("br")])])])}),[],!1,null,null,null);s.default=e.exports}}]);