var clickN = function(event) {
    var str = event.target.innerHTML;
    console.log(str);
}
var showResult = function(event) {
    console.log("click others");
    console.log(event.target.innerHTML);
}