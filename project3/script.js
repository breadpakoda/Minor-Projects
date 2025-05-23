let theme = document.querySelector("#brightnessbutton");
let theme_status = 0;


theme.addEventListener("click", function () {
    const boxes = document.querySelectorAll(".boxx");
    const removebutton_status = document.querySelectorAll(".boxbutton button");
    const extension_name=document.querySelectorAll(".inbox h1");
    const extension_button=document.querySelectorAll(".boxbutton button");

    if (theme_status == 0) {
        document.querySelector("body").style.background = "linear-gradient(rgb(236, 243, 253) 50%, rgb(239, 251, 249))";
        boxes.forEach(function (box) {
            box.style.background = "white";
        });
        document.querySelector(".search_box").style.background = "white";
        document.querySelector("#img1").src = "logo2.png";
        document.querySelector("#brightnessbutton img").src="moonlogo.svg";
        theme.style.background="white";
        

        removebutton_status.forEach(function (buttonn) {
            buttonn.style.background = "white";
        });
        document.querySelector(".heading h1").style.color="black";
        extension_name.forEach(function(inboxname){
        inboxname.style.color="black";
        });
        extension_button.forEach(function(inboxbutton){
        inboxbutton.style.color="black";
        });



        theme_status = 1;
    } else {
        document.querySelector("body").style.background = "linear-gradient(rgb(25, 10, 39) 50%, rgb(12, 21, 69))";
        boxes.forEach(function (box) {
            box.style.background = "rgb(31, 37, 53)";
        });
        document.querySelector(".search_box").style.background = "rgb(31, 37, 53)";
        document.querySelector("#img1").src = "logo.png";
        document.querySelector("#brightnessbutton img").src="sunlogo.png";
        document.querySelector(".boxbutton button").style.background = "rgb(31, 37, 53)";
        removebutton_status.forEach(function (buttonn) {
        buttonn.style.background = "rgb(31, 37, 53)";
        theme.style.background="rgb(31, 37, 53)";
        });
        document.querySelector(".heading h1").style.color="white";
        extension_name.forEach(function(inboxname){
            inboxname.style.color="white";
        });
        extension_button.forEach(function(inboxbutton){
            inboxbutton.style.color="white";
        });


        theme_status = 0;
    }
});
