---
title: 'Custom Hook'
topic: 'Tools & Libraries'
description: 'Create a custom hook that allows you to fetch the movies from the Lord of the Rings API.'
---
Create a <strong className="color-blue">custom hook</strong> that allows you to fetch the <strong className="color-purple">movies</strong> from the <strong className="color-purple">Lord of the Rings API</strong>.

## Brief

You’re creating a fan review website for the Lord of the Rings and need movie details. To do that, you need to make requests to the API on multiple pages, so having a reusable hook would be helpful. Your assignment is to create a custom hook that you can use on any page to request movie info from the API.

## Level 1

To build a custom hook, the first thing you need is a file that exports a custom function. You can do this manually or you can start your entire project automatically by using the useCustomHook starter template.

With the skeleton of a hook, the main purpose will be to fetch data from the API. Set up a request mechanism using the browser fetch API or your favorite request library.

## Level 2

Part of a good request API is the ability to understand where the request is at during each part of its lifecycle. This includes stages like: loading, success, and failed.

Using React state, configure a variable that you can return from the custom hook to let the component know what stage the request is at in its lifecycle.

## Level 3

Ultimately a custom hook is created to be used. Publish the new hook to npm (npmjs.com) and set up a new project using the custom hook package. For an advanced feature, add the ability for people to review each movie!


