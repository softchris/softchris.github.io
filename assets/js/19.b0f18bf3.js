(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{217:function(e,t,o){"use strict";o.r(t);var n=o(0),a=Object(n.a)({},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"docker-from-the-beginning-part-iv"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#docker-from-the-beginning-part-iv","aria-hidden":"true"}},[e._v("#")]),e._v(" Docker - from the beginning, part IV")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/1trd1enpr5ocm0vt3xhg.jpeg",alt:"alt text",title:"Docker part IV"}})]),e._v(" "),o("p",[e._v("Follow me on "),o("a",{attrs:{href:"https://twitter.com/chris_noring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),o("OutboundLink")],1),e._v(", happy to take your suggestions on topics or improvements /Chris")]),e._v(" "),o("p",[e._v("This article is part of a series:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://dev.to/softchris/docker---from-the-beginning-part-i-28c6https://dev.to/softchris/docker---from-the-beginning-part-i-28c6",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — from the beginning part I"),o("OutboundLink")],1),e._v(", this covers why Docker, the basic concepts and the commands we need to manage things like images and containers.")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://dev.to/softchris/docker-from-the-beginning---part-ii-5g8n",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — from the beginning, Part II"),o("OutboundLink")],1),e._v(", this is about Volumes and how we can use volumes to persist data but also how we can turn our development environment into a Volume and make our development experience considerably better")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://softchris.github.io/pages/docker-three.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker — from the beginning, Part III"),o("OutboundLink")],1),e._v(",\nthis is about how to deal with Databases, putting them into containers and how to make containers talk to other containers using legacy linking but also the new standard through networks")]),e._v(" "),o("li",[e._v("Docker — from the beginning, Part IV, "),o("strong",[e._v("we are here")])]),e._v(" "),o("li",[o("a",{attrs:{href:"https://softchris.github.io/pages/docker-five.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker - from the beginning, Part V"),o("OutboundLink")],1),e._v(", this part is the second and concluding part on Docker Compose where we cover Volumes, Environment Variables and working with Databases and Networks")])]),e._v(" "),o("blockquote",[o("p",[e._v("This part is about dealing with more than two Docker containers. You will come to a point eventually when you have so many containers to manage it feels unmanageable. You can only keep typing docker run to a certain point, as soon as you start spinning up multiple containers it just hurts your head and your fingers. To solve this we have Docker Compose.")])]),e._v(" "),o("p",[e._v("TLDR; Docker Compose is a huge topic, for that reason this article is split into two parts. In this part, we will describe why Docker Compose and show when it shines. In the second part on Docker Compose we will cover more advanced topics like Environment Variables, Volumes and Databases.")]),e._v(" "),o("p",[e._v("In this part we will cover:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Why docker compose")]),e._v(", it's important to understand, at least on a high level that there are two major architectures Monolith and Microservices and that Docker Compose really helps with managing the latter")]),e._v(" "),o("li",[o("strong",[e._v("Features")]),e._v(", we will explain what feature Docker Compose supports so we will come to understand why it's such a good fit for our chosen Microservice architecture")]),e._v(" "),o("li",[o("strong",[e._v("When Docker isn't enough")]),e._v(", we will explain at which point using Docker commands becomes tedious and painful and when using Docker Compose is starting to look more and more enticing")]),e._v(" "),o("li",[o("strong",[e._v("In action")]),e._v(", lastly we will build a docker-compose.yaml file from scratch and learn how to manage our containers using Docker Compose and some core commands")])]),e._v(" "),o("h2",{attrs:{id:"resources"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),o("p",[e._v("Using Docker and containerization is about breaking apart a monolith into microservices. Throughout this series, we will learn to master Docker and all its commands. Sooner or later you will want to take your containers to a production environment. That environment is usually the Cloud. When you feel you've got enough Docker experience have a look at these links to see how Docker can be used in the Cloud as well:")]),e._v(" "),o("ul",[o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/containers/?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Containers in the Cloud"),o("OutboundLink")],1),e._v("\nGreat overview page that shows what else there is to know about containers in the Cloud")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/container-instances/container-instances-tutorial-prepare-app?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Deploying your containers in the Cloud"),o("OutboundLink")],1),e._v(" Tutorial that shows how easy it is to leverage your existing Docker skill and get your services running in the Cloud")]),e._v(" "),o("li",[o("a",{attrs:{href:"https://docs.microsoft.com/en-gb/azure/container-instances/container-instances-tutorial-prepare-acr?wt.mc_id=devto-blog-chnoring",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating a container registry"),o("OutboundLink")],1),e._v("\nYour Docker images can be in Docker Hub but also in a Container Registry in the Cloud. Wouldn't it be great to store your images somewhere and actually be able to create a service from that Registry in a matter of minutes?")])]),e._v(" "),o("p",[e._v("##Why Docker Compose\nDocker Compose is meant to be used when we need to manage many services independently. What we are describing is something called a microservice architecture.")]),e._v(" "),o("p",[e._v("###Microservice architecture\nLet's define some properties on such an architecture:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Loosely coupled")]),e._v(", this means they are not dependent on another service to function, all the data they need is just there. They can interact with other services though but that's by calling their external API with for example an HTTP call")]),e._v(" "),o("li",[o("strong",[e._v("Independently deployable")]),e._v(", this means we can start, stop and rebuild them without affecting other services directly.")]),e._v(" "),o("li",[o("strong",[e._v("Highly maintainable and testable")]),e._v(", services are small and thus there is less to understand and because there are no dependencies testing becomes simpler")]),e._v(" "),o("li",[o("strong",[e._v("Organized around business capabilities")]),e._v(", this means we should try to find different themes like booking, products management, billing and so on")])]),e._v(" "),o("p",[e._v("We should maybe have started with the question of why we want this architecture? It's clear from the properties listed above that it offers a lot of flexibility, it has less to no dependencies and so on. That sounds like all good things, so is that the new architecture that all apps should have?")]),e._v(" "),o("p",[e._v("As always it depends. There are some criteria where Microservices will shine as opposed to a Monolithic architecture such as:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Different tech stacks/emerging techs")]),e._v(", we have many development teams and they all want to use their own tech stack or want to try out a new tech without having to change the entire app. Let each team build their own service in their chosen tech as part of a Microservice architecture.")]),e._v(" "),o("li",[o("strong",[e._v("Reuse")]),e._v(", you really want to build a certain capability once, like for example billing, if that's being broken out in a separate service it makes it easier to reuse for other applications. Oh and in a microservices architecture you could easily combine different services and create many apps from it")]),e._v(" "),o("li",[o("strong",[e._v("Minimal failure impact")]),e._v(", when there is a failure in a monolithic architecture it might bring down the entire app, with microservices you might be able to shield yourself better from failure")])]),e._v(" "),o("p",[e._v("There are a ton more arguments on why Micro services over Monolithic architecture. The interested reader is urged to have a look at the following "),o("a",{attrs:{href:"https://www.cio.com/article/3201193/it-strategy/7-reasons-to-switch-to-microservices-and-5-reasons-you-might-not-succeed.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("link"),o("OutboundLink")],1),e._v(" .")]),e._v(" "),o("p",[e._v("###The case for Docker Compose\nThe description of a Microservice architecture tells us that we need a bunch of services organized around business capabilities. Furthermore, they need to be independently deployable and we need to be able to use different tech stacks and many more things. In my opinion, this sounds like Docker would be a great fit generally. The reason we are making a case for Docker Compose over Docker is simply the sheer size of it. If we have more than two containers the amount of commands we need to type suddenly grows in a linear way. Let's explain in the next section what features Docker Compose have that makes it scale so well when the number of services increase.")]),e._v(" "),o("p",[e._v("##Docker Compose features overview\nNow Docker Compose enables us to scale really well in the sense that we can easily build several images at once, start several containers and many more things. A complete listing of features is as follows:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Manages")]),e._v(" the whole application life cycle.")]),e._v(" "),o("li",[o("strong",[e._v("Start")]),e._v(", stop and rebuild services")]),e._v(" "),o("li",[o("strong",[e._v("View")]),e._v(" the status of running services")]),e._v(" "),o("li",[o("strong",[e._v("Stream")]),e._v(" the log output of running services")]),e._v(" "),o("li",[o("strong",[e._v("Run")]),e._v(" a one-off command on a service")])]),e._v(" "),o("p",[e._v("As we can see it takes care of everything we could possibly need when we need to manage a microservice architecture consisting of many services.")]),e._v(" "),o("p",[e._v("##When plain Docker isn't enough anymore\nLet's recap on how Docker operates and what commands we need and let's see where that takes us when we add a service or two.")]),e._v(" "),o("p",[e._v("To dockerize something, we know that we need to:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("define a Dockerfile")]),e._v(" that contains what OS image we need, what libraries we need to install, env variables we need to set, ports that need opening and lastly how to - start up our service")]),e._v(" "),o("li",[o("strong",[e._v("build an image")]),e._v(" or pull down an existing image from Docker Hub")]),e._v(" "),o("li",[o("strong",[e._v("create")]),e._v(" and run a container")])]),e._v(" "),o("p",[e._v("Now, using Docker Compose we still need to do the part with the Dockerfile but Docker Compose will take care of building the images and managing the containers. Let's illustrate what the commands might look like with plain Docker:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker build -t some-image-name .")])]),e._v(" "),o("p",[e._v("Followed by")]),e._v(" "),o("blockquote",[o("p",[e._v("docker run -d -p 8000:3000 --name some-container-name some-image-name")])]),e._v(" "),o("p",[e._v("Now that's not a terrible amount to write, but imagine you have three different services you need to do this for, then it suddenly becomes six commands and then you have the tear down which is two more commands and, that doesn't really scale.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/9zdbajjweos0erfkjl2h.gif",alt:"alt text",title:"Docker not scaling"}})]),e._v(" "),o("p",[e._v("###Enter docker-compose.yaml\nThis is where Docker Compose really shines. Instead of typing two commands for every service you want to build you can define all services in your project in one file, a file we call "),o("code",[e._v("docker-compose.yaml")]),e._v(". You can configure the following topics inside of a "),o("code",[e._v("docker-compose.yaml")]),e._v(" file:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("Build")]),e._v(", we can specify the building context and the name of the Dockerfile, should it not be called the standard name")]),e._v(" "),o("li",[o("strong",[e._v("Environment")]),e._v(", we can define and give value to as many environment variables as we need")]),e._v(" "),o("li",[o("strong",[e._v("Image")]),e._v(", instead of building images from scratch we can define ready-made images that we want to pull down from Docker Hub and use in our solution")]),e._v(" "),o("li",[o("strong",[e._v("Networks")]),e._v(", we can create networks and we can also for each service specify which network it should belong to, if any")]),e._v(" "),o("li",[o("strong",[e._v("Ports")]),e._v(", we can also define the port forwarding, that is which external port should match what internal port in the container")]),e._v(" "),o("li",[o("strong",[e._v("Volumes")]),e._v(", of course, we can also define volumes")])]),e._v(" "),o("p",[e._v("##Docker compose in action\nOk so at this point we understand that Docker Compose can take care of pretty much anything we can do on the command line and that it also relies on a file "),o("code",[e._v("docker-compose.yaml")]),e._v(" to know what actions to carry out.")]),e._v(" "),o("p",[e._v("###Authoring a docker-compose.yml file\nLet's actually try to create such a file and let's give it some instructions. First, though let's do a quick review of a typical projects file structure. Below we have a project consisting of two services, each having their own directory. Each directory has a "),o("code",[e._v("Dockerfile")]),e._v(" that contains instructions on how to build a service.")]),e._v(" "),o("p",[e._v("It can look something like this:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker-compose.yaml\n/product-service\n  app.js\n  package.json\n  Dockerfile\n/inventory-service\n  app.js\n  package.json\n  Dockerfile\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br"),o("span",{staticClass:"line-number"},[e._v("6")]),o("br"),o("span",{staticClass:"line-number"},[e._v("7")]),o("br"),o("span",{staticClass:"line-number"},[e._v("8")]),o("br"),o("span",{staticClass:"line-number"},[e._v("9")]),o("br")])]),o("p",[e._v("Worth noting above is how we create the "),o("code",[e._v("docker-compose.yaml")]),e._v(" file at the root of our project. The reason for doing so is that all the services we aim to build and how to build and start them should be defined in one file, our "),o("code",[e._v("docker-compose.yml")]),e._v(".\nOk, let's open "),o("code",[e._v("docker-compose.yaml")]),e._v(" and enter our first line:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("// docker-compose.yaml\nversion: '3'\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("p",[e._v("Now, it actually matters what you specify here. Currently, Docker supports three different major versions. 3 is the latest major version, read more here how the different versions differ, cause they do support different functionality and the syntax might even differ between them Docker versions "),o("a",{attrs:{href:"https://docs.docker.com/compose/compose-file/",target:"_blank",rel:"noopener noreferrer"}},[e._v("offical docs"),o("OutboundLink")],1),e._v("\nNext up let's define our services:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("// docker-compose.yaml\nversion: '3'\nservices:\n  product-service:\n    build:\n      context: ./product-service\n    ports:\n      - \"8000:3000\"\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br"),o("span",{staticClass:"line-number"},[e._v("6")]),o("br"),o("span",{staticClass:"line-number"},[e._v("7")]),o("br"),o("span",{staticClass:"line-number"},[e._v("8")]),o("br")])]),o("p",[e._v("Ok, that was a lot at once, let's break it down:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("services:")]),e._v(", there should only be one of this in the whole docker-compose.yaml file. Also, note how we end with "),o("code",[e._v(":")]),e._v(", we need that or it won't be valid syntax, that is generally true for any command")]),e._v(" "),o("li",[o("strong",[e._v("product-service")]),e._v(", this is a name we choose ourselves for our service")]),e._v(" "),o("li",[o("strong",[e._v("build:")]),e._v(", this is instructing Docker Compose how to build the image. If we have a ready-made image already we don't need to specify this one")]),e._v(" "),o("li",[o("strong",[e._v("context:")]),e._v(", this is needed to tell Docker Compose where our "),o("code",[e._v("Dockerfile")]),e._v(" is, in this case, we say that it needs to go down a level to the "),o("code",[e._v("product-service")]),e._v(" directory")]),e._v(" "),o("li",[o("strong",[e._v("ports:")]),e._v(", this is the port forwarding in which we first specify the external port followed by the internal port")])]),e._v(" "),o("p",[e._v("All this corresponds to the following two commands:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v("docker build -t [default name]/product-service .\ndocker run -p 8000:3000 --name [default name]/product-service\n")])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br")])]),o("p",[e._v("Well, it's almost true, we haven't exactly told Docker Compose yet to carry out the building of the image or to create and run a container. Let's learn how to do that starting with how to build an image:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker-compose build")])]),e._v(" "),o("p",[e._v("The above will build every single service you have specified in "),o("code",[e._v("docker-compose.yaml")]),e._v(". Let's look at the output of our command:")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/gezojc19cb7cvlda0fcr.png",alt:"alt text",title:"Docker output"}})]),e._v(" "),o("p",[e._v("Above we can see that our image is being built and we also see it is given the full name "),o("code",[e._v("compose-experiments_product-service:latest")]),e._v(", as indicated by the last row. The name is derived from the directory we are in, that is "),o("code",[e._v("compose-experiments")]),e._v(" and the other part is the name we give the service in the "),o("code",[e._v("docker-compose.yaml")]),e._v(" file.\nOk as for spinning it up we type:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker-compose up")])]),e._v(" "),o("p",[e._v("This will again read our "),o("code",[e._v("docker-compose.yaml")]),e._v(" file but this time it will create and run a container. Let's also make sure we run our container in the background so we add the flag "),o("code",[e._v("-d")]),e._v(", so full command is now:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker-compose up -d")])]),e._v(" "),o("p",[e._v("Ok, above we can see that our service is being created. Let's run "),o("code",[e._v("docker ps")]),e._v(" to verify the status of our newly created container:\nIt seems to be up and running on port "),o("code",[e._v("8000")]),e._v(". Let's verify:\nOk, so went to the terminal and we can see we got a container. We know we can bring it down with either docker stop or docker kill but let's do it the docker-compose way:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker-compose down")])]),e._v(" "),o("p",[e._v("As we can see above the logs is saying that it is stopping and removing the container, it seems to be doing both "),o("code",[e._v("docker stop [id]")]),e._v(" and "),o("code",[e._v("docker rm [id]")]),e._v(" for us, sweet 😃\nIt should be said if all we want to do is stop the containers we can do so with:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker-compose stop")])]),e._v(" "),o("p",[e._v("I don't know about you but at this point, I'm ready to stop using "),o("code",[e._v("docker build")]),e._v(", "),o("code",[e._v("docker run")]),e._v(", "),o("code",[e._v("docker stop")]),e._v(" and "),o("code",[e._v("docker rm")]),e._v(". Docker compose seems to take care of the full life cycle 😃")]),e._v(" "),o("p",[e._v("##Docker compose showing off\nLet's do a small recap so far. Docker compose takes care of the full life cycle of managing services for us. Let's try to list the most used Docker commands and what the corresponding command in Docker Compose would look like:")]),e._v(" "),o("ul",[o("li",[o("code",[e._v("docker build")]),e._v(" becomes "),o("code",[e._v("docker-compose build")]),e._v(", the Docker Compose version is able to build all the services specified in "),o("code",[e._v("docker-compose.yaml")]),e._v(" but we can also specify it to build a single service, so we can have more granular control if we want to")]),e._v(" "),o("li",[o("code",[e._v("docker build + docker run")]),e._v(" becomes "),o("code",[e._v("docker-compose up")]),e._v(", this does a lot of things at once, if your images aren't built previously it will build them and it will also create containers from the images")]),e._v(" "),o("li",[o("code",[e._v("docker stop")]),e._v(" becomes "),o("code",[e._v("docker-compose stop")]),e._v(", this is again a command that in Docker Compose can be used to stop all the containers or a specific one if we give it a single container as an argument")]),e._v(" "),o("li",[o("code",[e._v("docker stop && docker rm")]),e._v(" becomes "),o("code",[e._v("docker-compose down")]),e._v(", this will bring down the containers by first stopping them and then removing them so we can start fresh")])]),e._v(" "),o("p",[e._v("The above in itself is pretty great but what's even greater is how easy it is to keep on expanding our solution and add more and more services to it.")]),e._v(" "),o("p",[e._v("##Building out our solution\nLet's add another service, just to see how easy it is and how well it scales. We need to do the following:")]),e._v(" "),o("ul",[o("li",[o("strong",[e._v("add")]),e._v(" a new service entry in our "),o("code",[e._v("docker-compose.yaml")])]),e._v(" "),o("li",[o("strong",[e._v("build")]),e._v(" our image/s "),o("code",[e._v("docker-compose build")])]),e._v(" "),o("li",[o("strong",[e._v("run")]),e._v(" "),o("code",[e._v("docker-compose up")])])]),e._v(" "),o("p",[e._v("Let's have a look at our "),o("code",[e._v("docker-compose.yaml")]),e._v(" file and let's add the necessary info for our next service:")]),e._v(" "),o("div",{staticClass:"language- line-numbers-mode"},[o("pre",{pre:!0,attrs:{class:"language-text"}},[o("code",[e._v('// docker-compose.yaml\n\nversion: \'3\'\nservices:\n  product-service:\n    build:\n      context: ./product-service\n    ports:\n      - "8000:3000"\n  inventory-service:\n    build:\n      context: ./inventory-service\n    ports:\n        - "8001:3000"\n')])]),e._v(" "),o("div",{staticClass:"line-numbers-wrapper"},[o("span",{staticClass:"line-number"},[e._v("1")]),o("br"),o("span",{staticClass:"line-number"},[e._v("2")]),o("br"),o("span",{staticClass:"line-number"},[e._v("3")]),o("br"),o("span",{staticClass:"line-number"},[e._v("4")]),o("br"),o("span",{staticClass:"line-number"},[e._v("5")]),o("br"),o("span",{staticClass:"line-number"},[e._v("6")]),o("br"),o("span",{staticClass:"line-number"},[e._v("7")]),o("br"),o("span",{staticClass:"line-number"},[e._v("8")]),o("br"),o("span",{staticClass:"line-number"},[e._v("9")]),o("br"),o("span",{staticClass:"line-number"},[e._v("10")]),o("br"),o("span",{staticClass:"line-number"},[e._v("11")]),o("br"),o("span",{staticClass:"line-number"},[e._v("12")]),o("br"),o("span",{staticClass:"line-number"},[e._v("13")]),o("br"),o("span",{staticClass:"line-number"},[e._v("14")]),o("br")])]),o("p",[e._v("Ok then, let's get these containers up and running, including our new service:")]),e._v(" "),o("blockquote",[o("p",[e._v("docker-compose up")])]),e._v(" "),o("p",[e._v("Wait, aren't you supposed to run "),o("code",[e._v("docker-compose build")]),e._v(" ? Well, actually we don't need to "),o("code",[e._v("docker-compose up")]),e._v(" does it all for us, building images, creating and running containers.")]),e._v(" "),o("p",[o("img",{attrs:{src:"https://thepracticaldev.s3.amazonaws.com/i/09jstlay2u68e0uhhllw.gif",alt:"alt text",title:"Docker awesome"}})]),e._v(" "),o("p",[e._v("CAVEAT, it's not so simple, that works fine for a first-time build + run, where no images exist previously. If you are doing a change to a service, however, that needs to be rebuilt, that would mean you need to run docker-compose build first and then you need to run docker-compose up.")]),e._v(" "),o("p",[e._v("##Summary\nHere is where we need to put a stop to the first half of covering Docker Compose, otherwise it would just be too much. We have been able to cover the motivation behind Docker Compose and we got a lightweight explanation to Microservice architecture. Furthermore, we talked about Docker versus Docker Compose and finally, we were able to contrast and compare the Docker Compose command to plain Docker commands.\nThereby we hopefully were able to show how much easier it is to use Docker Compose and specify all your services in a "),o("code",[e._v("docker-compose.yaml")]),e._v(" file.\nWe did say that there was much more to Docker Compose like Environment variables, Networks, and Databases but that will come in the next part.")])])},[],!1,null,null,null);t.default=a.exports}}]);