'use strict';

var visibility = false;

var app = {
    title: 'Visibility Toggle',
    subtitle: 'Make things visible',
    details: "These are the details!"
};

var appRoot = document.getElementById('app');

var toggleVisibility = function toggleVisibility() {
    visibility = !visibility;

    renderApp();
};

var renderApp = function renderApp() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleVisibility },
            visibility ? 'Hide Details' : 'Show Details'
        ),
        visibility && React.createElement(
            'div',
            null,
            React.createElement(
                'p',
                null,
                app.details
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

renderApp();
