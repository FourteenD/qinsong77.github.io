(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{623:function(e,v,t){"use strict";t.r(v);var _=t(25),a=Object(_.a)({},(function(){var e=this,v=e.$createElement,t=e._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("ul",[t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6892994632968306702",target:"_blank",rel:"noopener noreferrer"}},[e._v("前端性能优化 24 条建议"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://juejin.cn/post/6932647134944886797",target:"_blank",rel:"noopener noreferrer"}},[e._v("Web 用户体验设计提升指南"),t("OutboundLink")],1)])]),e._v(" "),t("p",[e._v("一个网站加载性能如何主要看白屏时间和首屏时间。")]),e._v(" "),t("p",[e._v("白屏时间：指从输入网址，到页面开始显示内容的时间。")]),e._v(" "),t("p",[e._v("首屏时间：指从输入网址，到页面完全渲染的时间。")]),e._v(" "),t("h2",{attrs:{id:"前端指标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前端指标"}},[e._v("#")]),e._v(" 前端指标")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("FP，First Paint。是页面导航与浏览器将该网页的第一个像素渲染到屏幕上所用的中间时，渲染是任何与输入网页导航前的屏幕上的内容不同的内容。背景色会很快完成绘制")])]),e._v(" "),t("li",[t("p",[e._v("FCP，First Contentful Paint。当页面绘制完第一个 DOM 内容，会触发首屏，这里的内容可以是文字、图片或者是 canvas。")])]),e._v(" "),t("li",[t("p",[e._v('FMP，First Meaning Paint。首次有效绘制。这是一个很主观的指标。根据业务的不同，每一个网站的有效内容都是不相同的，有效内容就是网页中"主角元素"。对于视频网站而言，主角元素就是视频。对于搜索引擎而言，主角元素就是搜索框。')])]),e._v(" "),t("li",[t("p",[e._v("ATF，Above The Fold，首屏时间")])]),e._v(" "),t("li",[t("p",[e._v("TTI，Time To Interact，首次交互时间，可以用DomReady时间。可交互时间。用于标记应用已进行视觉渲染并能可靠响应用户输入的时间点。应用可能会因为多种原因而无法响应用户输入：①页面组件运行所需的JavaScript尚未加载完成。②耗时较长的任务阻塞主线程")])]),e._v(" "),t("li",[t("p",[e._v("资源总下载时间。Load时间 >= DomContentLoaded时间")])])]),e._v(" "),t("p",[e._v("（1）Dom加载完时间，DomContentLoaded。")]),e._v(" "),t("p",[e._v("（2）页面资源加载完时间，Load，包括图片，音视频等异步资源。但是资源加载完之后，页面还没有完全稳定，完全稳定的时间由finish决定。")]),e._v(" "),t("ol",{attrs:{start:"7"}},[t("li",[t("p",[e._v("服务端重要接口加载速度。")])]),e._v(" "),t("li",[t("p",[e._v("客户端启动容器（WebView）时间。")])])]),e._v(" "),t("h2",{attrs:{id:"优化方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#优化方向"}},[e._v("#")]),e._v(" 优化方向")]),e._v(" "),t("p",[e._v("前端性能优化分为两个方向，一是工程化方向，另一个是细节方向。")]),e._v(" "),t("h3",{attrs:{id:"工程化方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#工程化方向"}},[e._v("#")]),e._v(" 工程化方向")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("客户端Gzip离线包，服务器资源Gzip压缩。")])]),e._v(" "),t("li",[t("p",[e._v("JS瘦身，Tree shaking，ES Module，动态Import，动态Polyfill。")])]),e._v(" "),t("li",[t("p",[e._v("图片加载优化，Webp，考虑兼容性，可以提前加载一张图片，嗅探是否支持Webp。")])]),e._v(" "),t("li",[t("p",[e._v("延迟加载不用长内容。通过打点，看某些弹窗内或者子内容是否要初始化加载。")])]),e._v(" "),t("li",[t("p",[e._v("服务端渲染，客户端预渲染。")])]),e._v(" "),t("li",[t("p",[e._v("CDN静态资源")])]),e._v(" "),t("li",[t("p",[e._v("Webpack Dll，通用优先打包抽离，利用浏览器缓存。")])]),e._v(" "),t("li",[t("p",[e._v("骨架图")])]),e._v(" "),t("li",[t("p",[e._v("数据预取，包括接口数据，和加载详情页图片。")])]),e._v(" "),t("li",[t("p",[e._v("Webpack本身提供的优化，Base64，资源压缩，Tree shaking，拆包chunk。")])]),e._v(" "),t("li",[t("p",[e._v("减少重定向。")])])]),e._v(" "),t("h3",{attrs:{id:"细节方向"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#细节方向"}},[e._v("#")]),e._v(" 细节方向")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("图片，图片占位，图片懒加载。 雪碧图")])]),e._v(" "),t("li",[t("p",[e._v("使用 prefetch / preload 预加载等新特性")])]),e._v(" "),t("li",[t("p",[e._v("服务器合理设置缓存策略")])]),e._v(" "),t("li",[t("p",[e._v("async（加载完当前js立即执行）/defer(所有资源加载完之后执行js)")])]),e._v(" "),t("li",[t("p",[e._v("减少Dom的操作，减少重排重绘")])]),e._v(" "),t("li",[t("p",[e._v("从客户端层面，首屏减少和客户端交互，合并接口请求。")])]),e._v(" "),t("li",[t("p",[e._v("数据缓存。")])]),e._v(" "),t("li",[t("p",[e._v("首页不加载不可视组件。")])]),e._v(" "),t("li",[t("p",[e._v("防止渲染抖动，控制时序。")])]),e._v(" "),t("li",[t("p",[e._v("减少组件层级。")])]),e._v(" "),t("li",[t("p",[e._v("优先使用Flex布局。")])])]),e._v(" "),t("h3",{attrs:{id:"卡顿问题解决"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#卡顿问题解决"}},[e._v("#")]),e._v(" 卡顿问题解决")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("CSS动画效率比JS高，css可以用GPU加速，3d加速。如果非要用JS动画，可以用requestAnimationFrame。")])]),e._v(" "),t("li",[t("p",[e._v("批量进行DOM操作，固定图片容器大小，避免屏幕抖动。")])]),e._v(" "),t("li",[t("p",[e._v("减少重绘重排。")])]),e._v(" "),t("li",[t("p",[e._v("节流和防抖。")])]),e._v(" "),t("li",[t("p",[e._v("减少临时大对象产生，利用对象缓存，主要是减少内存碎片。")])]),e._v(" "),t("li",[t("p",[e._v("异步操作，IntersectionObserver，PostMessage，RequestIdleCallback。")])])]),e._v(" "),t("h3",{attrs:{id:"性能优化api"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#性能优化api"}},[e._v("#")]),e._v(" 性能优化API")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Performance。performance.now()与new Date()区别，它是高精度的，且是相对时间，相对于页面加载的那一刻。但是不一定适合单页面场景。")])]),e._v(" "),t("li",[t("p",[e._v('window.addEventListener("load", ""); window.addEventListener("domContentLoaded", "");')])]),e._v(" "),t("li",[t("p",[e._v("Img的onload事件，监听首屏内的图片是否加载完成，判断首屏事件。")])]),e._v(" "),t("li",[t("p",[e._v("RequestFrameAnmation 和 RequestIdleCallback。")])]),e._v(" "),t("li",[t("p",[e._v("IntersectionObserver、MutationObserver，PostMessage。")])]),e._v(" "),t("li",[t("p",[e._v("Web Worker，耗时任务放在里面执行。")])])]),e._v(" "),t("h3",{attrs:{id:"检测工具"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#检测工具"}},[e._v("#")]),e._v(" 检测工具")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Chrome Dev Tools")])]),e._v(" "),t("li",[t("p",[e._v("Page Speed")])]),e._v(" "),t("li",[t("p",[e._v("Jspref")])])]),e._v(" "),t("h3",{attrs:{id:"首屏优化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#首屏优化"}},[e._v("#")]),e._v(" 首屏优化")]),e._v(" "),t("h4",{attrs:{id:"crp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#crp"}},[e._v("#")]),e._v(" "),t("a",{attrs:{href:"https://juejin.cn/post/6844903757038223367",target:"_blank",rel:"noopener noreferrer"}},[e._v("CRP"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("CRP： 即"),t("strong",[e._v("关键渲染路径")]),e._v(" (Critical Rendering Path)， 关键渲染路径是浏览器将 HTML CSS JavaScript 转换为在屏幕上呈现的像素内容所经历的一系列步骤。")])])}),[],!1,null,null,null);v.default=a.exports}}]);