---
title: 'AI Resume: 1st iteration'
date: '2025-01-30T00:49:07-06:00'
draft: false
category: 'project'
tags: [
    'Python',
    'ChromaDB',
    'Ollama',
    'Gemma2',
    'Langchain Text Splitters',
    'Sentence Transformers',
    'RAG',
    'LLM',
    'chatbot',
    'generative AI'
  ]
summary: 'One day long ago I decided to build a chatbot that does my job interviews for me. This led to a magnitude of learning what I needed to do this that this post is only a fraction of the story.'
---

> FYI (April 2025): I wrote this post at the project's "soft launch" in January. Since then it has gone through transitions--mostly in architecture and additional functionality. I have a lot to say about this project, and future posts will discuss this additional development work.

In 2022 I was working as an engineer at Thoughtworks, and OpenAI released ChatGPT and started the GenAI hype explosion of that year and beyond. My familiarity with AI was only in the more traditional data science/academic sense at the time, but this time was also the advent of open source AI & ML technologies that opened the door. Before this time, I'd only found ways to teach myself data science with Python online for free, with running AI models on big GPUs was locked inside grad schools. My first look at HuggingFace's site and I never looked back. Just kept reading the docs. There are always more docs to read.

In January of 2024, I learned what RAG stands for. In February of 2024 I decided to teach myself all the skills necessary to build a generative AI RAG chatbot that would answer job interview questions as my representative. Regardless of a job search (which I'd planned to have as an option among all the industry layoffs) I wanted to have a portfolio project up that actually demonstrated my skills vs. very old, simpler ones.

In July of 2024 I was still figuring mAIRy out while teaching AI at work, when I was one of the layoffs of round 4. So, I worked diligently and almost daily on the AIR (A.I. Resume, before I "named" my first creation) for the entirety of 2024, with the second half of the year as a full-time devotion.

I could have done things very simply, for example in Google Cloud where I'm certified, but with cost a key factor and my personal love of OSS, I challeneged myself to build this app as close to $0 as possible.

I tested a significant number of options in the wild west ecosystem of open source AI (here encompassing generative AI, AI-driven apps, LLMs and machine learning) and I can probably bet everything I started out with is now a broken dependency as this new tech space moved, morphed, broke and got updated constantly and fast. What mAIRy uses today is fairly stable for now, at least.

The app’s main logic/functionality is written in Python. At first I developed using AI-driven-app-development frameworks available in Python and ended up with a deep understanding of/how to work with the LangChain and LlamaIndex frameworks specifically.

Overall, I decided to try not to rely on any one framework for the entire or most of the app. This means mAIRy is fairly vanilla-coded and 100% hand-crafted source code. mAIRy does use two tools built by the folks at LangChain, and they are both Text Splitters used in the ingestion of raw text data to be embedded and sent to the vector database.

mAIRy’s vector database is ChromaDB, a fantastic open source database for AI that stores the ingested + embedded "career data" in a database that serves as mAIRy’s brain (so, Chroma DB, not Abby Normal) and much more. Chroma’s special embedding function for Sentence Transformers (a library providing models to calculate text embeddings) is what performs the calculations for embeddings so that mAIRy may retrieve answers to user queries based on semantic meanings.

In other words, Sentence Transformers and Chroma together take in chunks of text that were split by the LangChain tools and calculate numerical calculations of the semantic/"human" meanings of the texts and store them in a database specifically for vector data queryable by LLM. The text embedding model initially used for this data is Sentence Transformers’ all-MiniLM-L6-v2.

mAIRy chats using openly available Large Language Models (LLMs) via Ollama. Ollama is an open source framework to develop with LLMs locally, and additionally performs well in a small production environment. mAIRy’s initial LLM in use is Google’s Gemma 2, but more options are in store.

The Python library Streamlit generates mAIRy’s chat interface. I not only have future features planned (you think my bot could handle a coding challenge round? I do!) as well as to extend the base system to other use cases.

To build this bot, a selection of what I needed to teach myself and/or improve upon includes: LLM-based app programming, containerization, Docker, computer networking, cloud infrastructure, software architecture, retrieval augmented generation, cloud computing, DNS configuration, VPN configuration, web server administration, site reliability engineering, machine learning, tokenization, embeddings generation, observability, monitoring.

I will be sharing much more and answering questions about this bot on my upcoming video tutorial channel, MadSciAI.
