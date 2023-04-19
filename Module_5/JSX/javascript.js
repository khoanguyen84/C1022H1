// let h1 = document.createElement("h1");
// h1.innerText = "Hello anh em!";
// h1.id = "h_1";
// h1.style.backgroundColor = "green";
// h1.style.fontSize = "40px";
// h1.style.color = "white";

// document.querySelector('#root').appendChild(h1);

let form = document.createElement('form');
form.method = "#";
form.action = "#";

let h1 = document.createElement("h1");
h1.innerText = "Login";
h1.className = 'h_1';

form.appendChild(h1);

let div_1 = document.createElement("div");
let label_1 = document.createElement("label");
label_1.innerText = "Username: ";
let inp_username = document.createElement("input");
inp_username.type = "email";
div_1.appendChild(label_1);
div_1.appendChild(inp_username);


let div_2 = document.createElement("div");
let label_2 = document.createElement("label");
label_2.innerText = "Password: ";
let inp_password = document.createElement("input");
inp_password.type = "password";
div_2.appendChild(label_2);
div_2.appendChild(inp_password);

let div_3 = document.createElement("div");
let btn = document.createElement('button');
btn.innerText = "Login";
btn.onclick = function() {
    alert("Login");
}
div_3.appendChild(btn);


form.appendChild(div_1);
form.appendChild(div_2);
form.appendChild(div_3);


document.querySelector('#root').appendChild(form);