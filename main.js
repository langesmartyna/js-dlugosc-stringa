let text = "Uwielbiam JavaScript";
let line = "Jestem świetnym programistą";

function porownaj(text, line) {

    let result = line.length > text.length;

    if (result) {
        return line;
    } else {
        return text;
    }
}

console.log(porownaj(text, line));



