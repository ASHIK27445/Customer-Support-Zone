## 1. What is JSX, and why is it used?
JSX is a way to write HTML-like code directly inside JavaScript when working with React. It looks a lot like HTML, which makes creating user interfaces more intuitive and visually clear. Behind the scenes, React converts JSX into JavaScript instructions that efficiently update the webpage. This approach helps keep code organized by combining the structure of the UI with the logic needed to control it.

## 2. What is the difference between State and Props?
State and props both hold data in React, but they serve different roles. State is private to a component and can change over time, often storing things like user input or toggle settings. Props, in contrast, are read-only values passed from a parent component down to its children to customize or configure them. Since props cannot be changed by the receiving component, this ensures a clear and predictable flow of data throughout the app.

## 3. What is the useState hook, and how does it work?
The `useState` hook is a feature in React that allows functional components to have their own state. When called, it returns two things: the current state value and a function to update that value. Calling the update function triggers React to re-render the component with the new state. This makes it easy to manage dynamic information, like counters or form fields, without using class components.

## 4. How can state be shared between components in React?
To share state between different components, the state is usually “lifted” up to the nearest common parent component, which holds the state and passes it down as props to its children. For larger or more complex applications, React’s Context API allows state to be shared globally, avoiding the need to pass props through many layers. Additionally, libraries like Redux or MobX can manage state on a bigger scale, and custom hooks provide a way to share reusable logic involving state.

## 5. How is event handling done in React?
Event handling in React uses camelCase event names like `onClick` or `onChange`, which are attached directly to JSX elements. Instead of strings, functions are passed as handlers. React wraps these events in a Synthetic Event system to ensure consistent behavior across browsers. When an event occurs, such as a button click, the assigned function runs to handle that interaction in a clear and organized manner.
