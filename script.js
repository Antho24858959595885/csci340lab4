var timesFed = 0;

$("#animal-button").on("click", function(event) {
    $("#zoo-message").text("Looking for a random animal...");

    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data) {
        $("#animal-name").text("Random dog");

        $("#animal-picture-box").html(
            "<img src='" + data.message + "' alt='A random dog' width='300'>"
        );

        $("#animal-fact").text("This dog just got added to the wack zoo.");

        $("#zoo-message").text("looks like we got a doggy in the house!");
    });
});

$("#color-button").on("click", function(event) {
    $("#zoo-exhibit").css("background-color", "rgb(175, 220, 255)");
    $("#zoo-message").text("The exhibit color changed.");
});

$("#feed-button").on("click", function(event) {
    timesFed = timesFed + 1;
    $("#zoo-message").text("Yum! you fed the animal " + timesFed + " times.");
});

$("#reset-button").on("click", function(event) {
    timesFed = 0;
    $("#animal-name").text("Mystery Animal");
    $("#animal-picture-box").text("Animal pic here.");
    $("#animal-fact").text("animal fact here");
    $("#zoo-exhibit").css("background-color", "rgb(235, 245, 225)");
    $("#zoo-message").text("The zoo is ready for visitors!");
});