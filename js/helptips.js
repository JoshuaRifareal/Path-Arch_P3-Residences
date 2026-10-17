let welcomeIntervalId;
let zoomIntervalId;

$(document).ready(function() {
    $('.restart-button > div').text("Restart");
    $('.restart-button').on('click', function() {
        $('.magazine').turn('page', 1);
    });

    $('.download-button > div').text("Download");
    $('.download-button').on('click', function() {
        window.open('https://drive.google.com/file/d/1Iw6LN-kJehCR0n-ejHx4kZicz-nmrEK-/view?usp=drive_link', '_blank');
    });
})

function welcomeMessage(changeTime, fadeInTime) {
    $('.awesome-message').css('visibility', 'hidden');

	// Array of messages to display
	const messages = [
		"Hello! 👋",
		"Pinch and drag any corner to flip a page.",
		"You can also press arrow keys instead.",
	];
  
	let index = 0;
	function updateMessage() {
	  $('.welcome-message > div').text(messages[index]);
	  index = (index + 1) % messages.length;
	}

    updateMessage();
    $('.welcome-message > div').fadeIn(fadeInTime);
    welcomeIntervalId = setInterval(updateMessage, changeTime);
};

function welcomeMessageHide(){
    $('.welcome-message').css('visibility', 'hidden');
}

function awesomeMessageShow(time){
    welcomeMessageHide();
    clearInterval(welcomeIntervalId); 
    $('.awesome-message').css('visibility', 'visible');
    $('.awesome-message > div').text("Awesome! 🎊");
    $('.awesome-message > div').fadeIn(time);
}

function awesomeMessageHide(delayTime, fadeOutTime) {
    function hideMessage() {
        $('.awesome-message > div').fadeOut(fadeOutTime);
    }
    setInterval(hideMessage, delayTime);
}

function zoomMessageShow(changeTime, fadeInTime) {
    $('.awesome-message').css('visibility', 'hidden');

    $('.zoomhow-message > div').fadeIn(fadeInTime);
    $('.zoomhow-message').css('visibility', 'visible');

    // Array of messages to display
	const messages = [
		"Click anywhere to zoom in to details! 👀",
		"Check out the details by clicking on them! 🔍",
		"You can zoom in and out by clicking! 👇",
	];

    let index = 0;
	function updateMessage() {
	  $('.zoomhow-message > div').text(messages[index]);
	  index = (index + 1) % messages.length;
	}

    updateMessage();
    zoomIntervalId = setInterval(updateMessage, changeTime);
}

function zoomMessageHide(delayTime, fadeOutTime) {
    function hideMessage() {
        $('.zoomhow-message > div').fadeOut(fadeOutTime);
    }
    setInterval(hideMessage, delayTime);
}

function zoomEscapeShow(time) {
    // Hide other messages
    welcomeMessageHide();
    $('.awesome-message').css('visibility', 'hidden');
    $('.zoomhow-message').css('visibility', 'hidden');


    $('.zoomesc-message').css('visibility', 'visible');
    $('.zoomesc-message > div').text("Click and drag to navigate. Press ESC or click again to zoom out.");
    $('.zoomesc-message > div').fadeIn(time);
}

function zoomEscapeHide(time) {
    $('.zoomesc-message > div').fadeOut(time);
}

function outroMessageShow(time) {
    // Hide other messages
    $('.outro-message').css('visibility', 'visible');
    $('.outro-message > div').html("Send me a message! 🤘 <button class='message-button' onclick=\"window.open('https://mail.google.com/mail/?view=cm&fs=1&to=joshuamorata.rifareal@bicol-u.edu.ph&su=JUNIOR ARCHITECT', '_blank');\">Message</button>");
    $('.outro-message > div').fadeIn(time);
}

function outroMessageHide(time) {
    $('.outro-message > div').fadeOut(time);
}

