(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{499:function(t,s,a){"use strict";a.r(s);var e=a(25),r=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("ul",[a("li",[a("a",{attrs:{href:"#xss"}},[t._v("XSS")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E6%94%BB%E5%87%BB"}},[t._v("如何攻击")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E9%98%B2%E5%BE%A1"}},[t._v("如何防御")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#csp"}},[t._v("CSP")])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#csrf"}},[t._v("CSRF")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E6%94%BB%E5%87%BB-1"}},[t._v("如何攻击")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%A6%82%E4%BD%95%E9%98%B2%E5%BE%A1-1"}},[t._v("如何防御")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#samesite"}},[t._v("SameSite")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E9%AA%8C%E8%AF%81-referer"}},[t._v("验证 Referer")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#token"}},[t._v("Token")])])])])])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AF%86%E7%A0%81%E5%AE%89%E5%85%A8"}},[t._v("密码安全")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#%E5%8A%A0%E7%9B%90"}},[t._v("加盐")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86%E5%92%8C%E9%9D%9E%E5%AF%B9%E7%A7%B0%E5%8A%A0%E5%AF%86"}},[t._v("对称加密和非对称加密")])])])])]),t._v(" "),a("h4",{attrs:{id:"xss-cross-site-script-跨站脚本攻击-和-csrf-cross-site-request-forgery-跨站请求伪造"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss-cross-site-script-跨站脚本攻击-和-csrf-cross-site-request-forgery-跨站请求伪造"}},[t._v("#")]),t._v(" XSS(Cross Site Script)跨站脚本攻击 和 CSRF(Cross Site Request Forgery)跨站请求伪造")]),t._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://juejin.im/post/6844904100945985543",target:"_blank",rel:"noopener noreferrer"}},[t._v("介绍"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"xss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xss"}},[t._v("#")]),t._v(" XSS")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("跨网站指令码")]),t._v("（英语：Cross-site scripting，通常简称为：XSS）是一种网站应用程式的安全漏洞攻击，是"),a("a",{attrs:{href:"https://www.wikiwand.com/zh-hans/%E4%BB%A3%E7%A2%BC%E6%B3%A8%E5%85%A5",target:"_blank",rel:"noopener noreferrer"}},[t._v("代码注入"),a("OutboundLink")],1),t._v("的一种。它允许恶意使用者将程式码注入到网页上，其他使用者在观看网页时就会受到影响。这类攻击通常包含了 HTML 以及使用者端脚本语言。")])]),t._v(" "),a("p",[t._v("XSS 分为三种：反射型，存储型和 DOM-based")]),t._v(" "),a("h4",{attrs:{id:"如何攻击"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何攻击"}},[t._v("#")]),t._v(" 如何攻击")]),t._v(" "),a("p",[t._v("XSS 通过修改 HTML 节点或者执行 JS 代码来攻击网站。")]),t._v(" "),a("p",[t._v("例如通过 URL 获取某些参数")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- http://www.domain.com?name=<script>alert(1)<\/script> --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{{name}}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("                                                  \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("上述 URL 输入可能会将 HTML 改为 "),a("code",[t._v("<div><script>alert(1)<\/script></div>")]),t._v(" ，这样页面中就凭空多了一段可执行脚本。这种攻击类型是反射型攻击，也可以说是 DOM-based 攻击。")]),t._v(" "),a("p",[t._v("也有另一种场景，比如写了一篇包含攻击代码 "),a("code",[t._v("<script>alert(1)<\/script>")]),t._v(" 的文章，那么可能浏览文章的用户都会被攻击到。这种攻击类型是存储型攻击，也可以说是 DOM-based 攻击，并且这种攻击打击面更广。")]),t._v(" "),a("h4",{attrs:{id:"如何防御"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防御"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),a("p",[t._v("最普遍的做法是转义输入输出的内容，对于引号，尖括号，斜杠进行转义")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("str")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("&")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&amp;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&lt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v(">")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&gt;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v('"')]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&quto;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&#39;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\tstr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&#96;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    str "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("replace")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\/")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-flags"}},[t._v("g")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"&#x2F;"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" str\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("p",[t._v("通过转义可以将攻击代码 "),a("code",[t._v("<script>alert(1)<\/script>")]),t._v(" 变成")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// -> &lt;script&gt;alert(1)&lt;&#x2F;script&gt;")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("escape")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<script>alert(1)<\/script>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("对于显示富文本来说，不能通过上面的办法来转义所有字符，因为这样会把需要的格式也过滤掉。这种情况通常采用白名单过滤的办法，当然也可以通过黑名单过滤，但是考虑到需要过滤的标签和标签属性实在太多，更加推荐使用白名单的方式。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" xss "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"xss"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" html "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("xss")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('\'<h1 id="title">XSS Demo</h1><script>alert("xss");<\/script>\'')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// -> <h1>XSS Demo</h1>&lt;script&gt;alert("xss");&lt;/script&gt;')]),t._v("\nconsole"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("以上示例使用了 "),a("code",[t._v("js-xss")]),t._v(" 来实现。可以看到在输出中保留了 "),a("code",[t._v("h1")]),t._v(" 标签且过滤了 "),a("code",[t._v("script")]),t._v(" 标签")]),t._v(" "),a("h4",{attrs:{id:"csp"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csp"}},[t._v("#")]),t._v(" CSP")]),t._v(" "),a("blockquote",[a("p",[t._v("内容安全策略   ("),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/CSP",target:"_blank",rel:"noopener noreferrer"}},[t._v("CSP"),a("OutboundLink")],1),t._v(") 是一个额外的安全层，用于检测并削弱某些特定类型的攻击，包括跨站脚本 ("),a("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Glossary/XSS",target:"_blank",rel:"noopener noreferrer"}},[t._v("XSS"),a("OutboundLink")],1),t._v(") 和数据注入攻击等。无论是数据盗取、网站内容污染还是散发恶意软件，这些攻击都是主要的手段。")])]),t._v(" "),a("p",[t._v("我们可以通过 CSP 来尽量减少 XSS 攻击。CSP 本质上也是建立白名单，规定了浏览器只能够执行特定来源的代码。")]),t._v(" "),a("p",[t._v("通常可以通过 HTTP Header 中的 "),a("code",[t._v("Content-Security-Policy")]),t._v(" 来开启 CSP")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("只允许加载本站资源")]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Security-Policy:")]),t._v(" default-src ‘self’\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("只允许加载 HTTPS 协议图片")]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Security-Policy:")]),t._v(" img-src https://*\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])]),t._v(" "),a("li",[a("p",[t._v("允许加载任何来源框架")]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("Content-Security-Policy:")]),t._v(" child-src 'none'\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])])])]),t._v(" "),a("p",[t._v("更多属性可以查看 "),a("a",{attrs:{href:"https://content-security-policy.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这里"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"csrf"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#csrf"}},[t._v("#")]),t._v(" CSRF")]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("跨站请求伪造")]),t._v("（英语：Cross-site request forgery），也被称为 "),a("strong",[t._v("one-click attack")]),t._v(" 或者 "),a("strong",[t._v("session riding")]),t._v("，通常缩写为 "),a("strong",[t._v("CSRF")]),t._v(" 或者 "),a("strong",[t._v("XSRF")]),t._v("， 是一种挟制用户在当前已登录的Web应用程序上执行非本意的操作的攻击方法。["),a("a",{attrs:{href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%AB%99%E8%AF%B7%E6%B1%82%E4%BC%AA%E9%80%A0#citenoteRistic1",target:"_blank",rel:"noopener noreferrer"}},[t._v("1]"),a("OutboundLink")],1),t._v(" 跟"),a("a",{attrs:{href:"https://www.wikiwand.com/zh/%E8%B7%A8%E7%B6%B2%E7%AB%99%E6%8C%87%E4%BB%A4%E7%A2%BC",target:"_blank",rel:"noopener noreferrer"}},[t._v("跨網站指令碼"),a("OutboundLink")],1),t._v("（XSS）相比，"),a("strong",[t._v("XSS")]),t._v(" 利用的是用户对指定网站的信任，CSRF 利用的是网站对用户网页浏览器的信任。")])]),t._v(" "),a("p",[t._v("简单点说，CSRF 就是利用用户的登录态发起恶意请求。")]),t._v(" "),a("h4",{attrs:{id:"如何攻击-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何攻击-2"}},[t._v("#")]),t._v(" 如何攻击")]),t._v(" "),a("p",[t._v("假设网站中有一个通过 Get 请求提交用户评论的接口，那么攻击者就可以在钓鱼网站中加入一个图片，图片的地址就是评论接口")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("img")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.domain.com/xxx?comment="),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),t._v("attack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("如果接口是 Post 提交的，就相对麻烦点，需要用表单来提交接口")]),t._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("form")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("action")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("http://www.domain.com/xxx"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("CSRF"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("method")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("post"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("comment"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("value")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("attack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("hidden"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("form")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h4",{attrs:{id:"如何防御-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何防御-2"}},[t._v("#")]),t._v(" 如何防御")]),t._v(" "),a("p",[t._v("防范 CSRF 可以遵循以下几种规则：")]),t._v(" "),a("ol",[a("li",[t._v("Get 请求不对数据进行修改")]),t._v(" "),a("li",[t._v("不让第三方网站访问到用户 Cookie")]),t._v(" "),a("li",[t._v("阻止第三方网站请求接口")]),t._v(" "),a("li",[t._v("请求时附带验证信息，比如验证码或者 token")])]),t._v(" "),a("h5",{attrs:{id:"samesite"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#samesite"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"http://www.ruanyifeng.com/blog/2019/09/cookie-samesite.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SameSite"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("可以对 Cookie 设置 "),a("code",[t._v("SameSite")]),t._v(" 属性。该属性设置 Cookie 不随着跨域请求发送，该属性可以很大程度减少 CSRF 的攻击，但是该属性目前并不是所有浏览器都兼容。\n"),a("code",[t._v("SameSite")]),t._v("可以设置为三个值，"),a("code",[t._v("Strict")]),t._v("、"),a("code",[t._v("Lax")]),t._v("和"),a("code",[t._v("None")]),t._v("。")]),t._v(" "),a("ol",[a("li",[t._v("在"),a("code",[t._v("Strict")]),t._v("模式下，浏览器完全禁止第三方请求携带"),a("code",[t._v("Cookie")]),t._v("。比如请求"),a("code",[t._v("sanyuan.com")]),t._v("网站只能在"),a("code",[t._v("sanyuan.com")]),t._v("域名当中请求才能携带 Cookie，在其他网站请求都不能。")]),t._v(" "),a("li",[t._v("在"),a("code",[t._v("Lax")]),t._v("模式，就宽松一点了，但是只能在 "),a("code",[t._v("get 方法提交表单")]),t._v("或者"),a("code",[t._v("a 标签发送 get 请求")]),t._v("的情况下可以携带 Cookie，其他情况均不能。")]),t._v(" "),a("li",[t._v("在"),a("code",[t._v("None")]),t._v("模式下，Cookie将在所有上下文中发送，即允许跨域发送。")])]),t._v(" "),a("h4",{attrs:{id:"验证-referer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证-referer"}},[t._v("#")]),t._v(" 验证 Referer")]),t._v(" "),a("p",[t._v("对于需要防范 CSRF 的请求，我们可以通过验证 Referer 来判断该请求是否为第三方网站发起的。")]),t._v(" "),a("h4",{attrs:{id:"token"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#token"}},[t._v("#")]),t._v(" Token")]),t._v(" "),a("p",[t._v("服务器下发一个随机 Token（算法不能复杂），每次发起请求时将 Token 携带上，服务器验证 Token 是否有效。")]),t._v(" "),a("h3",{attrs:{id:"密码安全"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#密码安全"}},[t._v("#")]),t._v(" 密码安全")]),t._v(" "),a("p",[t._v("密码安全虽然大多是后端的事情，但是作为一名优秀的前端程序员也需要熟悉这方面的知识。")]),t._v(" "),a("h4",{attrs:{id:"加盐"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#加盐"}},[t._v("#")]),t._v(" 加盐")]),t._v(" "),a("p",[t._v("对于密码存储来说，必然是不能明文存储在数据库中的，否则一旦数据库泄露，会对用户造成很大的损失。并且不建议只对密码单纯通过加密算法加密，因为存在彩虹表的关系。")]),t._v(" "),a("p",[t._v("通常需要对密码加盐，然后进行几次不同加密算法的加密。")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 加盐也就是给原密码添加字符串，增加原密码长度")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha256")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sha1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("md5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("salt "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" password "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" salt"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("但是加盐并不能阻止别人盗取账号，只能确保即使数据库泄露，也不会暴露用户的真实密码。一旦攻击者得到了用户的账号，可以通过暴力破解的方式破解密码。对于这种情况，通常使用验证码增加延时或者限制尝试次数的方式。并且一旦用户输入了错误的密码，也不能直接提示用户输错密码，而应该提示账号或密码错误。")]),t._v(" "),a("h4",{attrs:{id:"对称加密和非对称加密"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对称加密和非对称加密"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://juejin.cn/post/6856409927641432077",target:"_blank",rel:"noopener noreferrer"}},[t._v("对称加密和非对称加密"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[a("p",[t._v("所谓的对称加密就是加密和解密用同一份密钥。对称加密的好处就是加密速度快，但是缺点也很明显，一定要保存好这份密钥，如果密钥丢失，就会带来很大的安全风险。而且如果与服务端进行通信的客户端比较多的话，服务端要管理很多份不同的密钥。")])]),t._v(" "),a("li",[a("p",[t._v("为了解决对称加密的缺点，人们提出了非对称加密，非对称加密技术也是目前应用最广泛的加密技术。所谓的非对称加密就是生成一对密钥，分为公钥和私钥。私钥自己保存，公钥发布出去。用私钥加密的信息只能用公钥解密，用公钥加密的信息也只能用私钥解密。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);