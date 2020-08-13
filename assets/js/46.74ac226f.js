(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{286:function(e,t,a){"use strict";a.r(t);var s=a(1),r=Object(s.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("When a client wants to access a specific resource on your app, it does so by specifying a URL. As part of architecting your application you try divide up your application into different sections to make it easy to maintain and extend. This division is usually made based on different looking URLs. This means two different looking URLs would trigger two different sections of code in your web application. Let's have a closer look at the URL to see what it consists of and how you can organize your app around it.")]),e._v(" "),a("p",[e._v("A URL has many parts to it. Let's break down what those parts and what it's used for. Here's a typical URL:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("http://localhost:8000/products/1?page"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("1"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("&")]),e._v("pageSize"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("20\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("The above URL conforms to a syntax, looking like this:")]),e._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("scheme:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("//authority"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("?query"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#fragment]")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Let's explain the parts:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("scheme")]),e._v(", this is the protocol used, in this case the scheme is "),a("code",[e._v("http")]),e._v(". Other example of a scheme is "),a("code",[e._v("ftp")]),e._v(", "),a("code",[e._v("irc")]),e._v(" and "),a("code",[e._v("file")]),e._v(" among others.")]),e._v(" "),a("li",[a("code",[e._v("authority")]),e._v(", the authority consists of two parts.\n"),a("ul",[a("li",[a("strong",[e._v("User info")]),e._v(", It consists of an optional "),a("code",[e._v("username@password")]),e._v(" part and also a "),a("code",[e._v("host")]),e._v(" part. In the example above you have "),a("code",[e._v("localhost")]),e._v(" be the host part. "),a("code",[e._v("localhost")]),e._v(" points to your own machine as the web server. On the Web this is usually domain names like "),a("code",[e._v("google")]),e._v(", "),a("code",[e._v("microsoft")]),e._v(" or similar.")]),e._v(" "),a("li",[a("strong",[e._v("Host")]),e._v(",  The "),a("code",[e._v("host")]),e._v(" is friendly name and something you specify instead of an IP address. An IP address is The Web actual addresses and looks like a series of numbers like so "),a("code",[e._v("127.0.0.1")]),e._v(". This makes it easy for so called routers to "),a("em",[e._v("route")]),e._v(" requests from one part of The Web to the other. However it's not human friendly, which is why "),a("code",[e._v("host")]),e._v(" or "),a("code",[e._v("domain names")]),e._v(" exist to create a name that why humans can remember like "),a("code",[e._v("microsoft.com")]),e._v(".")])])]),e._v(" "),a("li",[a("code",[e._v("path")]),e._v(", this portion of the URL consists of 0 to many segments. Each segment is separated by a "),a("code",[e._v("/")]),e._v(". In our URL example, our only segment iss "),a("code",[e._v("/products")]),e._v(". A segment has the role of filtering down exactly what resource you are interested in.")]),e._v(" "),a("li",[a("code",[e._v("query")]),e._v(", this is an optional piece of the URL that is defined after the "),a("code",[e._v("?")]),e._v(" character. It consists of a number of query parameter-value pairs delimited by either "),a("code",[e._v("&")]),e._v(" or "),a("code",[e._v(";")]),e._v(". It can play the role of filtering down data further by asking for a number of records from a specific page. It does just this in the above example, "),a("code",[e._v("?page=1&pageSize=20")]),e._v(". Imagine you have two million records on this resource, it would take a long time to return all those. By specifying you want 20 records the data coming back will return back quickly and will be small in size.")]),e._v(" "),a("li",[a("code",[e._v("fragment")]),e._v(", this is part of the URL that helps us be even more specific. A typical fragment can represent, for example,  how to sort the data you ask for with a certain sort order.")])]),e._v(" "),a("h2",{attrs:{id:"routes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routes","aria-hidden":"true"}},[e._v("#")]),e._v(" Routes")]),e._v(" "),a("p",[e._v("Now that we know about more about what makes out a URL, how does Express help you to deal with these different parts? You've learned in a previous part how Express let's you associate an HTTP verb with a specific route like "),a("code",[e._v("/products")]),e._v(". Express is able to a lot more than that, it handles the following things for us:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("routing parameters")]),e._v(", a routing parameter in a URL expresses that you have a wish to access a specific resource. Looking at the route "),a("code",[e._v("/orders/1/items/2")]),e._v(", the routing parameters are "),a("code",[e._v("1")]),e._v(" and "),a("code",[e._v("2")]),e._v(". The "),a("code",[e._v("1")]),e._v(" signals we want a specific order with the unique key "),a("code",[e._v("1")]),e._v(". The "),a("code",[e._v("2")]),e._v(" asks for a specific order item with the unique key "),a("code",[e._v("2")]),e._v(". By expressing yourself this way, you are able to return a specific resource rather than all resources of a specific type.")]),e._v(" "),a("li",[a("strong",[e._v("query parameters")]),e._v(", the query part of the URL is set of key-value pairs that happens after the "),a("code",[e._v("?")]),e._v(" character. Looking at the following route "),a("code",[e._v("/products?page=1&pageSize=20")]),e._v(" you have the query parameters "),a("code",[e._v("page")]),e._v(" and "),a("code",[e._v("pageSize")]),e._v(". These two parameters work in tandem to help you filter down the size of returned response. Imagine if the route "),a("code",[e._v("/products")]),e._v(" read up 2 million records from a database. That answer would be huge and it would also take a long time for the user to see the rendered response. This is a poor user experience not to mention a strain on the app itself. A better approach is to utilize query parameters to limit the size of response.")]),e._v(" "),a("li",[a("strong",[e._v("general pattern management")]),e._v(", so far you've seen simpler routes like "),a("code",[e._v("/products")]),e._v(" and "),a("code",[e._v("/orders/1/items/2")]),e._v(". There could be also be other patterns like "),a("code",[e._v("**")]),e._v(", which could mean "),a("em",[e._v("catch all")]),e._v(". You would normally define such a route to ensure that unexpected requests are handled in graceful way and thereby ensure the user has a great experience even if they mistype routes for example.")])]),e._v(" "),a("h3",{attrs:{id:"routing-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#routing-parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Routing parameters")]),e._v(" "),a("p",[e._v("Now we understand a bit more about a URL and what it can articulate. How does Express help us with the above? Express provides powerful way for you to define routes and associate different "),a("em",[e._v("handlers")]),e._v(" to said route. Handlers are a piece of code that is invoked when a certain path is matched. Express has a pattern handling mechanism built-in that ensures you are able to handle different looking routes. Let's show how different routes can be expressed as route patterns.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Route")]),e._v(" "),a("th",[e._v("Express route pattern")])])]),e._v(" "),a("tbody",[a("tr",[a("td",[e._v("/products")]),e._v(" "),a("td",[e._v("products/")])]),e._v(" "),a("tr",[a("td",[e._v("/products/1 and products/114")]),e._v(" "),a("td",[e._v("products/:id")])]),e._v(" "),a("tr",[a("td",[e._v("/orders/1/items/2")]),e._v(" "),a("td",[e._v("orders/:orderId/items/:itemId")])]),e._v(" "),a("tr",[a("td",[e._v("xyz")]),e._v(" "),a("td",[e._v("**")])])])]),e._v(" "),a("p",[e._v("Based on the above you then write code like the below to match for example "),a("code",[e._v("/products/114")]),e._v(":")]),e._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/products/:id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// handle this request `req.params.id`")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Route parameters would be written to a "),a("code",[e._v("params")]),e._v(" property on the request object "),a("code",[e._v("res")]),e._v(". This means that a request of "),a("code",[e._v("/products/114")]),e._v(" would have "),a("code",[e._v("req.params.id")]),e._v(" contain "),a("code",[e._v("114")]),e._v(".")]),e._v(" "),a("h3",{attrs:{id:"query-parameters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-parameters","aria-hidden":"true"}},[e._v("#")]),e._v(" Query parameters")]),e._v(" "),a("p",[e._v("Express has an easy way of handling query parameters. Given a route like this "),a("code",[e._v("/products?page=1&pageSize=20")]),e._v(", the query parameters would be written to a "),a("code",[e._v("query")]),e._v(" object on the request object "),a("code",[e._v("res")]),e._v(". Consider the below code:")]),e._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/products'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// handle this request `req.query.page` and `req.query.pageSize`")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br")])]),a("p",[e._v("Imagine you would create a request with the route "),a("code",[e._v("/products?page=1&pageSize=20")]),e._v(", then "),a("code",[e._v("req.query")]),e._v(" would have following value:")]),e._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  page"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  pageSize"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(":")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[e._v("20")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br")])])])},[],!1,null,null,null);t.default=r.exports}}]);