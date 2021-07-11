let email = document.querySelector("#email");
let pw = document.querySelector("#pass");
let loginBtn = document.querySelector(".submitbtn");
let registerbtn = document.querySelector(".registerbtn");
let message = document.querySelector(".message");

window.addEventListener("load" , function(){
    loginBtn.addEventListener("click" , submitbtnHandler);
    registerbtn.addEventListener("click", registerbtnHandler);
})

function registerbtnHandler(){
    window.location.href = "/signup"
}

async function submitbtnHandler(e){
    try{
        e.preventDefault(); // prevent page refresh
        if(email.value && pw.value){
            console.log(email.value, pw.value);
            let obj = await axios.post( "http://localhost:3030/auth/login" , {email:email.value , password:pw.value});
            
            console.log(obj);
            if(obj.data.data){
                window.location.href = "/";
            }else{
                message.innerHTML = obj.data.message;
            }
        }
    }
    catch(error){
        console.log(error);
    }
}