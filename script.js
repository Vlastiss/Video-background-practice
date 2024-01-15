$(document).ready(function () {

    $(".form-check-input").click(function () { 

        var videoContainer = $(".video-container")[0];

        if ($(this).prop("checked")) {
            $(".text-info").html("Playing")
            videoContainer.play();
        } else {
            $(".text-info").html("Paused")
            videoContainer.pause();
        }
    });

});
