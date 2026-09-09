---
title: 'GigFinder'
date: "2026-09-09T06:34:35-05:00"
draft: false
category: "project"
tags: ["react", "fastAPI", "python", "web app", "claude code", "postgreSQL", "location search", "supabase"]
summary: "GigFinder lets musicians search for venues for future gigs in a given location. Users can save venues for tracking and label their contact status with this data saved in the user's account."
---
# GigFinder

GigFinder is a full stack web app that enables musicians to find live music venues in a given area for future gigs. Users can search any geographical location (city, neighborhood, or postal code) and get a list of nearby venues. 

The venue list returned not only lists venue names but also contact information scraped from each venue's website. In addition, on each venue's card is a save button, so users can save the venue in their account for future tracking. In the saved venues page, users can mark the contact status of the venue (Not Contacted, Contacted, Replied, Booked, Declined) which is saved with their user account.

[GigFinder on GitHub](https://github.com/mollycarroll/gig-finder)


## How it works

The address is geocoded with OpenStreetMap's Nominatim and nearby venues are discovered with OSM's Overpass API. New or stale venues are scraped concurrently while respecting robots.txt, and the scraping doesn't go past the main web page and a contact page.


## Stack

The app uses FastAPI, SQLAlchemy and Alembic on its backend with React + Vite + TypeScript + Tailwind for the frontend. Supabase is used for hosted Postgres as well as email/password user authentication. 


## Screenshots

### Search

Enter an area — city, neighborhood, or postal code — no login required.

![Search page](/images/screenshots/search-page.png)

### Results

Each venue card carries whatever contact info the scraper found — email,
phone, booking page, socials.

![Search results](/images/screenshots/search-results.png)

### Saved Venues

A personal shortlist with an editable outreach status per venue — the
booking pipeline.

![Saved venues](/images/screenshots/saved-venues.png)

### Account

Email/password auth via Supabase — search works signed out; saving
requires an account.

![Login and signup](/images/screenshots/auth-page.png)
