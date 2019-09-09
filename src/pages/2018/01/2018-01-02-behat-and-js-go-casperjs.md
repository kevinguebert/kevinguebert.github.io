---
title: "Behat and JS? Go CasperJS"
path: "/2018/01/02/behat-and-js-go-casperjs"
date: "2018-01-03T02:31:00.000Z"
tags: ["Drupal","Coding"]
excerpt: "Today while writing tests (shocking, I know), I came across an interesting and unknown (at the time) scenario. For the site, I wanted to test and make sure a certain element was showing up on the..."
---

Today while writing tests (shocking, I know), I came across an interesting and unknown (at the time) scenario. For the site, I wanted to test and make sure a certain element was showing up on the page. At the time, I was writing Behat tests to do some functionality and the tests are very simple to write, so I decided to try and create a simple test for my element. *Usually* this is pretty straightforward:

    Given I am on "/" #the homepage
    Then I should see ".ad-block" element
    

As you can see above, I am checking to make sure an ad is showing up on the page. *However* the problem is that the ads do not populate on first page load. They have to send a request to get the ads and populate them. So, this means for Behat, it is **not waiting** for those ads to load! The driver I am using is the Goutte driver, so any chance at creating a FeatureContext is not possible with javascript. Example:

    Given I am on "/"
    And I wait 4 seconds
    

That's what I learned today! Luckily, Behat is our **Behavior Driven Development** testing framework, but we also use CasperJS for our testing. In fact, there were already tests written for other ads on the site. The more you know!
