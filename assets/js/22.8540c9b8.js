(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{213:function(e,t,a){"use strict";a.r(t);var n=a(0),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"docker-from-the-beginning-part-ii"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#docker-from-the-beginning-part-ii","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker - from the beginning, part II")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/800/1*8DG81gjTPZ2cmTfZmeD9nw.jpeg",alt:""}})]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("p",[e._v("This article is part of a series:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/docker-one.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — from the beginning part I"),a("OutboundLink")],1),e._v(", This covers why Docker and the basic concepts such containers, images and Dockerfile and of course the commands you need to manage them.")]),e._v(" "),a("li",[e._v("Docker — from the beginning, Part II, "),a("strong",[e._v("we are here")])]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/docker-three.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — from the beginning, Part III"),a("OutboundLink")],1),e._v(", this is about how to deal with Databases, putting them into containers and how to make containers talk to other containers using legacy linking but also the new standard through networks")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/docker-four.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — from the beginning, Part IV"),a("OutboundLink")],1),e._v(", Part IV, this is how we manage more than one service using Docker Compose ( this is 1/2 part on Docker Compose)")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://softchris.github.io/pages/docker-five.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker - from the beginning, Part V"),a("OutboundLink")],1),e._v(", this part is the second and concluding part on Docker Compose where we cover Volumes, Environment Variables and working with Databases and Networks")])]),e._v(" "),a("p",[e._v("Welcome to the second part of this series about Docker. Hopefully, you have read the first part to gain some basic understanding of Dockers core concepts and its basic commands or you have acquired that knowledge elsewhere.")]),e._v(" "),a("p",[e._v("In this article, we will attempt to cover the following topics")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("recap and problem introduction")]),e._v(" , let’s recap on the lessons learned from part I and let’s try to describe how not using a volume can be quite painful")]),e._v(" "),a("li",[a("strong",[e._v("persist data")]),e._v(" , we can use Volumes to persist files we create or Databases that we change ( e.g Sqllite).")]),e._v(" "),a("li",[a("strong",[e._v("turning our workdir into a volume")]),e._v(" , Volumes also give us a great way to work with our application without having to "),a("em",[e._v("set up")]),e._v(" and "),a("em",[e._v("tear down")]),e._v(" the container for every change.")])]),e._v(" "),a("h2",{attrs:{id:"resources"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),a("p",[e._v("Using Docker and containerization is about breaking apart a monolith into microservices. Throughout this series, we will learn to master Docker and all its commands. Sooner or later you will want to take your containers to a production environment. That environment is usually the Cloud. When you feel you've got enough Docker experience have a look at these links to see how Docker can be used in the Cloud as well:")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/containers/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Containers in the Cloud"),a("OutboundLink")],1),e._v("\nGreat overview page that shows what else there is to know about containers in the Cloud")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/container-instances/container-instances-tutorial-prepare-app?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deploying your containers in the Cloud"),a("OutboundLink")],1),e._v(" Tutorial that shows how easy it is to leverage your existing Docker skill and get your services running in the Cloud")]),e._v(" "),a("li",[a("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/container-instances/container-instances-tutorial-prepare-acr?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a container registry"),a("OutboundLink")],1),e._v("\nYour Docker images can be in Docker Hub but also in a Container Registry in the Cloud. Wouldn't it be great to store your images somewhere and actually be able to create a service from that Registry in a matter of minutes?")])]),e._v(" "),a("h2",{attrs:{id:"recap-and-the-problem-of-not-using-a-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#recap-and-the-problem-of-not-using-a-volume","aria-hidden":"true"}},[e._v("#")]),e._v(" Recap and the problem of not using a volume")]),e._v(" "),a("p",[e._v("Ok, so we will keep working on the application we created in the first part of this series, that is a Node.js application with the library express installed.")]),e._v(" "),a("p",[e._v("We will do the following in this section:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("run a container")]),e._v(", we will start a container and thereby repeat some basic Docker commands we learned in the first part of this series")]),e._v(" "),a("li",[a("strong",[e._v("update our app")]),e._v(", update our source code and start and stop a container and realize why this way of working "),a("em",[e._v("is quite painful")])])]),e._v(" "),a("h3",{attrs:{id:"run-a-container"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#run-a-container","aria-hidden":"true"}},[e._v("#")]),e._v(" Run a container")]),e._v(" "),a("p",[e._v("As our application grows we might want to do add routes to it or change what is rendered on a specific route. Let’s show the source code we have so far:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// app.js")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" express "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'express'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" app "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("express")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("const")]),e._v(" port "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v(" process"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token constant"}},[e._v("PORT")]),e._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello World!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n\napp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("port"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[e._v("`Example app listening on port ")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("${")]),e._v("port"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[e._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("!`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br")])]),a("p",[e._v("Now let’s see if we remember our basic commands. Let’s type:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker ps")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*DJkCfLKMeApcIwxlHWnmgA.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok, that looks empty. So we cleaned up last time with docker stop or docker kill , regardless of what we used we don’t have a container that we can start, so we need to build one. Let’s have a look at what images we have:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker images")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*I3vpLrl_I_v5y-63oFlOPg.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok, so we have our image there, let’s create and run a container:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 8000:3000 chrisnoring/node")])]),e._v(" "),a("p",[e._v("That should lead to a container up and running at port 8000 and it should run in detached mode, thanks to us specifying the -d flag.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*JXYLtwX_J0vFqgXvqaNyzg.png",alt:""}})]),e._v(" "),a("p",[e._v("We get a container ID above, good. Let’s see if we can find our application at "),a("a",{attrs:{href:"http://localhost:8000:",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8000:"),a("OutboundLink")],1)]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/528/1*e3m0bmN42AEsQcYIurlPGQ.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok, good there it is. Now we are ready for the next step which is to update our source code.")]),e._v(" "),a("h3",{attrs:{id:"update-our-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#update-our-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Update our app")]),e._v(" "),a("p",[e._v("Let’s start by changing the default route to render out hello Chris , that is add the following line:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'Hello Chris!'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Ok, so we save our change and we head back to the browser and we notice it is still saying Hello World. It seems the container is not reflecting our changes. For that to happen we need to bring down the container, remove it, rebuild the image and then run the container again. Because we need to carry out a whole host of commands, we will need to change how we build and run our container namely by actively giving it a name, so instead of running the container like so:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 8000:3000 chrisnoring/node")])]),e._v(" "),a("p",[e._v("We now type:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 8000:3000 "),a("strong",[e._v("--name my-container")]),e._v(" chrisnoring/node")])]),e._v(" "),a("p",[e._v("This means our container will get the name my-container and it also means that when we refer to our container we can now use its name instead of its container ID, which for our scenario is better as the container ID will change for every setup and tear down.")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stop my-container // this will stop the container, it can still be started if we want to\n\ndocker rm my-container // this will remove the container completely\n\ndocker build -t chrisnoring/node . // creates an image\n\ndocker run -d -p 8000:3000 --name my-container chrisnoring/node\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br")])]),a("p",[e._v("You can chain these commands to look like this:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("docker stop my-container && docker rm my-container && docker build -t chrisnoring/node . && docker run -d -p 8000:3000 --name my-container chrisnoring/node\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("My first seeing thought seeing that is WOW, that’s a lot of commands. There has got to be a better way right, especially when I’m in the development phase?")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/572/1*LQxLEO4X3SkeqF1y4dMUZA.gif",alt:""}})]),e._v(" "),a("p",[e._v("Well yes, there is a better way, using a volume. So let’s look at volumes next.")]),e._v(" "),a("h2",{attrs:{id:"using-a-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-volume","aria-hidden":"true"}},[e._v("#")]),e._v(" Using a volume")]),e._v(" "),a("p",[e._v("Volumes or data volumes is a way for us to create a place in the host machine where we can write files so they are persisted. Why would we want that? Well, when we are under development we might need to put the application in a certain state so we don’t have to start from the beginning. Typically we would want to store things like log files, JSON files and perhaps even databases (SQLite ) on a volume.")]),e._v(" "),a("p",[e._v("It’s quite easy to create a volume and we can do so in many different ways, but mainly there are two ways:")]),e._v(" "),a("ul",[a("li",[e._v("before you create a container")]),e._v(" "),a("li",[e._v("lazily, e.g while creating the container")])]),e._v(" "),a("h3",{attrs:{id:"creating-and-managing-a-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creating-and-managing-a-volume","aria-hidden":"true"}},[e._v("#")]),e._v(" Creating and managing a volume")]),e._v(" "),a("p",[e._v("To create a volume you type the following:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume create [name of volume]")])]),e._v(" "),a("p",[e._v("we can verify that our volume was created by typing:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume ls")])]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*pedNxjX7vxC9_U7fFFzhww.png",alt:""}})]),e._v(" "),a("p",[e._v("This will list all the different volumes we have. Now, this will after a while lead to you having tons of volumes created so it’s good to know how to keep down the number of volumes. For that you can type:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume prune")])]),e._v(" "),a("p",[e._v("This will remove all the volumes you currently are not using. You will be given a question if you want to proceed.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*l6Jnu2zeWHeWoM5AZNxEhw.png",alt:""}})]),e._v(" "),a("p",[e._v("If you want to remove a single volume you can do so by typing:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker volume rm [name of volume]")])]),e._v(" "),a("p",[e._v("Another command you most likely will want to know about is the inspect command that allows us to see more details on our created volume and probably most important where it will place the persisted files.")]),e._v(" "),a("blockquote",[a("p",[e._v("docker inspect [name of volume]")])]),e._v(" "),a("p",[e._v("A comment on this though is that most of the time you might not care where Docker place these files but sometimes you would want to know due to debugging purposes. As we will see later in this section controlling where files are persisted can work to our advantage when we develop our application.")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*xXyRmDbym7BCrbVNHkPR2g.png",alt:""}})]),e._v(" "),a("p",[e._v("As you can see the Mountpoint field is telling us where Docker is planning to persist your files.")]),e._v(" "),a("h3",{attrs:{id:"mounting-a-volume-in-your-application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounting-a-volume-in-your-application","aria-hidden":"true"}},[e._v("#")]),e._v(" Mounting a volume in your application")]),e._v(" "),a("p",[e._v("Ok, so we have come to the point that we want to use our volume in an application. We want to be able to change or create files in our container so that when we pull it down and start it up again our changes will still be there.")]),e._v(" "),a("p",[e._v("For this we can use two different commands that achieve relatively the same thing with a different syntax, those are:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("-v")]),e._v(", —-volume, the syntax looks like the following -v [name of volume]:[directory in the container], for example -v my-volume:/app")]),e._v(" "),a("li",[a("code",[e._v("--mount")]),e._v(", the syntax looks like the following--mount source=[name of volume],target=[directory in container] , for example —-mount source=my-volume,target=/app")])]),e._v(" "),a("p",[e._v("Used in conjuncture with running a container it would look like this for example:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 8000:3000 --name my-container --volume my-volume:/logs chrisnoring/node")])]),e._v(" "),a("p",[e._v("Let’s try this out. First off let’s run our container:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*PVaYu78H7_KXw0DoCwGbWQ.png",alt:""}})]),e._v(" "),a("p",[e._v("Then let’s run our inspect command to ensure our volume has been correctly mounted inside of our container. When we run said command we get a giant JSON output but we are looking for the Mounts property:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*4Nm9GuJEgal4cgXVBoHtqg.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok, our volume is there, good. Next step is to locate our volume inside of our container. Let’s get into our container with:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker exec -it my-container bash")])]),e._v(" "),a("p",[e._v("and thereafter navigate to our "),a("code",[e._v("/logs")]),e._v(" directory:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*XT8H3-K8FmutSAriJtiKlA.png",alt:""}})]),e._v(" "),a("p",[e._v("Ok, now if we bring down our container everything we created in our volume should be persisted and everything that is not placed in the volume should be gone right? Yep, that’s the idea. Good, we understand the principle of volumes.")]),e._v(" "),a("h3",{attrs:{id:"mounting-a-subdirectory-as-a-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mounting-a-subdirectory-as-a-volume","aria-hidden":"true"}},[e._v("#")]),e._v(" Mounting a subdirectory as a volume")]),e._v(" "),a("p",[e._v("So far we have been creating a volume and have let Docker decide on where the files are being persisted. What happens if we decide where these files are persisted?")]),e._v(" "),a("p",[e._v("Well if we point to a directory on our hard drive it will not only look at that directory and place files there but it will pick the pre-existing files that are in there and bring them into our mount point in the container. Let’s do the following to demonstrate what I mean:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("create a directory")]),e._v(", let’s create a directory /logs")]),e._v(" "),a("li",[a("strong",[e._v("create a file")]),e._v(", let’s create a file logs.txt and write some text in it")]),e._v(" "),a("li",[a("strong",[e._v("run our container")]),e._v(", let’s create a mount point to our local directory + /logs")])]),e._v(" "),a("p",[e._v("The first two commands lead to us having a file structure like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("app.js\nDockerfile\n/logs\n logs.txt // contains 'logging host...'\npackage.json\npackage-lock.json\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("Now for the run command to get our container up and running:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*iDGnN0fJ7O_Yq1-dJRhGJw.png",alt:""}})]),e._v(" "),a("p",[e._v("Above we observe that our --volume command looks a bit different. The first argument is "),a("code",[e._v("$(pwd)/logs")]),e._v(" which means our current working directory and the subdirectory "),a("code",[e._v("logs")]),e._v(". The second argument is "),a("code",[e._v("/logs")]),e._v(" which means we are saying mount our host computers logs directory to a directory with the same name in the container.")]),e._v(" "),a("p",[e._v("Let’s dive into the container and establish that the container has indeed pulled in the files from our host computers logs directory:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*CAlhLracjsV5TvhjIjX8hw.png",alt:""}})]),e._v(" "),a("p",[e._v("As you we can see from the above set of commands we go into the container with "),a("code",[e._v("docker exec -it my-container bash")]),e._v(" and then we proceed to navigate ourselves to the logs directory and finally we read out the content of logs.txt with the command "),a("code",[e._v("cat logs.txt")]),e._v(". The result is logging host... e.g the exact file and content that we have on the host computer.")]),e._v(" "),a("p",[e._v("But this is a volume however which means there is a connection between the volume in the host computer and the container. Let’s edit the file next on the host computer and see what happens to the container:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/786/1*Jn2xuW_RJFq5n4LKDPY9sg.png",alt:""}})]),e._v(" "),a("p",[e._v("Wow, it changed in the container as well without us having to tear it down or restarting it.")]),e._v(" "),a("h3",{attrs:{id:"treating-our-application-as-a-volume"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#treating-our-application-as-a-volume","aria-hidden":"true"}},[e._v("#")]),e._v(" Treating our application as a volume")]),e._v(" "),a("p",[e._v("To make our whole application be treated as a volume we need to tear down the container like so:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker kill my-container && docker rm my-container")])]),e._v(" "),a("p",[e._v("Why do we need to do all that? Well, we are about to change the Dockerfile as well as the source code and our container won’t pick up these changes, unless we use a Volume, like I am about to show you below.")]),e._v(" "),a("p",[e._v("Thereafter we need to rerun our container this time with a different volume argument namely "),a("code",[e._v("--volume $(PWD):/app")]),e._v(".")]),e._v(" "),a("blockquote",[a("p",[e._v("NOTE, if your PWD consists of a directory with space in it you might need to specify the argument as "),a("code",[e._v('"$(PWD)":/app')]),e._v(" instead, i.e we need to surround "),a("code",[e._v("$(PWD)")]),e._v(" with double quotes. Thank you to Vitaly for pointing that out 😃")])]),e._v(" "),a("p",[e._v("The full command looks like this:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*37Ee0rxOCvKNr7I2N3zJKA.png",alt:""}})]),e._v(" "),a("p",[e._v("This will effectively make our entire app directory a volume and every time we change something in there our container should reflect the changes.")]),e._v(" "),a("p",[e._v("So let’s try adding a route in our Node.js Express application like so:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"/docker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"hello from docker"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("Ok, so from what we know from dealing with the express library we should be able to reach http://localhost:8000/docker in our browser or?")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/674/1*XXzp0H1eTDXIuo2QJ1EYjQ.png",alt:""}})]),e._v(" "),a("p",[e._v("Sad face 😦. It didn’t work, what did we do wrong? Well here is the thing. If you change the source in a Node.js Express application you need to restart it. This means that we need to take a step back and think how can we restart our Node.js Express web server as soon as there is a file change. There are several ways to accomplish this like for example:")]),e._v(" "),a("ul",[a("li",[a("strong",[e._v("install")]),e._v(" a library like nodemon or forever that restarts the web server")]),e._v(" "),a("li",[a("strong",[e._v("run")]),e._v(" a PKILL command and kill the running node.js process and the run node app.js")])]),e._v(" "),a("p",[e._v("It feels a little less cumbersome to just install a library like nodemon so let’s do that:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/1024/1*-BUicUx8zVeSijJnOI3Z-Q.png",alt:""}})]),e._v(" "),a("p",[e._v("This means we now have another library dependency in package.json but it means we will need to change how we start our app. We need to start our app using the command "),a("code",[e._v("nodemon app.js")]),e._v(". This means "),a("code",[e._v("nodemon")]),e._v(" will take care of the whole restart as soon as there is a change. While we are at it let’s add a start script to package.json, after all, that is the more Node.js -ish way of doing things:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/750/1*o9LH57gAsnkcA2N6osgAEw.png",alt:""}})]),e._v(" "),a("p",[e._v('Let\'s describe what we did above, in case you are new to Node.js. Adding a start script to a package.json file means we go into a section called "scripts" and we add an entry start, like so:')]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// excerpt package.json\n"scripts": {\n  "start": "nodemon app.js"\n}\n\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("By default a command defined in "),a("code",[e._v('"scripts"')]),e._v(" is run by you typing "),a("code",[e._v("npm run [name of command]")]),e._v(". There are however "),a("em",[e._v("known")]),e._v(" commands, like "),a("code",[e._v("start")]),e._v(" and "),a("code",[e._v("test")]),e._v(" and with known commands we can omit the keyword "),a("code",[e._v("run")]),e._v(", so instead of typing "),a("code",[e._v("npm run start")]),e._v(", we can type "),a("code",[e._v("npm start")]),e._v(".   Let's add another command "),a("code",[e._v('"log"')]),e._v(" like so:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('// excerpt package.json\n\n"scripts": {\n  "start": "nodemon app.js",\n  "log": "echo \\"Logging something to screen\\""\n}\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("To run this new command "),a("code",[e._v('"log"')]),e._v(" we would type "),a("code",[e._v("npm run log")]),e._v(".")]),e._v(" "),a("p",[e._v("Ok, one thing remains though and that is changing the Dockerfile to change how it starts our app. We only need to change the last line from:")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENTRYPOINT ["node", "app.js"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("to")]),e._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('ENTRYPOINT ["npm", "start"]\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Because we changed the Dockerfile this leads to us having to rebuild the image. So let’s do that:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker build -t chrisnoring/node .")])]),e._v(" "),a("p",[e._v("Ok, the next step is to bring up our container:")]),e._v(" "),a("blockquote",[a("p",[e._v("docker run -d -p 8000:3000 --name my-container --volume $(PWD):/app chrisnoring/node")])]),e._v(" "),a("p",[e._v("Worth noting is how we expose the entire directory we are currently standing in and mapping that to "),a("code",[e._v("/app")]),e._v(" inside the container.")]),e._v(" "),a("p",[e._v("Because we’ve already added the /docker route we need to add a new one, like so:")]),e._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("app"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("get")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'/nodemon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[e._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=>")]),e._v(" res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[e._v("'hello from nodemon'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br")])]),a("p",[e._v("Now we hope that "),a("code",[e._v("nodemon")]),e._v(" has done it’s part when we save our change in app.js :")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/688/1*65hjrpy7SNfF5_ENUZTXbA.png",alt:""}})]),e._v(" "),a("p",[e._v("Aaaand, we have a winner. It works to route to /nodemon . I don’t know about you but the first time I got this to work this was me:")]),e._v(" "),a("p",[a("img",{attrs:{src:"https://cdn-images-1.medium.com/max/220/1*PyeUlERT6b8VmSF1V0iv5Q.gif",alt:""}})]),e._v(" "),a("h2",{attrs:{id:"summary"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#summary","aria-hidden":"true"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),a("p",[e._v("This has brought us to the end of our article. We have learned about Volumes which is quite a cool and useful feature and more importantly I’ve shown how you can turn your whole development environment into a volume and keep working on your source code without having to restart the container.")]),e._v(" "),a("p",[e._v("In the third part of our series, we will be covering how to work linked containers and databases. So stay tuned.")]),e._v(" "),a("p",[e._v("Follow me on "),a("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),a("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),a("hr")])},[],!1,null,null,null);t.default=s.exports}}]);