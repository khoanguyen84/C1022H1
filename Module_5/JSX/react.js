// React.createElement(type, props, childrens)
// + type: tag, component
// + props: là 1 object, attributes, nếu chưa cần thì gán bằng null
// + childrens: text, hoặc ReactElement khác
// const h1 = React.createElement("h1", {
//     style: {
//         backgroundColor: "green",
//         color: "white",
//     },
//     className: "heading_1",
//     onClick: function(){
//         alert("Heading 1")
//     }
// }, "Heading 1");
// // Virtual DOM

// const h2 = React.createElement("h2", {
//     style: {
//         backgroundColor: "green",
//         color: "white",
//     },
//     className: "heading_1",
//     onClick: function(){
//         alert("Heading 1")
//     }
// }, "Heading 2");

// const div = React.createElement(React.Fragment, null, h1, h2)
// // Transform Virtual DOM => Real DOM
// // wrapper

// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(div);


const form = React.createElement("form", {
    action: "#",
    method: "#"
}, React.createElement("h1", {className: "heading_1"}, "Login"),
    React.createElement("div", null,
        React.createElement("label", null, "Username: "),
        React.createElement("input", { type: "email"}, null)),
    React.createElement("div", null,
        React.createElement("label", null, "Password: "),
        React.createElement("input", { type: "password"}, null)),
    React.createElement("div", null,
        React.createElement("button", {
            onClick: function(){
                alert("Login")
            }
        }, "Login")))


const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(form);