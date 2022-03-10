import{r as t,o as s,c as n,a as e,b as r,F as d,e as i,d as l}from"./app.552fc8bd.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";var h="/assets/htm_render.3a40ea21.png",o="/assets/srr_render.f9da885f.png",c="/assets/web1.0.e17714e7.png",_="/assets/csr.874981c9.png",u="/assets/ssr2.8de09d44.png",S="/assets/Isomorphism.d6520a90.png";const L={},m={href:"https://github.com/yacan8/blog/issues/30",target:"_blank",rel:"noopener noreferrer"},M=i("\u5F7B\u5E95\u7406\u89E3\u670D\u52A1\u7AEF\u6E32\u67D3 "),v={href:"https://github.com/qinsong77/vue-ssr-demo",target:"_blank",rel:"noopener noreferrer"},f=i("vue-ssr-demo"),T={href:"https://juejin.cn/post/6844903669922529287",target:"_blank",rel:"noopener noreferrer"},H=i("VueSSR\u9AD8\u9636\u6307\u5357"),b={href:"https://cloud.tencent.com/developer/article/1738923",target:"_blank",rel:"noopener noreferrer"},g=i("SSR\u964D\u7EA7\u7B56\u7565"),J=l('<h3 id="\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5B9A\u4E49</h3><h4 id="\u9875\u9762\u7684\u6E32\u67D3\u6D41\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u7684\u6E32\u67D3\u6D41\u7A0B" aria-hidden="true">#</a> \u9875\u9762\u7684\u6E32\u67D3\u6D41\u7A0B\uFF1A</h4><ol><li>\u6D4F\u89C8\u5668\u901A\u8FC7\u8BF7\u6C42\u5F97\u5230\u4E00\u4E2AHTML\u6587\u672C</li><li>\u6E32\u67D3\u8FDB\u7A0B\u89E3\u6790HTML\u6587\u672C\uFF0C\u6784\u5EFADOM\u6811</li><li>\u89E3\u6790HTML\u7684\u540C\u65F6\uFF0C\u5982\u679C\u9047\u5230\u5185\u8054\u6837\u5F0F\u6216\u8005\u6837\u5F0F\u811A\u672C\uFF0C\u5219\u4E0B\u8F7D\u5E76\u6784\u5EFA\u6837\u5F0F\u89C4\u5219\uFF08style rules\uFF09\uFF0C\u82E5\u9047\u5230JavaScript\u811A\u672C\uFF0C\u5219\u4F1A\u4E0B\u8F7D\u6267\u884C\u811A\u672C\u3002</li><li>DOM\u6811\u548C\u6837\u5F0F\u89C4\u5219\u6784\u5EFA\u5B8C\u6210\u4E4B\u540E\uFF0C\u6E32\u67D3\u8FDB\u7A0B\u5C06\u4E24\u8005\u5408\u5E76\u6210\u6E32\u67D3\u6811\uFF08render tree\uFF09</li><li>\u6E32\u67D3\u8FDB\u7A0B\u5F00\u59CB\u5BF9\u6E32\u67D3\u6811\u8FDB\u884C\u5E03\u5C40\uFF0C\u751F\u6210\u5E03\u5C40\u6811\uFF08layout tree\uFF09</li><li>\u6E32\u67D3\u8FDB\u7A0B\u5BF9\u5E03\u5C40\u6811\u8FDB\u884C\u7ED8\u5236\uFF0C\u751F\u6210\u7ED8\u5236\u8BB0\u5F55</li><li>\u6E32\u67D3\u8FDB\u7A0B\u7684\u5BF9\u5E03\u5C40\u6811\u8FDB\u884C\u5206\u5C42\uFF0C\u5206\u522B\u6805\u683C\u5316\u6BCF\u4E00\u5C42\uFF0C\u5E76\u5F97\u5230\u5408\u6210\u5E27</li><li>\u6E32\u67D3\u8FDB\u7A0B\u5C06\u5408\u6210\u5E27\u4FE1\u606F\u53D1\u9001\u7ED9GPU\u8FDB\u7A0B\u663E\u793A\u5230\u9875\u9762\u4E2D</li></ol><p><img src="'+h+'" alt=""></p><p>\u53EF\u4EE5\u770B\u5230\uFF0C\u9875\u9762\u7684\u6E32\u67D3\u5176\u5B9E\u5C31\u662F\u6D4F\u89C8\u5668\u5C06HTML\u6587\u672C\u8F6C\u5316\u4E3A\u9875\u9762\u5E27\u7684\u8FC7\u7A0B\u3002\u800C\u5982\u4ECA\u6211\u4EEC\u5927\u90E8\u5206WEB\u5E94\u7528\u90FD\u662F\u4F7F\u7528 JavaScript \u6846\u67B6\uFF08Vue\u3001React\u3001Angular\uFF09\u8FDB\u884C\u9875\u9762\u6E32\u67D3\u7684\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u6267\u884C JavaScript \u811A\u672C\u7684\u65F6\u5019\uFF0CHTML\u9875\u9762\u5DF2\u7ECF\u5F00\u59CB\u89E3\u6790\u5E76\u4E14\u6784\u5EFADOM\u6811\u4E86\uFF0CJavaScript \u811A\u672C\u53EA\u662F\u52A8\u6001\u7684\u6539\u53D8 DOM \u6811\u7684\u7ED3\u6784\uFF0C\u4F7F\u5F97\u9875\u9762\u6210\u4E3A\u5E0C\u671B\u6210\u4E3A\u7684\u6837\u5B50\uFF0C\u8FD9\u79CD\u6E32\u67D3\u65B9\u5F0F\u53EB\u52A8\u6001\u6E32\u67D3\uFF0C\u4E5F\u53EF\u4EE5\u53EB\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF08client side rende\uFF09\u3002</p><p>\u90A3\u4E48\u4EC0\u4E48\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08server side render\uFF09\uFF1F\u987E\u540D\u601D\u4E49\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u5C31\u662F\u5728\u6D4F\u89C8\u5668\u8BF7\u6C42\u9875\u9762URL\u7684\u65F6\u5019\uFF0C\u670D\u52A1\u7AEF\u5C06\u6211\u4EEC\u9700\u8981\u7684HTML\u6587\u672C\u7EC4\u88C5\u597D\uFF0C\u5E76\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u8FD9\u4E2AHTML\u6587\u672C\u88AB\u6D4F\u89C8\u5668\u89E3\u6790\u4E4B\u540E\uFF0C\u4E0D\u9700\u8981\u7ECF\u8FC7 JavaScript \u811A\u672C\u7684\u6267\u884C\uFF0C\u5373\u53EF\u76F4\u63A5\u6784\u5EFA\u51FA\u5E0C\u671B\u7684 DOM \u6811\u5E76\u5C55\u793A\u5230\u9875\u9762\u4E2D\u3002\u8FD9\u4E2A\u670D\u52A1\u7AEF\u7EC4\u88C5HTML\u7684\u8FC7\u7A0B\uFF0C\u53EB\u505A\u670D\u52A1\u7AEF\u6E32\u67D3\u3002</p><p><img src="'+o+'" alt=""></p><h3 id="\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u7531\u6765" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u7531\u6765" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u7531\u6765</h3><h4 id="web1-0" tabindex="-1"><a class="header-anchor" href="#web1-0" aria-hidden="true">#</a> Web1.0</h4><p>\u5728\u6CA1\u6709AJAX\u7684\u65F6\u5019\uFF0C\u4E5F\u5C31\u662Fweb1.0\u65F6\u4EE3\uFF0C\u51E0\u4E4E\u6240\u6709\u5E94\u7528\u90FD\u662F\u670D\u52A1\u7AEF\u6E32\u67D3\uFF08\u6B64\u65F6\u670D\u52A1\u5668\u6E32\u67D3\u975E\u73B0\u5728\u7684\u670D\u52A1\u5668\u6E32\u67D3\uFF09\uFF0C\u90A3\u4E2A\u65F6\u5019\u7684\u9875\u9762\u6E32\u67D3\u5927\u6982\u662F\u8FD9\u6837\u7684\uFF0C\u6D4F\u89C8\u5668\u8BF7\u6C42\u9875\u9762URL\uFF0C\u7136\u540E\u670D\u52A1\u5668\u63A5\u6536\u5230\u8BF7\u6C42\u4E4B\u540E\uFF0C\u5230\u6570\u636E\u5E93\u67E5\u8BE2\u6570\u636E\uFF0C\u5C06\u6570\u636E\u4E22\u5230\u540E\u7AEF\u7684\u7EC4\u4EF6\u6A21\u677F\uFF08php\u3001asp\u3001jsp\u7B49\uFF09\u4E2D\uFF0C\u5E76\u6E32\u67D3\u6210HTML\u7247\u6BB5\uFF0C\u63A5\u7740\u670D\u52A1\u5668\u5728\u7EC4\u88C5\u8FD9\u4E9BHTML\u7247\u6BB5\uFF0C\u7EC4\u6210\u4E00\u4E2A\u5B8C\u6574\u7684HTML\uFF0C\u6700\u540E\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u5DF2\u7ECF\u62FF\u5230\u4E86\u4E00\u4E2A\u5B8C\u6574\u7684\u88AB\u670D\u52A1\u5668\u52A8\u6001\u7EC4\u88C5\u51FA\u6765\u7684HTML\u6587\u672C\uFF0C\u7136\u540E\u5C06HTML\u6E32\u67D3\u5230\u9875\u9762\u4E2D\uFF0C\u8FC7\u7A0B\u6CA1\u6709\u4EFB\u4F55JavaScript\u4EE3\u7801\u7684\u53C2\u4E0E\u3002</p><p><img src="'+c+'" alt=""></p><h4 id="\u5BA2\u6237\u7AEF\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF\u6E32\u67D3" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF\u6E32\u67D3</h4><p>\u5728WEB1.0\u65F6\u4EE3\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u770B\u8D77\u6765\u662F\u4E00\u4E2A\u5F53\u65F6\u7684\u6700\u597D\u7684\u6E32\u67D3\u65B9\u5F0F\uFF0C\u4F46\u662F\u968F\u7740\u4E1A\u52A1\u7684\u65E5\u76CA\u590D\u6742\u548C\u540E\u7EEDAJAX\u7684\u51FA\u73B0\uFF0C\u4E5F\u6E10\u6E10\u5F00\u59CB\u66B4\u9732\u51FA\u4E86WEB1.0\u670D\u52A1\u5668\u6E32\u67D3\u7684\u7F3A\u70B9\u3002</p><ul><li>\u6BCF\u6B21\u66F4\u65B0\u9875\u9762\u7684\u4E00\u5C0F\u7684\u6A21\u5757\uFF0C\u90FD\u9700\u8981\u91CD\u65B0\u8BF7\u6C42\u4E00\u6B21\u9875\u9762\uFF0C\u91CD\u65B0\u67E5\u4E00\u6B21\u6570\u636E\u5E93\uFF0C\u91CD\u65B0\u7EC4\u88C5\u4E00\u6B21HTML</li><li>\u524D\u7AEFJavaScript\u4EE3\u7801\u548C\u540E\u7AEF\uFF08jsp\u3001php\u3001jsp\uFF09\u4EE3\u7801\u6DF7\u6742\u5728\u4E00\u8D77\uFF0C\u4F7F\u5F97\u65E5\u76CA\u590D\u6742\u7684WEB\u5E94\u7528\u96BE\u4EE5\u7EF4\u62A4</li></ul><p>\u968F\u4E4B nodejs \u7684\u51FA\u73B0\uFF0C\u524D\u7AEF\u770B\u5230\u4E86\u7FFB\u8EAB\u7684\u5951\u673A\uFF0C\u4E3A\u4E86\u6446\u8131\u540E\u7AEF\u7684\u6307\u6307\u70B9\u70B9\uFF0C\u524D\u7AEF\u5F00\u542F\u4E86\u4E00\u573A\u524D\u540E\u7AEF\u5206\u79BB\u7684\u8FD0\u52A8\uFF0C\u5E0C\u671B\u53EF\u4EE5\u8131\u79BB\u540E\u7AEF\u72EC\u7ACB\u53D1\u5C55\u3002\u524D\u540E\u7AEF\u5206\u79BB\uFF0C\u8868\u9762\u4E0A\u770B\u4E0A\u53BB\u662F\u4EE3\u7801\u5206\u79BB\uFF0C\u5B9E\u9645\u4E0A\u662F\u4E3A\u4E86\u524D\u540E\u7AEF\u4EBA\u5458\u5206\u79BB\uFF0C\u4E5F\u5C31\u662F\u524D\u540E\u7AEF\u5206\u5BB6\uFF0C\u524D\u7AEF\u4E0D\u518D\u5F52\u5C5E\u4E8E\u540E\u7AEF\u56E2\u961F\u3002</p><p>\u524D\u540E\u7AEF\u5206\u79BB\u4E4B\u540E\uFF0C\u7F51\u9875\u5F00\u59CB\u88AB\u5F53\u6210\u4E86\u72EC\u7ACB\u7684\u5E94\u7528\u7A0B\u5E8F\uFF08SPA\uFF0CSingle Page Application\uFF09\uFF0C\u524D\u7AEF\u56E2\u961F\u63A5\u7BA1\u4E86\u6240\u6709\u9875\u9762\u6E32\u67D3\u7684\u4E8B\uFF0C\u540E\u7AEF\u56E2\u961F\u53EA\u8D1F\u8D23\u63D0\u4F9B\u6240\u6709\u6570\u636E\u67E5\u8BE2\u4E0E\u5904\u7406\u7684API\uFF0C\u5927\u4F53\u6D41\u7A0B\u662F\u8FD9\u6837\u7684\uFF1A\u9996\u5148\u6D4F\u89C8\u5668\u8BF7\u6C42URL\uFF0C\u524D\u7AEF\u670D\u52A1\u5668\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A\u7A7A\u7684\u9759\u6001HTML\u6587\u4EF6\uFF08\u4E0D\u9700\u8981\u4EFB\u4F55\u67E5\u6570\u636E\u5E93\u548C\u6A21\u677F\u7EC4\u88C5\uFF09\uFF0C\u8FD9\u4E2AHTML\u6587\u4EF6\u4E2D\u52A0\u8F7D\u4E86\u5F88\u591A\u6E32\u67D3\u9875\u9762\u9700\u8981\u7684 JavaScript \u811A\u672C\u548C CSS \u6837\u5F0F\u8868\uFF0C\u6D4F\u89C8\u5668\u62FF\u5230 HTML \u6587\u4EF6\u540E\u5F00\u59CB\u52A0\u8F7D\u811A\u672C\u548C\u6837\u5F0F\u8868\uFF0C\u5E76\u4E14\u6267\u884C\u811A\u672C\uFF0C\u8FD9\u4E2A\u65F6\u5019\u811A\u672C\u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u63D0\u4F9B\u7684API\uFF0C\u83B7\u53D6\u6570\u636E\uFF0C\u83B7\u53D6\u5B8C\u6210\u540E\u5C06\u6570\u636E\u901A\u8FC7JavaScript\u811A\u672C\u52A8\u6001\u7684\u5C06\u6570\u636E\u6E32\u67D3\u5230\u9875\u9762\u4E2D\uFF0C\u5B8C\u6210\u9875\u9762\u663E\u793A\u3002</p><p><img src="'+_+'" alt=""></p><p>\u8FD9\u4E00\u4E2A\u524D\u540E\u7AEF\u5206\u79BB\u7684\u6E32\u67D3\u6A21\u5F0F\uFF0C\u4E5F\u5C31\u662F\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF08CSR\uFF09\u3002</p><h4 id="\u670D\u52A1\u7AEF\u6E32\u67D3" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6E32\u67D3</h4><p>\u968F\u7740\u5355\u9875\u5E94\u7528\uFF08SPA\uFF09\u7684\u53D1\u5C55\uFF0C\u7A0B\u5E8F\u5458\u4EEC\u6E10\u6E10\u53D1\u73B0 SEO\uFF08Search Engine Optimazition\uFF0C\u5373\u641C\u7D22\u5F15\u64CE\u4F18\u5316\uFF09\u51FA\u4E86\u95EE\u9898\uFF0C\u800C\u4E14\u968F\u7740\u5E94\u7528\u7684\u590D\u6742\u5316\uFF0CJavaScript \u811A\u672C\u4E5F\u4E0D\u65AD\u7684\u81C3\u80BF\u8D77\u6765\uFF0C\u4F7F\u5F97\u9996\u5C4F\u6E32\u67D3\u76F8\u6BD4\u4E8E Web1.0\u65F6\u5019\u7684\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u4E5F\u6162\u4E86\u4E0D\u5C11\u3002</p><p>\u4E8E\u662F\u524D\u7AEF\u56E2\u961F\u9009\u62E9\u4E86\u4F7F\u7528 <code>nodejs</code> \u5728\u670D\u52A1\u5668\u8FDB\u884C\u9875\u9762\u7684\u6E32\u67D3\uFF0C\u8FDB\u800C\u518D\u6B21\u51FA\u73B0\u4E86\u670D\u52A1\u7AEF\u6E32\u67D3\u3002\u5927\u4F53\u6D41\u7A0B\u4E0E\u5BA2\u6237\u7AEF\u6E32\u67D3\u6709\u4E9B\u76F8\u4F3C\uFF0C\u9996\u5148\u662F\u6D4F\u89C8\u5668\u8BF7\u6C42URL\uFF0C\u524D\u7AEF\u670D\u52A1\u5668\u63A5\u6536\u5230URL\u8BF7\u6C42\u4E4B\u540E\uFF0C\u6839\u636E\u4E0D\u540C\u7684URL\uFF0C\u524D\u7AEF\u670D\u52A1\u5668\u5411\u540E\u7AEF\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\uFF0C\u8BF7\u6C42\u5B8C\u6210\u540E\uFF0C\u524D\u7AEF\u670D\u52A1\u5668\u4F1A\u7EC4\u88C5\u4E00\u4E2A\u643A\u5E26\u4E86\u5177\u4F53\u6570\u636E\u7684HTML\u6587\u672C\uFF0C\u5E76\u4E14\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u6D4F\u89C8\u5668\u5F97\u5230HTML\u4E4B\u540E\u5F00\u59CB\u6E32\u67D3\u9875\u9762\uFF0C\u540C\u65F6\uFF0C\u6D4F\u89C8\u5668\u52A0\u8F7D\u5E76\u6267\u884C JavaScript \u811A\u672C\uFF0C\u7ED9\u9875\u9762\u4E0A\u7684\u5143\u7D20\u7ED1\u5B9A\u4E8B\u4EF6\uFF0C\u8BA9\u9875\u9762\u53D8\u5F97\u53EF\u4EA4\u4E92\uFF0C\u5F53\u7528\u6237\u4E0E\u6D4F\u89C8\u5668\u9875\u9762\u8FDB\u884C\u4EA4\u4E92\uFF0C\u5982\u8DF3\u8F6C\u5230\u4E0B\u4E00\u4E2A\u9875\u9762\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6267\u884C JavaScript \u811A\u672C\uFF0C\u5411\u540E\u7AEF\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\uFF0C\u83B7\u53D6\u5B8C\u6570\u636E\u4E4B\u540E\u518D\u6B21\u6267\u884C JavaScript \u4EE3\u7801\u52A8\u6001\u6E32\u67D3\u9875\u9762\u3002</p><p><img src="'+u+'" alt=""></p><h3 id="\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5229\u5F0A" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5229\u5F0A" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u5229\u5F0A</h3><h4 id="\u5229\u4E8Eseo" tabindex="-1"><a class="header-anchor" href="#\u5229\u4E8Eseo" aria-hidden="true">#</a> \u5229\u4E8ESEO</h4><p>\u6709\u5229\u4E8ESEO\uFF0C\u5176\u5B9E\u5C31\u662F\u6709\u5229\u4E8E\u722C\u866B\u6765\u722C\u4F60\u7684\u9875\u9762\uFF0C\u7136\u540E\u5728\u522B\u4EBA\u4F7F\u7528\u641C\u7D22\u5F15\u64CE\u641C\u7D22\u76F8\u5173\u7684\u5185\u5BB9\u65F6\uFF0C\u4F60\u7684\u7F51\u9875\u6392\u884C\u80FD\u9760\u5F97\u66F4\u524D\uFF0C\u8FD9\u6837\u4F60\u7684\u6D41\u91CF\u5C31\u6709\u8D8A\u9AD8\u3002\u90A3\u4E3A\u4EC0\u4E48\u670D\u52A1\u7AEF\u6E32\u67D3\u66F4\u5229\u4E8E\u722C\u866B\u722C\u4F60\u7684\u9875\u9762\u5462\uFF1F\u5176\u5B9E\uFF0C\u722C\u866B\u4E5F\u5206\u4F4E\u7EA7\u722C\u866B\u548C\u9AD8\u7EA7\u722C\u866B\u3002</p><ul><li>\u4F4E\u7EA7\u722C\u866B\uFF1A\u53EA\u8BF7\u6C42URL\uFF0CURL\u8FD4\u56DE\u7684HTML\u662F\u4EC0\u4E48\u5185\u5BB9\u5C31\u722C\u4EC0\u4E48\u5185\u5BB9\u3002</li><li>\u9AD8\u7EA7\u722C\u866B\uFF1A\u8BF7\u6C42URL\uFF0C\u52A0\u8F7D\u5E76\u6267\u884CJavaScript\u811A\u672C\u6E32\u67D3\u9875\u9762\uFF0C\u722CJavaScript\u6E32\u67D3\u540E\u7684\u5185\u5BB9\u3002</li></ul><p>\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F4E\u7EA7\u722C\u866B\u5BF9\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684\u9875\u9762\u6765\u8BF4\uFF0C\u7B80\u76F4\u65E0\u80FD\u4E3A\u529B\uFF0C\u56E0\u4E3A\u8FD4\u56DE\u7684HTML\u662F\u4E00\u4E2A\u7A7A\u58F3\uFF0C\u5B83\u9700\u8981\u6267\u884C JavaScript \u811A\u672C\u4E4B\u540E\u624D\u4F1A\u6E32\u67D3\u771F\u6B63\u7684\u9875\u9762\u3002\u800C\u76EE\u524D\u50CF\u767E\u5EA6\u3001\u8C37\u6B4C\u3001\u5FAE\u8F6F\u7B49\u516C\u53F8\uFF0C\u6709\u4E00\u90E8\u5206\u5E74\u4EE3\u8001\u65E7\u7684\u722C\u866B\u8FD8\u5C5E\u4E8E\u4F4E\u7EA7\u722C\u866B\uFF0C\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u5BF9\u8FD9\u4E9B\u4F4E\u7EA7\u722C\u866B\u66F4\u52A0\u53CB\u597D\u4E00\u4E9B\u3002</p><h4 id="\u767D\u5C4F\u65F6\u95F4\u66F4\u77ED" tabindex="-1"><a class="header-anchor" href="#\u767D\u5C4F\u65F6\u95F4\u66F4\u77ED" aria-hidden="true">#</a> \u767D\u5C4F\u65F6\u95F4\u66F4\u77ED</h4><p>\u76F8\u5BF9\u4E8E\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF0C\u670D\u52A1\u7AEF\u6E32\u67D3\u5728\u6D4F\u89C8\u5668\u8BF7\u6C42URL\u4E4B\u540E\u5DF2\u7ECF\u5F97\u5230\u4E86\u4E00\u4E2A\u5E26\u6709\u6570\u636E\u7684HTML\u6587\u672C\uFF0C\u6D4F\u89C8\u5668\u53EA\u9700\u8981\u89E3\u6790HTML\uFF0C\u76F4\u63A5\u6784\u5EFADOM\u6811\u5C31\u53EF\u4EE5\u3002\u800C\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF0C\u9700\u8981\u5148\u5F97\u5230\u4E00\u4E2A\u7A7A\u7684HTML\u9875\u9762\uFF0C\u8FD9\u4E2A\u65F6\u5019\u9875\u9762\u5DF2\u7ECF\u8FDB\u5165\u767D\u5C4F\uFF0C\u4E4B\u540E\u8FD8\u9700\u8981\u7ECF\u8FC7\u52A0\u8F7D\u5E76\u6267\u884C JavaScript\u3001\u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\u3001JavaScript \u6E32\u67D3\u9875\u9762\u51E0\u4E2A\u8FC7\u7A0B\u624D\u53EF\u4EE5\u770B\u5230\u6700\u540E\u7684\u9875\u9762\u3002\u7279\u522B\u662F\u5728\u590D\u6742\u5E94\u7528\u4E2D\uFF0C\u7531\u4E8E\u9700\u8981\u52A0\u8F7D JavaScript \u811A\u672C\uFF0C\u8D8A\u662F\u590D\u6742\u7684\u5E94\u7528\uFF0C\u9700\u8981\u52A0\u8F7D\u7684 JavaScript \u811A\u672C\u5C31\u8D8A\u591A\u3001\u8D8A\u5927\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u5E94\u7528\u7684\u9996\u5C4F\u52A0\u8F7D\u65F6\u95F4\u975E\u5E38\u957F\uFF0C\u8FDB\u800C\u964D\u4F4E\u4E86\u4F53\u9A8C\u611F\u3002</p><h4 id="\u670D\u52A1\u7AEF\u6E32\u67D3\u7F3A\u70B9" tabindex="-1"><a class="header-anchor" href="#\u670D\u52A1\u7AEF\u6E32\u67D3\u7F3A\u70B9" aria-hidden="true">#</a> \u670D\u52A1\u7AEF\u6E32\u67D3\u7F3A\u70B9</h4><p>\u5E76\u4E0D\u662F\u6240\u6709\u7684WEB\u5E94\u7528\u90FD\u5FC5\u987B\u4F7F\u7528SSR\uFF0C\u8FD9\u9700\u8981\u5F00\u53D1\u8005\u81EA\u5DF1\u6765\u6743\u8861\uFF0C\u56E0\u4E3A\u670D\u52A1\u7AEF\u6E32\u67D3\u4F1A\u5E26\u6765\u4EE5\u4E0B\u95EE\u9898\uFF1A</p><ul><li>\u4EE3\u7801\u590D\u6742\u5EA6\u589E\u52A0\u3002\u4E3A\u4E86\u5B9E\u73B0\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u5E94\u7528\u4EE3\u7801\u4E2D\u9700\u8981\u517C\u5BB9\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u4E24\u79CD\u8FD0\u884C\u60C5\u51B5\uFF0C\u800C\u4E00\u90E8\u5206\u4F9D\u8D56\u7684\u5916\u90E8\u6269\u5C55\u5E93\u5374\u53EA\u80FD\u5728\u5BA2\u6237\u7AEF\u8FD0\u884C\uFF0C\u9700\u8981\u5BF9\u5176\u8FDB\u884C\u7279\u6B8A\u5904\u7406\uFF0C\u624D\u80FD\u5728\u670D\u52A1\u5668\u6E32\u67D3\u5E94\u7528\u7A0B\u5E8F\u4E2D\u8FD0\u884C\u3002</li><li>\u9700\u8981\u66F4\u591A\u7684\u670D\u52A1\u5668\u8D1F\u8F7D\u5747\u8861\u3002\u7531\u4E8E\u670D\u52A1\u5668\u589E\u52A0\u4E86\u6E32\u67D3HTML\u7684\u9700\u6C42\uFF0C\u4F7F\u5F97\u539F\u672C\u53EA\u9700\u8981\u8F93\u51FA\u9759\u6001\u8D44\u6E90\u6587\u4EF6\u7684nodejs\u670D\u52A1\uFF0C\u65B0\u589E\u4E86\u6570\u636E\u83B7\u53D6\u7684IO\u548C\u6E32\u67D3HTML\u7684CPU\u5360\u7528\uFF0C\u5982\u679C\u6D41\u91CF\u7A81\u7136\u66B4\u589E\uFF0C\u6709\u53EF\u80FD\u5BFC\u81F4\u670D\u52A1\u5668down\u673A\uFF0C\u56E0\u6B64\u9700\u8981\u4F7F\u7528\u54CD\u5E94\u7684\u7F13\u5B58\u7B56\u7565\u548C\u51C6\u5907\u76F8\u5E94\u7684\u670D\u52A1\u5668\u8D1F\u8F7D\u3002</li><li>\u6D89\u53CA\u6784\u5EFA\u8BBE\u7F6E\u548C\u90E8\u7F72\u7684\u66F4\u591A\u8981\u6C42\u3002\u4E0E\u53EF\u4EE5\u90E8\u7F72\u5728\u4EFB\u4F55\u9759\u6001\u6587\u4EF6\u670D\u52A1\u5668\u4E0A\u7684\u5B8C\u5168\u9759\u6001\u5355\u9875\u9762\u5E94\u7528\u7A0B\u5E8F (SPA) \u4E0D\u540C\uFF0C\u670D\u52A1\u5668\u6E32\u67D3\u5E94\u7528\u7A0B\u5E8F\uFF0C\u9700\u8981\u5904\u4E8E Node.js server \u8FD0\u884C\u73AF\u5883\u3002</li></ul><p>\u6240\u4EE5\u5728\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3SSR\u4E4B\u524D\uFF0C\u9700\u8981\u5F00\u53D1\u8005\u8003\u8651\u6295\u5165\u4EA7\u51FA\u6BD4\uFF0C\u6BD4\u5982\u5927\u90E8\u5206\u5E94\u7528\u7CFB\u7EDF\u90FD\u4E0D\u9700\u8981SEO\uFF0C\u800C\u4E14\u9996\u5C4F\u65F6\u95F4\u5E76\u6CA1\u6709\u975E\u5E38\u7684\u6162\uFF0C\u5982\u679C\u4F7F\u7528SSR\u53CD\u800C\u5C0F\u9898\u5927\u505A\u4E86\u3002</p><h3 id="\u540C\u6784" tabindex="-1"><a class="header-anchor" href="#\u540C\u6784" aria-hidden="true">#</a> \u540C\u6784</h3><p>\u77E5\u9053\u4E86\u670D\u52A1\u5668\u6E32\u67D3\u7684\u5229\u5F0A\u540E\uFF0C\u5047\u5982\u6211\u4EEC\u9700\u8981\u5728\u9879\u76EE\u4E2D\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u6211\u4EEC\u9700\u8981\u505A\u4EC0\u4E48\u5462\uFF1F\u90A3\u5C31\u662F\u540C\u6784\u6211\u4EEC\u7684\u9879\u76EE\u3002</p><h4 id="\u540C\u6784\u7684\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u540C\u6784\u7684\u5B9A\u4E49" aria-hidden="true">#</a> \u540C\u6784\u7684\u5B9A\u4E49</h4><p>\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u4E2D\uFF0C\u6709\u4E24\u79CD\u9875\u9762\u6E32\u67D3\u7684\u65B9\u5F0F\uFF1A</p><ul><li>\u524D\u7AEF\u670D\u52A1\u5668\u901A\u8FC7\u8BF7\u6C42\u540E\u7AEF\u670D\u52A1\u5668\u83B7\u53D6\u6570\u636E\u5E76\u7EC4\u88C5HTML\u8FD4\u56DE\u7ED9\u6D4F\u89C8\u5668\uFF0C\u6D4F\u89C8\u5668\u76F4\u63A5\u89E3\u6790HTML\u540E\u6E32\u67D3\u9875\u9762</li><li>\u6D4F\u89C8\u5668\u5728\u4EA4\u4E92\u8FC7\u7A0B\u4E2D\uFF0C\u8BF7\u6C42\u65B0\u7684\u6570\u636E\u5E76\u52A8\u6001\u66F4\u65B0\u6E32\u67D3\u9875\u9762</li></ul><p>\u8FD9\u4E24\u79CD\u6E32\u67D3\u65B9\u5F0F\u6709\u4E00\u4E2A\u4E0D\u540C\u70B9\u5C31\u662F\uFF0C\u4E00\u4E2A\u662F\u5728\u670D\u52A1\u7AEF\u4E2D\u7EC4\u88C5html\u7684\uFF0C\u4E00\u4E2A\u662F\u5728\u5BA2\u6237\u7AEF\u4E2D\u7EC4\u88C5html\u7684\uFF0C\u8FD0\u884C\u73AF\u5883\u662F\u4E0D\u4E00\u6837\u7684\u3002\u6240\u8C13\u540C\u6784\uFF0C\u5C31\u662F\u8BA9\u4E00\u4EFD\u4EE3\u7801\uFF0C\u65E2\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u4E2D\u6267\u884C\uFF0C\u4E5F\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4E2D\u6267\u884C\uFF0C\u5E76\u4E14\u6267\u884C\u7684\u6548\u679C\u90FD\u662F\u4E00\u6837\u7684\uFF0C\u90FD\u662F\u5B8C\u6210\u8FD9\u4E2Ahtml\u7684\u7EC4\u88C5\uFF0C\u6B63\u786E\u7684\u663E\u793A\u9875\u9762\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E00\u4EFD\u4EE3\u7801\uFF0C\u65E2\u53EF\u4EE5\u5BA2\u6237\u7AEF\u6E32\u67D3\uFF0C\u4E5F\u53EF\u4EE5\u670D\u52A1\u7AEF\u6E32\u67D3\u3002</p><h4 id="\u540C\u6784\u7684\u6761\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u540C\u6784\u7684\u6761\u4EF6" aria-hidden="true">#</a> \u540C\u6784\u7684\u6761\u4EF6</h4><p>\u4E3A\u4E86\u5B9E\u73B0\u540C\u6784\uFF0C\u6211\u4EEC\u9700\u8981\u6EE1\u8DB3\u4EC0\u4E48\u6761\u4EF6\u5462\uFF1F\u9996\u5148\uFF0C\u6211\u4EEC\u601D\u8003\u4E00\u4E2A\u5E94\u7528\u4E2D\u4E00\u4E2A\u9875\u9762\u7684\u7EC4\u6210\uFF0C\u5047\u5982\u6211\u4EEC\u4F7F\u7528\u7684\u662FVue.js\uFF0C\u5F53\u6211\u4EEC\u6253\u5F00\u4E00\u4E2A\u9875\u9762\u65F6\uFF0C\u9996\u5148\u662F\u6253\u5F00\u8FD9\u4E2A\u9875\u9762\u7684URL\uFF0C\u8FD9\u4E2AURL\uFF0C\u53EF\u4EE5\u901A\u8FC7\u5E94\u7528\u7684\u8DEF\u7531\u5339\u914D\uFF0C\u627E\u5230\u5177\u4F53\u7684\u9875\u9762\uFF0C\u4E0D\u540C\u7684\u9875\u9762\u6709\u4E0D\u540C\u7684\u89C6\u56FE\uFF0C\u90A3\u4E48\uFF0C\u89C6\u56FE\u662F\u4EC0\u4E48\uFF1F\u4ECE\u5E94\u7528\u7684\u89D2\u5EA6\u6765\u770B\uFF0C<code>\u89C6\u56FE = \u6A21\u677F + \u6570\u636E</code>\uFF0C\u90A3\u4E48\u5728 Vue.js \u4E2D\uFF0C \u6A21\u677F\u53EF\u4EE5\u7406\u89E3\u6210<code>\u7EC4\u4EF6</code>\uFF0C\u6570\u636E\u53EF\u4EE5\u7406\u89E3\u4E3A<code>\u6570\u636E\u6A21\u578B</code>\uFF0C\u5373<code>\u54CD\u5E94\u5F0F\u6570\u636E</code>\u3002\u6240\u4EE5\uFF0C\u5BF9\u4E8E\u540C\u6784\u5E94\u7528\u6765\u8BF4\uFF0C\u6211\u4EEC\u5FC5\u987B\u5B9E\u73B0\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u7684\u8DEF\u7531\u3001\u6A21\u578B\u7EC4\u4EF6\u3001\u6570\u636E\u6A21\u578B\u7684\u5171\u4EAB\u3002</p><p><img src="'+S+'" alt=""></p>',42);function x(R,U){const a=t("ExternalLinkIcon");return s(),n(d,null,[e("ul",null,[e("li",null,[e("a",m,[M,r(a)])]),e("li",null,[e("a",v,[f,r(a)])]),e("li",null,[e("a",T,[H,r(a)])]),e("li",null,[e("a",b,[g,r(a)])])]),J],64)}var j=p(L,[["render",x]]);export{j as default};
