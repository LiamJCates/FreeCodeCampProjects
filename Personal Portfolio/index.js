/* Screen Naviagtion */
var ancherList = ["welcome-section", "projects", "contact"];
var currentPosition = null;

window.onload = function() {
    //adding the event listerner for Mozilla
    if (window.addEventListener)
        document.addEventListener('DOMMouseScroll', moveObject, false);

    //for IE/OPERA etc
    document.onmousewheel = moveObject;
}



function moveObject(event) {

    var delta = 0;

    if (!event) event = window.event;

    // normalize the delta
    if (event.wheelDelta) {
        // IE and Opera
        delta = event.wheelDelta / 60;

    } else if (event.detail) {
        // W3C
        delta = -event.detail / 2;
    }

    if (delta > 0) {
        //check your current position and target id
        switch (currentPosition) {
            case null:
            case ancherList[0]:
                currentPosition = ancherList[2];
                break;
            case ancherList[1]:
                currentPosition = ancherList[0];
                break;
            case ancherList[2]:
                currentPosition = ancherList[1];
                break;
        }
    } else {
        switch (currentPosition) {
            case null:
            case ancherList[0]:
                currentPosition = ancherList[1];
                break;
            case ancherList[1]:
                currentPosition = ancherList[2];
                break;
            case ancherList[2]:
                currentPosition = ancherList[0];
                break;
        }
    }

    document.getElementById(currentPosition).scrollIntoView({
        behavior: 'smooth'
    });
}
