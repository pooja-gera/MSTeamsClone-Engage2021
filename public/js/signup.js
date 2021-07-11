let username = document.querySelector("#name");
let email = document.querySelector("#email");
let cusername = document.querySelector(".cname .value");
let cemail = document.querySelector(".cemail .value");
let pw = document.querySelector("#pw");
let cpw = document.querySelector("#cpw");
let signupBtn = document.querySelector(".submitbtn");
let mess = document.querySelector(".message")
let cpage = document.querySelector(".confirmpage")
let cbtn = document.querySelector(".confirm");
let editbtn = document.querySelector(".edit");
let loginbtn = document.querySelector(".loginbtn");

window.addEventListener("load", function () {
    loginbtn.addEventListener("click", loginbtnHandler);
    signupBtn.addEventListener("click", signupBtnHandler);
    cbtn.addEventListener("click", cbtnHandler);
    editbtn.addEventListener("click", editbtnHandler);
})
function loginbtnHandler() {
    window.location.href = "/login";
}

function signupBtnHandler(e) {
    e.preventDefault();

    if (username.value && email.value && pw.value && cpw.value) {
        mess.innerHTML = "";
        cusername.innerHTML = username.value;
        cemail.innerHTML = email.value;
       
        cpage.classList.add("block");
    } else {
        mess.innerHTML = "*All fields are mandatory";
    }
}
async function cbtnHandler(e) {
    try {
        e.preventDefault(); // prevent page refresh
        console.log({
            "username": username.value,
            "email": email.value,
            "password": pw.value,
            "confirmPassword": cpw.value
        })
        let obj = await axios.post("http://localhost:3030/auth/signup", {
            "username": username.value,
            "email": email.value,
            "password": pw.value,
            "confirmPassword": cpw.value
        });
       
        console.log(obj);
        if (obj.data.data) {
            window.location.href = "/";
        } else {
            mess.innerHTML = obj.data.message;
        }
    }
    catch (error) {

        cpage.classList.remove("block");
        mess.innerHTML = "INVALID DETAILS";
        console.log(error);
    }
}

function editbtnHandler() {
    cpage.classList.remove("block");
}
