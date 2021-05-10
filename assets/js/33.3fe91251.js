(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{571:function(t,s,a){t.exports=a.p+"assets/img/webpack_bundle_server.754863e6.png"},572:function(t,s,a){t.exports=a.p+"assets/img/vite2.0cf5a192.png"},645:function(t,s,a){"use strict";a.r(s);var e=a(25),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("webpack慢：")]),t._v(" "),e("ol",[e("li",[t._v("随着项目大小增长，项目冷启动时间指数增长：因为需要递归的处理识别模块生成依赖图，并且代码拆分异步应用，也需要一次生成所有路由下的编译后文件。")]),t._v(" "),e("li",[t._v("热更新时间也会随着项目大小增大而增长： Webpack 的热更新会以当前修改的文件为入口重新 build 打包，所有涉及到的依赖也都会被重新加载一次。")])]),t._v(" "),e("h3",{attrs:{id:"为什么-webpack-这么慢"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#为什么-webpack-这么慢"}},[t._v("#")]),t._v(" 为什么 Webpack 这么慢")]),t._v(" "),e("p",[t._v("本质上，webpack 是一个现代 JavaScript 应用程序的静态模块打包器（module bundler）。")]),t._v(" "),e("p",[t._v("运行启动命令的时候，webpack 总是需要从入口文件去索引整个项目的文件，编译成一个或多个单独的 js 文件，"),e("strong",[t._v("即使采用了代码拆分，也需要一次生成所有路由下的编译后文件")]),t._v("（这也是为什么代码拆分对开发模式性能没有帮助）。这也导致了服务启动时间随着项目复杂度而指数增长")]),t._v(" "),e("p",[t._v("webpack打包过程")]),t._v(" "),e("ol",[e("li",[t._v("识别入口文件")]),t._v(" "),e("li",[t._v("通过逐层识别模块依赖。（Commonjs、amd或者es6的import，webpack都会对其进行分析。来获取代码的依赖）")]),t._v(" "),e("li",[t._v("webpack做的就是分析代码。转换代码，编译代码，输出代码")]),t._v(" "),e("li",[t._v("最终形成打包后的代码")])]),t._v(" "),e("p",[t._v("webpack打包原理")]),t._v(" "),e("ol",[e("li",[t._v("先逐级递归识别依赖，构建依赖图谱")]),t._v(" "),e("li",[t._v("将代码转化成AST抽象语法树")]),t._v(" "),e("li",[t._v("在AST阶段中去处理代码")]),t._v(" "),e("li",[t._v("把AST抽象语法树变成浏览器可以识别的代码， 然后输出")])]),t._v(" "),e("p",[t._v("重点:需要"),e("strong",[t._v("递归识别依赖，构建依赖图谱")]),t._v("。")]),t._v(" "),e("p",[e("img",{attrs:{src:a(571),alt:""}})]),t._v(" "),e("p",[e("strong",[t._v("Webpack 的热更新会以当前修改的文件为入口重新 build 打包，所有涉及到的依赖也都会被重新加载一次。")])]),t._v(" "),e("h3",{attrs:{id:"vite特点"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vite特点"}},[t._v("#")]),t._v(" vite特点")]),t._v(" "),e("ol",[e("li",[t._v("快速的冷启动")]),t._v(" "),e("li",[t._v("即时的模块热更新")]),t._v(" "),e("li",[t._v("真正的按需编译")])]),t._v(" "),e("p",[e("img",{attrs:{src:a(572),alt:""}})]),t._v(" "),e("h3",{attrs:{id:"原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://juejin.cn/post/6931618997251080200",target:"_blank",rel:"noopener noreferrer"}},[t._v("文章"),e("OutboundLink")],1)])]),t._v(" "),e("p",[t._v("当声明一个 script 标签类型为 module 时如：")]),t._v(" "),e("div",{staticClass:"language-html line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-html"}},[e("code",[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("module"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),e("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),e("span",{pre:!0,attrs:{class:"token attr-value"}},[e("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/src/main.js"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),e("span",{pre:!0,attrs:{class:"token script"}}),e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token tag"}},[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br")])]),e("p",[t._v("浏览器就会像服务器发起一个GET请求"),e("code",[t._v("http://localhost:3000/src/main.js")]),t._v("请求main.js文件：")]),t._v(" "),e("div",{staticClass:"language-javascript line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// /src/main.js:")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" createApp "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" App "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./App.vue'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("createApp")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("App"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("mount")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#app'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br")])]),e("p",[t._v("浏览器请求到了main.js文件，检测到内部含有import引入的包，又会对其内部的 import 引用发起 HTTP 请求获取模块的内容文件")]),t._v(" "),e("p",[t._v("如：GET http://localhost:3000/@modules/vue.js")]),t._v(" "),e("p",[t._v("如：GET http://localhost:3000/src/App.vue")]),t._v(" "),e("p",[t._v("Vite 的主要功能就是通过劫持浏览器的这些请求，并在后端进行相应的处理将项目中使用的文件通过简单的分解与整合，然后再返回给浏览器，vite整个过程中没有对文件进行打包编译，所以其运行速度比原始的webpack开发编译速度快出许多")]),t._v(" "),e("h4",{attrs:{id:"依赖预构建与缓存"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#依赖预构建与缓存"}},[t._v("#")]),t._v(" 依赖预构建与缓存")]),t._v(" "),e("p",[t._v("原生 ES 引入不支持下面这样的裸模块导入：")]),t._v(" "),e("p",[t._v("上面的操作将在浏览器中抛出一个错误。Vite 将在服务的所有源文件中检测此类裸模块导入，并执行以下操作:")]),t._v(" "),e("ol",[e("li",[e("strong",[t._v("预构建")]),t._v(" 他们以提升页面重载速度，并将 CommonJS / UMD 转换为 ESM 格式。预构建这一步由 esbuild 执行，这使得 Vite 的冷启动时间比任何基于 javascript 的打包程序都要快得多。")])]),t._v(" "),e("p",[t._v("在"),e("strong",[t._v("开发阶段")]),t._v("中， Vite 的开发服务器将所有的代码都视为原生 ES 模块，所以需要在预构建阶段先将作为 CommonJS 或 UMD 发布的依赖项转换为 ESM。")]),t._v(" "),e("p",[t._v("Vite将带有许多内部模块的ESM依赖转换为单个模块，以提高后续页面加载性能（降低请求数量），比如 lodash-es 有超过 600 个内置模块，一次性发送 600 多个 http 请求，就算是采用了 HTTP2 也是不可接受的，大量的网络请求在浏览器端会造成网络拥塞，导致页面的加载速度相当慢，通过预构建 lodash-es 成为一个模块，就只需要一个 HTTP 请求了！")]),t._v(" "),e("p",[t._v("预构建完依赖项之后，再使用 "),e("code",[t._v("es-module-lexer + magic-string")]),t._v(" 进行轻量级裸模块导入语句的重写。因为并没有进行完整的 AST 遍历，所以速度非常快，对于大多数文件来说这个时间都小于 1ms")]),t._v(" "),e("ol",{attrs:{start:"2"}},[e("li",[e("p",[e("strong",[t._v("重写导入为合法的 URL")]),t._v("，例如 /node_modules/.vite/my-dep.js?v=f3sf2ebd 以便浏览器能够正确导入它们。")])]),t._v(" "),e("li",[e("p",[t._v("Vite 会将预构建的依赖缓存到 node_modules/.vite 路径下，可以看到文件名后跟着一串随机字符串，使用http强缓存策略，"),e("code",[t._v("Cache-Control")]),t._v(" 属性被写为了： "),e("code",[t._v("max-age=31536000,immutable")])])])]),t._v(" "),e("h4",{attrs:{id:"esbuild转换文件"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#esbuild转换文件"}},[t._v("#")]),t._v(" esbuild转换文件")]),t._v(" "),e("p",[t._v("包括将 CommonJS / UMD 转换为 ESM 格式，转换ts, tsc文件等")]),t._v(" "),e("ol",[e("li",[t._v("使用 Go 编写，并且编译成了机器码")]),t._v(" "),e("li",[t._v("大量使用并行算法")]),t._v(" "),e("li",[t._v("esbuild 的所有内容都是从零编写的")]),t._v(" "),e("li",[t._v("更有效利用内存")])]),t._v(" "),e("h4",{attrs:{id:"模块热重载"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#模块热重载"}},[t._v("#")]),t._v(" 模块热重载")]),t._v(" "),e("p",[t._v("Vite 提供了一套原生 ESM 的 "),e("code",[t._v("HMR API")]),t._v("。 具有 HMR 功能的框架可以利用该 API 提供即时、准确的更新，而无需重新加载页面或删除应用程序状态。Vite 提供了第一优先级的 HMR 集成给 "),e("code",[t._v("Vue 单文件组件（SFC）")]),t._v(" 和 "),e("code",[t._v("React Fast Refresh")]),t._v("。")]),t._v(" "),e("ol",[e("li",[e("p",[t._v("在 Vite 中，HMR 是在原生 ESM 上执行的。当编辑一个文件时，Vite 只需要精确地使已编辑的模块与其最近的 HMR 边界之间的链失效（大多数时候只需要模块本身），使 HMR 更新始终快速，无论应用的大小。")])]),t._v(" "),e("li",[e("p",[t._v("Vite 同时利用 HTTP 头来加速整个页面的重新加载（再次让浏览器为我们做更多事情）：源码模块的请求会根据 304 Not Modified 进行协商缓存，而依赖模块请求则会通过 Cache-Control: max-age=31536000,immutable 进行强缓存，因此一旦被缓存它们将不需要再次请求。")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);