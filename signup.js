const BaseUrl = "http://127.0.0.1:5501";
const registrationUrl = `${BaseUrl}`
// let flag = false;

//submit event created here
var Submitbutton = document.getElementById("Submit");
Submitbutton.addEventListener("click", function (e) {
    e.preventDefault();
    validateSubmit()
})

function validateSubmit() {
    alert("Stock Details are submitted for prediction.")
    RegisterUser()
}

// catching all input values after validation
var username = document.getElementById("name");
var mobile = document.getElementById("buying");
var email = document.getElementById("quantity");
var password = document.getElementById("selling");

// posting new Admin user data to server 
function RegisterUser() {
    let newUserObject = {
        "name": username.value,
        "password": password.value,
        "mobile": mobile.value,
        "email": email.value
    };
    console.log(newUserObject)
    fetch(`${registrationUrl}`, {
        method: "POST",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(newUserObject)
    })
        .then((res) => res.json())
        .then((data) => {
            alert(`${data.msg}`);
            if (data.err == false) return;
            alert("Redirecting to predictore Page");
            redirectToLogin();
        })
        .catch((err) => {
            alert("Failed to rretrive data, redirecting to predictore Page");
            redirectToLogin();
        })
}

// redirecting to dashboard
function redirectToLogin() {
    setTimeout(() => {
        location.href = "./2nd.html"
    }, 1500)
};

