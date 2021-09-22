---
title: "Having a good mental model for programming"
description: "Let's rethink our mental model to understand code better."
date: "2021-08-15"
---

A topic that I've noticed that isn't being emphasized enough in web development courses (at least in my experience) is mental models. Having the correct mental model can help you better understand what's happening under the hood, which can help you learn more complex concepts and prevent some tricky bugs. And the sooner you learn to think with a better mental model, the easier it'll make things in the long run.

<br />

I am lucky to have been able to take the Just JavaScript email course by Dan Abramov and Maggie Appleton when I was very much early in my journey of learning JavaScript and avoided building a mental model that would make understanding fundamental concepts more difficult. And now that I'm diving into relatively more complex topics, have I realized how important that exposure back then was.

<br />

One of the first and important mental models that I learned is about variables and how to look at them. If you look at the following piece of code, how do you visualize or think about what's happening?

<br />

```
let x = "javascript";
```

<br />

What is `x`? How does it relate to the string `"javascript"`?

<br />
<br />

Let's break it down. First off, I'd recommend **not** thinking of `x` as a box that contains the value `"javascript"` — this is very important. `x` itself is also **not** a value.

<br />

A better way is to think of `x` as an octopus' limb — or as Dan Abramov puts it: a *wire* — which **grasps or points to a value**.

<br />

So instead of interpreting the above code as follows:

> A box named "x" contains the value "javascript".

<br />

It's better to look at it this way:

> A **wire** starting from "x" **ends pointing to** the value "javascript".

<br />

(another way to look at it: *a one-legged octopus called "x" is grabbing onto the string "javascript"*.)

<br />
<br />

Let's use this new mental model: what is `console.log` in the code snippet below going to print - what is `yourFood` going to be?

<br />

```
let myFood = "pizza";
let yourFood = myFood;
myFood = "fries";
console.log(yourFood);
```
<br />

Do you have your answer? Okay, now take a moment and think about how you'd explain how you got to that conclusion, using the aforementioned mental model.

<br />

Here's how I'd look at the 4 lines of code:

<br />

1. <span>A wire starting from `myFood` is pointing to the value "pizza".</span>
2. <span>Another wire starting from `yourFood` is pointing to `myFood`, i.e. pointing to "pizza" (since that's what `myFood` is pointing to).</span>
3. <span>`myFood` is now pointing to "fries".</span>
4. <span>The `console.log` statement will print "pizza". This is because the wire starting from `yourFood` is still pointing to "pizza" — only `myFood` points to a different value now.</span>

<br />

Feel free to draw the above 4 steps out to better visualize this way of thinking. Do you notice how this mental model helps you better understand and explain what a piece of code is doing? Isn't it better than, say, the "box" mental model (where we think of a variable as a box)? I think it is!

<br />

We didn't dive too deep in this article but I hope reading this helps you take a step back and rethink your own mental model - see if you can improve it in any way.

<br />

I hope you enjoyed reading this and I'd love to hear if you have any comments! Don't hesitate to send me an email at <u>arashnawy@gmail.com</u> or DM me on <u>[Twitter](https://twitter.com/arash11gt)</u>. Until next time!
