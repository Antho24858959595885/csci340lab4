var timesFed = 0;

$("#animal-button").on("click", function(event) {
    $("#animal-name").text("Zebra");
    
    $("#animal-picture-box").text("Zebra picture will go here.");

    $("#animal-fact").text("Waht a funky horse");
    
    $("#zoo-message").text("looks like we got a zebra in the house!");
});

$("#color-button").on("click", function(event) {

    $("#zoo-exhibit").css("background-color", "rgb(175, 220, 255)");
    
    $("#zoo-message").text("The exhibit color changed.");
});



$("#feed-button").on("click", function(event) {
    timesFed = timesFed + 1;

    $("#zoo-message").text("Yum! you fed the zebra " + timesFed + " times.");
});

$("#reset-button").on("click", function(event) {
    timesFed = 0;
    $("#animal-name").text("Mystery Animal");
    
    $("#animal-picture-box").text("Animal pic here.");
    $("#animal-fact").text("Animal fact here");
    $("#zoo-exhibit").css("background-color", "rgb(235, 245, 225)");
    $("#zoo-message").text("The zoo is ready for visitors!");
});