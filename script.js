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
        // 
        $(`#firstContainer`).append(newDivs);
        

    };

    $(`#time0`).html(`9am`);   
    $(`#time1`).html(`10am`);
    $(`#time2`).html(`11am`);
    $(`#time3`).html(`12pm`);
    $(`#time4`).html(`1pm`);
    $(`#time5`).html(`2pm`);
    $(`#time6`).html(`3pm`);
    $(`#time7`).html(`4pm`);
    $(`#time8`).html(`5pm`);

    
    let twentyFourHour = [9,10,11,12,13,14,15,16,17];
    let currentHour = moment().format('H');


    if (twentyFourHour.includes(currentHour)) {
        let hourIndex = twentyFourHour.indexOf(currentHour);


        $(`#input${hourIndex}`).addClass("present");

        for (let i=0; i<hourIndex; i++) {
            $(`#input${i}`).addClass("past");
        };
       
        for (let i=hourIndex +1; i<twentyFourHour.length; i++) {
            $(`#input${i}`).addClass("future");
        };
    } else if(currentHour <9){

        for (let i=0; i<twentyFourHour.length; i++) {
            $(`#input${i}`).addClass("future");
        };

    } else {

        for (let i=0; i<twentyFourHour.length; i++) {
            $(`#input${i}`).addClass("past");
        };
    };

    $(".saveBtn").click(function saver() {
        
        let saveIndex = this.id.substring(4)
        let currentRow = $(`#input${saveIndex}`)
        localStorage.setItem(saveIndex, currentRow.val());
    });
    
    for (let i=0; i<9; i++){

        $(`#input${i}`).val(localStorage.getItem(i))

    };
        
   






});