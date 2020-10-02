const data = document.querySelectorAll(".data");
const information = document.querySelectorAll(".info");
const nextStep = document.querySelectorAll(".next-step");
const chart = document.querySelector("#results1");
var avgText = document.getElementById("av");
var rangeText = document.getElementById("ra");
var maxText = document.getElementById("ma");
var trendText = document.getElementById("tr");
var repeatText = document.getElementById("re");
let lastOption = null;

window.onload = function() {
    console.log("test");
    console.log(data);
    avgText.style.visibility = "hidden";
    rangeText.style.visibility = "hidden";
    maxText.style.visibility = "hidden";
    trendText.style.visibility = "hidden";
    repeatText.style.visibility = "hidden";
    data.forEach((datum) => {
        datum.addEventListener("click", choose_data, false);
    });
    information.forEach((info) => {
        info.addEventListener("click", check_option, false);
    });
    nextStep.forEach((step) => {
        step.addEventListener("click", do_next, false);
    });
}

function choose_data(event) {
    console.log(chart);
}

function check_option(event, option) {
    option = option || event.target.dataset.option;
    console.log(option);
    switch(option) {
        case "avg":
            average();
            break;
        case "range": 
            range();
            break;
        case "maxMin": 
            maxMin();
            break;
        case "trend": 
            trend();
            break;
        case "repeat":
            repeat();
            break;
        default: 
            break;
    }
    lastOption = option;
}

function average(event) {
    console.log("this is average");
    avgText.style.visibility = "visible";
}

function range(event) {
    console.log("this is range");
    rangeText.style.visibility = "visible"; 
}

function maxMin(event) {
    console.log("this is maxMin");
    maxText.style.visibility = "visible";
}

function trend(event) {
    console.log("this is trend");
    trendText.style.visibility = "visible";
}

function repeat(event) {
    check_option(null, lastOption);
    // TODO: get repeat text to show last operation 
    repeatText.style.visibility = "visible"
    console.log("this is repeat");
}

function do_next(event, option) {
    option = option || event.target.id;
    switch(option) {
        case "new-data":
            new_data();
            break;
        case "new-info": 
            new_info();
            break;
        case "exit": 
            exit();
            break;
        default: 
            break;
    }
}

function new_data(event) {
    console.log("this is new data");
    // jump to where will your data come from  
}

function new_info(event) {
    console.log("this is new info");
    // jump to what do you want to know about the info 
}

function exit(event) {
    console.log("this is exit");
    // hide all elements and display thank you and goodbye message
}
