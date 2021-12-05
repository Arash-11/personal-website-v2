---
title: "What does npx do?"
description: "Let's see what the difference between npx and npm is."
date: "2021-11-07"
---

You've probably used the `npm` command before and know what it does. But if you've wondered what `npx` does and how it's different from `npm`, you've come to the right place. Let's take a closer look at what `npx` is.

<br />

`npx` stands for Node Package Execute, which shipped with Node 8.2/npm 5.2.0+, and is a <strong>task runner</strong>.

<br />

On the other hand, `npm` is a <strong>task manager</strong>, and only installs and manages packages but doesn't run them.

<br />

Let's look at two examples to understand what this means.

<br />

<strong>EXAMPLE 1</strong>

<br />

Let's say you've installed webpack (and webpack-cli) locally, by running:

<br />

```
$ npm i -D webpack webpack-cli
```

<br />

If you want to execute the `webpack` package now, just running the following won't work:

<br />

```
$ webpack
```

<br />

Why? Because it's not a global install. When executables are installed using npm packages, npm creates links to them.

<br />

<strong>Local</strong> installs have links created at the `./node_modules/.bin/` directory.

<strong>Global</strong> installs have links created from the `bin/` directory.

<br />

So, you have two options here:

<br />

1. Execute `webpack` using the local path by running the webpack binary:

<br />

```
$ ./node_modules/.bin/webpack
```

<br />

or

<br />

2. Add a script in your `package.json`:

<br />

```
{
  ...
  "scripts": {
   "webpack": "webpack"
  },
  ...
}
```

<br />

Then run the following in your terminal:

<br />

```
$ npm run webpack
```

<br />
<br />

Here's where `npx` can help make things easier. After installing webpack and webpack-cli by running:

<br />

```
$ npm i -D webpack webpack-cli
```

<br />

you can just run the following command:

<br />

```
$ npx webpack
```

<br />
<br />
<br />

<strong>EXAMPLE 2</strong>

<br />

Let's say, that you want to use `create-react-app`, so you run this:

<br />

```
$ npm i -g create-react-app && create-react-app my-app
```

<br />

And a few months later, if you want to create a new project, you need to run the following:

<br />

```
$ create-react-app my-new-app
```

<br />

But what if you wanted to use the latest version of CRA? You'll need to run the following command again:

<br />

```
$ npm i -g create-react-app
```

<br />

There must be an easier way to tackle this? You guessed it - `npx`. If you want to use the latest version of the package every time, without needing to re-install it globally, you can run the following command:

<br />

```
$ npx create-react-app my-app
```

<br />
<br />
<br />

Using our two examples above, let's look at the three main features of `npx`.

<br />

### 1. Easily run local commands

<br />

Developers used to publish most of the executable commands as global packages, in order for them to be in the path and executable immediately. But this was a pain because you couldn't really install different versions of the same command.

<br />

Running `npx <command_name>` automatically finds the correct reference of the command inside the `node_modules` folder of a project, without needing to know the exact path, and without requiring the package to be installed globally and in the user's path (see <strong>EXAMPLE 1</strong>).

<br />
<br />

### 2. Installation-less command execution

<br />

`npx` allows you to run commands without first installing them. This is useful because you don't need to install anything and you can run different versions of the same command, using the syntax @version.

<br />

A good example of this is create-react-app, as seen in <strong>EXAMPLE 2</strong> above. The different thing with `npx` here (as opposed to using `npm`) is that it will install create-react-app, run it once, then delete it — you won't have a local copy anymore.

<br />

`npx` also allows you to try out a specific package easily, without needing to install the dependencies in your local `node_modules` folder.

<br />
<br />

### 3. Run arbitrary code snippets directly from a URL

<br />

`npx` does not limit you to the packages published on the npm registry.

<br />

You can run code that sits in a GitHub gist, like this one for instance:

<br />

```
$ npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32
```

<br />
<br />

To summarize, `npx` is a task runner that gives you a lot of flexibility when installing npm packages, and achieving that without clogging up your machine's filesystem unnecessarily - for this reason, it's recommended you use `npx` whenever possible.

<br />

I hope you enjoyed reading this and I'd love to hear if you have any comments! Don't hesitate to send me an email at <u>arashnawy@gmail.com</u> or DM me on <u>[Twitter](https://twitter.com/arash11gt)</u>. Until next time!
