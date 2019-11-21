(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{285:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"why-you-should-learn-recursion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#why-you-should-learn-recursion","aria-hidden":"true"}},[t._v("#")]),t._v(" Why YOU should learn Recursion")]),t._v(" "),a("p",[t._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[t._v("Twitter"),a("OutboundLink")],1),t._v(", happy to take your suggestions on topics or improvements /Chris")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/ujvi0ylruwpffkfb8tfu.jpeg",alt:""}})]),t._v(" "),a("blockquote",[a("p",[t._v("Ok, a big picture of sheep. Now he really lost it or? Actually, it's an analogy to Recursion, a lot of similar function invocations, almost "),a("em",[t._v("same same but different")]),t._v(" 😉 If you read on you will see Recursion explained and a few problems solved even.")])]),t._v(" "),a("p",[t._v("I'm writing a fundamentals series on Computer Science topics. Why you ask, why not the latest JS Framework or something similar?")]),t._v(" "),a("p",[t._v("Well, there is more than one reason, knowing the fundamentals is a timeless skill, regardless of what framework, language or library you learn, "),a("strong",[t._v("fundamentals will always be there")]),t._v(".")]),t._v(" "),a("blockquote",[a("p",[t._v("Ok, that sound like a textbook answer, are we supposed to buy that?")])]),t._v(" "),a("p",[t._v("There is more to it of course. I've been in the IT industry for more than a decade and what you find after using a ton of libraries and languages is that after a while you strive after expanding your mind, solve problems you haven't seen before or even solving the "),a("em",[t._v("same ol")]),t._v(" problems but in a new way.")]),t._v(" "),a("blockquote",[a("p",[t._v("Is it fair to say you've just been "),a("em",[t._v("solving problems")]),t._v(", sometimes in a hacky way?")])]),t._v(" "),a("p",[t._v("Yea, I think we all can testify to that, sometimes our solutions have been good and sometimes less so.")]),t._v(" "),a("p",[t._v("And if I'm being completely honest I wasn't the most attentive student at University and the more I look into things like Big O notation, algorithms, recursion, compilers and so on, the better it feels when I finally get it and appreciate its elegance.")]),t._v(" "),a("p",[t._v("So for that reason, I will start this series by covering "),a("em",[t._v("Recursion")]),t._v(", one of the "),a("em",[t._v("Big Whales")]),t._v(", one of the big concepts to conquer. I hope to show the following:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("What")]),t._v(" is Recursion")]),t._v(" "),a("li",[a("strong",[t._v("Why")]),t._v(" Recursion, what problems it can be used for and why it can be a really elegant approach")]),t._v(" "),a("li",[a("strong",[t._v("Problem solving")]),t._v(" We will show a series of problems where Recursion really shines and how to solve them")])]),t._v(" "),a("h2",{attrs:{id:"what-is-recursion"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-is-recursion","aria-hidden":"true"}},[t._v("#")]),t._v(" What is Recursion")]),t._v(" "),a("p",[t._v("One of the standing jokes of recursion is:")]),t._v(" "),a("blockquote",[a("p",[t._v("If you want to know what Recursion is, see Recursion")])]),t._v(" "),a("p",[t._v("In short, recursion is a method calling itself a number of times.")]),t._v(" "),a("blockquote",[a("p",[t._v("That sounds like a "),a("code",[t._v("while-true")]),t._v(" loop like we are going to run out of memory")])]),t._v(" "),a("p",[t._v("Yup, that's one of the pitfalls of recursion, if you do it wrong you will see error messages looking like this:")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/4tkedt2vx9rmkq2vg6ap.png",alt:""}})]),t._v(" "),a("p",[t._v("## Why")]),t._v(" "),a("blockquote",[a("p",[t._v("Why on earth would I want to be calling myself x number of times?")])]),t._v(" "),a("p",[t._v("Well, it's about the nature of your problem. Some problems can be seen as a reoccuring pattern that you can apply the same solution to over and over.")]),t._v(" "),a("blockquote",[a("p",[t._v("Ok, you'll have to explain that better.")])]),t._v(" "),a("p",[t._v("Sure we will show what we mean by working through a series of problems.")]),t._v(" "),a("blockquote",[a("p",[t._v("Ok fair enough but you still haven't explained the why?")])]),t._v(" "),a("p",[t._v("In a word "),a("em",[t._v("elegance")]),t._v(", written correctly a recursive solution usually, consist of very few lines of code. This means our "),a("em",[t._v("cognitive load")]),t._v(" for understanding and even modifying the code lowers drastically.")]),t._v(" "),a("blockquote",[a("p",[t._v("Ok I get that, everyone likes simple, what else?")])]),t._v(" "),a("p",[t._v("Recursion is often used as a replacement for "),a("code",[t._v("for-loops")]),t._v(" and "),a("code",[t._v("while")]),t._v(" statements. It's in its very nature to loop or rather "),a("em",[t._v("reapply")]),t._v(" it's logic. I think it's fair to say it has a "),a("em",[t._v("divide and conquer")]),t._v(" approach. Not be confused with the actual "),a("a",{attrs:{href:"https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm",target:"_blank",rel:"noopener noreferrer"}},[t._v("divide and conquer"),a("OutboundLink")],1),t._v(". All I wanted to say here was that, we slowly conquer our problem by realizing that we are looking at a dataset full of patterns that look similar, "),a("em",[t._v("self-similarity")]),t._v(". This "),a("em",[t._v("self-similarity")]),t._v(" makes it possible to apply the same algorithm over and over.")]),t._v(" "),a("blockquote",[a("p",[t._v("You REALLY have to explain that")])]),t._v(" "),a("p",[t._v("Well, you start off working on a set of data that gradually decreases which means we work towards a point. Once we reach that point we consider the problem solved.")]),t._v(" "),a("h2",{attrs:{id:"what-type-of-problems-can-we-solve"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#what-type-of-problems-can-we-solve","aria-hidden":"true"}},[t._v("#")]),t._v(" What type of problems can we solve?")]),t._v(" "),a("p",[t._v("Well, here is a non-exhaustive list, so you get a sense for it:")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("summation")]),t._v(", we can easily sum up all the items in a list")]),t._v(" "),a("li",[a("strong",[t._v("power")]),t._v(", calculate the power of something is the same as multiplying a number by itself x number of times")]),t._v(" "),a("li",[a("strong",[t._v("factorial")]),t._v(", factorial is about multiplying all numbers in a descending fashion")]),t._v(" "),a("li",[a("strong",[t._v("trees")]),t._v(", trees are used for a lot of things in Computer Science, like compilers, post-pre fix processing like a calculator, etc.")]),t._v(" "),a("li",[a("strong",[t._v("conversion")]),t._v(", for example, turning a string to a number")]),t._v(" "),a("li",[a("strong",[t._v("sorting")]),t._v(", recursion is often used to implement sorting algorithms like "),a("em",[t._v("merge sort")]),t._v(" for example.")])]),t._v(" "),a("p",[t._v("This is just a small subset of problems we can solve and yes you can solve most of the above with "),a("em",[t._v("for loops")]),t._v(" and "),a("em",[t._v("while")]),t._v(" constructs but that usually leads to messier code.")]),t._v(" "),a("h2",{attrs:{id:"solving-some-problems"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#solving-some-problems","aria-hidden":"true"}},[t._v("#")]),t._v(" Solving some problems")]),t._v(" "),a("p",[t._v("You must be itching by now to see some code so let's first start off by showing what a typical recursion looks like:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("data")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("condition"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'something'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("recursion")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("As you can see above we start with an IF clause, this is also called a "),a("strong",[t._v("base case")]),t._v(" or "),a("em",[t._v("terminating")]),t._v(" condition. For you not to end up in a "),a("em",[t._v("while-true")]),t._v(" condition you need to make sure that this condition is met.")]),t._v(" "),a("p",[t._v("Our ELSE statement is where we call ourselves again, as you can see we call the method "),a("code",[t._v("recursion()")]),t._v(" again. The idea here is to modify it slightly so we ultimately reach our "),a("strong",[t._v("base case")]),t._v(".")]),t._v(" "),a("p",[t._v("Let's look at some real problems next.")]),t._v(" "),a("h3",{attrs:{id:"factorial"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#factorial","aria-hidden":"true"}},[t._v("#")]),t._v(" Factorial")]),t._v(" "),a("p",[t._v("In a factorial, the idea is to multiply all the numbers going up to and including the number itself. For number "),a("code",[t._v("5")]),t._v(" that would mean we would need to compute it like so:")]),t._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("5 * 4 * 3 * 2 * 1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("As we can see above we are working with a series of numbers that slowly descends towards a base condition "),a("code",[t._v("1")]),t._v(". Let's see some code:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("I have to admit that the first time I saw a solution like this my head just exploded, I couldn't take it in, I was like "),a("em",[t._v("is this even valid code")]),t._v(" or "),a("em",[t._v("this would have been so much simpler using a for-loop like so")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    sum "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*=")]),t._v(" i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" sum"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br")])]),a("p",[t._v("I understand my past self and some of you reading this. Recursion hurts when you first look at it unless your brain is wired in a certain way 😉.")]),t._v(" "),a("p",[t._v("So why is the recursive solution better? For me, at least, it's about simplicity. If we look at a specific row:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("factorial")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" \n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("All we think about here is returning "),a("code",[t._v("num")]),t._v(" and we leave the rest to its own computation when we call "),a("code",[t._v("factorial()")]),t._v(" again and this time with an adjusted value of "),a("code",[t._v("num")]),t._v(". The hard bit to understand, for me, was that this was valid code. I could see that this would lead to a "),a("code",[t._v("5 * 4 * 3 * 2 * 1")]),t._v(" scenario. I just didn't get that the compiler was OK with it. But it is, which leads us to our next problem.")]),t._v(" "),a("h3",{attrs:{id:"conversion-string-to-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#conversion-string-to-number","aria-hidden":"true"}},[t._v("#")]),t._v(" Conversion, string to number")]),t._v(" "),a("p",[t._v("Now, this is an interesting one. What really happens when we convert something from "),a("code",[t._v('"234"')]),t._v(" to "),a("code",[t._v("234")]),t._v(". Well, it's an addition. It's "),a("code",[t._v("200 + 30 + 4")]),t._v(". What does that look like?")]),t._v(" "),a("blockquote",[a("p",[t._v("A descending series?")])]),t._v(" "),a("p",[t._v("Yes, exactly, but let's be even more detailed, it looks like the following:")]),t._v(" "),a("p",[a("code",[t._v("2 * 10^2 + 3 * 10 ^ 1 + 4 * 10 ^ 0")])]),t._v(" "),a("p",[t._v("Given what we learned from our factorial we can start sketching on it:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("currentcharacter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("character"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("Ok, we get roughly the "),a("em",[t._v("how")]),t._v(". The next question is what does our base condition look like? The answer is that we are working with one character only, like so:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("p",[t._v("The above tells us that we will process our number from left to write and as soon as we process the leftmost character, it's considered processed and we should keep working on a smaller dataset. It's crucial that we make the dataset smaller so we reach our base condition. So let's see the rest of the code:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("num")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" chars "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br")])]),a("p",[t._v("Zooming in our else condition:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("else")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" pow "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Math"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pow")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("parseInt")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("chars"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br")])]),a("p",[t._v("We can see that we apply our descending pattern of "),a("code",[t._v("2* 10^2 + 3* 10^1 + 4")]),t._v(" or "),a("code",[t._v('"234"')]),t._v(" turns into "),a("code",[t._v("234")]),t._v(". The reason it's descending is that we do this:")]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("convert")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("substr")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("We pick off one character from the left so "),a("code",[t._v("234")]),t._v(", becomes "),a("code",[t._v("34")]),t._v(" and finally "),a("code",[t._v("4")]),t._v(" and thereby we reach our base condition.")]),t._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[t._v("#")]),t._v(" Summary")]),t._v(" "),a("p",[t._v("I could be showing you trees and a ton of other implementations but let's stop here. Have a look at this "),a("a",{attrs:{href:"https://github.com/softchris/recursion",target:"_blank",rel:"noopener noreferrer"}},[t._v("repo"),a("OutboundLink")],1),t._v(" in which I've solved some more problems with recursion. The point I wanted to get across was what recursion is, why it for certain problems constitute a simpler and more elegant solution and I of course also wanted to explain the building blocks of recursion and how to think when solving such problems.")]),t._v(" "),a("p",[t._v("I hope it was educational. If you want me to write a follow-up article on this topic let me know in the comments.")]),t._v(" "),a("p",[t._v("You might not be convinced at the end of this that recursion is for you. I wasn't for the longest time. To be honest, I enjoy the pattern that comes with recursion. If part of your job is to write algorithms or if you got aspirations towards becoming the next Code Wars master or applying for a job at a famous tech firm, this is a thing you will need to know. If not, carry on, for-loops are part of the language too 😃")]),t._v(" "),a("p",[t._v("Or as they say where I live:")]),t._v(" "),a("blockquote",[a("p",[t._v("Keep calm and carry on 😃")])])])},[],!1,null,null,null);s.default=n.exports}}]);