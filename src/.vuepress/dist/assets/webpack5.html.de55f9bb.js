import{r as e,o as p,c as l,a,b as t,F as r,d as n,e as i}from"./app.552fc8bd.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";const c={},u=n('<h2 id="general-direction" tabindex="-1"><a class="header-anchor" href="#general-direction" aria-hidden="true">#</a> General direction</h2><p>This release focus on the following:</p><ul><li><p>Improve build performance with Persistent Caching.</p></li><li><p>Improve Long Term Caching with better algorithms and defaults.</p></li><li><p>Improve bundle size with better Tree Shaking and Code Generation.</p></li><li><p>Improve compatibility with the web platform.</p></li><li><p>Clean up internal structures that were left in a weird state while implementing features in v4 without introducing any breaking changes.</p></li><li><p>Prepare for future features by introducing breaking changes now, allowing us to stay on v5 for as long as possible.</p></li><li><p>\u901A\u8FC7\u6301\u4E45\u5316\u786C\u76D8\u7F13\u5B58\u80FD\u529B\u6765\u63D0\u5347\u6784\u5EFA\u6027\u80FD</p></li><li><p>\u901A\u8FC7\u66F4\u597D\u7684\u7B97\u6CD5\u6765\u6539\u8FDB\u957F\u671F\u7F13\u5B58\uFF08\u964D\u4F4E\u4EA7\u7269\u8D44\u6E90\u7684\u7F13\u5B58\u5931\u6548\u7387\uFF09</p></li><li><p>\u901A\u8FC7\u66F4\u597D\u7684 Tree Shaking \u80FD\u529B\u548C\u4EE3\u7801\u7684\u751F\u6210\u903B\u8F91\u6765\u4F18\u5316\u4EA7\u7269\u7684\u5927\u5C0F</p></li><li><p>\u6539\u5584 web \u5E73\u53F0\u7684\u517C\u5BB9\u6027\u80FD\u529B</p></li><li><p>\u6E05\u9664\u4E86\u5185\u90E8\u7ED3\u6784\u4E2D\uFF0C\u5728 Webpack4 \u6CA1\u6709\u91CD\u5927\u66F4\u65B0\u800C\u5F15\u5165\u4E00\u4E9B\u65B0\u7279\u6027\u65F6\u6240\u9057\u7559\u4E0B\u6765\u7684\u4E00\u4E9B\u5947\u602A\u7684 state</p></li><li><p>\u901A\u8FC7\u5F15\u5165\u4E00\u4E9B\u91CD\u5927\u7684\u53D8\u66F4\u4E3A\u672A\u6765\u7684\u4E00\u4E9B\u7279\u6027\u505A\u51C6\u5907\uFF0C\u4F7F\u5F97\u80FD\u591F\u957F\u671F\u7684\u7A33\u5B9A\u5728 Webpack5 \u7248\u672C\u4E0A</p></li></ul><h2 id="\u65B0\u7279\u6027\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u65B0\u7279\u6027\u4ECB\u7ECD" aria-hidden="true">#</a> \u65B0\u7279\u6027\u4ECB\u7ECD</h2><ul><li>\u6301\u4E45\u5316\u7F13\u5B58</li><li>moduleIds &amp; chunkIds\u7684\u4F18\u5316</li><li>\u66F4\u667A\u80FD\u7684tree shaking</li><li>nodeJs\u7684polyfill\u811A\u672C\u88AB\u79FB\u9664</li><li>\u652F\u6301\u751F\u6210e6/es2015\u7684\u4EE3\u7801</li><li>SplitChunk\u548C\u6A21\u5757\u5927\u5C0F</li><li>Module Federation</li></ul>',5),d={href:"https://juejin.cn/post/6850037264962027534",target:"_blank",rel:"noopener noreferrer"},h=i("webpack5\u603B\u7ED3"),k=n(`<h3 id="\u6301\u4E45\u5316\u7F13\u5B58" tabindex="-1"><a class="header-anchor" href="#\u6301\u4E45\u5316\u7F13\u5B58" aria-hidden="true">#</a> \u6301\u4E45\u5316\u7F13\u5B58</h3><p>\u5728webpack5\u4E4B\u524D\uFF0C\u53EF\u4EE5\u4F7F\u7528cache-loader\u5C06\u7F16\u8BD1\u7ED3\u6784\u5199\u5165\u786C\u76D8\u7F13\u5B58\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528babel-loader\uFF0C\u8BBE\u7F6Eoption.cacheDirectory\u5C06babel-loader\u7F16\u8BD1\u7684\u7ED3\u679C\u5199\u8FDB\u78C1\u76D8\u3002</p><p>\u5728webpack5\u4E2D\uFF0C\u9ED8\u8BA4\u5F00\u542F\u7F13\u5B58\uFF0C\u7F13\u5B58\u9ED8\u8BA4\u662F\u5728\u5185\u5B58\u91CC\u3002\u53EF\u4EE5\u5BF9cache\u8FDB\u884C\u8BBE\u7F6E</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">cache</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">&#39;filesystem&#39;</span><span class="token punctuation">,</span>  <span class="token comment">//  &#39;memory&#39; | &#39;filesystem&#39;</span>
        <span class="token literal-property property">cacheDirectory</span><span class="token operator">:</span> <span class="token string">&#39;node_modules/.cache/webpack&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u9ED8\u8BA4\u5C06\u7F13\u5B58\u5B58\u50A8\u5728 node_modules/.cache/webpack</span>
        <span class="token comment">// \u7F13\u5B58\u4F9D\u8D56\uFF0C\u5F53\u7F13\u5B58\u4F9D\u8D56\u4FEE\u6539\u65F6\uFF0C\u7F13\u5B58\u5931\u6548</span>
        <span class="token literal-property property">buildDependencies</span><span class="token operator">:</span><span class="token punctuation">{</span>
        	<span class="token comment">// \u5C06\u4F60\u7684\u914D\u7F6E\u6DFB\u52A0\u4F9D\u8D56\uFF0C\u66F4\u6539\u914D\u7F6E\u65F6\uFF0C\u4F7F\u5F97\u7F13\u5B58\u5931\u6548</span>
        	<span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">[</span>__filename<span class="token punctuation">]</span>
    	<span class="token punctuation">}</span> 
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><ul><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0Bwebpack \u4F1A\u5047\u5B9A\u5176\u6240\u5904\u7684 <code>node_modules</code> \u76EE\u5F55\u4EC5\u7531\u5305\u7BA1\u7406\u5668\u4FEE\u6539\uFF0C\u5C06\u4F1A\u8DF3\u8FC7hash\u548C\u65F6\u95F4\u6233\u5904\u7406\uFF0C\u51FA\u4E8E\u6027\u80FD\u8003\u8651\uFF0C\u4EC5\u4F7F\u7528package\u7684\u540D\u79F0\u548C\u7248\u672C\u3002</li><li>\u5F53\u8BBE\u7F6E cache.type: &quot;filesystem&quot; \u65F6\uFF0Cwebpack \u4F1A\u5728\u5185\u90E8\u4EE5\u5206\u5C42\u65B9\u5F0F\u542F\u7528\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\u548C\u5185\u5B58\u7F13\u5B58\u3002\u4ECE\u7F13\u5B58\u8BFB\u53D6\u65F6\uFF0C\u4F1A\u5148\u67E5\u770B\u5185\u5B58\u7F13\u5B58\uFF0C\u5982\u679C\u5185\u5B58\u7F13\u5B58\u672A\u627E\u5230\uFF0C\u5219\u964D\u7EA7\u5230\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\u3002\u5199\u5165\u7F13\u5B58\u5C06\u540C\u65F6\u5199\u5165\u5185\u5B58\u7F13\u5B58\u548C\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\u3002</li><li>\u6587\u4EF6\u7CFB\u7EDF\u7F13\u5B58\u4E0D\u4F1A\u76F4\u63A5\u5C06\u5BF9\u78C1\u76D8\u5199\u5165\u7684\u8BF7\u6C42\u8FDB\u884C\u5E8F\u5217\u5316\u3002\u5B83\u5C06\u7B49\u5230\u7F16\u8BD1\u8FC7\u7A0B\u5B8C\u6210\u4E14\u7F16\u8BD1\u5668\u5904\u4E8E\u7A7A\u95F2\u72B6\u6001\u624D\u4F1A\u6267\u884C\u3002\u5982\u6B64\u5904\u7406\u7684\u539F\u56E0\u662F\u5E8F\u5217\u5316\u548C\u78C1\u76D8\u5199\u5165\u4F1A\u5360\u7528\u8D44\u6E90\uFF0C\u5E76\u4E14\u6211\u4EEC\u4E0D\u60F3\u989D\u5916\u5EF6\u8FDF\u7F16\u8BD1\u8FC7\u7A0B\u3002</li><li>\u7F13\u5B58\u6DD8\u6C70\u7B56\u7565\u8BBE\u8BA1\uFF1A\u6587\u4EF6\u7F13\u5B58\u5B58\u50A8\u5728 node_modules/.cache/webpack\uFF0C\u5BF9\u4E8E\u4E00\u4E2A\u7F13\u5B58\u96C6\u5408\uFF0C\u6700\u5927\u9650\u5EA6\u5E94\u8BE5\u4E0D\u8D85\u8FC7 5 \u4E2A\u7F13\u5B58\u5185\u5BB9\uFF0C\u6700\u5927\u7D2F\u79EF\u8D44\u6E90\u5360\u7528\u4E0D\u8D85\u8FC7 500 MB\uFF0C\u5F53\u903C\u8FD1\u6216\u8D85\u8FC7 500MB \u7684\u9608\u503C\u65F6\uFF0C\u4F18\u5148\u5220\u9664\u6700\u8001\u7684\u7F13\u5B58\u5185\u5BB9\u3002\u540C\u65F6\uFF0C\u4E5F\u8BBE\u8BA1\u4E86\u7F13\u5B58\u7684\u6709\u6548\u65F6\u957F\u4E3A 2 \u4E2A\u661F\u671F\u3002</li></ul><h3 id="moduleids-chunkids\u7684\u4F18\u5316" tabindex="-1"><a class="header-anchor" href="#moduleids-chunkids\u7684\u4F18\u5316" aria-hidden="true">#</a> moduleIds &amp; chunkIds\u7684\u4F18\u5316</h3><ul><li>chunk\uFF1Awebpack\u6253\u5305\u6700\u7EC8\u751F\u6210\u7684\u5355\u72EC\u6587\u4EF6\u5757\uFF0C\u6700\u7EC8\u751F\u6210\u7684\u5355\u72EC\u6587\u4EF6\uFF0C\u4E00\u4E2A\u6587\u4EF6\u5BF9\u5E94\u4E00\u4E2Achunk\u3002</li><li>module\uFF1A\u6BCF\u4E00\u4E2A\u6E90\u7801 js \u6587\u4EF6\u5176\u5B9E\u90FD\u53EF\u4EE5\u770B\u6210\u4E00\u4E2A module\u3002</li></ul><p>chunkId\u7684\u7F3A\u70B9</p><ul><li>webpack5\u6539\u8FDB\u4E86moduleIds \u548C chunkIds\u7684\u786E\u5B9A\u3002\u5728webpack5\u4E4B\u524D\uFF0C\u6CA1\u6709\u4ECEentry\u6253\u5305\u7684chunk\u6587\u4EF6\uFF0C\u90FD\u4F1A\u4EE51\uFF0C2\uFF0C3...\u7684\u6587\u4EF6\u547D\u540D\u65B9\u5F0F\u8F93\u51FA\u3002(\u6587\u4EF6\u540D\u79F0\u540E\u7684hash\u503C\u662F\u7528chunkhash\u751F\u6210\u7684)</li><li>\u8FD9\u6837\u4F1A\u9020\u6210\u4E00\u4E2A\u540E\u679C\u662F\uFF0C\u5F53\u5220\u9664\u6216\u8005\u6682\u65F6\u4E0D\u4F7F\u75281.js\u8FD9\u4E2A\u6587\u4EF6\u540E\uFF0C\u90A3\u4E482.js-&gt;1.js\uFF0C3.js-&gt;2.js\uFF0C\u8FD9\u6837\u5C31\u4F1A\u9020\u6210\u539F\u672C\u7EBF\u4E0A\u76842.js\u8BF7\u6C42\u65F6\u4F1A\u9020\u6210\u7F13\u5B58\u5931\u6548\u3002</li><li>\u5728webpack5\u4E4B\u524D\u4E5F\u662F\u53EF\u4EE5\u901A\u8FC7<code>webpackChunkName</code>\u6765\u89E3\u51B3\u547D\u540D\u95EE\u9898</li></ul><h3 id="splitchunk\u548C\u6A21\u5757\u5927\u5C0F" tabindex="-1"><a class="header-anchor" href="#splitchunk\u548C\u6A21\u5757\u5927\u5C0F" aria-hidden="true">#</a> SplitChunk\u548C\u6A21\u5757\u5927\u5C0F</h3><ul><li>\u6A21\u5757\u73B0\u5728\u80FD\u591F\u4EE5\u66F4\u597D\u7684\u65B9\u5F0F\u8868\u793A\u5927\u5C0F\uFF0C\u800C\u4E0D\u662F\u663E\u793A\u5355\u4E2A\u6570\u5B57\u548C\u4E0D\u540C\u7C7B\u578B\u7684\u5927\u5C0F\u3002</li><li>\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u53EA\u80FD\u5904\u7406 javascript \u7684\u5927\u5C0F\uFF0C\u4F46\u662F\u4F60\u73B0\u5728\u53EF\u4EE5\u4F20\u9012\u591A\u4E2A\u503C\u6765\u7BA1\u7406\u5B83\u4EEC:</li></ul><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>export <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">optimization</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">splitChunks</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">minSize</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">javascript</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
            <span class="token literal-property property">style</span><span class="token operator">:</span> <span class="token number">50000</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h3 id="module-federation" tabindex="-1"><a class="header-anchor" href="#module-federation" aria-hidden="true">#</a> Module Federation</h3><p>\u52A8\u6001\u52A0\u8F7D \u53EF\u4EE5\u5141\u8BB8\u4EE3\u7801\u5728\u8FD0\u884C\u65F6\u6309\u9700\u52A0\u8F7D\u53E6\u4E00\u4E2A\u5E94\u7528\u7684\u4EE3\u7801\u3002</p><ul><li>Module Federation \u4F7F JavaScript \u5E94\u7528\u5F97\u4EE5\u4ECE\u53E6\u4E00\u4E2A JavaScript \u5E94\u7528\u4E2D\u52A8\u6001\u5730\u52A0\u8F7D\u4EE3\u7801 \u2014\u2014 \u540C\u65F6\u5171\u4EAB\u4F9D\u8D56\u3002\u8BA9\u4EE3\u7801\u76F4\u63A5\u5728\u9879\u76EE\u95F4\u5229\u7528 CDN \u76F4\u63A5\u5171\u4EAB\uFF0C\u4E0D\u518D\u9700\u8981\u672C\u5730\u5B89\u88C5 Npm \u5305\u3001\u6784\u5EFA\u518D\u53D1\u5E03\u4E86\uFF01</li></ul>`,15);function b(m,g){const s=e("ExternalLinkIcon");return p(),l(r,null,[u,a("p",null,[a("a",d,[h,t(s)])]),k],64)}var w=o(c,[["render",b]]);export{w as default};
