let theme = document.querySelector("#brightnessbutton");
let theme_status = 0; // 0 for dark theme, 1 for light theme

// light theme--------------------------------------------

theme.addEventListener("click", function () {
    const boxes = document.querySelectorAll(".boxx");
    const removebutton_status = document.querySelectorAll(".boxbutton button");
    const extension_name = document.querySelectorAll(".inbox h1");
    const extension_button = document.querySelectorAll(".boxbutton button");

    if (theme_status == 0) {
        document.querySelector("body").style.background = "linear-gradient(rgb(236, 243, 253) 50%, rgb(239, 251, 249))";
        document.querySelector("body").style.backgroundAttachment = "fixed";
        boxes.forEach(box => box.style.background = "white");

        ["#activitybutton1", "#activitybutton2", "#activitybutton3"].forEach(id => {
            document.querySelector(id).style.background = "white";
            document.querySelector(id).style.color = "black";
        });

        document.querySelector(".search_box").style.background = "white";
        document.querySelector(".search_box input").style.background = "white";
        document.querySelector(".search_box input").style.color = "black";
        document.querySelector("#img1").src = "logo2.png";
        document.querySelector("#brightnessbutton img").src = "moonlogo.svg";
        theme.style.background = "white";
        document.querySelector(".boxbutton button").style.color = "black";
        document.querySelector(".heading h1").style.color = "black";

        extension_name.forEach(name => name.style.color = "black");
        extension_button.forEach(btn => btn.style.color = "black");
        removebutton_status.forEach(btn => btn.style.background = "white");

        theme_status = 1;

        // dark theme--------------------------------------------
    } else {
        document.querySelector("body").style.background = "linear-gradient(rgb(25, 10, 39) 50%, rgb(12, 21, 69))";
        document.querySelector("body").style.backgroundAttachment = "fixed";
        boxes.forEach(box => box.style.background = "rgb(31, 37, 53)");

        ["#activitybutton1", "#activitybutton2", "#activitybutton3"].forEach(id => {
            document.querySelector(id).style.background = "rgb(31, 37, 53)";
            document.querySelector(id).style.color = "white";
        });

        document.querySelector(".search_box").style.background = "rgb(31, 37, 53)";
        document.querySelector(".search_box input").style.background = "rgb(31, 37, 53)";
        document.querySelector(".search_box input").style.color = "white";
        document.querySelector("#img1").src = "logo.png";
        document.querySelector("#brightnessbutton img").src = "sunlogoo.svg";
        theme.style.background = "rgb(31, 37, 53)";
        document.querySelector(".boxbutton button").style.color = "white";
        document.querySelector(".heading h1").style.color = "white";

        extension_name.forEach(name => name.style.color = "white");
        extension_button.forEach(btn => btn.style.color = "white");
        removebutton_status.forEach(btn => btn.style.background = "rgb(31, 37, 53)");

        theme_status = 0;
    }
});



// Activity status management
// 1 for all, 2 for active, 3 for inactive
let activity_status = 1;

function filterExtensions() {
    let checkboxes = document.querySelectorAll(".boxbutton input");

    checkboxes.forEach(function (checkbox) {
        let box = checkbox.closest(".boxx");

        if (activity_status === 1) {
            box.style.display = "block"; // Show all
        } else if (activity_status === 2 && checkbox.checked) {
            box.style.display = "block"; // Active only
        } else if (activity_status === 3 && !checkbox.checked) {
            box.style.display = "block"; // Inactive only
        } else {
            box.style.display = "none"; // Hide others
        }
    });
}




// color feature for the activity buttons
document.querySelector("#activitybutton1").addEventListener("click", function () {
    activity_status = 1;
    document.querySelector("#activitybutton1").style.background = "rgb(235, 86, 81)";
    document.querySelector("#activitybutton2").style.background = theme_status ? "white" : "rgb(31, 37, 53)";
    document.querySelector("#activitybutton3").style.background = theme_status ? "white" : "rgb(31, 37, 53)";
    filterExtensions();
});

document.querySelector("#activitybutton2").addEventListener("click", function () {
    activity_status = 2;
    document.querySelector("#activitybutton2").style.background = "rgb(235, 86, 81)";
    document.querySelector("#activitybutton1").style.background = theme_status ? "white" : "rgb(31, 37, 53)";
    document.querySelector("#activitybutton3").style.background = theme_status ? "white" : "rgb(31, 37, 53)";
    filterExtensions();
});

document.querySelector("#activitybutton3").addEventListener("click", function () {
    activity_status = 3;
    document.querySelector("#activitybutton3").style.background = "rgb(235, 86, 81)";
    document.querySelector("#activitybutton1").style.background = theme_status ? "white" : "rgb(31, 37, 53)";
    document.querySelector("#activitybutton2").style.background = theme_status ? "white" : "rgb(31, 37, 53)";
    filterExtensions();
});

const searchInput = document.querySelector(".search_box input");
const logoImage = document.querySelector("#img1");

searchInput.addEventListener("focus", () => {
  logoImage.style.display = "none";
});

searchInput.addEventListener("blur", () => {
  logoImage.style.display = "inline"; 
});


// Search functionality
document.querySelector(".search_box input").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let boxes = document.querySelectorAll(".boxx");

    boxes.forEach(function (box) {
        let extensionName = box.querySelector(".inbox h1").textContent.toLowerCase();

        if (extensionName.includes(searchValue)) {
            box.style.display = "block"; // Show matching extension
        } else {
            box.style.display = "none"; // Hide others
        }
    });
});


const removeButtons = document.querySelectorAll(".boxbutton button");

// Apply correct theme styles
removeButtons.forEach(button => {
    if (theme_status === 1) {
        // Light theme
        button.style.background = "white";
        button.style.color = "black";
    } else {
        // Dark theme
        button.style.background = "rgb(31, 37, 53)";
        button.style.color = "white";
    }

    // Add glowing effect on click
    button.addEventListener("click", function () {
        const originalBackground = theme_status === 1 ? "white" : "rgb(31, 37, 53)";
        const originalColor = theme_status === 1 ? "black" : "white";

        // Temporarily change to glow color
        button.style.background = "rgb(235, 86, 81)";
        button.style.color = "white";

        // Revert back after short delay (simulate glow)
        setTimeout(() => {
            button.style.background = originalBackground;
            button.style.color = originalColor;
        }, 150); // glow lasts 150ms
    });
});
