---
title: "Accountability MVP Part 2"
path: "/2018/05/15/accountability-mvp-part-2"
date: "2018-05-16T00:22:00.000Z"
tags: ["Personal Growth","Coding","Technology"]
excerpt: "[Three days ago](/blog/2018/05/12/accountability-idea), I talked about a simple, public calendar to update on my goal progress. [Here is the current version of the..."
---

[Three days ago](/blog/2018/05/12/accountability-idea), I talked about a simple, public calendar to update on my goal progress. [Here is the current version of the calendar](/accountability-calendar/). Now, the progress may not look like much, but I've simplified it much much more coding-wise and made it more extensible.

Basically what was changed is that instead of manually creating a calendar for each one, it now dynamically creates a calendar based off of a JSON (data) file. [You can actually view the file online](https://gist.github.com/kevinguebert/a31a2e8a09d7054dccca805ee05cb8f3) that I am using. So here is the flow:

1. Fetch the file from that url
2. Go down the list of each goal
3. For each goal, go to the "status" data
4. The "status" contains all the months that I've been tracking. Right now there is only May, but it can be added to
5. For each month, go through all the days. If a day is marked with anything besides "0", then I completed it that day.
6. Create the UI elements for those days
7. Add it to the webpage.

Suppperr simple, but I love it. Why? Well, I actually won't have to get into the code if I want to update a day. I can just edit the [Gist](https://gist.github.com/kevinguebert/a31a2e8a09d7054dccca805ee05cb8f3), hit save, and then it will update the calendar!

Next up, multiple months!
