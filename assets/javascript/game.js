var wins = 0;
var losses = 0;
var score = 0;
var startingNumber;
// var Buttons = ["assets/images/images.jpg", "assets/images/images-1.jpg", "assets/images/images-2.jpg", "assets/images/images-3.jpg"];


$(document).ready(function () {

    $("#NumberOfWins").html("Wins: " + wins);
        console.log(wins);
    $("#NumberOfLosses").html("Losses: " + losses);
        console.log(losses);

    startingNumber = Math.floor(Math.random() * 120) + 1;
    $("#goal").text(startingNumber);
        console.log(startingNumber);

    // var new_score;

    //computer generates random number between 1 and 12 individually for all 4 buttons
    // var sum = valuePic1 + valuePic2 + valuePic3 + valuePic4;

    var valuePic1 = Math.floor(Math.random() * 12) + 1;
        console.log("valuePic1= " + valuePic1);

    $("#firstjewel").on("click", function () {

        score = score + valuePic1;
        $("#totalScore").text(score);

        if (score === startingNumber) {
            wins++;
            $("#wins-losses").prepend("<p>You win!</p>");
            // outcomeWin();
            reset();
            
        }

        else if (score > startingNumber) {
            losses++;
            $("#wins-losses").prepend("<p>You lost!!</p>");
            reset();
        }
        //         outcomeLose();

                

    });

    var valuePic2 = Math.floor(Math.random() * 12) + 1;
    console.log("valuePic2= " + valuePic2);

    $("#secondjewel").on("click", function () {

        score = score + valuePic2;
        $("#totalScore").text(score);

        if (score === startingNumber) {
            wins++;
            $("#wins-losses").prepend("<p>You win!</p>");
            //         outcome();
            reset();
           
        }

        else if (score > startingNumber) {
            losses++;
            $("#wins-losses").prepend("<p>You lost!!</p>");
            reset();

        }
        //         // $("#wins-losses").prepend("<p>You lost!!</p>");

    });

    var valuePic3 = Math.floor(Math.random() * 12) + 1;
    console.log("valuePic3= " + valuePic3);

    $("#thirdjewel").on("click", function () {

        score = score + valuePic3;
        $("#totalScore").text(score);

        if (score === startingNumber) {
            wins++;
            $("#wins-losses").prepend("<p>You win!</p>");
            //         outcomeWin();
            reset();
        }

        else if (score > startingNumber) {
            losses++;
            $("#wins-losses").prepend("<p>You lost!!</p>");
            reset();
            //     outcomeLose();
        }

    });

    var valuePic4 = Math.floor(Math.random() * 12) + 1;
    console.log("valuePic4= " + valuePic4);

    $("#fourthjewel").on("click", function () {

        score = score + valuePic4;
        $("#totalScore").text(score);

        if (score === startingNumber) {
            wins++;
            $("#wins-losses").prepend("<p>You win!</p>");
            reset();
            //     outcomeWin();
            //     

        }

        else if (score > startingNumber) {
            losses++;
            $("#wins-losses").prepend("<p>You lost!!</p>");
            reset();
        }
    });


    // $(".crystals").each(function(run) {

    //     var
    // })
    //     function outcomeWin(){

    //     // if (score === startingNumber) {
    //         wins++;
    //         $("#wins-losses").prepend("<p>You win!!!</p>");

    //     };

    //     function outcomeLose(){

    //     // else if (score > startingNumber) {
    //         losses++;
    //         $("#wins-losses").prepend("<p>You lost!</p>");


    // };

    function reset() {
        score = 0;
        $("#totalScore").text(score);
        startingNumber = Math.floor(Math.random() * 120) + 1;
        $("#goal").text(startingNumber);

        valuePic1 = Math.floor(Math.random() * 12) + 1;
        valuePic2 = Math.floor(Math.random() * 12) + 1;
        valuePic3 = Math.floor(Math.random() * 12) + 1;
        valuePic4 = Math.floor(Math.random() * 12) + 1;

    };


    //     $(".crystals").each(function(pics) {
    //         var jewelNumber = Math.floor(Math.random() * 12) +1;
    //             console.log(jewelNumber);
    //         // item.Data("Rand", jewelNumbers);


    // });

});

// $(".crystal").on("click", function(){
//     score.append(jewelNumber)

// });