/* ---------- UI ---------- */

function changeUnitHeaders() {
    let unitHeader = document.querySelectorAll(".converter-section h2");
    let dropDowns = document.querySelectorAll(".drop-down select");
    let currSelectedX = dropDowns[0].options[dropDowns[0].selectedIndex].value;
    let currSelectedY = dropDowns[1].options[dropDowns[1].selectedIndex].value;

    //Change first and second headers
    if (currSelectedX !== "0") {
        let firstHeader = unitHeader[0];
        firstHeader.innerText = currSelectedX;
    }

    if (currSelectedY !== "0") {
        let secondHeader = unitHeader[1];
        secondHeader.innerText = currSelectedY;
    }
}

//Element Listener for whenever select's option changes.
let dropDowns = document.querySelectorAll(".drop-down select");
dropDowns.forEach(function(selection) {
    selection.addEventListener("change", changeUnitHeaders);
    selection.addEventListener("change", updateValueFields);
});

//Element Listener for whenever input changes
let inputs = document.querySelectorAll(".convert-input");
inputs.forEach(function(input) {
    input.addEventListener("change", convertOther);
});


/* ---------- Topic Buttons ---------- */

function clearDropDown(firstDropDown, lastDropDown) {
    while (firstDropDown.length > 1 || lastDropDown.length > 1) {
        if (firstDropDown.length > 1)
            firstDropDown.removeChild(firstDropDown.childNodes[2]);
        else
            lastDropDown.removeChild(lastDropDown.childNodes[2]);
    }
}

function addOptions(topic) {
    let dropDown = document.querySelectorAll(".drop-down");
    let firstDropDown = dropDown[0].querySelector("select");
    let lastDropDown = dropDown[1].querySelector("select");

    //Make main tag's class to topic for later retrival.
    document.querySelector("main").className = topic;

    //Clears the drop down options if there are any to replace with new options.
    clearDropDown(firstDropDown, lastDropDown);

    //Initialize arrays
    let lengths = ["meter", "kilometer", "centimeter", "millimeter"];
    let times = ["year", "month", "week", "day", "hour", "minute", "second", "millisecond"];
    let weights = ["kilogram", "gram", "milligram"];
    let arr;

    //Checks which array to use.
    switch (topic) {
        case "length":
            arr = lengths;
            break;
        case "time":
            arr = times;
            break;
        case "weight":
            arr = weights;
            break;
        default:
            console.log("Error (FX aO)");
        break;
    }

    arr.forEach(function(option)
    {
        //Create option
        let newLength = document.createElement("option");
        newLength.value = option;
        newLength.innerText = option;

        //Append option
        firstDropDown.appendChild(newLength.cloneNode(true));
        lastDropDown.appendChild(newLength);
    });

    //If in mobile view and nav is open, close it.
    let mediaQToDesktop = window.matchMedia("(max-width: 1200px)");
    mediaQToDesktop.addListener(function() {
        if (mediaQToDesktop.matches)
            closeNav();
    });
}

//This initializes the page with Length options
addOptions("length");

//EventListener for topic buttons.
let lengthBtn = document.querySelector(".length-btn");
lengthBtn.addEventListener("click", addOptions.bind(this, "length"));
let timeBtn = document.querySelector(".time-btn");
timeBtn.addEventListener("click", addOptions.bind(this, "time"));
let weightBtn = document.querySelector(".weight-btn");
weightBtn.addEventListener("click", addOptions.bind(this, "weight"));


/* ---------- Conversion Functions ---------- */

function checkValid(currUnit, otherUnit, currInputValue) {
    return currUnit !== "unit" && otherUnit !== "unit" && currInputValue >= 0;
}

function convertOther(e) {
    convertProcess(e.target.id);
}

function convertProcess(currentTarget) {
    let currUnit = (currentTarget === "first-input") ? document.querySelector(".first-unit-header").innerText.toLowerCase() : document.querySelector(".second-unit-header").innerText.toLowerCase(); 
    let otherUnit = (currentTarget === "first-input") ? document.querySelector(".second-unit-header").innerText.toLowerCase() : document.querySelector(".first-unit-header").innerText.toLowerCase();
    let otherInputField = (currentTarget === "first-input") ? document.querySelector("#second-input") : document.querySelector("#first-input");
    let currInputValue = (currentTarget === "first-input") ? parseInt(document.querySelector("#first-input").value) : parseInt(document.querySelector("#second-input").value);

    //Check all fields' validity.
    if (checkValid(currUnit, otherUnit, currInputValue)) {
        //If true, check for which conversion method to use.
        let topic = document.querySelector("main").className;
        let num;
        if (topic === "length") {
            if (currUnit === "meter") {
                num = convertMeter(currInputValue, otherUnit);
            } else if (currUnit === "kilometer") {
                num = convertKilometer(currInputValue, otherUnit);
            } else if (currUnit === "centimeter") {
                num = convertCentimeter(currInputValue, otherUnit);
            } else if (currUnit === "millimeter") {
                num = convertMillimeter(currInputValue, otherUnit);
            }
        } else if (topic === "time") {
            if (currUnit === "year") {
                num = convertYear(currInputValue, otherUnit);
            } else if (currUnit === "month") {
                num = convertMonth(currInputValue, otherUnit);
            } else if (currUnit === "week") {
                num = convertWeek(currInputValue, otherUnit);
            } else if (currUnit === "day") {
                num = convertDay(currInputValue, otherUnit);
            } else if (currUnit == "hour") {
                num = convertHour(currInputValue, otherUnit);
            } else if (currUnit == "minute") {
                num = convertMinute(currInputValue, otherUnit);
            } else if (currUnit == "second") {
                num = convertSecond(currInputValue, otherUnit);
            } else if (currUnit == "millisecond") {
                num = convertMillisecond(currInputValue, otherUnit);
            }
        } else if (topic === "weight") {
            if (currUnit === "kilogram") {
                num = convertKilogram(currInputValue, otherUnit);
            } else if (currUnit === "gram") {
                num = convertGram(currInputValue, otherUnit);
            } else if (currUnit === "milligram") {
                num = convertMilligram(currInputValue, otherUnit);
            }
        }
        otherInputField.value = num;
    }
}

function updateValueFields() {
    //Get necessary fields.
    let firstValueField = document.querySelector("#first-input");
    let secondValueField = document.querySelector("#second-input");

    //Check which of the two value fields have a valid number and convert accordingly.
    if (firstValueField.value >= 0) {
        convertProcess("first-input");
    } else if (secondValueField.value >= 0 ) {
        convertProcess("second-input");
    }
}


/* ---------- MOBILE ---------- */

/* - Side Bar Animation - */
function openNav()
{
    let sideBar = document.querySelector(".side-nav");
    sideBar.style.visibility = "visible";
    sideBar.style.width = "100%";
}

function closeNav()
{
    let sideBar = document.querySelector(".side-nav");
    sideBar.style.visibility = "hidden";
    sideBar.style.width = "0%";
}

//Open side navigation when hamburger is clicked.
let hamburger = document.querySelector(".hamburger-box");
hamburger.addEventListener("click", openNav);

//Close side navigation when close button is clicked.
let closeBtn = document.querySelector(".close-btn");
closeBtn.addEventListener("click", closeNav);
