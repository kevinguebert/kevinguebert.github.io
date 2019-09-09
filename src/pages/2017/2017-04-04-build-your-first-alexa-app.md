---
title: "Build Your First Alexa App"
path: "/2017/04/04/build-your-first-alexa-app"
date: "2017-04-04T21:36:00.000Z"
tags: ["Tutorials","Technology","Coding"]
excerpt: "In today's tutorial we are going to set up a very basic Amazon Alexa Skill that uses Python, specifically a package called Flask-Ask. Today's sample data may seem a bit controversial and..."
---

In today's tutorial we are going to set up a very basic Amazon Alexa Skill that uses Python, specifically a package called Flask-Ask. Today's sample data may seem a bit controversial and political - but it is an interesting set of data and one that could be extended much further than what we are doing today.

The data source we are going to be using is called Drone Stream - [http://dronestre.am](http://dronestre.am) - "real-time and historical data about every reported covert United States drone strike." We are going to use this data and Alexa to get updates and facts about Drone Strikes by the United States. Like I said, a bit controversial and political, but hopefully something new is better.

Here's an example of the structure returned:

    {  
      "status":"OK",
      "strike":[  
        {  
          "_id":"55c79e711cbee48856a30886",
          "number":1,
          "country":"Yemen",
          "date":"2002-11-03T00:00:00.000Z",
          "narrative":"In the first known US targeted assassination using a drone, a CIA Predator struck a car, killing 6 people.",
          "town":"",
          "location":"Marib Province",
          "deaths":"6",
          "deaths_min":"6",
          "deaths_max":"6",
          "civilians":"0",
          "injuries":"",
          "children":"",
          "tweet_id":"278544689483890688",
          "bureau_id":"YEM001",
          "bij_summary_short":"In the first known US targeted assassination using a drone, a CIA Predator struck a car killing six al Qaeda suspects.",
          "bij_link":"http://www.thebureauinvestigates.com/2012/03/29/yemen-reported-us-covert-actions-since-2001/",
          "target":"",
          "lat":"15.47467",
          "lon":"45.322755",
          "articles":[  
          ],
          "names":[  
            "Qa'id Salim Sinan al-Harithi, Abu Ahmad al-Hijazi, Salih Hussain Ali al-Nunu, Awsan Ahmad al-Tarihi, Munir Ahmad Abdallah al-Sauda, Adil Nasir al-Sauda'"
          ]
        }
    ...
      ]
    }
    

Let's get started.

### Amazon Setup

First things first, we need to setup an Amazon Developer account. Head on over to [http://developer.amazon.com](http://developer.amazon.com) to register!

![0_XeDsIe-f3nzD8YSB](../../../static/content/images/2018/06/0_XeDsIe-f3nzD8YSB.png)

![0_JSrqNIDgHZ5GOOmT](../../../static/content/images/2018/06/0_JSrqNIDgHZ5GOOmT.png)

After you've logged in, click on the "Alexa" tab in the top menu bar, and then click on "Alexa Skills Kit".

![0_UeBFQwoNmDsHOJ4-](../../../static/content/images/2018/06/0_UeBFQwoNmDsHOJ4-.png)

![0_K19zjGzj0xQ-Uyh8](../../../static/content/images/2018/06/0_K19zjGzj0xQ-Uyh8.png)

In the top right, you should see a button that says "Add a New Skill" - click on that and it will bring you to the setup screen for our app!

![0_3FS1GaOp-djhTCMf](../../../static/content/images/2018/06/0_3FS1GaOp-djhTCMf.png)

Since we are doing an Alexa app based on drone strikes, I'm going to name mine Drone Strike with the "invocation name" of drone strike. If you are building your own app just know that the Name is what shows up in the Amazon store and the Invocation Name is what a user has to says to open your app. i.e. "Alexa, open Drone Strike"

![0_xPZ9Jw_SqfPvPwOO](../../../static/content/images/2018/06/0_xPZ9Jw_SqfPvPwOO.png)

Lastly, we need to setup our Interaction Model. Today's tutorial is not about what is an intent or utterances. To get a better understanding of that, here are a couple resources that I've found helpful:

- [Defining the Voice Interface](https://medium.com/r/?url=https%3A%2F%2Fdeveloper.amazon.com%2Fpublic%2Fsolutions%2Falexa%2Falexa-skills-kit%2Fdocs%2Fdefining-the-voice-interface%23The%2520Intent%2520Schema) - by Amazon
- [Defining Utterances for Alexa Skills Kit](https://medium.com/r/?url=http%3A%2F%2Fwww.makermusings.com%2F2015%2F07%2F21%2Fdefining-utterances-for-the-alexa-skills-kit%2F) - by Maker Musings
- [Understanding How Users Invoke Custom Skills](https://medium.com/r/?url=https%3A%2F%2Fdeveloper.amazon.com%2Fpublic%2Fsolutions%2Falexa%2Falexa-skills-kit%2Fdocs%2Fsupported-phrases-to-begin-a-conversation) - by Amazon

For today's session, here are the intents:

    {
      "intents": [
        { "intent": "GetRecentDroneStrike" },
        { "intent": "AMAZON.HelpIntent" },
        { "intent": "AMAZON.StopIntent" },
        { "intent": "AMAZON.CancelIntent" }
      ]
    }
    

And here are the sample utterances:

    GetRecentDroneStrike recent drone strike  
    GetRecentDroneStrike what was the most recent strike  
    GetRecentDroneStrike recent strike  
    GetRecentDroneStrike what was the last drone strike  
    GetRecentDroneStrike last drone strike
    

Go ahead and past them in like you see below.

![0_-i6SHpZL8cxTO5_Q](../../../static/content/images/2018/06/0_-i6SHpZL8cxTO5_Q.png)

## On to Code!

Up to now, we haven't written any code but are already halfway there!

Here's what we are going to need to run our Alexa app:

1. A Python script
2. Ngrok - a local tunnel for quick testing

That's it!

Let's get started then!

First off, go ahead and create a folder on your local machine to store your code. I called mine `alexa-drone-strike` in a folder on the Desktop.

Next head on over to [https://ngrok.com](https://ngrok.com) to download ngrok. When you download it, it'll be a Unix Executable file - copy and paste (or move) it to the directory you just created for this project. Your folder should look something like this.

![0_DwGp1JqXVj0N-xQw](../../../static/content/images/2018/06/0_DwGp1JqXVj0N-xQw.png)

I'm a personal fan of `virtualenv` to manage my python environments. I do not want to have to mess with system level python whenever I do a `pip install`. If you are unfamiliar with `virtualenv` think of it like a quick environment where you can change and install python packages without affecting your computer's setup. Here is a quick resource tutorial on how to get it going that I would highly recommend: [http://docs.python-guide.org/en/latest/dev/virtualenvs/](http://docs.python-guide.org/en/latest/dev/virtualenvs/)

Let's go ahead and open up our terminal and migrate to our directory. For me, that would be `cd ~/Desktop/alexa-drone-strike`

To install `virtualenv`, run `pip install virtualenv`.

*Note, you may get a "permission denied" error. Since we are going to be using `virtualenv` in other projects and on our computer, we are going to have to run it as `sudo`. If you get a permission denied, you can run `sudo pip install virtualenv` or, as a fun trick, if you do `sudo !!` it will run the last command as `sudo`.

Now that we have `virtualenv` installed, let's create an environment with the command `virtualenv venv` - it should look something like this:

![0_3a6V2ipw4QNaqOzc](../../../static/content/images/2018/06/0_3a6V2ipw4QNaqOzc.png)

Now, to activate this environment, run `source venv/bin/activate`. You will now be in the virtual environment called `venv`.

*Note, to get out of the virtual environment, just type in `deactivate` in your terminal.

At this point we can go ahead and install our main package for this tutorial `flask-ask`. In your terminal, run `pip install flask-ask`. Hopefully it succeeded and it installed a bunch of dependencies along the way.

![0_Mywf2Hi1Qx0F0rfQ](../../../static/content/images/2018/06/0_Mywf2Hi1Qx0F0rfQ.png)

With `flask-ask` installed, we can finally create our python file!

Open up this folder in your favorite code editor (mine is Atom), and you will need to create a new file — I called mine `drone_strike.py`

At the very top of the file, we are going to start out with the basics that we need — imports.

    from flask import Flask  
    from flask_ask import Ask, request, session, question, statement
    

Next up, let’s get the server setup done with:

    app = Flask(__name__)  
    ask = Ask(app, "/")
    

And lastly for this setup, we need to bind it to a port:

    if __name__ == '__main__':  
        # Bind to PORT if defined, otherwise default to 5000.
        port = int(os.environ.get('PORT', 5000))
        app.run(host='0.0.0.0', port=port)
    

So right now, our `drone_strike.py` should look something like this:

    from flask import Flask  
    from flask_ask import Ask, request, session, question, statement
    app = Flask(__name__)  
    ask = Ask(app, "/")
    if __name__ == '__main__':  
        # Bind to PORT if defined, otherwise default to 5000.
        port = int(5000)
        app.run(host='0.0.0.0', port=port)
    

Woo! We are almost at the point where we can talk to Alexa to test.

To get a quick function going, we are going to add a launch command - the command that runs whenever you say `Alexa open (name of your app)`

Right below where we initialized ask with `ask = Ask(app, "/")` add in this code:

    @ask.launch
    def launch():  
        speech_text = "Hello, welcome to Drone Strike"
        return question(speech_text).reprompt(speech_text).simple_card('Welcome', speech_text)
    

Let’s diagnose what we just put in. First off `@ask.launch` is the intent that runs whenever we launch the app. It then calls the function `launch()`. Inside `launch()` we are defining what we want the app to say and then we return a `question` and a `simple_card`.

The `question` allows it so that once Alexa finishes saying the `speech_text`it listens for more information. This is different from a `statement` where once Alexa finishes saying her bit, she closes the app.

The `simple_card` is what shows up inside the official Alexa app on your phone!

Okay, now that we have our first function in there, let’s get it up and running to test it all out. To start our application, in the terminal run `python drone_strike.py` and it should start it up like below.

![0_-2t8M1zOkcwcYnSl](../../../static/content/images/2018/06/0_-2t8M1zOkcwcYnSl.png)

Open another terminal, move into your directory and type in `./ngrok http 5000`. This will open up a local tunnel session and you are going to need the http url that it assigns you. It should look something like this:

![0__07mA9p29mg36FQt--1-](../../../static/content/images/2018/06/0__07mA9p29mg36FQt--1-.png)

Head back on over to the Amazon Developer website, click on “Configuration” on the left hand side. Under “Endpoint”, choose “HTTPS” for the “Server Endpoint Type”, check “North America” and then past in the ngrok url. It should look something like the image below:

![0_-OwqMQVZQHZUPmJv](../../../static/content/images/2018/06/0_-OwqMQVZQHZUPmJv.png)

Go ahead and click “Save” in the bottom left, and then “Next”. For SSL Certificate, for now, choose the middle one like shown below:

![0_SbCRmQJRsNFgXzd3](../../../static/content/images/2018/06/0_SbCRmQJRsNFgXzd3.png)

Click next and you should now be on the “Test” screen. Woo! We can now test our app!

So to test our app you are going to need your Amazon Alexa device up and running. The device needs to be connected to the same Amazon account as you are developing on. If you need to change the account for it, open up the Alexa app on your phone and go through the process there (or search online).

Quick check before we say something:

1. The python server is running in one terminal with python drone_strike.py
2. Ngrok is running in another terminal
3. You copied the ngrok url over to the Alexa Developer dashboard
4. You Alexa device and app are hooked up to the same account as your developer account

If that is all good and done, go ahead and say: **Alexa, open Drone Strike**

Hopefully Alexa responds with “Hello, welcome to Drone Strike”! Progress!

If all the steps above have been done and you’re still not getting a response, open up the Alexa app on your phone, open the hamburger navigation, go to skills, and then in the top right go to “My Skills.” Make sure Drone Strike is there and enabled. If it isn’t there then the account on your phone/alexa device is not the same as the developer account and you’ll need to fix that.

If it did work, then congratulations! You’ve got your first Alexa app (technically) running!

## App Functionality

Alright so right now our Alexa app can’t do much at all. We basically just coded the “Hello World” for Alexa, let’s do better than that.

Remember above when I had you copy and paste the intents and utterances in? Well let’s go back to those and discuss them a little more.

### Intents & Meanings

**GetRecentDroneStrike** — the goal of this intent is to go through the data and just find the last element in the array — aka the most recent drone strike

As you can see, our intents are pretty simple and also leaves some great room for improvement if you were to take this further. Think about some of these intents — the “this year” intents are only for the current year, there is no “for 2016” or “for 2010.” Same for month. Also, what if you wanted to know more about a drone strike? If you look back at the data above, there’s more to it than just numbers and counts. But, I’ll leave that up for you to develop after this tutorial!

### Utterances

We also have our utterances above. These are example phrases that trigger each intent. So for example, the phrase “what was the most recent strike” triggers GetRecentDroneStrike intent. But you also need to include variants of the phrase - the more you include, the better Alexa can get at responding to you.

Let’s get back to coding.

## Coding our App

Okay, nitty gritty coding. Here we go.

First off, we need a couple mor python package — `requests` - to send a GET request to the Drontstream API. Go ahead and install it in your terminal with `pip install requests`

After it’s done installing, add it to the top of `drone_strike.py` with `import requests`. We are also going to need some dateutil packages, so after `import requests` add `import dateutil.parser` and `from datetime import date`

Below all the import statements, let’s also create a variable for our API url:
`url = 'http://api.dronestre.am/data'`

Let’s knock out our first intent `GetRecentDroneStrike`

The beginning of our function should look like this:

    @ask.intent('GetRecentDroneStrike')
    def get_recent_drone_strike():  
        response = requests.get(url).json()
    

The response is the data coming back from the API. Let’s parse that data and get the strikes out of it.

    strikes = response["strike"]  
    strikes_count = len(strikes)  
    last_strike = strikes[strikes_count-1]
    

The `last_strike` variable is the last element in the array, aka the most recently add strike. For this intent, we want to output the **date, location, and narrative**

Let’s grab those fields from the data with

    // l_s stands for last_strike
    l_s_narrative = last_strike["narrative"]  
    l_s_date = dateutil.parser.parse(last_strike["date"])  
    l_s_location = last_strike["location"] + " in " + last_strike["country"]
    

Next, let’s display the date in a more voice friendly way.

    l_s_date_text = l_s_date.strftime("%A") + " " + l_s_date.strftime("%B") + " " + l_s_date.strftime("%d") + ", " + l_s_date.strftime("%Y")
    

Lastly, we need to output all of this using flask-ask helper functions:

    last_strike_output = "The last drone strike was on " + l_s_date_text + " in " + l_s_location + ". " + l_s_narrative  
    return statement(last_strike_output).simple_card('GetRecentDroneStrike', last_strike_output)
    

So what is this going to sound like?

The* last drone strike was on Tuesday September 13, 2016 in Al Bayda Province in Yemen. Missiles struck a car in Rada’a, killing 5 people.*

Alright, so at this point your file should look like this:

    from flask import Flask  
    from flask_ask import Ask, request, session, question, statement
    import requests  
    import dateutil.parser  
    from datetime import date
    app = Flask(__name__)  
    ask = Ask(app, "/")
    url = 'http://api.dronestre.am/data'
    @ask.launch
    def launch():  
        speech_text = "Hello, welcome to Drone Strike"
        return statement(speech_text).simple_card('Welcome', speech_text)
    @ask.intent('GetRecentDroneStrike')
    def get_recent_drone_strike():  
        response = requests.get(url).json()
        strikes = response["strike"]
        strikes_count = len(strikes)
        last_strike = strikes[strikes_count-1]
        l_s_narrative = last_strike["narrative"]
        l_s_date = dateutil.parser.parse(last_strike["date"])
        l_s_location = last_strike["location"] + " in " + last_strike["country"]
        l_s_date_text = l_s_date.strftime("%A") + " " + l_s_date.strftime("%B") + " " + l_s_date.strftime("%d") + ", " + l_s_date.strftime("%Y")
        last_strike_output = "The last drone strike was on " + l_s_date_text + " in " + l_s_location + ". " + l_s_narrative
        return statement(last_strike_output).simple_card('GetRecentDroneStrike', last_strike_output)
    if __name__ == '__main__':  
        # Bind to PORT if defined, otherwise default to 5000.
        port = 5000
        app.run(host='0.0.0.0', port=port)
    

And hopefully that’s all we need!

Head on over to your terminal **that is running python drone_strike.py**, cancel the process with CMD-C, and then run it again with `python drone_strike.py`. *Note, if you accidentally close the ngrok process, you'll have to run it again, copy the url, and paste it in the configuration.

If the process is up and running, go ahead and ask Alexa! Hopefully she will respond with the correct text!

Congratulations, you’ve made your first Alexa app!

---

## Recap & Final Thoughts

Congratulations! Like I said above, there are many many more ways you can use this data. Today was all about getting your first introduction into Alexa apps and building them. If you wanted to deploy this app, Heroku would be a great service or you can follow this tutorial using Zappa and Amazon AWS: [https://www.youtube.com/watch?v=mjWV4R2P4ks](https://www.youtube.com/watch?v=mjWV4R2P4ks)

Here are some more resources:

- Flask-Ask: [https://github.com/johnwheeler/flask-ask](https://github.com/johnwheeler/flask-ask)
- AWS in Plain English: [https://www.expeditedssl.com/aws-in-plain-english](https://www.expeditedssl.com/aws-in-plain-english)
- Getting started with Skills Kit:[https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide](https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/getting-started-guide)
- Build your first Alexa Skill: [https://medium.com/@bthdonohue/build-your-first-alexa-skill-8a37dc3103d6#.9ys55u201](https://medium.com/@bthdonohue/build-your-first-alexa-skill-8a37dc3103d6#.9ys55u201)

Let me know if you have any questions or problems below. Also be sure to checkout the Github repo for the final product: [https://github.com/kevinguebert/alexa-drone-strike](https://github.com/kevinguebert/alexa-drone-strike)
