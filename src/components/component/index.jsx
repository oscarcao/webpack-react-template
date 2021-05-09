const MyComponent = () => {
    return (
        <>
            <h2>What's NOT included in this template</h2>
            <h3>Styling</h3>
            <p>Loading CSS via Webpack is not included, so those who prefer a CSS-in-JS solution do not have to remove the Webpack loading CSS configuration.</p>
            <p>If you do want to use the traditional loading CSS approach to styling, the instructions to load CSS via Webpack can be found in the <a href="https://webpack.js.org/guides/asset-management/#loading-css" target="_blank" rel="noopener noreferrer">loading CSS section of the Webpack Asset Management page</a>.</p>
            <h3>Routing</h3>
            <p>No routing framework is included, so those who do not need a routing solution do not have to remove it.</p>
            <h3>Testing</h3>
            <p>No testing framework is included. Setup whichever testing framework you fancy.</p>
        </>
    );
};

export default MyComponent;
