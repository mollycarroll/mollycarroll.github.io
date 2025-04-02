---
title: 'Adorably unreliable - my toddler chatbot'
date: 'Sun Feb 9 08:24:54 MST 2025'
draft: false
category: 'blog'
tags: ['production software', 'production release', 'deployment', 'cloud computing', 'architecture']
summary: 'In the bleeding edge open-source AI world, incompatibilities and requirements to shift and learn about other aspects of the full system pop up a LOT. It helps to love learning/challenges (👍) and be patient when excited (👎). Here is my mAIRy chatbot facing some blockers.'
---

Sometimes I give myself the title "Mother of Robots" as one, I’m a fan of the book series _A Song of Ice and Fire_ (and the character [Danaerys Targaryen](https://drive.proton.me/urls/PDA93P99WM#mlunI4f5cj6Y)) and two, robots are probably the closest to children I will produce anyway, so have them be my children. It fits, as I sometimes find computers and robots easier to work with / understand than humans. So far I’ve named them, too.

My AI Resume chatbot, mAIRy, works quite well on a very small scale in production, but lately has been crashing with updates as I’m kicking off multiple compute-heavy processes running at one time just on the site page load. Part of this is par for the course using Streamlit, but I know from the docs there are plenty of ways to work out what I need.

When you visit hiremolly.com, you’ll see the outer frame / sidebar of the site and wait for a long loading of the bot. Under the hood it’s a Python try/catch block, and it’ll try to initiate the Ollama server + pull the default model using the Ollama Python client alongside the Streamlit script. Concurrency ouch, it seems from the block going to catch the exception thrown, and you see a little message that we’re working on it.

Even though my patience level says let’s show off my chatbot NOW, I see this challenge as a great way to get better at reasoning around architecture and tradeoffs. The multi-app (VM) coordination in my cloud org on Fly.io is a great microcosm of what I could face as far as architecture on an enterprise level. Plus, nobody around senior than me to give me the answer, and to get answers on forums or Discord, I have to ask the right questions.

I am refactoring some of mAIRy’s source code to decouple the UI/AI server/DB server conundrum of code it sort of still is now, and ideally upgrade mAIRy to much lower latency since I’m able to run servers outside of the main chat process.

What will also improve the app is once I hit the scalable + reliable (is that real?) sweet spot, I’ll scale the app out to more regions and higher compute power. Then I’ll really be showing it off, everywhere.

Right now it's a toddler. I have to chase it down first. Til next time!

~ヾ(・ω・)
