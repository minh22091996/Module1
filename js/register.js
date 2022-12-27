function register() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let newPassword = document.getElementById("newPassword")
    let addList = JSON.parse(localStorage.getItem("data"))
    if (email.value == "" || password.value == "" || newPassword.value == "") {
        alert("Chưa nhập email hoặc mật khẩu !")
        email.value = ""
        password.value = ""
        newPassword.value = ""
        return
    } else if (password.value.length <= 6) {
        alert("Mật khẩu phải trên 6 kí tự !")
        password.value = ""
        newPassword.value = ""
    }else if(email.value.length <= 10){
        alert("Sai định dạng email !")
        email.value = ""
    } else if (password.value != newPassword.value) {
        alert("Mật khẩu không khớp !")
        password.value = ""
        newPassword.value = ""
    } else if (addList == null) {
        addList = []
        let user = {
            email: email.value,
            password: password.value
        }
        addList.push(user)
        localStorage.setItem("data", JSON.stringify(addList))
        window.location.href = "login.html"
        return
    }
    else {
        for (i = 0; i < addList.length; i++) {
            if (email.value == addList[i].email) {
                alert("Trùng email !")
                email.value = ""
                return
            }
        }
        let user = {
            email: email.value,
            password: password.value
        }
        addList.push(user)
        localStorage.setItem("data", JSON.stringify(addList))
        window.location.href = "login.html"
        return
    }
}

function login() {
    window.location.href = "login.html"
}

function eye1() {
    let inputPassword1 = document.getElementById("password")
    let iconEye1 = document.getElementById("showEye1")
    let text1 = inputPassword1.getAttribute("type")
    if (text1 == "password") {
        text1 = "text"
        iconEye1.className = "fa-solid fa-eye"
    } else {
        text1 = "password"
        iconEye1.className = "fa-solid fa-eye-slash"
    }
    inputPassword1.setAttribute("type", text1)
}

function eye2() {
    let inputPassword2 = document.getElementById("newPassword")
    let iconEye2 = document.getElementById("showEye2")
    let text2 = inputPassword2.getAttribute("type")
    if (text2 == "password") {
        text2 = "text"
        iconEye2.className = "fa-solid fa-eye"
    } else {
        text2 = "password"
        iconEye2.className = "fa-solid fa-eye-slash"
    }
    inputPassword2.setAttribute("type", text2)
}

// const validateEmail = (email) => {
//     return String(email)
//       .toLowerCase()
//       .match(
//         /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
//       );
//   };