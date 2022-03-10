import{r as e,o as t,c as o,a as n,b as p,F as c,e as s,d as l}from"./app.552fc8bd.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";var i="/assets/vue3-1.2fdd62ba.png",u="/assets/vue3-2.65215e5b.png";const k={},f={href:"https://juejin.cn/post/6858899262596448270",target:"_blank",rel:"noopener noreferrer"},b=s("Vue3 \u54CD\u5E94\u5F0F\u539F\u7406"),d={id:"vue3-0-\u6027\u80FD\u4F18\u5316\u53CA\u65B0\u7279\u6027\u6DF1\u5EA6\u89E3\u6790",tabindex:"-1"},m=n("a",{class:"header-anchor",href:"#vue3-0-\u6027\u80FD\u4F18\u5316\u53CA\u65B0\u7279\u6027\u6DF1\u5EA6\u89E3\u6790","aria-hidden":"true"},"#",-1),y=s(),h={href:"https://mp.weixin.qq.com/s/r90ABtYXcOwB7J_ILLYBpg",target:"_blank",rel:"noopener noreferrer"},g=s("Vue3.0 \u6027\u80FD\u4F18\u5316\u53CA\u65B0\u7279\u6027\u6DF1\u5EA6\u89E3\u6790"),v=l(`<ul><li>\u6027\u80FD</li><li>Tree-shaking \u652F\u6301</li><li>Composition API</li><li>Fragment\u3001Teleport\u3001Suspense</li><li>\u81EA\u5B9A\u4E49\u6E32\u67D3API</li><li>\u66F4\u597D\u7684 TS \u652F\u6301</li></ul><h4 id="\u7F16\u8BD1\u65F6\u5BF9vdom\u7684\u6027\u80FD\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#\u7F16\u8BD1\u65F6\u5BF9vdom\u7684\u6027\u80FD\u4F18\u5316" aria-hidden="true">#</a> \u7F16\u8BD1\u65F6\u5BF9VDom\u7684\u6027\u80FD\u4F18\u5316</h4><ol><li>PatchFlag</li></ol><p>\u53EA\u80FD\u5E26patchFlag \u7684 Node \u624D\u88AB\u8BA4\u4E3A\u662F\u52A8\u6001\u7684\u5143\u7D20\uFF0C\u4F1A\u88AB\u8FFD\u8E2A\u5C5E\u6027\u7684\u4FEE\u6539\u3002\u5E76\u4E14 PatchFlag \u4F1A\u6807\u8BC6\u52A8\u6001\u7684\u5C5E\u6027\u7C7B\u578B\u6709\u54EA\u4E9B</p><ol start="2"><li>hoistStatic \u9759\u6001\u8282\u70B9\u63D0\u5347</li></ol><p>\u5F53\u4F7F\u7528hoistStatic\u65F6\uFF0C\u6240\u6709 \u9759\u6001\u7684\u8282\u70B9\u90FD\u88AB\u63D0\u5347\u5230render\u65B9\u6CD5\u4E4B\u5916\u3002\u8FD9\u610F\u5473\u7740\uFF0C\u4ED6\u4EEC\u53EA\u4F1A\u5728\u5E94\u7528\u542F\u52A8\u7684\u65F6\u5019\u88AB\u521B\u5EFA\u4E00\u6B21\uFF0C\u800C\u540E\u968F\u7740\u6BCF\u6B21\u7684\u6E32\u67D3\u88AB\u4E0D\u505C\u7684\u590D\u7528\u3002</p><ol start="3"><li>cacheHandler \u4E8B\u4EF6\u76D1\u542C\u7F13\u5B58</li></ol><p>\u7F16\u8F91\u5668\u4F1A\u4E3A\u4F60\u52A8\u6001\u521B\u5EFA\u4E00\u4E2A\u5185\u8054\u51FD\u6570\uFF0C\u5185\u8054\u51FD\u6570\u91CC\u9762\u518D\u53BB\u996E\u7528\u5F53\u524D\u7EC4\u4EF6\u4E0A\u6700\u65B0\u7684handler\u3002\u4E4B\u540E\u7F16\u8F91\u5668\u4F1A\u5C06\u5185\u8054\u51FD\u6570\u7F13\u5B58\u3002\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u65F6\u5982\u679C\u4E8B\u4EF6\u5904\u7406\u5668\u6CA1\u6709\u53D8\uFF0C\u5C31\u4F1A\u4F7F\u7528\u7F13\u5B58\u4E2D\u7684\u4E8B\u4EF6\u5904\u7406\u800C\u4E0D\u4F1A\u91CD\u65B0\u83B7\u53D6\u4E8B\u4EF6\u5904\u7406\u5668\u3002\u8FD9\u4E2A\u8282\u70B9\u5C31\u53EF\u4EE5\u88AB\u770B\u4F5C\u662F\u4E00\u4E2A\u9759\u6001\u7684\u8282\u70B9\u3002\u8FD9\u79CD\u4F18\u5316\u66F4\u5927\u7684\u4F5C\u7528\u5728\u4E8E\u5F53\u5176\u4F5C\u7528\u57DF\u7EC4\u4EF6\u65F6\uFF0C\u4E4B\u524D\u6BCF\u6B21\u91CD\u65B0\u6E32\u67D3\u90FD\u4F1A\u5BFC\u81F4\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\uFF0C\u5728\u901A\u8FC7handler\u7F13\u5B58\u4E4B\u540E\uFF0C\u4E0D\u4F1A\u5BFC\u81F4\u7EC4\u4EF6\u7684\u91CD\u65B0\u6E32\u67D3\u4E86\u3002</p><ol start="4"><li><p>SSR \u670D\u52A1\u7AEF\u6E32\u67D3</p></li><li><p>StaticNode \u9759\u6001\u8282\u70B9</p></li></ol><h4 id="tree-shaking" tabindex="-1"><a class="header-anchor" href="#tree-shaking" aria-hidden="true">#</a> Tree Shaking</h4><p>\u56E0\u4E3AES6\u6A21\u5757\u662F\u9759\u6001\u5F15\u7528\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u5728\u7F16\u8BD1\u65F6\u6B63\u786E\u7684\u5224\u65AD\u5230\u5E95\u52A0\u8F7D\u4E86\u54EA\u4E9B\u4EE3\u7801\u3002\u5BF9\u4EE3\u7801\u5168\u5C40\u505A\u4E00\u4E2A\u5206\u6790\uFF0C\u627E\u5230\u90A3\u4E9B\u6CA1\u7528\u88AB\u7528\u5230\u7684\u6A21\u5757\u3001\u51FD\u6570\u3001\u53D8\u91CF\uFF0C\u5E76\u628A\u8FD9\u4E9B\u53BB\u6389\u3002</p><h4 id="composition-api" tabindex="-1"><a class="header-anchor" href="#composition-api" aria-hidden="true">#</a> Composition API</h4><p>\u5BF9options Api\u7684\u4F18\u5316\uFF0C \u4F7F\u5F97\u903B\u8F91\u590D\u7528\u53CA\u4EE3\u7801\u7EC4\u5408\u66F4\u6E05\u695A</p><p>\u6838\u5FC3 API</p><ul><li>reactive</li><li>ref</li><li>computed</li><li>readonly</li><li>watchEffect</li><li>watch</li><li>Lifecycle Hooks</li></ul><h4 id="fragment\u3001teleport\u3001suspense" tabindex="-1"><a class="header-anchor" href="#fragment\u3001teleport\u3001suspense" aria-hidden="true">#</a> Fragment\u3001Teleport\u3001Suspense</h4><ul><li>Fragment</li></ul><p>Vue3\u4E2D\u4E0D\u5728\u8981\u6C42\u6A21\u7248\u7684\u6839\u8282\u70B9\u5FC5\u987B\u662F\u53EA\u80FD\u6709\u4E00\u4E2A\u8282\u70B9\u3002\u6839\u8282\u70B9\u548Crender\u51FD\u6570\u8FD4\u56DE\u7684\u53EF\u4EE5\u662F\u7EAF\u6587\u5B57\u3001\u6570\u7EC4\u3001\u5355\u4E2A\u8282\u70B9\uFF0C\u5982\u679C\u662F\u6570\u7EC4\uFF0C\u4F1A\u81EA\u52A8\u8F6C\u5316\u4E3A Fragments\u3002</p><ul><li>Teleport</li></ul><p>\u5BF9\u6807 React Portal\u3002\u66F4\u65B9\u4FBF\u7684\u65B9\u5F0F\u521B\u5EFA\u5F39\u7A97\u7EC4\u4EF6\u7B49</p><ul><li>Suspense</li></ul><p>\u7B49\u5F85\u5D4C\u5957\u7684\u5F02\u6B65\u4F9D\u8D56\u3002\u518D\u628A\u4E00\u4E2A\u5D4C\u5957\u7684\u7EC4\u4EF6\u6811\u6E32\u67D3\u5230\u9875\u9762\u4E0A\u4E4B\u524D\uFF0C\u5148\u5728\u5185\u5B58\u4E2D\u8FDB\u884C\u6E32\u67D3\uFF0C\u5E76\u8BB0\u5F55\u6240\u6709\u7684\u5B58\u5728\u5F02\u6B65\u4F9D\u8D56\u7684\u7EC4\u4EF6\u3002\u53EA\u6709\u6240\u6709\u7684\u5F02\u6B65\u4F9D\u8D56\u5168\u90E8\u88ABresolve\u4E4B\u540E\uFF0C\u624D\u4F1A\u628A\u6574\u4E2A\u4E66\u6E32\u67D3\u5230dom\u4E2D\u3002\u5F53\u4F60\u7684\u7EC4\u4EF6\u4E2D\u6709\u4E00\u4E2A async\u7684 setup\u51FD\u6570\uFF0C\u8FD9\u4E2A\u7EC4\u4EF6\u53EF\u4EE5\u88AB\u770B\u4F5C\u662F\u4E00\u4E2AAsync Component\uFF0C\u53EA\u6709\u5F53\u8FD9\u4E2A\u7EC4\u4EF6\u88ABResolve\u4E4B\u540E\uFF0C\u518D\u628A\u6574\u4E2A\u6811\u6E32\u67D3\u51FA\u6765</p><h4 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> Typescript</h4><h3 id="\u54CD\u5E94\u5F0F\u539F\u7406" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u7406" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u539F\u7406</h3><p>\u4F7F\u7528\u65B0\u7684api\uFF0CProxy\uFF0Cvue2.0 \u7528 Object.defineProperty \u4F5C\u4E3A\u54CD\u5E94\u5F0F\u539F\u7406\u7684\u5B9E\u73B0\uFF0C\u4F46\u662F\u4F1A\u6709\u5B83\u7684\u5C40\u9650\u6027\uFF0C\u6BD4\u5982 \u65E0\u6CD5\u76D1\u542C\u6570\u7EC4\u57FA\u4E8E\u4E0B\u6807\u7684\u4FEE\u6539\uFF0C\u4E0D\u652F\u6301 Map\u3001Set\u3001WeakMap \u548C WeakSet\u7B49\u7F3A\u9677 \u3002</p><p>\u7528\u5230\u7684\u6355\u83B7\u5668\u67095\u79CD</p><ul><li>get(target, propKey, receiver)</li><li>set(target,propKey, value,receiver)</li><li>deleteProperty(target, propKey)</li><li>has(target, propKey)\uFF0C\u62E6\u622A\u64CD\u4F5C\uFF1A propKey in proxy; \u4E0D\u5305\u542Bfor...in\u5FAA\u73AF</li><li>ownKeys(target)\uFF1A\u62E6\u622A\u64CD\u4F5C1\u3001Object.getOwnPropertyNames(proxy)\uFF1B2\u3001Object.getOwnPropertySymbols(proxy)\uFF1B3\u3001Object.keys(proxy)\uFF1B4\u3001for...in...\u5FAA\u73AF</li></ul><p>composition-api\u4E2D\u7684reactive\u76F4\u63A5\u6784\u5EFA\u54CD\u5E94\u5F0F\u548C\u4F7F\u7528\u4F20\u7EDF\u7684options Api\u672C\u8D28\u4E0A\u539F\u7406\u90FD\u662F\u4E00\u6837\u7684\u3002</p><ol><li>reactive\uFF1A \u5EFA\u7ACB\u54CD\u5E94\u5F0Freactive\uFF0C\u8FD4\u56DEproxy\u5BF9\u8C61\uFF0C\u8FD9\u4E2Areactive\u53EF\u4EE5\u6DF1\u5C42\u6B21\u9012\u5F52\uFF0C\u4E5F\u5C31\u662F\u5982\u679C\u53D1\u73B0\u5C55\u5F00\u7684\u5C5E\u6027\u503C\u662F\u5F15\u7528\u7C7B\u578B\u7684\u800C\u4E14\u88AB\u5F15\u7528\uFF0C\u8FD8\u4F1A\u7528reactive\u9012\u5F52\u5904\u7406\u3002\u800C\u4E14\u5C5E\u6027\u662F\u53EF\u4EE5\u88AB\u4FEE\u6539\u7684\u3002</li><li>shallowReactive\uFF1A \u5EFA\u7ACB\u54CD\u5E94\u5F0FshallowReactive\uFF0C\u8FD4\u56DEproxy\u5BF9\u8C61\u3002\u548Creactive\u7684\u533A\u522B\u662F\u53EA\u5EFA\u7ACB\u4E00\u5C42\u7684\u54CD\u5E94\u5F0F\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5982\u679C\u53D1\u73B0\u5C55\u5F00\u5C5E\u6027\u662F\u5F15\u7528\u7C7B\u578B\u4E5F\u4E0D\u4F1A\u9012\u5F52\u3002</li><li>readonly\uFF1A\u8FD4\u56DE\u7684proxy\u5904\u7406\u7684\u5BF9\u8C61\uFF0C\u53EF\u4EE5\u5C55\u5F00\u9012\u5F52\u5904\u7406\uFF0C\u4F46\u662F\u5C5E\u6027\u662F\u53EA\u8BFB\u7684\uFF0C\u4E0D\u80FD\u4FEE\u6539\u3002\u53EF\u4EE5\u505Aprops\u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u4F7F\u7528\u3002</li><li>shallowReadonly\uFF1A \u8FD4\u56DE\u7ECF\u8FC7\u5904\u7406\u7684proxy\u5BF9\u8C61\uFF0C\u4F46\u662F\u5EFA\u7ACB\u54CD\u5E94\u5F0F\u5C5E\u6027\u662F\u53EA\u8BFB\u7684\uFF0C\u4E0D\u5C55\u5F00\u5F15\u7528\u4E5F\u4E0D\u9012\u5F52\u8F6C\u6362\uFF0C\u53EF\u4EE5\u8FD9\u7528\u4E8E\u4E3A\u6709\u72B6\u6001\u7EC4\u4EF6\u521B\u5EFAprops\u4EE3\u7406\u5BF9\u8C61\u3002</li></ol><p>vue3.0\u91C7\u7528\u4E86<code>WeakMap</code>\u53BB\u50A8\u5B58\u8FD9\u4E9B\u5BF9\u8C61\u5173\u7CFB\u3002WeakMaps \u4FDD\u6301\u4E86\u5BF9\u952E\u540D\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u7684\u5F31\u5F15\u7528\uFF0C\u5373\u5783\u573E\u56DE\u6536\u673A\u5236\u4E0D\u5C06\u8BE5\u5F15\u7528\u8003\u8651\u5728\u5185\u3002\u53EA\u8981\u6240\u5F15\u7528\u7684\u5BF9\u8C61\u7684\u5176\u4ED6\u5F15\u7528\u90FD\u88AB\u6E05\u9664\uFF0C\u5783\u573E\u56DE\u6536\u673A\u5236\u5C31\u4F1A\u91CA\u653E\u8BE5\u5BF9\u8C61\u6240\u5360\u7528\u7684\u5185\u5B58\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u65E6\u4E0D\u518D\u9700\u8981\uFF0CWeakMap \u91CC\u9762\u7684\u952E\u540D\u5BF9\u8C61\u548C\u6240\u5BF9\u5E94\u7684\u952E\u503C\u5BF9\u4F1A\u81EA\u52A8\u6D88\u5931\uFF0C\u4E0D\u7528\u624B\u52A8\u5220\u9664\u5F15\u7528\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">const</span> rawToReactive <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { [targetObject] : obseved }</span>
<span class="token keyword">const</span> reactiveToRaw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// { [target] : obseved }</span>
<span class="token keyword">const</span> rawToReadonly <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">/* \u53EA\u8BFB\u7684 */</span>
<span class="token keyword">const</span> readonlyToRaw <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token punctuation">,</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">/* \u53EA\u8BFB\u7684 */</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>baseHandlers: \u5BF9\u5E94\u5BF9\u8C61\uFF0C\u53CA\u6570\u7EC4</p><p><img src="`+i+`" alt=""></p><p>\u7EC4\u4EF6\u521D\u59CB\u5316\u9636\u6BB5\uFF1A \u4F7F\u7528effect\u4EE3\u66FF2.0\u7684watcher</p><p>\u7B2C\u4E00\u6B65: \u521B\u5EFAcomponent \u5B9E\u4F8B\u3002 \u7B2C\u4E8C\u6B65\uFF1A\u521D\u59CB\u5316\u7EC4\u4EF6,\u5EFA\u7ACBproxy ,\u6839\u636E\u5B57\u7B26\u7A9C\u6A21\u7248\u5F97\u5230render\u51FD\u6570\u3002\u751F\u547D\u5468\u671F\u94A9\u5B50\u51FD\u6570\u5904\u7406\u7B49\u7B49\u3002 \u7B2C\u4E09\u6B65\uFF1A\u5EFA\u7ACB\u4E00\u4E2A\u6E32\u67D3effect\uFF0C\u6267\u884Ceffect\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token generic-function"><span class="token function">effect</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span>
  options<span class="token operator">:</span> ReactiveEffectOptions <span class="token operator">=</span> <span class="token constant">EMPTY_OBJ</span>
<span class="token punctuation">)</span><span class="token operator">:</span> ReactiveEffect<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> effect <span class="token operator">=</span> <span class="token function">createReactiveEffect</span><span class="token punctuation">(</span>fn<span class="token punctuation">,</span> options<span class="token punctuation">)</span>
  <span class="token comment">/* \u5982\u679C\u4E0D\u662F\u61D2\u52A0\u8F7D \u7ACB\u5373\u6267\u884C effect\u51FD\u6570 */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>options<span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">effect</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> effect
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">createReactiveEffect</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  <span class="token function-variable function">fn</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token constant">T</span><span class="token punctuation">,</span> <span class="token doc-comment comment">/**\u56DE\u8C03\u51FD\u6570 */</span>
  options<span class="token operator">:</span> ReactiveEffectOptions
<span class="token punctuation">)</span><span class="token operator">:</span> ReactiveEffect<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token function-variable function">effect</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">reactiveEffect</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">unknown</span> <span class="token punctuation">{</span>
    <span class="token keyword">try</span> <span class="token punctuation">{</span>
        <span class="token function">enableTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        effectStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>effect<span class="token punctuation">)</span> <span class="token comment">//\u5F80effect\u6570\u7EC4\u4E2D\u91CC\u653E\u5165\u5F53\u524D effect</span>
        activeEffect <span class="token operator">=</span> effect <span class="token comment">//TODO: effect \u8D4B\u503C\u7ED9\u5F53\u524D\u7684 activeEffect</span>
        <span class="token keyword">return</span> <span class="token function">fn</span><span class="token punctuation">(</span><span class="token operator">...</span>args<span class="token punctuation">)</span> <span class="token comment">//TODO:    fn \u4E3Aeffect\u4F20\u8FDB\u6765 componentEffect</span>
      <span class="token punctuation">}</span> <span class="token keyword">finally</span> <span class="token punctuation">{</span>
        effectStack<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//\u5B8C\u6210\u4F9D\u8D56\u6536\u96C6\u540E\u4ECEeffect\u6570\u7EC4\u5220\u6389\u8FD9\u4E2A effect</span>
        <span class="token function">resetTracking</span><span class="token punctuation">(</span><span class="token punctuation">)</span> 
        <span class="token comment">/* \u5C06activeEffect\u8FD8\u539F\u5230\u4E4B\u524D\u7684effect */</span>
        activeEffect <span class="token operator">=</span> effectStack<span class="token punctuation">[</span>effectStack<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span> <span class="token keyword">as</span> ReactiveEffect
  <span class="token comment">/* \u914D\u7F6E\u4E00\u4E0B\u521D\u59CB\u5316\u53C2\u6570 */</span>
  effect<span class="token punctuation">.</span>id <span class="token operator">=</span> uid<span class="token operator">++</span>
  effect<span class="token punctuation">.</span>_isEffect <span class="token operator">=</span> <span class="token boolean">true</span>
  effect<span class="token punctuation">.</span>active <span class="token operator">=</span> <span class="token boolean">true</span>
  effect<span class="token punctuation">.</span>raw <span class="token operator">=</span> fn
  effect<span class="token punctuation">.</span>deps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">/* TODO:\u7528\u4E8E\u6536\u96C6\u76F8\u5173\u4F9D\u8D56 */</span>
  effect<span class="token punctuation">.</span>options <span class="token operator">=</span> options
  <span class="token keyword">return</span> effect
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p>createReactiveEffect\u7684\u4F5C\u7528\u4E3B\u8981\u662F\u914D\u7F6E\u4E86\u4E00\u4E9B\u521D\u59CB\u5316\u7684\u53C2\u6570\uFF0C\u7136\u540E\u5305\u88C5\u4E86\u4E4B\u524D\u4F20\u8FDB\u6765\u7684fn\uFF0C\u91CD\u8981\u7684\u4E00\u70B9\u662F\u628A\u5F53\u524D\u7684effect\u8D4B\u503C\u7ED9\u4E86activeEffect,\u8FD9\u4E00\u70B9\u975E\u5E38\u91CD\u8981\uFF0C\u548C\u6536\u96C6\u4F9D\u8D56\u6709\u7740\u76F4\u63A5\u7684\u5173\u7CFB <img src="`+u+`" alt=""></p><p>\u5728vue2.0\u7684\u65F6\u5019\u3002\u54CD\u5E94\u5F0F\u662F\u5728\u521D\u59CB\u5316\u7684\u65F6\u5019\u5C31\u6DF1\u5C42\u6B21\u9012\u5F52\u5904\u7406\u4E86\uFF0C\u4F46\u662F\u4E0Evue2.0\u4E0D\u540C\u7684\u662F\uFF0C<strong>\u5373\u4FBF\u662F\u6DF1\u5EA6\u54CD\u5E94\u5F0F\u6211\u4EEC\u4E5F\u53EA\u80FD\u5728\u83B7\u53D6\u4E0A\u4E00\u7EA7get\u4E4B\u540E\u624D\u80FD\u89E6\u53D1\u4E0B\u4E00\u7EA7\u7684\u6DF1\u5EA6\u54CD\u5E94\u5F0F\u3002</strong></p><p>\u8FD9\u6837\u505A\u597D\u5904\u662F\uFF0C 1\u3001\u521D\u59CB\u5316\u7684\u65F6\u5019\u4E0D\u7528\u9012\u5F52\u53BB\u5904\u7406\u5BF9\u8C61\uFF0C\u9020\u6210\u4E86\u4E0D\u5FC5\u8981\u7684\u6027\u80FD\u5F00\u9500\u3002 2\u3001\u6709\u4E00\u4E9B\u6CA1\u6709\u7528\u4E0A\u7684state\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u9700\u8981\u5728\u6DF1\u5C42\u6B21\u54CD\u5E94\u5F0F\u5904\u7406\u3002</p><p>track-&gt;\u4F9D\u8D56\u6536\u96C6\u5668</p><p>\u6839\u636E proxy\u5BF9\u8C61\uFF0C\u83B7\u53D6\u5B58\u653Edeps\u7684depsMap\uFF0C\u7136\u540E\u901A\u8FC7\u8BBF\u95EE\u7684\u5C5E\u6027\u540Dkey\u83B7\u53D6\u5BF9\u5E94\u7684dep,\u7136\u540E\u5C06\u5F53\u524D\u6FC0\u6D3B\u7684effect\u5B58\u5165\u5F53\u524Ddep\u6536\u96C6\u4F9D\u8D56\u3002</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token comment">/* target \u5BF9\u8C61\u672C\u8EAB \uFF0Ckey\u5C5E\u6027\u503C  type \u4E3A &#39;GET&#39; */</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">track</span><span class="token punctuation">(</span>target<span class="token operator">:</span> object<span class="token punctuation">,</span> type<span class="token operator">:</span> TrackOpTypes<span class="token punctuation">,</span> key<span class="token operator">:</span> <span class="token builtin">unknown</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">/* \u5F53\u6253\u5370\u6216\u8005\u83B7\u53D6\u5C5E\u6027\u7684\u65F6\u5019 console.log(this.a) \u662F\u6CA1\u6709activeEffect\u7684 \u5F53\u524D\u8FD4\u56DE\u503C\u4E3A0  */</span>
  <span class="token keyword">let</span> depsMap <span class="token operator">=</span> targetMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>depsMap<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/*  target -map-&gt; depsMap  */</span>
    targetMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> <span class="token punctuation">(</span>depsMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">let</span> dep <span class="token operator">=</span> depsMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dep<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* key : dep dep\u89C2\u5BDF\u8005 */</span>
    depsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> <span class="token punctuation">(</span>dep <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
   <span class="token comment">/* \u5F53\u524DactiveEffect */</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>dep<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* dep\u6DFB\u52A0 activeEffect */</span>
    dep<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>activeEffect<span class="token punctuation">)</span>
    <span class="token comment">/* \u6BCF\u4E2A activeEffect\u7684deps \u5B58\u653E\u5F53\u524D\u7684dep */</span>
    activeEffect<span class="token punctuation">.</span>deps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div>`,42);function w(_,x){const a=e("ExternalLinkIcon");return t(),o(c,null,[n("p",null,[n("a",f,[b,p(a)])]),n("h3",d,[m,y,n("a",h,[g,p(a)])]),v],64)}var M=r(k,[["render",w]]);export{M as default};
