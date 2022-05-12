---
title: 测试
---

- [Vue项目中如何做单元测试](https://juejin.cn/post/6953961160223752205)


## React

### Testing Library

- `@testing-library/dom`: 一个轻量级的(DOM 查询、交互)测试解决方案,它使用了一种与 ”用户的在页面中查找元素" 类似的DOM查询方式，以保证准确性;
- `@testing-library/user-event`: 提供了更加高级的浏览器交互模拟 – 即事件;
- `@testing-library/react`: 在 `@testing-library/dom` 基础上，将 React 组件渲染为 DOM 便于后边测试;
- `@testing-library/jest-dom`：追加一系列辅助测试 DOM 的 `matchers` 匹配器，需要在每个 react test 文件的顶部引用，否则类似 `expect(dom).toBeInTheDocument()` 这样的断言则没法用，可以在setup中统一处

getBy和queryBy

So every time you are asserting that an element isn't there, use queryBy. Otherwise default to getBy. S

findBy

The findBy search variant is used for asynchronous elements which will be there eventually.


另外，Babel 负责两件事：1）语法转换，由各种 transform 插件、helpers 完成；2）对于可 polyfill 的 API 的提供，由 corejs 实现。@babel/plugin-transform-runtime 插件可用于减少生成代码的量，以及对 corejs 提供的 API 与 runtime 提供的帮助函数（helpers）进行模块隔离。