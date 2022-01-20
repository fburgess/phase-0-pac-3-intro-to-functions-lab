function shout(string){
    return string.toUpperCase("HELLO");
}

function whisper(string){
    return string.toLowerCase('hello');
}

function logShout(string){
console.log(string.toUpperCase('hello'));
}

function logWhisper(string){
    console.log(string.toLowerCase('hello'));
}

function sayHiToHeadphonedRoommate(string) {
    if (string === 'hello' ) {
        return 'I can\'t hear you!';
    }
    if (string === 'HELLO') {
        return 'YES INDEED!';
    }
    if (string === 'Let\'s have dinner together!') {
        return 'I would love to!';
    }

}

