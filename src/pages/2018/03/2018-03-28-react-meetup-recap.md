---
title: "React Meetup Recap"
path: "/2018/03/28/react-meetup-recap"
date: "2018-03-28T21:59:00.000Z"
tags: ["Coding"]
excerpt: "This past Monday I had the great opportunity to attend a 'Intro to React' Meetup. At this Meetup we discussed some of starting blocks to get you going with React - I wanted to share some of the notes..."
---

This past Monday I had the great opportunity to attend a "Intro to React" Meetup. At this Meetup we discussed some of starting blocks to get you going with React - I wanted to share some of the notes I took and recap a bit of what was discussed.

## Single Page Application (SPA)

What is a Single Page Application? A SPA is an application where all the coded needed is loaded in a single page load. The page does not reload, instead it requires dynamic interaction with the web server.

## Key Concepts in React

- Web Components
- 1 Way Data Binding
- Virtual DOM
- JSX
- State Management

## What are Components?

Components let you split the UI into multiple "chunks" of the web page. If you look at my site right now, you can imagine a "header" component that has my name, a "navigation" component within the "header" component, an "article" component, and much much more.

## One Way Data Binding

This was my first intro into one-way vs. two-way data binding. From my understanding, and from a phrase shared by another developer, data can only flow one way (as it says). So if you imagine a tree structure with you multiple components, the data has to come from the top root element and then flow down to the components. "Action Up, Data Down".

## Virtual DOM

The Virtual DOM is a shadow copy of the actual DOM (Document Object Model) that allows React to quickly compare the Virtual DOM to the actual DOM and then quickly change out specific elements without having to reload the whole DOM.

## JSX

JSX is an HTML-like syntax that allows you to pass data as `props` (properties) to help render dynamic values.

#### What are `props`?

`props` is data coming from the parent component. Note - `props` are *read only*

Example of JSX syntax:

    render() {
    	return <h1>Hello, {this.props.name}</h1>
    }
    

## State Management - State vs. setState

`state`: use state to assign data 

`setState`: want to change or update the data in state

Notes:

- Always have to initialize `state` in the constructor
- Lift the `state` up to the closest common ancestor

- single "source of truth"
- Top down data flow, so you want the state at the "parent"
- Avoid duplication of state in child components

---

That is a real basic rundown of what we worked on! If you want to view the code we also looked at, check out [https://github.com/gschool/learn-to-code-react](https://github.com/gschool/learn-to-code-react)
