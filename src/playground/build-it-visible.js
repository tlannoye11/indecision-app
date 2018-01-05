let visibility = false;

const app = {
    title: 'Visibility Toggle',
    subtitle: 'Make things visible',
    details: "These are the details!"
};

const appRoot = document.getElementById('app');

const toggleVisibility = () => {
    visibility = !visibility;

    renderApp();
};

const renderApp = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleVisibility}>
                {visibility ? 'Hide Details' : 'Show Details'}
            </button>
            {visibility && (
                <div>
                    <p>{app.details}</p>
                </div>
            )}
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderApp();
