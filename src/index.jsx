import * as ReactDOM from "react-dom";

import MyComponent from "./components/component/";

const App = () => (
    <>
        <h1>My App</h1>
        <p>This is a barebones Webpack/React template.</p>
        <MyComponent />
    </>
);

const rootComponent = App();
const reactDomContainer = document.getElementById("react-dom-container");
ReactDOM.render(rootComponent, reactDomContainer);
