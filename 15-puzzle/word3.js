// html elements
var word1 = document.getElementById('word1'); //answer
var word2 = document.getElementById("word2"); //buttons
var check = document.getElementById('check'); //werd1 === word2?


//game objuects
var game = { 
    'btns': []
};
game.words = 'apple,linux,javascript,tutorial,codesquad,baby,girlfriend,legend'.split(',');

// chose 1 word from word;
game.choose = function () {
    var idx = Math.floor(Math.random() * this.words.length);
    this.answer = this.words[idx];
    this.letters = this.answer.split('');
    word1.innerHTML = this.answer;
};

game.addButtons = function () {
    for (var i = 0; i < this.letters.length; i++) {
        var btn = document.createElement("button");
        btn.innerHTML = this.letters[i];
        word2.appendChild(btn);
        this.btns.push(btn);
    }
};

game.updateDisplay = function () {
    var gameStr = this.letters.join('');
    if (this.answer === gameStr) {
        check.innerHTML = '일치합니다.';
    } else {
        check.innerHTML = '일치하지 않습니다.';
    }
};

game.init = function () {
    this.choose();
    this.addButtons();
    this.updateDisplay();
};
game.init();

game.copyBtnText = function () {
    for (var i = 0; i < this.letters.length; i++) {
        this.btns[i].innerHTML = this.letters[i];
    }
}

// event handler for swap button
var swap = function () {
    var reversedWord = game.letters.reverse();

    game.copyBtnText();
    game.updateDisplay();
};

var rshift = function () {
    var s = game.letters.pop();
    game.letters.unshift(s);
    game.copyBtnText();
    game.updateDisplay();
};
var lshift = function () {
    var s = game.letters.shift();
    game.letters.push(s);
    game.copyBtnText();
    game.updateDisplay();
};

game.shuffle = function () {
    var toggle = Boolean(Math.round(Math.random()));

    if (toggle) {
        swap();
    }

    var n = Math.floor(Math.random() * game.answer.length);
    for (var i = 0; i < n; i++) {
        rshift();
    }
};
game.shuffle();