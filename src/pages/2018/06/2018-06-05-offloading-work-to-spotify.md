---
title: "Offloading Work to Spotify"
path: "/2018/06/05/offloading-work-to-spotify"
date: "2018-06-05T12:55:38.000Z"
tags: ["Technology","Startups","Ideas","Coding","Harvy Dev"]
excerpt: "Hopefully by now you've had the chance to [Meet Harvy](/2018/06/02/meet-harvy/). In its very starter and simple phase, Harvy uses your songs in your playlists to determine the playlist for you. There..."
---

Hopefully by now you've had the chance to [Meet Harvy](/2018/06/02/meet-harvy/). In its very starter and simple phase, Harvy uses your songs in your playlists to determine the playlist for you. There are some pros and cons to this approach:

Pro:

- The playlist will be filled with songs you most likely already know because they live in playlists
- Saving playlists to your account is fairly personal, it means you like the selection of songs enough that you think you'll come back to it

Cons:

- Harvy is fairly "dumb" right now and does not have many filters or customizations. The playlist is coming from what Harvy thinks is the best mixup, which is predefined in the code
- Creating, organizing, and manipulating all the music for a person takes a fair amount of processing

Yesterday however, I came across [Noiseblend](https://www.producthunt.com/posts/noiseblend) on ProductHunt. They are doing a fairly similiar idea while also using the Spotify API. So I asked them a fairly simple question - "how are you creating your playlists so well?" I received a simple response - the developers don't do the magic of creating the playlist, they leverage Spotify's algorithms to do that. Well hot dang, I didn't know that was possible!

Thankfully it is! The framework I'm using allows Harvy to pass in a "seed" song, artist, or genre, and from there it will leverage Spotify's intelligence to create a basic playlist. Check out the [very simple code](https://github.com/thelinmichael/spotify-web-api-node/blob/340ddada99b1c245bc528004f556ee1198fef697/src/spotify-web-api.js#L872) or [read the documentation](https://developer.spotify.com/documentation/web-api/reference/browse/get-recommendations/).

Right now I'm working on updating the flow of a user through Harvy then. An additional step will be added for a user to select songs, artists, or genres that the user is "feeling" for that workout/run/activity, and then they will get an **even better** playlist than before. I've tried it out already in prototype form, I can't wait to share it with all of you.
