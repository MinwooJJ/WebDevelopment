const React = require("react");
const ReactDom = require("react-dom");

const WordChain = require("./wordchain");

ReactDom.render(<WordChain />, document.querySelector("#root"));
