/*  Projects Background */
function on(element) {
    element.style.display = "block";
}

function off(element) {
    element.style.display = "none";
}


document.getElementById("projects").addEventListener("mousemove", function(event) {
    windowWidth = document.getElementById("projects").offsetWidth;
    windowHeight = document.getElementById("projects").offsetHeight;

    mouseXpercentage = Math.round(event.pageX / windowWidth * 100);
    mouseYpercentage = Math.round(event.pageY / windowHeight * 100);

    document.getElementById("projects").style.background = 'repeating-radial-gradient(circle at ' + (mouseXpercentage+50) + '%' + (mouseYpercentage-200) + '%, #fedc00 0, #fedc00 calc(1/18 * 100%),#fcb712 0,#fcb712 calc(2/18 * 100%),#f7921e 0,#f7921e calc(3/18 * 100%),#e87f24 0,#e87f24 calc(4/18 * 100%),#dd6227 0,#dd6227 calc(5/18 * 100%),#dc4c27 0,#dc4c27 calc(6/18 * 100%),#ca3435 0,#ca3435 calc(7/18 * 100%),#b82841 0,#b82841 calc(8/18 * 100%),#953751 0,#953751 calc(9/18 * 100%),#364c88 0,#364c88 calc(10/18 * 100%),#16599d 0,#16599d calc(11/18 * 100%),#02609e 0,#02609e calc(12/18 * 100%),#0073a9 0,#0073a9 calc(13/18 * 100%),#008aa4 0,#008aa4 calc(14/18 * 100%),#239a87 0,#239a87 calc(15/18 * 100%),#7cba6d 0,#7cba6d calc(16/18 * 100%),#becc2f 0,#becc2f calc(17/18 * 100%),#e0d81d 0,#e0d81d 100%),' +
        'repeating-radial-gradient(circle at ' + (mouseXpercentage-50) + '%' + (mouseYpercentage-200) + '%, #fedc00 0, #fedc00 calc(1/18 * 100%),#fcb712 0,#fcb712 calc(2/18 * 100%),#f7921e 0,#f7921e calc(3/18 * 100%),#e87f24 0,#e87f24 calc(4/18 * 100%),#dd6227 0,#dd6227 calc(5/18 * 100%),#dc4c27 0,#dc4c27 calc(6/18 * 100%),#ca3435 0,#ca3435 calc(7/18 * 100%),#b82841 0,#b82841 calc(8/18 * 100%),#953751 0,#953751 calc(9/18 * 100%),#364c88 0,#364c88 calc(10/18 * 100%),#16599d 0,#16599d calc(11/18 * 100%),#02609e 0,#02609e calc(12/18 * 100%),#0073a9 0,#0073a9 calc(13/18 * 100%),#008aa4 0,#008aa4 calc(14/18 * 100%),#239a87 0,#239a87 calc(15/18 * 100%),#7cba6d 0,#7cba6d calc(16/18 * 100%),#becc2f 0,#becc2f calc(17/18 * 100%),#e0d81d 0,#e0d81d 100%)'
});
