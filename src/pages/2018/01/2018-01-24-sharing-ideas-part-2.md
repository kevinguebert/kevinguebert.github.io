---
title: "Sharing Ideas Part 2"
path: "/2018/01/24/sharing-ideas-part-2"
date: "2018-01-25T02:44:00.000Z"
tags: ["Ideas","Personal Growth"]
excerpt: "In the first post on this topic, I posed an idea for using voice-enabled devices to create art. Today I'll be sharing another idea I've pondered (and may have coded a little on).

On Reddit, there..."
---

In the first post on this topic, I posed an idea for using voice-enabled devices to create art. Today I'll be sharing another idea I've pondered (and may have coded a little on).

On Reddit, there exists a little bot that's a reminder bot. Basically, any user can say something like "Remind me in 2 years to X" and the reminder bot will reply confirming that reminder, and then, in 2 years, it will resurface that post. On Twitter, people post similar things "I could use a reminder" or "remind me in a year to make sure I've done X" or any other variation of the reminder phrase. Here's the idea: a simple Twitter bot that does the same thing as the Reddit one - it just retweets that original tweet to remind that person of whatever they wanted!

If you've ever wanted to dive into the world of Twitter bots, that would be a fun one. The question now is, would you need a separate database to hold these reminders? Probably...could be a simple JSON structure for each day and then the ID of the tweet to retweet. Then all it does it is checks to see if today exists in that structure, if it does, retweet all the data objects inside.

Simple...right?
