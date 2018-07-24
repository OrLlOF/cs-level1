// var str = document.getElementById("word1").innerHTML;
var str = "HELLO";
var word2 = document.getElementById("word2");

var game = {}
game.word = str.split(''); // string을 리스트로 쪼갬 e.g.) [ H, E, L, L, O ]
game.btns = []; // 버튼 엘리먼트 리스트

for(var i= 0; i < str.length; i++) {
    var btn = document.createElement("button");
    btn.innerHTML = str[i];
    word2.appendChild(btn);
    game.btns.push(btn);
}
var swap = function(event) {
    var reversedWord = game.word.reverse();

    for (var i = 0; i < reversedWord.length; i++) {
        game.btns[i].innerHTML = reversedWord[i];
    }
};

game.shiftFor = function(event) {
    for (var i = 0; i < this.word.length; i++) {
        this.btns[i].innerHTML = this.word[i];
    }
}

var rshift = function(event) {
    var s = game.word.pop();
    game.word.unshift(s);
    game.shiftFor();
};
var lshift = function(event) {
    var s = game.word.shift();
    game.word.push(s);
    game.shiftFor();
};