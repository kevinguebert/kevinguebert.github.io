---
title: "Look-Then-Leap Rule - Explained"
path: "/2018/01/08/look-then-leap"
date: "2018-01-09T02:35:00.000Z"
tags: ["Coding","Books","Algorithms to Live By"]
excerpt: "> **Look-Then-Leap Rule:** 'You set a predetermined amount of time for 'looking' - that is, exploring your options, gathering data - in which you categorically don't choose anyone, no matter how..."
---

> **Look-Then-Leap Rule:** "You set a predetermined amount of time for 'looking' - that is, exploring your options, gathering data - in which you categorically don't choose anyone, no matter how impressive. After that point, you enter the 'leap' phase, prepared to instantly commit to anyone who outshines the best applicant you saw in the look phase." (13)

## Explanation

Scenario: You are interviewing for a new secretary and want to pick the best applicant. Once you have passed on a candidate, you cannot go back and pick them. You are interviewing at random.

#### 1 Applicants

Hire them!

#### 2 Applicants

For 2 applicants, you have a 50/50 shot at hiring the best one. Either pick the first one, or, if you don't, you have to pick the second one.

#### 3 Applicants

Let's say you have 3 applicants, ranked as the best being 1, second best being 2, and worst being 3. With 3 applicants, there are 6 possible scenarios in which you can interview:

1-2-3 (that is: best, second best, worst)

1-3-2

2-1-3

2-3-1

3-1-2

3-2-1

With the 3 applicants, *we can actually do just as well as we did with just 2 applicants - a 50/50 shot.*

How?

When we see the first applicant, we don't have any baseline information so we pass up on them to gather more data (the "look") phase. When we see the final applicant, we only have one person so we have to pick them.

With the second option, there is more room. With the "Look-Then-Leap" Rule - **if the second option is better than the first one, then you leap. If it is not, then you move to the next one.**

Let's visualize this - remember, you are on the second candidate because the first candidate was your "look" - or information gathering:

**1 - 2 - 3**

In this scenario, we have already passed up on the best candidate (1), so this would be a Failure.

**1 - 3 - 2**

Similar to the one above, we have already passed up on the best candidate (1), so also a Failure.

**2 - 1 - 3**

In this scenario, the second candidate is better than the first one (1 is better than 2), so you would leap on this candidate - Success!

**2 - 3 - 1**

The second candidate is *not* better than the first one (3 is worse than 2), so you would then move on to the 3rd candidate. The 3rd candidate is better than the first one, so you would then leap - Success!

**3 - 1 - 2**

In this scenario, the second candidate is better than the first one (1 is better than 3), so you would leap on this candidate - Success!

**3 - 2 - 1**

In this last scenario, the second candidate is better than the first candidate (2 is better than 3), so that means we would leap by the rules. Unfortunately that means we miss out on the last candidate, the 1 - Failure.

Looking at the data above we have 3 successes and 3 failures - thus a 50/50 chance when we have 3 candidates - tada!

Successes: [2,1,3], [2,3,1], [3,1,2]

Failures: [1,2,3], [1,3,2], [3,2,1]

---

To continue on an enumerate more candidates - 4, 5, 6, etc. - the place where you end up drawing the line between looking and leaping is actually 37% (the 37% Rule).

#### 37% Rule

When choosing the best candidate, you only have a 37% chance of hiring the best possible applicant.

**How it works:** You look at the first 37% of the applicants, not choosing any of them, then after that, leap for anyone that is better than all those you have seen so far.

---

Next time you are making a decision over a large amount of data and you are trying to decide the "best", it may be worth it to consider this algorithm!

--

Have any questions or comments? Let me know in the comments below.

---

Post inspired from: **Algorithms to Live By** by Brian Christian and Tom Griffiths.
