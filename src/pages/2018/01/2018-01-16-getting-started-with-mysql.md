---
title: "Getting started with MySQL"
path: "/2018/01/16/getting-started-with-mysql"
date: "2018-01-17T02:40:00.000Z"
tags: ["Coding","Tutorials","MySQL"]
excerpt: "Want to learn how to use MySQL? This post will share how to get started with the basics!

## Before You Start

- I am using a Mac, so all my commands and applications are for a Mac. If you would like..."
---

Want to learn how to use MySQL? This post will share how to get started with the basics!

## Before You Start

- I am using a Mac, so all my commands and applications are for a Mac. If you would like to understand how to use it on Windows, let me know on [Twitter](http://twitter.com/kevinguebert) and I can try and help you out!
- This is coming from a developer, so this will be done using the command line. If you are looking for a more "one click install", visit [mysql.com](https://dev.mysql.com/downloads/mysql/) to download.

## Getting started

First off, most Mac computers do not come with MySQL installed, so we actually need to install it on our computer. So let's start with that.

### Installation

#### Install MySQL

1. We are going to be using [Homebrew](https://brew.sh/) to help us with the installation. If you do not already use it, I would recommend learning about it and discovering how powerful it is.
2. Let's open up the terminal and paste the line below to install Homebrew:

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    

1. Note, you may need to close and restart your terminal for this next step, but let's make sure it works by typing in:

    brew info mysql
    

1. Hopefully that works successfully! If it does, you should see something like below:

    mysql: stable 5.7.20 (bottled), devel 8.0.3-rc
    Open source relational database management system
    https://dev.mysql.com/doc/refman/5.7/en/
    

1. Now to install MySQL, all we need to do is:

    brew install mysql
    

1. 
Congratulations! That was a quick and easy way to install MySQL! However, for those keen eyed out there, you will see in the output from the previous command that there are some recommended steps for us to take.

2. 
If you would like to make your MySQL connection more secure on your computer, you can run `mysql_secure_installation.` This will ask you to change the root password for MySQL because when it originally installed, it did not supply one. That is up to you!

3. 
Lastly, you will see at the bottom of the output these lines:

    To have launchd start mysql now and restart at login:
      brew services start mysql
    Or, if you don't want/need a background service you can just run:
      mysql.server start
    

Above it states you can either have MySQL running all the time or start it only when you need it. I personally use MySQL more often than not, so I ran `brew services start mysql`. If you don't use it as much, `mysql.server start` works just as well - just make sure to remember to start it each time you need it!

#### Install SequelPro

One of my favorite admin tools to work with MySQL. Visit [SequelPro.com](https://www.sequelpro.com/) to download.

##### Setting up SequelPro and MySQL

Now that we have SequelPro installed and MySql running (from `mysql.server start`), we can connect!

1. Go ahead and open up SequelPro on your computer.
2. You should be on a screen where in the top middle is says "Enter connection details below, or choose a favorite" - we are going to go ahead and enter connection details.
3. In the input boxes in the middle, make sure "Standard" is select. Then you can input the follow:

- Host: `127.0.0.1`
- Username: `root`
- If you entered a password, put that in the next field.

1. Go ahead and click "Connect" and you should be connected!

## Working with SequelPro

Now that we are connected, we could start working with some data! For this next part of the tutorial, we are going to use some dummy data.

1. Head one over to [https://www.mockaroo.com/](https://www.mockaroo.com/), change the "Format" to SQL and also check "include create table". Click "Download Data" but also make note of the "Table Name" - it is mostly likely "MOCK_DATA"
2. Head back to SequelPro and go to Database->Add Database
3. In the Database Name field, make sure you have the same name as from mockaroo.com - most likely "MOCK_DATA". When you have confirmed that, click "Add"
4. Next up, go to File->Import
5. Find the file you downloaded in step 1 from Mockaroo and click "Open"
6. After it has imported, you should see on the left hand side under "Tables" your table of "Mock Data".
7. If you click on the "Content" tab in the top of SequelPro, you should be able to see all the data within the MOCK_DATA table.

Congratulations you have successfully setup and installed MySQL!

More tips:

- If you want to query the database, click on the "Query" tab in the top and type in your command. For out data, if you do `SELECT * from MOCK_DATA WHERE gender="male"`, you should get all the male results!
- Have your own sql file? Go ahead and create a new database and import your data!

Have any more questions? Let me know on [Twitter @kevinguebert](http://twitter.com/kevinguebert)!
