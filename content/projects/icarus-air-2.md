---
title: 'Icarus the AI Resume Chatbot'
date: "2026-06-01T14:44:36-05:00"
draft: false
category: "project"
tags: ["AI chatbot", "retrieval augmented generation", "AI resume", "Gemma3", "Ollama", "LangChain"]
summary: "Icarus is an AI-powered chatbot that represents me in basic tech interview recruiting Q&A scenarios. Icarus can answer questions about my technical skills and past experience as a software engineer, powered by Retrieval Augmented Generation (RAG)."
---

After much deliberation on stack, architecture and every other tradeoff, this project lives! Locally usable and can be deployed to production.

Icarus is an AI-powered chatbot that represents me in basic tech interview recruiting Q&A scenarios. Icarus can answer questions about my technical skills and past experience as a software engineer, powered by Retrieval Augmented Generation (RAG). Check out the [video](https://youtu.be/rjlJh5UOwXM) to see Icarus answering basic technical recruiting type questions.

Icarus is written primarily in Python, using the [LangChain](https://docs.langchain.com) framework for AI powered applications to integrate the application’s architectural components. The application features a server running AI inference, scripts for processing the bot’s internal database to enable inference and a vector data store (Postgres) via which the bot performs document retrieval. The chatbot pulls information from the resume database to retrieve the proper data to answer questions.

Icarus uses [Ollama](https://ollama.com) to run AI inference. Ollama is an open source AI model runner that can be used for local development and in the cloud for production instances.

[Hugging Face](https://huggingface.co) provides access to both AI models used in the application. For the initial load of my resume data into the vector store database, I used Sentence Transformers’ [all-MiniLM-L6-v2 model](https://huggingface.co/sentence-transformers/all-MiniLM-L6-v2) on Hugging Face. This model is part of the generation and processing of embeddings of the original data.

The model used for performing inference for the main chat is Google’s [Gemma3](https://deepmind.google/models/gemma/gemma-3/). This model goes into action each time a question is asked of the chatbot in order to query the database, retrieve relevant documents and generate an acceptable answer.