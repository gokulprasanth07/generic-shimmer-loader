# Getting Started with Create React App
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts
In the project directory, you can run:

## `npm start`
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### shimmer loader component
1. Component folder inside Approach_A will have components that are shown with shimmer loader
2. ShimmerLoader.js inside ShimmerLoader Folder will have the required actual shimmer loader wrapper component
3. all the components can be demoed inside App.js
4. you can just wrap the particular image or some component with that ShimmerLoader component and it will just work
5. have included 4 different configurations : squareCard, circleCard, PD listing page horizontal cards, PD listing page vertical cards view (see this in App.js)


### working explanation
1. ShimmerWrapper is the actual loader wherein "::before" pseudo element has the necessary background and "::after" pesudo element has the transition element (From left to right)
2. we have built the wrapper component in such a way that the the shimmer loader always takes the position of the children element and the exact dimension such as width and height by taking position: absolute
3. if hidden prop is false just return the children (actual component content) or else wrap the children inside our ShimmerLoader cmpt to show the shimmer loader content.
