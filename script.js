var timesFed = 0;

$("#animal-button").on("click", function(event) {
    $("#zoo-message").text("Looking for a random dog...");

    $.getJSON("https://dog.ceo/api/breeds/image/random", function(data) {
        $("#animal-name").text("Random dog");

        $("#animal-picture-box").html(
            "<img src='" + data.message + "' alt='A random dog' width='300'>"
        );

        $("#animal-fact").text("This dog just got added to the show.");

        $("#zoo-message").text("looks like we got a doggy in the house!");
    });
});

$("#color-button").on("click", function(event) {
    $("#zoo-message").text("New color loading...");

    $.getJSON("https://x-colors.yurace.pro/api/random", function(data) {
        $("#zoo-exhibit").css("background-color", data.hex);
        $("#zoo-message").text("The show color changed.");
    });
});

$("#feed-button").on("click", function(event) {
    timesFed = timesFed + 1;
    $("#zoo-message").text("Yum! you gave the dog  " + timesFed + " treats.");
});

$("#reset-button").on("click", function(event) {
    timesFed = 0;
    $("#animal-name").text("Mystery Dog");
    $("#animal-picture-box").text("Dog pic here.");
    $("#animal-fact").text("Dog fact here");
    $("#zoo-exhibit").css("background-color", "rgb(235, 245, 225)");
    $("#zoo-message").text("The puppies are ready to meet you!");
});