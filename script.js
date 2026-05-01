var timesFed = 0;

$("#animal-button").on("click", function(event) {
    $("#zoo-message").text("Trying to get an animal...");

    $.getJSON("https://zoo-animal-api.herokuapp.com/animals/rand", function(data) {
        $("#animal-name").text(data.name);

        $("#animal-picture-box").html(
            "<img src='" + data.image_link + "' alt='A picture of a " + data.name + "' width='300'>"
        );

        $("#animal-fact").html(
            "This is a " + data.name + "." +
            "<br>Habitat: " + data.habitat +
            "<br>Diet: " + data.diet
        );

        $("#zoo-message").text("looks like we got a " + data.name + " in the house!");
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