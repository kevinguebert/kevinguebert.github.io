---
layout: post
title: Getting started with MySQL
tags: [code, mysql,tutorial]
published: false
categories:
- blog
---


Want to learn how to use MySQL? This post will share how to get started with the basics!

## Before You Start

- I am using a Mac, so all my commands and applications are for a Mac. If you would like to understand how to use it on Windows, let me know on [Twitter](http://twitter.com/kevinguebert) and I can try and help you out!
- This is coming from a developer, so this will be done using the command line. If you are looking for a more "one click install", visit [mysql.com](https://dev.mysql.com/downloads/mysql/ to download.

## Getting started

First off, most Mac computers do not come with MySQL installed, so we actually need to install it on our computer. So let's start with that.

### Installation

#### Install MySQL

1. We are going to be using [Homebrew](https://brew.sh/) to help us with the installation. If you do not already use it, I would recommend learning about it and discovering how powerful it is.
2. Let's open up the terminal and paste the line below to install Homebrew:

```
/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
3. Note, you may need to close and restart your terminal for this next step, but let's make sure it works by typing in:

`brew info mysql`

4. Hopefully that works successfully! If it does, you should see something like below:

```
mysql: stable 5.7.20 (bottled), devel 8.0.3-rc
Open source relational database management system
https://dev.mysql.com/doc/refman/5.7/en/
```

5. Now to install MySQL, all we need to do is:

`brew install mysql`

6. Congratulations! That was a quick and easy way to install MySQL! However, for those keen eyed out there, you will see in the output from the previous command that there are some recommended steps for us to take.

7. If you would like to make your MySQL connection more secure on your computer, you can run `mysql_secure_installation.` This will ask you to change the root password for MySQL because when it originally installed, it did not supply one. That is up to you!

8. Lastly, you will see at the bottom of the output these lines:

```
To have launchd start mysql now and restart at login:
  brew services start mysql
Or, if you don't want/need a background service you can just run:
  mysql.server start
```

Above it states you can either have MySQL running all the time or start it only when you need it. I personally use MySQL more often than not, so I ran `brew services start mysql.` If you don't use it as much, `mysql.server start` works just as well - just make sure to remember to start it each time you need it!


#### Install SequelPro

One of my favorite

## Querying a Database
