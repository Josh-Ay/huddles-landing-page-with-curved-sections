//jshint esversion:6

let scrollToTopBtn = $('#scrollToTop');
let submitMailBtn = $('.subscribe-btn');

// Makes the scroll button visible by calling toggleButtonVisibility() after scrolling a bit from the top
$(window).scroll( ()=> {
    toggleButtonVisiblity();
});

// Adding event listener to detect click and scroll back to the top of the webpage
scrollToTopBtn.click(scrollToTop);


// Validating email input
submitMailBtn.click(validate);



function scrollToTop() {
    window.scrollTo(
        {
            top: 0,
            behavior: "smooth",
        }
    );
}

function toggleButtonVisiblity() {
    let boundaryHeight = Math.round( 0.5 * window.innerHeight );

    if ($("body,html").scrollTop() > boundaryHeight) {
        scrollToTopBtn.css("visibility", 'visible');
    }
    else{
        scrollToTopBtn.css("visibility", 'hidden');
    }
}

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}

function validate() {
    let result = $(".check-email");
    let email = $("#email").val();
      
    if (validateEmail(email)) {
        result.addClass("valid");
        result.text("Successfully Subscribed!");
        $("#email").val("");
        removeClassFromElementAfterDelay(result, "valid");
    } 
    else {
        result.addClass("invalid");
        removeClassFromElementAfterDelay(result, "invalid");
    }
}

function removeClassFromElementAfterDelay(elementInput, classToRemove) {
    setTimeout(function () {
        elementInput.removeClass(classToRemove);
    }, 1500);
}
