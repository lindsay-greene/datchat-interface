const data = document.querySelectorAll(".data");
const information = document.querySelectorAll(".info");
const nextStep = document.querySelectorAll(".next-step");
const chart = document.querySelector("#results1");
let lastOption = null;

window.onload = function() {
    console.log("test");
    console.log(data);
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
    const target = event.target;
    // TODO: figure out why it is not adding target id 
    // TODO: figure out why it is also changing the formatting 
    chart.innerHTML = target.id + " chart";
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
        case "max-min": 
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
    // display text containing the average
}

function range(event) {
    console.log("this is range");
    // display text containing the range 
}

function maxMin(event) {
    console.log("this is maxMin");
    // display text containing the max and min
}

function trend(event) {
    console.log("this is trend");
    // display text containing the overall trend
}

function repeat(event) {
    check_option(null, lastOption);
    console.log("this is repeat, " + lastOption);
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
    // reopen the where will your data come from twisty 
}

function new_info(event) {
    console.log("this is new info");
    // reopen the what do you want to know about the info twisty
}

function exit(event) {
    console.log("this is exit");
    // close all twisties and go to a new page that says thank you and goodbye 
}
