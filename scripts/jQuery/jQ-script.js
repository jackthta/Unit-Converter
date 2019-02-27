/* ---------- UI ---------- */

function changeUnitHeaders() {
    let $unitHeader = $(".converter-section h2");
    let $currSelectedXIndex = $(".drop-down:first-child select").prop('selectedIndex');
    let $currSelectedYIndex = $(".drop-down:last-child select").prop('selectedIndex');
    let $currSelectedX = $(".drop-down:first-child option").eq($currSelectedXIndex).val();
    let $currSelectedY = $(".drop-down:last-child option").eq($currSelectedYIndex).val();

    //Change first and second headers.
    if ($currSelectedX !== "0") {
        $(".converter .converter-section:first-child h2").text($currSelectedX);
    }

    if ($currSelectedY !== "0") {
        $(".converter .converter-section:last-child h2").text($currSelectedY);
    }
}

//Element Listener for whenever select's option changes.
$(".drop-down select").change(function() {
    changeUnitHeaders();
    updateValueFields();
});

//Element Listener for whenever input changes
$(".convert-input").change(convertOther);


/* ---------- Topic Buttons ---------- */

function clearDropDown() {
    $(".selection").remove();
}

function addOptions(topic) {
    let $firstDropDown = $(".drop-down-container .drop-down:first-child select")[0];
    let $lastDropDown = $(".drop-down-container .drop-down:last-child select")[0];

    //Make main tag's class to topic for later retrival.
    $("main").attr("class", topic);

    //Clears the drop down options if there are any to replace with new options.
    clearDropDown();

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
        let $newLength = $("<option>");
        $newLength.val(option);
        $newLength.text(option);
        $newLength.attr("class", "selection");

        //Append option
        $newLength.clone().appendTo($firstDropDown);
        $newLength.appendTo($lastDropDown);

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
$(".length-btn").click(function() {
    addOptions.call(this, "length");
    closeNav();
});
$(".time-btn").click(function() {
    addOptions.call(this, "time");
    closeNav();
});
$(".weight-btn").click(function() {
    addOptions.call(this, "weight");
    closeNav();
});


/* ---------- Conversion Functions ---------- */

function checkValid(currUnit, otherUnit, currInputValue) {
    return currUnit !== "unit" && otherUnit !== "unit" && currInputValue >= 0;
}

function convertOther(e) {
    convertProcess(e.target.id);
}

function convertProcess(currentTarget) {
    let $currUnit = (currentTarget === "first-input") ? $(".first-unit-header").text().toLowerCase() : $(".second-unit-header").text().toLowerCase(); 
    let $otherUnit = (currentTarget === "first-input") ? $(".second-unit-header").text().toLowerCase() : $(".first-unit-header").text().toLowerCase();
    let $otherInputField = (currentTarget === "first-input") ? $("#second-input") : $("#first-input");
    let $currInputValue = (currentTarget === "first-input") ? parseInt($("#first-input").val()) : parseInt($("#second-input").val());

    //Check all fields' validity.
    if (checkValid($currUnit, $otherUnit, $currInputValue)) {
        //If true, check for which conversion method to use.
        let $topic = $("main").attr("class");
        let num;
        if ($topic === "length") {
            if ($currUnit === "meter") {
                num = convertMeter($currInputValue, $otherUnit);
            } else if ($currUnit === "kilometer") {
                num = convertKilometer($currInputValue, $otherUnit);
            } else if ($currUnit === "centimeter") {
                num = convertCentimeter($currInputValue, $otherUnit);
            } else if ($currUnit === "millimeter") {
                num = convertMillimeter($currInputValue, $otherUnit);
            }
        } else if ($topic === "time") {
            if ($currUnit === "year") {
                num = convertYear($currInputValue, $otherUnit);
            } else if ($currUnit === "month") {
                num = convertMonth($currInputValue, $otherUnit);
            } else if ($currUnit === "week") {
                num = convertWeek($currInputValue, $otherUnit);
            } else if ($currUnit === "day") {
                num = convertDay($currInputValue, $otherUnit);
            } else if ($currUnit == "hour") {
                num = convertHour($currInputValue, $otherUnit);
            } else if ($currUnit == "minute") {
                num = convertMinute($currInputValue, $otherUnit);
            } else if ($currUnit == "second") {
                num = convertSecond($currInputValue, $otherUnit);
            } else if ($currUnit == "millisecond") {
                num = convertMillisecond($currInputValue, $otherUnit);
            }
        } else if ($topic === "weight") {
            if ($currUnit === "kilogram") {
                num = convertKilogram($currInputValue, $otherUnit);
            } else if ($currUnit === "gram") {
                num = convertGram($currInputValue, $otherUnit);
            } else if ($currUnit === "milligram") {
                num = convertMilligram($currInputValue, $otherUnit);
            }
        }
        $otherInputField.val(num);
    }
}

function updateValueFields() {
    //Check which of the two value fields have a valid number and convert accordingly.
    if ($("#first-input").val() >= 0) {
        convertProcess("first-input");
    } else if ($("#second-input").val() >= 0) {
        convertProcess("second-input");
    }
}


/* ---------- MOBILE ---------- */

/* - Side Bar Animation - */
function openNav()
{
    $(".side-nav").css({"visibility" : "visible", "width" : "100%"});
}

function closeNav()
{
    $(".side-nav").css({"visibility" : "hidden", "width" : "0%"});
}

//Open side navigation when hamburger is clicked.
$(".hamburger-box").click(openNav);

//Close side navigation when close button is clicked.
$(".close-btn").click(closeNav);
