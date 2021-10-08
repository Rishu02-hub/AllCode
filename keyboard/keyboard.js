const allKeys = document.querySelector('button');
const allKeysInnerText = document.getElementById('key').innerText;
const showKeys = document.getElementById('displayKeys');
let capsKey = document.querySelector('[data-key_CapsLock]');

let q = "q";
let w = "w";
let e = "e";
let r = "r";
let t = "t";
let y = "y";
let u = "u";
let i = "i";
let o = "o";
let p = "p";
let a = "a";
let s = "s";
let d = "d";
let f = "f";
let g = "g";
let h = "h";
let j = "j";
let k = "k";
let l = "l";
let z = "z";
let x = "x";
let c = "c";
let v = "v";
let b = "b";
let n = "n";
let m = "m";

const qBtn = document.getElementById("q");
const wBtn = document.getElementById("w");
const eBtn = document.getElementById("e");
const rBtn = document.getElementById("r");
const tBtn = document.getElementById("t");
const yBtn = document.getElementById("y");
const uBtn = document.getElementById("u");
const iBtn = document.getElementById("i");
const oBtn = document.getElementById("o");
const pBtn = document.getElementById("p");
const aBtn = document.getElementById("a");
const sBtn = document.getElementById("s");
const dBtn = document.getElementById("d");
const fBtn = document.getElementById("f");
const gBtn = document.getElementById("g");
const hBtn = document.getElementById("h");
const jBtn = document.getElementById("j");
const kBtn = document.getElementById("k");
const lBtn = document.getElementById("l");
const zBtn = document.getElementById("z");
const xBtn = document.getElementById("x");
const cBtn = document.getElementById("c");
const vBtn = document.getElementById("v");
const bBtn = document.getElementById("b");
const nBtn = document.getElementById("n");
const mBtn = document.getElementById("m");

function displayKeyLeftKeyTo1() {
    showKeys.append("`");
}

function displayKey1() {
    showKeys.append("1");
}

function displayKey2() {
    showKeys.append("2");
}

function displayKey3() {
    showKeys.append("3");
}

function displayKey4() {
    showKeys.append("4");
}

function displayKey5() {
    showKeys.append("5");
}

function displayKey6() {
    showKeys.append("6");
}

function displayKey7() {
    showKeys.append("7");
}

function displayKey8() {
    showKeys.append("8");
}


function displayKey9() {
    showKeys.append("9");
}

function displayKey0() {
    showKeys.append("0");
}

function displayKeyMinus() {
    showKeys.append("-");
}

function displayKeyEqual() {
    showKeys.append("=");
}

function displayKeyq() {
    showKeys.append(q);
}

function displayKeyw() {

    showKeys.append(w);
}

function displayKeye() {

    showKeys.append(e);
}

function displayKeyr() {

    showKeys.append(r);
}

function displayKeyt() {

    showKeys.append(t);
}

function displayKeyY() {

    showKeys.append(y);
}

function displayKeyu() {

    showKeys.append(u);
}

function displayKeyi() {

    showKeys.append(i);
}

function displayKeyo() {

    showKeys.append(o);
}

function displayKeyp() {

    showKeys.append(p);;
}

function displayKeySquareBrackets() {
    showKeys.append("[");
}

function displayKeySquareBracketsOpposite() {
    showKeys.append("]");
}

function displayKeyBackSlash() {
    showKeys.append("\\");
}

function displayKeya() {
    showKeys.append(a);
}

function displayKeyS() {
    showKeys.append(s);
}

function displayKeyd() {
    showKeys.append(d);
}

function displayKeyf() {
    showKeys.append(f);
}

function displayKeyg() {
    showKeys.append(g);
}

function displayKeyh() {
    showKeys.append(h);
}

function displayKeyj() {
    showKeys.append(j);
}

function displayKeyk() {
    showKeys.append(k);
}

function displayKeyl() {
    console.log(showKeys)
    showKeys.append(l);
}

function displayKeySemiColon() {
    showKeys.append(";");
}

function displayKeySingleApostrophe() {
    showKeys.append("'");
}

function displayKeyz() {
    showKeys.append(z);
}

function displayKeyx() {
    showKeys.append(x);
}

function displayKeyc() {
    showKeys.append(c);
}

function displayKeyv() {
    showKeys.append(v);
}

function displayKeyb() {
    showKeys.append(b);
}

function displayKeyn() {
    showKeys.append(n);
}

function displayKeym() {
    showKeys.append(m);
}

function displayKeyComma() {
    showKeys.append(",");
}

function displayKeyFullStop() {
    showKeys.append(".");
}

function displayKeyForwardSlash() {
    showKeys.append("/");
}










// not letter or number keys:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function displayKeyBackspace() {
    let str = document.getElementById('displayKeys').innerText;
    let strRemove = str.substring(0, str.length - 1);
    document.getElementById('displayKeys').innerText = strRemove;
}

function displayKeyDeleteAll() {
    showKeys.innerText = '';
}

function displayKeyLessThan() {}

function displayKeyUp() {}

function displayKeyDown() {}

function displayKeyGreaterThan() {}


function displayKeyTab() {
    showKeys.append('\xa0\xa0\xa0\xa0');
}

function displayKeySpaceBar() {
    showKeys.append('\xa0');
}


let capsLockCheck = false;
let CapsLockOrNot = capsLockCheck ? displayKeyCapsLock : displayKeyNotCapsLock;

function displayKeyCapsLock() {
    capsLockCheck = !capsLockCheck;
    if (capsLockCheck == true) {
        qBtn.style.textTransform = "uppercase";
        wBtn.style.textTransform = "uppercase";
        eBtn.style.textTransform = "uppercase";
        rBtn.style.textTransform = "uppercase";
        tBtn.style.textTransform = "uppercase";
        yBtn.style.textTransform = "uppercase";
        uBtn.style.textTransform = "uppercase";
        iBtn.style.textTransform = "uppercase";
        oBtn.style.textTransform = "uppercase";
        pBtn.style.textTransform = "uppercase";
        aBtn.style.textTransform = "uppercase";
        sBtn.style.textTransform = "uppercase";
        dBtn.style.textTransform = "uppercase";
        gBtn.style.textTransform = "uppercase";
        hBtn.style.textTransform = "uppercase";
        jBtn.style.textTransform = "uppercase";
        kBtn.style.textTransform = "uppercase";
        lBtn.style.textTransform = "uppercase";
        zBtn.style.textTransform = "uppercase";
        xBtn.style.textTransform = "uppercase";
        cBtn.style.textTransform = "uppercase";
        vBtn.style.textTransform = "uppercase";
        bBtn.style.textTransform = "uppercase";
        nBtn.style.textTransform = "uppercase";
        mBtn.style.textTransform = "uppercase";
        fBtn.style.textTransform = "uppercase";
        q = "Q";
        w = "W";
        e = "E";
        r = "R";
        t = "T";
        y = "Y";
        u = "U";
        i = "I";
        o = "O";
        p = "P";
        a = "A";
        s = "S";
        d = "D";
        f = "F";
        g = "G";
        h = "H";
        j = "J";
        k = "K";
        l = "L";
        z = "Z";
        x = "X";
        c = "C";
        v = "V";
        b = "B";
        n = "N";
        m = "M";
    } else if (capsLockCheck == false) {
        qBtn.style.textTransform = "none";
        wBtn.style.textTransform = "none";
        eBtn.style.textTransform = "none";
        rBtn.style.textTransform = "none";
        tBtn.style.textTransform = "none";
        yBtn.style.textTransform = "none";
        uBtn.style.textTransform = "none";
        iBtn.style.textTransform = "none";
        oBtn.style.textTransform = "none";
        pBtn.style.textTransform = "none";
        aBtn.style.textTransform = "none";
        sBtn.style.textTransform = "none";
        dBtn.style.textTransform = "none";
        gBtn.style.textTransform = "none";
        hBtn.style.textTransform = "none";
        jBtn.style.textTransform = "none";
        kBtn.style.textTransform = "none";
        lBtn.style.textTransform = "none";
        zBtn.style.textTransform = "none";
        xBtn.style.textTransform = "none";
        cBtn.style.textTransform = "none";
        vBtn.style.textTransform = "none";
        bBtn.style.textTransform = "none";
        nBtn.style.textTransform = "none";
        mBtn.style.textTransform = "none";
        fBtn.style.textTransform = "none";
        q = "q";
        w = "w";
        e = "e";
        r = "r";
        t = "t";
        y = "y";
        u = "u";
        i = "i";
        o = "o";
        p = "p";
        a = "a";
        s = "s";
        d = "d";
        f = "f";
        g = "g";
        h = "h";
        j = "j";
        k = "k";
        l = "l";
        z = "z";
        x = "x";
        c = "c";
        v = "v";
        b = "b";
        n = "n";
        m = "m";
    }
}


function displayKeyNotCapsLock() {
    q = "q";
    w = "w";
    e = "e";
    r = "r";
    t = "t";
    y = "y";
    u = "u";
    i = "i";
    o = "o";
    p = "p";
    a = "a";
    s = "s";
    d = "d";
    f = "f";
    g = "g";
    h = "h";
    j = "j";
    k = "k";
    l = "l";
    z = "z";
    x = "x";
    c = "c";
    v = "v";
    b = "b";
    n = "n";
    m = "m";
}

// function swapCapsLockFunction() {

//     console.log('swap Fucntion' + capsLockCheck);
// }

function displayKeyEnter() {
    showKeys.append(`\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
    \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0`);
}


//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------