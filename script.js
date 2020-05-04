"use strict";

$(document).ready(function() {
    // Puts date at the top
    $(`#currentDay`).html(moment().format("dddd, MMM Do YYYY"));
    // For loop that creates all the divs dynamically
    for (let i=0; i<9; i++){
        let newDivs = $(
        `<div class="row">
            <div id="time${i}" class="col-md-1 hour time-block">
            
            </div>
            <input id="input${i}" class="col-md-10 description">
            
            </input>
            <div id="save${i}" class="col-md-1 saveBtn">
            <i class="far fa-save"></i>
            </div>
        </div>`
        );
        //Appends divs to starting container
        $(`#firstContainer`).append(newDivs);
        

    };
    // Changes inner html of divs to reflect time
    $(`#time0`).html(`9am`);   
    $(`#time1`).html(`10am`);
    $(`#time2`).html(`11am`);
    $(`#time3`).html(`12pm`);
    $(`#time4`).html(`1pm`);
    $(`#time5`).html(`2pm`);
    $(`#time6`).html(`3pm`);
    $(`#time7`).html(`4pm`);
    $(`#time8`).html(`5pm`);

    // Created an array to represent time in 24hr clock 
    let twentyFourHour = [9,10,11,12,13,14,15,16,17];
    // Saves current hour
    let currentHour = moment().format('H');

    // Checks if current time is in the 9am-5pm range
    if (twentyFourHour.includes(currentHour)) {
        let hourIndex = twentyFourHour.indexOf(currentHour);

        //Changes current time to present
        $(`#input${hourIndex}`).addClass("present");
        // Turns all hours up to current into past
        for (let i=0; i<hourIndex; i++) {
            $(`#input${i}`).addClass("past");
        };
       //Turns all hours past current to future
        for (let i=hourIndex +1; i<twentyFourHour.length; i++) {
            $(`#input${i}`).addClass("future");
        };
    // If hour is before 9am change all to future
    } else if(currentHour <9){

        for (let i=0; i<twentyFourHour.length; i++) {
            $(`#input${i}`).addClass("future");
        };

    } else {
    //If not, change all to past
        for (let i=0; i<twentyFourHour.length; i++) {
            $(`#input${i}`).addClass("past");
        };
    };
    // click event listener on saveBtn class
    $(".saveBtn").click(function saver() {
        // Grabbing index of this save button to identify which row to save
        let saveIndex = this.id.substring(4)
        let currentRow = $(`#input${saveIndex}`)
        // Saves value of row in local storage with index as key
        localStorage.setItem(saveIndex, currentRow.val());
    });
    // For loop to iterate all rows
    for (let i=0; i<9; i++){
        // Get local storage and put back into input value
        $(`#input${i}`).val(localStorage.getItem(i))

    };
        
   






});