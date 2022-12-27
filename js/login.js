function login() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let addList = JSON.parse(localStorage.getItem("data"))
    if (email.value == "" || password.value == "") {
        alert("Chưa nhập email hoặc mật khẩu !")
        email.value = ""
        password.value = ""
        return
    } else if (addList == null) {
        alert("Bạn chưa đăng kí tài khoản !")
        email.value = ""
        password.value = ""
        return
    } else {
        for (i = 0; i < addList.length; i++) {
            if (email.value == addList[i].email && password.value == addList[i].password) {
                window.location.href = "index.html"
                return
            }
        }
        for (i = 0; i < addList.length; i++) {
            if (email.value != addList[i].email || password.value != addList[i].password) {
                alert("Sai email hoặc mật khẩu")
                email.value = ""
                password.value = ""
                return
            }
        }

    }
}

function register() {
    window.location.href = "register.html"
}

function sentPassword(){
    let checkEmail = prompt("Vui lòng nhập email");
    let checkList = JSON.parse(localStorage.getItem("data"));
    let flag = false

    for(i=0;i<checkList.length;i++){
        if(checkEmail == checkList[i].email){
            flag = true
            break;
        }else{
            flag = false
        }
    }
    if(flag== true){
        Email.send({
            Host: "smtp.elasticemail.com",
            Username: "haitqrikkei@gmail.com",
            Password: "C25575E4F3C7BBDE2F82765E0C4CC804C88D",
            To: 'tranbinhminh22091996@gmail.com',
            From: "haitqrikkei@gmail.com",
            Subject: "This is the subject",
            Body: "mật khẩu của bạn là: " + checkList[i].password
        }).then(
            message => alert("Mật khẩu đã được gửi vào email của bạn. Vui lòng kiểm tra email !")
        );
    }else{
        alert("Email không hợp lệ")
    }
}


function eye() {
    let inputText = document.getElementById("password")
    let iconEye = document.getElementById("showEye")
    let text = inputText.getAttribute("type")

    if(text == "password"){
        text = "text"
        iconEye.className = "fa-solid fa-eye"
    }else{
        text = "password"
        iconEye.className = "fa-solid fa-eye-slash"
    }
    inputText.setAttribute("type",text)
}



    