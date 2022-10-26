function dialogBox(confirm_text) {
    var conf = confirm(confirm_text)
    if (conf == true) {
        document.getElementById("output").innerHTML = "You Just Clicked OK"
    } else {
        document.getElementById("output").innerHTML = "You Just Clicked NO"
    }
}

function customAlert(alert_msg) {
    this.render = function (alert_msg) {
        var win_width = window.innerWidth;
        var win_height = window.innerHeight;

        var dialogBackground = document.getElementById("dialog_background");
        var dialog = document.getElementById("dialog");

        dialogBackground.style.display = "block";
        dialogBackground.style.height = win_height + "px";

        dialog.style.left = (win_width / 2) - (400 * 0.5) + "px"
        dialog.style.top = "200px";
        dialog.style.display = "block";

        document.getElementById("d_head").innerHTML = "Custom Alert";
        document.getElementById("d_body").innerHTML = alert_msg;
        document.getElementById("d_footer").innerHTML = '<button onclick="myAlert.ok()">OK</button> <button onclick="myAlert.no()">NO</button>'
    }

    this.ok = function () {
        document.getElementById('dialog').style.display = "none";
        document.getElementById('dialog_background').style.display = "none";
        document.getElementById("output").innerHTML = "You Just Clicked OK"
    }

    this.no = function () {
        document.getElementById('dialog').style.display = "none";
        document.getElementById('dialog_background').style.display = "none";
        document.getElementById("output").innerHTML = "You Just Clicked NO"
    }
}

var myAlert = new customAlert();
