---
title: 'State of the AIR: 2nd iteration'
date: 'Thu May  8 01:10:14 MDT 2025'
draft: false
category: 'blog'
tags: ['production software', 'production release', 'deployment', 'cloud computing', 'architecture', 'microservices']
summary: 'Updating the fans on RAG chatbot evolution - we're microservices now.'
---

It’s been a while since I’ve published another post here, but I’ve been diligently working on various rearchitecting of my AI Resume chatbot project. Turns out, chronic overachievers like myself are classic victims of becoming over-optimizers too. 

I’m more aware these days, and still I know I shouldn’t get down on myself on this or feel inadequate. The barrier I’ve faced in most of this project’s lifetime has been delivery to production, and based on news commentary & discussions I read and hear on various sites and podcasts, I’m very much not alone especially in the open-source world. I think MCP came about precisely because we adventurous AI devs all over the place being blocked in some way(s) on the production part for new AI projects. 

While I can’t wait to try out MCP and the other new innovations coming to light since I began building my bot, for efficiency the chatbot formerly known as mAIRy will deploy as a more homegrown OS RAG bot already coded lovingly from scratch. In other words, today there are plenty of ways to build this use case with a few clicks on a cloud PaaS, but the strong competency and deeper knowledge I’ve gained in doing it myself I’d never trade for an easy path. 

## architectural findings 
I started reading a tech book called _Bootstrapping Microservices_ more because I am experienced and familiar with the microservices architecture. I didn’t conclude that I’d complexified my chatbot for more impressive…ness to the point of it being several services that needed to network together in client-server interactions with databases. All the sudden I built something closer to the microservices I developed in at a client for e-commerce inventory/delivery handling purposes working full time vs. a RAG PoC. 

I was only trying to get it to prod (without the easy buttons). But, I think I may be on to something that stands out on the backend, if not a speedily released app. 

As I mentioned, my chatbot has a new name. Considering my experiences during this interesting point of life/career, it seems fitting to name this project Icarus. More of that lore later — it seems I dance with burnout as much when NOT employed as when I am. Part of the reason? Believing in myself.

My hard copy of _Bootstrapping Microservices with Docker, Kubernetes, GitHub Actions, and Terraform_ by the excellent Ashely Davis is well on its way in looking like my copy of _The Startup Owner’s Manual_. What I mean by this is it has a zillion notes in the margins, highlights, sticky flags on pages, bookmarks, and even a small stain where I spilled Diet Coke on it. This book both showed me where I was missing where my architecture needed work, but it also shows that yes, a solo indie hacker can indeed build microservices apps from scratch for little to no money up front. 

While I certainly haven’t followed the book’s example stack exactly (he uses Node for the services + I’m not going to go for K8s based on what I’m seeing for cost of cloud hosting K8s, and Terraform I am seeing as awesome but likely overkill) the practical walkthrough of the build and orchestration with Docker containers running services is excellent insight. 

If only Docker container orchestration was the be-all end-all for my client-service based system, but nothing is that simple in open source AI projects. The current work at hand, in the aim to run the entire app on my local machine (or connecting to a remote host if my RAM can’t hang) is as follows:

## first solution, Docker + Compose: not everything likes being in a container
I’ve learned that using Docker to run certain AI processes such as a server for Ollama (which I am still using, but nowadays have a backup option(s) lined up) has seen performance issues and other complications that has encouraged me to have a backup idea for not only the Ollama service but my vector DB service (Chroma) and even the client UI web service (Streamlit + clients) so if I have to migrate from Docker I can avoid a split situation that is probably over-complex. 

## second solution(s), Linux VMs on Mac M2
I learned how to use VirtualBox with Vagrant when I was learning about Ansible via [this great series]. So, running Linux VMs locally on a Mac is possible, but I am a little fuzzy on how much Vagrant is necessary in my case and trying to run VirtualBoxes by themselves is confusing to me too. 
There are other options I have learned. I have found other tools that run Linux VMs on MacOS and even about Mac’s native/built-in Virtualization option. The latter is a ton of config and more docs it seems, so I have another app option to try and I can always go back to Vagrant + VirtualBox as I may prefer that anyway. Or maybe start with that option and have other backups. Writing things out is quite useful to my reasoning!

Basically, I’m building up to running the same tech on Linux VMs in the cloud on (most likely) DigitalOcean Droplet VMs. They have some easy one-click RAG stuff but I’m all over there in DIY land proving I can build a similar solution but with tech that hasn’t been an official integration or something. 

I can install Ollama on Linux directly as well as Chroma’s newly upgraded CLI with which I can start a server. The UI part is a bit more nuanced so I haven’t defined how I want it to run on a remote VM yet, but I know of at least a few of my options.

## database options
For storage/DB, I have a lot open to me if I’m not dealing with Docker volume storage attached to the container. TBH, that is nice and I am no stranger to hooking up hosted DB connections to the processes they are to send and receive data between. I am more a fan of relational, non-relational, document and graph type databases vs S3 object storage or block storage on volumes, both which I’ve tested recently and had meh results. 

## how the AI part is going
It’s been fun and interesting to do the local testing of RAG with the container servers running. I’ve only tested mostly with an ephemeral system that ingests data, calculates embeddings and stores in a volume for the duration of the Chroma server container running. Something I’ve found is that I’ve loved using Google’s Gemma2 Instruct model as I’ve tested the bot, but nowadays testing with a Gemma3 instruct model (and on Ollama there is a helpfully quantized option for the RAM-poor) it is not really getting my prompting as easily as Gemma2 did! 

I know this is more of a case of my own prompt engineering and I can deal with that, but I do want to compare the Gemmas 2 and 3 eventually with the same question(s) and see what differences may show as they generate from retrievals. I’ll also be introducing other models available freely open-source such as one of Meta’s Llama options, a Claude model, DeepSeek and more. THAT will be really exciting! (Maybe I will livestream this…)

In any case, the way I’ve been doing the embedding pipeline has not changed much at all. I’m using a Sentence Transformers text embedding model(s) (have tried a few on my data) to ingest my text data chunks and calculate vector embedding arrays (maybe not the scientific term, but a good way to explain this concept, a skill I’m practicing :)) that get added to the initial ChromaDB collection of "career data". 

On the other end of this is the chat UI where a user asks a question of the genAI model (Gemma) that’s answered based on retrievals from searching the embeddings using an embedded form of the user’s question. From the last time I ran the client server as of writing, Icarus mostly started off its introduction as prompted but in the middle I’m seeing it think of itself as "Molly" and then go back to saying "Molly created me as a project…". (Remember kids, AI isn’t that smart, do not let it be your teacher of everything. We’re still teaching IT!) That part is important so users ask about me in the third person (and/or as long as Icarus can detect and recognize that if user saying "do you know how to code" that this inquiry is aimed at me/its creator, and that Icarus, ..for now.. does not know how to code, and the user isn’t interested in knowing if it does). 

I could have much more to say, but I must get back to the code as well as some work for new full time job prospects for which I am excited to be in the candidacy process. I’m always going to love learning and working on AI for fun, but my job search ideally ends in getting to work on AI not only after work but AT work. ;)

In the style of the lovely Ollama CLI:\
`/bye`