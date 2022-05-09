---
title: "[[Prototype]] vs prototype"
description: "Let's look at the difference between [[Prototype]] and prototype."
date: "2022-05-09"
---

One of the concepts that I was having some difficulty wrapping my head around when I started learning JavaScript was prototypal inheritance and especially the difference between `prototype` and `__proto__` and `[[Prototype]]` and `Object.getPrototypeOf()`. After a bunch of reading and experimenting, I came up with the following diagram to get a better understanding of the prototypal inheritance nature of JavaScript, but more importantly, the difference between the different "prototype"s.

<br />

![A diagram representing the prototype inheritance in a simple form.](/prototype.png)

<br />

<i>
Note: The only straight line used is to represent the prototype chain. Curved arrows are used for describing the properties and adding a little more context.
</i>

<br />
<br />

In the diagram, we have a constructor function and an instance of it, called `Foobar` and `instance`, respectively.

<br />

The constructor will have a property called `prototype`, which is an object and which is <b>used as a blueprint for any instances created by it</b>. The constructor and its instances will also have a special hidden property called `[[Prototype]]`, which is linked to <i>their respective constructors'</i> `prototype` property. When you call the constructor with the `new` keyword prepended (eg. `new Foobar()`), `prototype` will become a blueprint for the instance object you just created and specifies that `[[Prototype]]` be assigned to all instances.

<br />

Note that JavaScript code on the page does not have direct access to hidden properties such as `[[Prototype]]`; hidden properties are denoted by the double square brackets wrapping the keyword. This is added by the JavaScript engine (such as the V8 engine) and is only accessible in that environment.

<br />

However, for the sake of our <a href="./mental-model" target="blank">mental model</a>, we can think of it as `instance.[[Prototype]]` being linked to `Foobar.prototype`. At the same time, `Foobar.[[Prototype]]` will point to the `prototype` property of its constructor, which is `Function.prototype`. Keep in mind that `instance` does not have a `prototype` property. Why? Because it's not a constructor.

<br />

Simply put, a constructor object will have a hidden `[[Prototype]]` property that points to <i>its</i> constructor <u>and</u> a non-hidden `prototype` object property that becomes the blueprint for any instances you create.

Its instance will have also have a hidden `[[Prototype]]` property that points to its parent/constructor but won't have a `prototype` property unless it's used as a constructor.

<br />

As you can see, an instance's hidden `[[Prototype]]` property points to its constructor's `prototype` property. At the same time, this constructor's `[[Prototype]]` points to <i>its</i> constructor's `prototype`, and so on. These links create a chain - this is called the <b>prototype chain</b>.

<br />

So what is `__proto__` then? Recall that `[[Prototype]]` is a hidden property and JavaScript code on a page can't access it directly. `__proto__` is a property implemented by many browsers that allows you to access `[[Prototype]]` using the JavaScript code on the page.

<br />

However, using `__proto__` can be dangerous and is <b>not recommended</b>. Instead, there's another way to access `[[Prototype]]`, which is to use the method `Object.getPrototypeOf()`. If you need to set the `[[Prototype]]` of an object to something else, you can use the `Object.setPrototypeOf()` method.

<br />

This article didn't go over all the details related to the prototypal inheritance in JavaScript. If you'd like to read more about inheritance and the prototype chain, <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain" target="_blank">this MDN doc</a> is a good place.

<br />

I hope you enjoyed reading this and I'd love to hear if you have any comments! Don't hesitate to send me an email at <u>arashnawy@gmail.com</u> or DM me on <u>[Twitter](https://twitter.com/arash11gt)</u>. Until next time!
