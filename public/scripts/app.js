'use strict';

console.log("app.js is running");

// JSX = JavaScript XML
var appObject = {
  title: 'Indecision App',
  subtitle: 'by Travis Lannoye',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    appObject.title
  ),
  appObject.subtitle && React.createElement(
    'p',
    null,
    appObject.subtitle
  ),
  React.createElement(
    'p',
    null,
    appObject.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var user = {
  name: 'Travis',
  age: 33,
  location: 'Madison'
};

function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      ' Location: ',
      location
    );
  }
}

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
