---
title: "Understanding Logical Operators with Non-boolean Objects in Javascript"
path: "/2018/06/17/understanding-logical-operators-with-nonboolean-objects"
date: "2018-06-17T23:24:34.000Z"
tags: ["Coding","Technology","Tutorials"]
excerpt: "Usually with logical operators in Javascript, one would use boolean checks. For example:

    if (true) {
        // do this
    } else {
        // do that
    }
    

With these operations, we can..."
---

Usually with logical operators in Javascript, one would use boolean checks. For example:

    if (true) {
        // do this
    } else {
        // do that
    }
    

With these operations, we can easily condense the above code:

    var x = 1;
    var result = (x > 0) ? 'x is greater than 0' : 'x is not greater than 0';
    

The above situations are fairly straight forward because we have a defined and known value that evalues to `true` or `false`. What happens though when you introduce values that could be `truthy` or `fasly`?

The same logic applies, one needs to be more careful though with the output. Remember, that many variables may be considered `truthy` depending on their type. Objects *always evaluate to truthy even if they are empty*.

    var sO = {};
    const opt = sO || { name: 'Default' };
    const opt2 = !sO || { name: 'Default' };
    const opt3 = !!sO || { name: 'Default' };
    
    // opt = {}
    // opt2 = {name: 'Default'}
    // opt3 = true
    

So be careful if you are every checking against non-boolean objects! Make sure you know what the expected boolean output of that object is, it may not be what you think logically.

Here's a couple examples of things that come out to be truthy:

- Any object (even if it is empty)
- Any array (even if it is empty)
- Strings containing only whitespace (`" "`)
- The string `"false"`

Some falsy objects:

- `undefined`
- `null`
- `false`
- `0`
- `NaN`
- `''` (empty string)
