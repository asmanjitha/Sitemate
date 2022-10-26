function dialogBox(confirm_text) {
    var conf = confirm(confirm_text)
    if (conf == true) {
        document.getElementById("output").innerHTML = "You Just Clicked OK"
    } else {
        document.getElementById("output").innerHTML = "You Just Clicked NO"
    }
}
