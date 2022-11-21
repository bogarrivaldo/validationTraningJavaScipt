console.log("JavaScript connected to html");

let username,password;
document.getElementById("tombolLogin").onclick = function () {
    username = document.getElementById('inputUsername').value;
    password = document.getElementById('inputPassword').value;
    if (username === "valdo" && password === "bogar"){
        console.log("Anda berhasil login");
        let berhasil = document.getElementById('suksesjav');
        berhasil.style.display = 'block';

    }
    else {
        let fail = document.getElementById('failedjav');
        fail.style.display = 'block';
        console.log("Maaf anda belum terdaftar");
    }
}