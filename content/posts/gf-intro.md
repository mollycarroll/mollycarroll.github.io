---
title: 'GigFinder - where music meets opportunity'
date: 'Wed Sep  9 05:51:32 CDT 2026'
draft: false
category: "blog"
tags: ["react", "fastAPI", "python", "web app", "claude code", "postgreSQL", "location search"]
summary: "GigFinder is an app for musicians to search for gig venues in a given area -- a full stack app built with Claude Code."
---
Recently I’ve experimented with AI-assisted software development by building an app with Claude Code. My dad plays in two local bands here in St. Louis and I built a small web app that lets musicians search for new gig opportunities in a specified area. 

[GigFinder on GitHub](https://github.com/mollycarroll/gig-finder)

The app is a React SPA with a FastAPI backend, using Supabase for a Postgres database and authentication. The app can be run entirely locally. It uses SQLAlchemy to talk to the database directly. The app is narrowly scoped with a few key features.

The app uses Nominatim, which is OpenStreetMap’s free geocoding service, to provide the local search for venues in the area. It also uses OpenStreetMap’s Overpass to convert locations in latitude/longitude pulled by Nominatim into a list of candidate venues. Every search resolves to an Area, which is a lat/lon plus a radius. 

Scraping for contact information from venue websites is a straightforward pipeline: fetch the homepage, respect robots.txt, look for a “contact” link and follow it one page deep. This is an intentionally limited scope that avoids the complexity of multi-page crawling.

The parser could have picked up data that looks like emails and phone numbers but are not, such as what is in <script> and <style> tags. After discovering this in E2E testing, the parser now excludes script/style content from the text it scans. I also added a separator that aided in avoiding concatenated text nodes and bugs when scraping mailto: links and phone number refs that aren’t http(s)://. 

The app also includes user authentication. The user can create an account and sign in. Auth is provided with Supabase-issued JWTs that are verified against Supabase’s JWKS endpoint. When logged in, the user can not only search for venues but save venues to their account that they want to contact. This is stored in the DB.