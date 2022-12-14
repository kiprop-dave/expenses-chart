# Frontend Mentor - Expenses chart component solution

This is my solution to the [Expenses chart component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/expenses-chart-component-e7yJBUdjwt). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the bar chart and hover over the individual bars to see the correct amounts for each day ✅
- See the current day’s bar highlighted in a different colour to the other bars ✅
- View the optimal layout for the content depending on their device’s screen size ✅
- See hover states for all interactive elements on the page ✅
- **Bonus**: Use the JSON data file provided to dynamically size the bars on the chart ✅

### Screenshot

![](/public//expenses-chart.png)

### Links

- Solution URL: [here](https://www.frontendmentor.io/solutions/responsive-expenses-component-p8tLiucSk6)
- Live Site URL: [here](https://expenses-chart-seven.vercel.app/)

## My process

### Built with

- CSS custom properties
- Flexbox
- Mobile-first workflow
- TypeScript
- [React](https://reactjs.org/) - JS library

### What I learned

This was my first time using typescript in a project. Here's some of the code.

```ts
type Props = {
  day: string;
  amount: number;
  index: number;
};

function setColour(): string {
  const dayToday = new Date().getDay();
  return dayToday === index ? "hsl(186, 34%, 60%)" : "hsl(10, 79%, 65%)";
}

const height: string = `${Math.floor((amount / 70) * 100)}%`; // get dynamic heights in percentage
```

### Continued development

Since this was my first time using typescript, I hope to build more projects using it in the future to improve my skills.

### Useful resources

- [scrimba](https://www.scrimba.com) - This is in my opinion the best place to learn web development.
- [stack overflow](https://stackoverflow.com/) - Whenever I got stuck, I always found some insight here.

## Author

- Website - [Tanui Kiprop](https://www.tanuikiprop.gq)
- Frontend Mentor - [@kiprop-dave](https://www.frontendmentor.io/profile/kiprop-dave)
