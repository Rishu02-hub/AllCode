let allKeys = document.querySelectorAll('key');
let allButtons = document.querySelectorAll('button');
// let allKeysInnerText = document.getElementById('key').innerText;
const showKeys = document.getElementById('displayKeys');
let capsKey = document.querySelector('[data-key_CapsLock]');
let colourChange = document.getElementById('colourPickerInput');
let colourChangeValue = document.getElementById('colourPickerInput').value;

let red = parseInt(colourChangeValue[1] + colourChangeValue[2], 16);
let green = parseInt(colourChangeValue[3] + colourChangeValue[4], 16);
let blue = parseInt(colourChangeValue[5] + colourChangeValue[6], 16);


// Delete All Check ---------------------------------------------------------------------------------------------------------------------------------

function yesButton() {
    showKeys.innerText = "";
    closeModal(popup)
}

function noButton() {
    closeModal(popup)
}

const openModalButtons = document.querySelectorAll('[data-popup-target]')
const closeModalButtons = document.querySelectorAll('[data-close-popup]')
const overlay = document.getElementById('overlay')
const deleteAllTextTrue = document.getElementById('yes_button')
const deleteAllTextFalse = document.getElementById('no_button')

openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = document.querySelector(button.dataset.popupTarget);
        openModal(popup)
    })
})

overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.popup.active')
    modals.forEach(popup => {
        closeModal(popup)
    })
})

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const popup = button.closest('.popup')
        closeModal(popup)
    })
})

function openModal(popup) {
    if (popup == null) return
    popup.classList.add('active')
    overlay.classList.add('active')
}

function closeModal(popup) {
    if (popup == null) return
    popup.classList.remove('active')
    overlay.classList.remove('active')
}




// --------------------------------------------------------------------------------------------------------------------------------------------------



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

let leftKeyTo1OnclickText = "`";
let one = "1";
let two = "2";
let three = "3";
let four = "4";
let five = "5";
let six = "6";
let seven = "7";
let eight = "8";
let nine = "9";
let zero = "0";
let minus = "-";
let equal = "=";
let squareBrackets = "[";
let squareBracketsOpposite = "]";
let backSlash = "\\";
let semiColon = ";";
let singleQuote = "'";
let comma = ",";
let fullStop = ".";
let forwardSlash = "/";


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

const number1Btn = document.getElementById("keyNumber1");
const number2Btn = document.getElementById("keyNumber2");
const number3Btn = document.getElementById("keyNumber3");
const number4Btn = document.getElementById("keyNumber4");
const number5Btn = document.getElementById("keyNumber5");
const number6Btn = document.getElementById("keyNumber6");
const number7Btn = document.getElementById("keyNumber7");
const number8Btn = document.getElementById("keyNumber8");
const number9Btn = document.getElementById("keyNumber9");
const number0Btn = document.getElementById("keyNumber0");

const keyLeftKeyTo1 = document.getElementById("LeftKeyTo1");
const keyLeftKeyTo1ShiftBtn = document.getElementById("LeftKeyTo1Shift");
const keyExclaimationMarkBtn = document.getElementById("exclaimationMark");
const keyAtSignBtn = document.getElementById("@Sign");
const keyHashtagBtn = document.getElementById("hashtag");
const keyDollarSignBtn = document.getElementById("dollarSign");
const keyPercentageBtn = document.getElementById("percentage");
const keyPowerBtn = document.getElementById("power");
const keyAndSymbolBtn = document.getElementById("andSymbol");
const keyMultiplicationSymbolBtn = document.getElementById("multiplicationSymbol");
const keyOpeningBracketsBtn = document.getElementById("openingBrackets");
const keyClosingBracketsBtn = document.getElementById("closingBrackets");
const keyUnderscoreBtn = document.getElementById("underscore");
const keyAdditionSymbolBtn = document.getElementById("additionSymbol");
const keyCurlyBracketsBtn = document.getElementById("keyCurlyBrackets");
const keyCurlyBracketsOppositeBtn = document.getElementById("keyCurlyBracketsOpposite");
const keyColonBtn = document.getElementById("colon");
const keyDoubleQuotesBtn = document.getElementById("doubleQuotes");
const keyOpenHtmlTagBtn = document.getElementById("openHtmlTag");
const keyClosingHtmlTagBtn = document.getElementById("closingHtmlTag");
const keyQuestionMarkBtn = document.getElementById("questionMark");

const keyBackspaceBtn = document.getElementById("keyBackspace");
const keyTabBtn = document.getElementById("keyTab");
const keySquareBracketsBtn = document.getElementById("keySquareBrackets");
const keySquareBracketsOppositeBtn = document.getElementById("keySquareBracketsOpposite");
const keyBackSlashBtn = document.getElementById("keyBackSlash");
const keyCapsLockBtn = document.getElementById("keyCapsLock");
const keySemiColonBtn = document.getElementById("keySemiColon");
const keySingleApostropheBtn = document.getElementById("keySingleApostrophe");
const keyEnterBtn = document.getElementById("keyEnter");
const keyCommaBtn = document.getElementById("keyComma");
const keyFullStopBtn = document.getElementById("keyFullStop");
const keyForwardSlashBtn = document.getElementById("keyForwardSlash");
const keyLessThanBtn = document.getElementById("keyLessThan");
const keyUpBtn = document.getElementById("keyUp");
const keyDownBtn = document.getElementById("keyDown");
const keyGreaterThanBtn = document.getElementById("keyGreaterThan");
const keySpaceBarBtn = document.getElementById("keySpaceBar");
const keyDeleteAllBtn = document.getElementById("keyDeleteAll");
const keySpecialCharactersLinkBtn = document.getElementById("keySpecialCharacters");
const keyMinusBtn = document.getElementById("keyMinus");
const keyEqualBtn = document.getElementById("keyEqual");


let changeColourKeyNumber7 = () => {
    document.getElementById('keyNumber7').style.backgroundColor = colourChange.value;
}

let checkDarknessOfColour = () => {
    if (colourChangeValue = "#000000") {
        alert('black');
    }
    // Put this in changeColour() function
}



let changeColour = () => {
    let colourChangeValue1 = "#348998";
    colourChangeValue = document.getElementById('colourPickerInput').value;
    console.log("Change Value: " + colourChangeValue)
    colourChangeValue = colourChangeValue.toUpperCase();
    colourChangeValue = colourChangeValue.toString();
    colourChangeValue = colourChangeValue.replace('#', '')
    let rgb = colourChangeValue.match(/.{1,2}/g);
    let rgbArray = [
        parseInt(rgb[0], 16),
        parseInt(rgb[1], 16),
        parseInt(rgb[2], 16)
    ];

    let r = parseInt(rgb[0], 16);
    let g = parseInt(rgb[1], 16);
    let b = parseInt(rgb[2], 16);

    console.log(rgbArray)

    if (150 > r) {
        document.getElementById('LeftKeyTo1').style.color = "white";
        document.getElementById('keyForwardSlash').style.color = "white";
        document.getElementById('keyShift').style.color = "white";
        document.getElementById('keyShift1').style.color = "white";
        keyMinusBtn.style.color = "white";
        keyEqualBtn.style.color = "white";
        keyBackspaceBtn.style.color = "white";
        keyTabBtn.style.color = "white";
        keySquareBracketsOppositeBtn.style.color = "white";
        keyBackSlashBtn.style.color = "white";
        keyCapsLockBtn.style.color = "white";
        keySemiColonBtn.style.color = "white";
        keySingleApostropheBtn.style.color = "white";
        keyEnterBtn.style.color = "white";
        keyCommaBtn.style.color = "white";
        keyFullStopBtn.style.color = "white";
        keySpaceBarBtn.style.color = "white";
        keyDeleteAllBtn.style.color = "white";
        keySquareBracketsBtn.style.color = "white";

        number0Btn.style.color = "white";
        number1Btn.style.color = "white";
        number2Btn.style.color = "white";
        number3Btn.style.color = "white";
        number4Btn.style.color = "white";
        number5Btn.style.color = "white";
        number6Btn.style.color = "white";
        number7Btn.style.color = "white";
        number8Btn.style.color = "white";
        number9Btn.style.color = "white";

        qBtn.style.color = "white";
        wBtn.style.color = "white";
        eBtn.style.color = "white";
        rBtn.style.color = "white";
        tBtn.style.color = "white";
        yBtn.style.color = "white";
        uBtn.style.color = "white";
        iBtn.style.color = "white";
        oBtn.style.color = "white";
        pBtn.style.color = "white";
        aBtn.style.color = "white";
        sBtn.style.color = "white";
        dBtn.style.color = "white";
        fBtn.style.color = "white";
        gBtn.style.color = "white";
        hBtn.style.color = "white";
        jBtn.style.color = "white";
        kBtn.style.color = "white";
        lBtn.style.color = "white";
        zBtn.style.color = "white";
        qBtn.style.color = "white";
        cBtn.style.color = "white";
        vBtn.style.color = "white";
        nBtn.style.color = "white";
        mBtn.style.color = "white";
        bBtn.style.color = "white";
        xBtn.style.color = "white";
    }
    if (150 < r || r === 255) {
        document.getElementById('LeftKeyTo1').style.color = "black";
        document.getElementById('keyForwardSlash').style.color = "black";
        document.getElementById('keyShift').style.color = "black";
        document.getElementById('keyShift1').style.color = "black";
        keyMinusBtn.style.color = "black";
        keyEqualBtn.style.color = "black";
        keyBackspaceBtn.style.color = "black";
        keyTabBtn.style.color = "black";
        keySquareBracketsOppositeBtn.style.color = "black";
        keyBackSlashBtn.style.color = "black";
        keyCapsLockBtn.style.color = "black";
        keySemiColonBtn.style.color = "black";
        keySingleApostropheBtn.style.color = "black";
        keyEnterBtn.style.color = "black";
        keyCommaBtn.style.color = "black";
        keyFullStopBtn.style.color = "black";
        keySpaceBarBtn.style.color = "black";
        keyDeleteAllBtn.style.color = "black";
        keySquareBracketsBtn.style.color = "black";

        number0Btn.style.color = "black";
        number1Btn.style.color = "black";
        number2Btn.style.color = "black";
        number3Btn.style.color = "black";
        number4Btn.style.color = "black";
        number5Btn.style.color = "black";
        number6Btn.style.color = "black";
        number7Btn.style.color = "black";
        number8Btn.style.color = "black";
        number9Btn.style.color = "black";

        qBtn.style.color = "black";
        wBtn.style.color = "black";
        eBtn.style.color = "black";
        rBtn.style.color = "black";
        tBtn.style.color = "black";
        yBtn.style.color = "black";
        uBtn.style.color = "black";
        iBtn.style.color = "black";
        oBtn.style.color = "black";
        pBtn.style.color = "black";
        aBtn.style.color = "black";
        sBtn.style.color = "black";
        dBtn.style.color = "black";
        fBtn.style.color = "black";
        gBtn.style.color = "black";
        hBtn.style.color = "black";
        jBtn.style.color = "black";
        kBtn.style.color = "black";
        lBtn.style.color = "black";
        zBtn.style.color = "black";
        qBtn.style.color = "black";
        cBtn.style.color = "black";
        vBtn.style.color = "black";
        nBtn.style.color = "black";
        mBtn.style.color = "black";
        bBtn.style.color = "black";
        xBtn.style.color = "black";
    }
    if (r === 0 && g === 0 && b === 0) {
        document.getElementById('LeftKeyTo1').style.color = "white";
        document.getElementById('keyForwardSlash').style.color = "white";
        document.getElementById('keyShift').style.color = "white";
        document.getElementById('keyShift1').style.color = "white";
        keyMinusBtn.style.color = "white";
        keyEqualBtn.style.color = "white";
        keyBackspaceBtn.style.color = "white";
        keyTabBtn.style.color = "white";
        keySquareBracketsOppositeBtn.style.color = "white";
        keyBackSlashBtn.style.color = "white";
        keyCapsLockBtn.style.color = "white";
        keySemiColonBtn.style.color = "white";
        keySingleApostropheBtn.style.color = "white";
        keyEnterBtn.style.color = "white";
        keyCommaBtn.style.color = "white";
        keyFullStopBtn.style.color = "white";
        keySpaceBarBtn.style.color = "white";
        keyDeleteAllBtn.style.color = "white";
        keySquareBracketsBtn.style.color = "white";

        number0Btn.style.color = "white";
        number1Btn.style.color = "white";
        number2Btn.style.color = "white";
        number3Btn.style.color = "white";
        number4Btn.style.color = "white";
        number5Btn.style.color = "white";
        number6Btn.style.color = "white";
        number7Btn.style.color = "white";
        number8Btn.style.color = "white";
        number9Btn.style.color = "white";

        qBtn.style.color = "white";
        wBtn.style.color = "white";
        eBtn.style.color = "white";
        rBtn.style.color = "white";
        tBtn.style.color = "white";
        yBtn.style.color = "white";
        uBtn.style.color = "white";
        iBtn.style.color = "white";
        oBtn.style.color = "white";
        pBtn.style.color = "white";
        aBtn.style.color = "white";
        sBtn.style.color = "white";
        dBtn.style.color = "white";
        fBtn.style.color = "white";
        gBtn.style.color = "white";
        hBtn.style.color = "white";
        jBtn.style.color = "white";
        kBtn.style.color = "white";
        lBtn.style.color = "white";
        zBtn.style.color = "white";
        qBtn.style.color = "white";
        cBtn.style.color = "white";
        vBtn.style.color = "white";
        nBtn.style.color = "white";
        mBtn.style.color = "white";
        bBtn.style.color = "white";
        xBtn.style.color = "white";
    }
    if (180 > g) {
        document.getElementById('LeftKeyTo1').style.color = "white";
        document.getElementById('keyForwardSlash').style.color = "white";
        document.getElementById('keyShift').style.color = "white";
        document.getElementById('keyShift1').style.color = "white";
        keyMinusBtn.style.color = "white";
        keyEqualBtn.style.color = "white";
        keyBackspaceBtn.style.color = "white";
        keyTabBtn.style.color = "white";
        keySquareBracketsOppositeBtn.style.color = "white";
        keyBackSlashBtn.style.color = "white";
        keyCapsLockBtn.style.color = "white";
        keySemiColonBtn.style.color = "white";
        keySingleApostropheBtn.style.color = "white";
        keyEnterBtn.style.color = "white";
        keyCommaBtn.style.color = "white";
        keyFullStopBtn.style.color = "white";
        keySpaceBarBtn.style.color = "white";
        keyDeleteAllBtn.style.color = "white";
        keySquareBracketsBtn.style.color = "white";

        number0Btn.style.color = "white";
        number1Btn.style.color = "white";
        number2Btn.style.color = "white";
        number3Btn.style.color = "white";
        number4Btn.style.color = "white";
        number5Btn.style.color = "white";
        number6Btn.style.color = "white";
        number7Btn.style.color = "white";
        number8Btn.style.color = "white";
        number9Btn.style.color = "white";

        qBtn.style.color = "white";
        wBtn.style.color = "white";
        eBtn.style.color = "white";
        rBtn.style.color = "white";
        tBtn.style.color = "white";
        yBtn.style.color = "white";
        uBtn.style.color = "white";
        iBtn.style.color = "white";
        oBtn.style.color = "white";
        pBtn.style.color = "white";
        aBtn.style.color = "white";
        sBtn.style.color = "white";
        dBtn.style.color = "white";
        fBtn.style.color = "white";
        gBtn.style.color = "white";
        hBtn.style.color = "white";
        jBtn.style.color = "white";
        kBtn.style.color = "white";
        lBtn.style.color = "white";
        zBtn.style.color = "white";
        qBtn.style.color = "white";
        cBtn.style.color = "white";
        vBtn.style.color = "white";
        nBtn.style.color = "white";
        mBtn.style.color = "white";
        bBtn.style.color = "white";
        xBtn.style.color = "white";
    }
    if (180 < g) {
        document.getElementById('LeftKeyTo1').style.color = "black";
        document.getElementById('keyForwardSlash').style.color = "black";
        document.getElementById('keyShift').style.color = "black";
        document.getElementById('keyShift1').style.color = "black";
        keyMinusBtn.style.color = "black";
        keyEqualBtn.style.color = "black";
        keyBackspaceBtn.style.color = "black";
        keyTabBtn.style.color = "black";
        keySquareBracketsOppositeBtn.style.color = "black";
        keyBackSlashBtn.style.color = "black";
        keyCapsLockBtn.style.color = "black";
        keySemiColonBtn.style.color = "black";
        keySingleApostropheBtn.style.color = "black";
        keyEnterBtn.style.color = "black";
        keyCommaBtn.style.color = "black";
        keyFullStopBtn.style.color = "black";
        keySpaceBarBtn.style.color = "black";
        keyDeleteAllBtn.style.color = "black";
        keySquareBracketsBtn.style.color = "black";

        number0Btn.style.color = "black";
        number1Btn.style.color = "black";
        number2Btn.style.color = "black";
        number3Btn.style.color = "black";
        number4Btn.style.color = "black";
        number5Btn.style.color = "black";
        number6Btn.style.color = "black";
        number7Btn.style.color = "black";
        number8Btn.style.color = "black";
        number9Btn.style.color = "black";

        qBtn.style.color = "black";
        wBtn.style.color = "black";
        eBtn.style.color = "black";
        rBtn.style.color = "black";
        tBtn.style.color = "black";
        yBtn.style.color = "black";
        uBtn.style.color = "black";
        iBtn.style.color = "black";
        oBtn.style.color = "black";
        pBtn.style.color = "black";
        aBtn.style.color = "black";
        sBtn.style.color = "black";
        dBtn.style.color = "black";
        fBtn.style.color = "black";
        gBtn.style.color = "black";
        hBtn.style.color = "black";
        jBtn.style.color = "black";
        kBtn.style.color = "black";
        lBtn.style.color = "black";
        zBtn.style.color = "black";
        qBtn.style.color = "black";
        cBtn.style.color = "black";
        vBtn.style.color = "black";
        nBtn.style.color = "black";
        mBtn.style.color = "black";
        bBtn.style.color = "black";
        xBtn.style.color = "black";
    }
    if (r === 0 && g === 0 && b === 255) {
        document.getElementById('LeftKeyTo1').style.color = "white";
        document.getElementById('keyForwardSlash').style.color = "white";
        document.getElementById('keyShift').style.color = "white";
        document.getElementById('keyShift1').style.color = "white";
        keyMinusBtn.style.color = "white";
        keyEqualBtn.style.color = "white";
        keyBackspaceBtn.style.color = "white";
        keyTabBtn.style.color = "white";
        keySquareBracketsOppositeBtn.style.color = "white";
        keyBackSlashBtn.style.color = "white";
        keyCapsLockBtn.style.color = "white";
        keySemiColonBtn.style.color = "white";
        keySingleApostropheBtn.style.color = "white";
        keyEnterBtn.style.color = "white";
        keyCommaBtn.style.color = "white";
        keyFullStopBtn.style.color = "white";
        keySpaceBarBtn.style.color = "white";
        keyDeleteAllBtn.style.color = "white";
        keySquareBracketsBtn.style.color = "white";

        number0Btn.style.color = "white";
        number1Btn.style.color = "white";
        number2Btn.style.color = "white";
        number3Btn.style.color = "white";
        number4Btn.style.color = "white";
        number5Btn.style.color = "white";
        number6Btn.style.color = "white";
        number7Btn.style.color = "white";
        number8Btn.style.color = "white";
        number9Btn.style.color = "white";

        qBtn.style.color = "white";
        wBtn.style.color = "white";
        eBtn.style.color = "white";
        rBtn.style.color = "white";
        tBtn.style.color = "white";
        yBtn.style.color = "white";
        uBtn.style.color = "white";
        iBtn.style.color = "white";
        oBtn.style.color = "white";
        pBtn.style.color = "white";
        aBtn.style.color = "white";
        sBtn.style.color = "white";
        dBtn.style.color = "white";
        fBtn.style.color = "white";
        gBtn.style.color = "white";
        hBtn.style.color = "white";
        jBtn.style.color = "white";
        kBtn.style.color = "white";
        lBtn.style.color = "white";
        zBtn.style.color = "white";
        qBtn.style.color = "white";
        cBtn.style.color = "white";
        vBtn.style.color = "white";
        nBtn.style.color = "white";
        mBtn.style.color = "white";
        bBtn.style.color = "white";
        xBtn.style.color = "white";
    }
    if (r === 0 && g === 255 && b === 0) {
        document.getElementById('LeftKeyTo1').style.color = "black";
        document.getElementById('keyForwardSlash').style.color = "black";
        document.getElementById('keyShift').style.color = "black";
        document.getElementById('keyShift1').style.color = "black";
        keyMinusBtn.style.color = "black";
        keyEqualBtn.style.color = "black";
        keyBackspaceBtn.style.color = "black";
        keyTabBtn.style.color = "black";
        keySquareBracketsOppositeBtn.style.color = "black";
        keyBackSlashBtn.style.color = "black";
        keyCapsLockBtn.style.color = "black";
        keySemiColonBtn.style.color = "black";
        keySingleApostropheBtn.style.color = "black";
        keyEnterBtn.style.color = "black";
        keyCommaBtn.style.color = "black";
        keyFullStopBtn.style.color = "black";
        keySpaceBarBtn.style.color = "black";
        keyDeleteAllBtn.style.color = "black";
        keySquareBracketsBtn.style.color = "black";

        number0Btn.style.color = "black";
        number1Btn.style.color = "black";
        number2Btn.style.color = "black";
        number3Btn.style.color = "black";
        number4Btn.style.color = "black";
        number5Btn.style.color = "black";
        number6Btn.style.color = "black";
        number7Btn.style.color = "black";
        number8Btn.style.color = "black";
        number9Btn.style.color = "black";

        qBtn.style.color = "black";
        wBtn.style.color = "black";
        eBtn.style.color = "black";
        rBtn.style.color = "black";
        tBtn.style.color = "black";
        yBtn.style.color = "black";
        uBtn.style.color = "black";
        iBtn.style.color = "black";
        oBtn.style.color = "black";
        pBtn.style.color = "black";
        aBtn.style.color = "black";
        sBtn.style.color = "black";
        dBtn.style.color = "black";
        fBtn.style.color = "black";
        gBtn.style.color = "black";
        hBtn.style.color = "black";
        jBtn.style.color = "black";
        kBtn.style.color = "black";
        lBtn.style.color = "black";
        zBtn.style.color = "black";
        qBtn.style.color = "black";
        cBtn.style.color = "black";
        vBtn.style.color = "black";
        nBtn.style.color = "black";
        mBtn.style.color = "black";
        bBtn.style.color = "black";
        xBtn.style.color = "black";
    }

    changeColourKeyNumber7();
    document.getElementById('LeftKeyTo1').style.backgroundColor = colourChange.value;
    document.getElementById('keyForwardSlash').style.backgroundColor = colourChange.value;
    document.getElementById('keyShift').style.backgroundColor = colourChange.value;
    document.getElementById('keyShift1').style.backgroundColor = colourChange.value;
    keyMinusBtn.style.backgroundColor = colourChange.value;
    keyEqualBtn.style.backgroundColor = colourChange.value;
    keyBackspaceBtn.style.backgroundColor = colourChange.value;
    keyTabBtn.style.backgroundColor = colourChange.value;
    keySquareBracketsOppositeBtn.style.backgroundColor = colourChange.value;
    keyBackSlashBtn.style.backgroundColor = colourChange.value;
    keyCapsLockBtn.style.backgroundColor = colourChange.value;
    keySemiColonBtn.style.backgroundColor = colourChange.value;
    keySingleApostropheBtn.style.backgroundColor = colourChange.value;
    keyEnterBtn.style.backgroundColor = colourChange.value;
    keyCommaBtn.style.backgroundColor = colourChange.value;
    keyFullStopBtn.style.backgroundColor = colourChange.value;
    keySpaceBarBtn.style.backgroundColor = colourChange.value;
    keyDeleteAllBtn.style.backgroundColor = colourChange.value;
    keySquareBracketsBtn.style.backgroundColor = colourChange.value;

    number0Btn.style.backgroundColor = colourChange.value;
    number1Btn.style.backgroundColor = colourChange.value;
    number2Btn.style.backgroundColor = colourChange.value;
    number3Btn.style.backgroundColor = colourChange.value;
    number4Btn.style.backgroundColor = colourChange.value;
    number5Btn.style.backgroundColor = colourChange.value;
    number6Btn.style.backgroundColor = colourChange.value;
    number8Btn.style.backgroundColor = colourChange.value;
    number9Btn.style.backgroundColor = colourChange.value;

    qBtn.style.backgroundColor = colourChange.value;
    wBtn.style.backgroundColor = colourChange.value;
    eBtn.style.backgroundColor = colourChange.value;
    rBtn.style.backgroundColor = colourChange.value;
    tBtn.style.backgroundColor = colourChange.value;
    yBtn.style.backgroundColor = colourChange.value;
    uBtn.style.backgroundColor = colourChange.value;
    iBtn.style.backgroundColor = colourChange.value;
    oBtn.style.backgroundColor = colourChange.value;
    pBtn.style.backgroundColor = colourChange.value;
    aBtn.style.backgroundColor = colourChange.value;
    sBtn.style.backgroundColor = colourChange.value;
    dBtn.style.backgroundColor = colourChange.value;
    fBtn.style.backgroundColor = colourChange.value;
    gBtn.style.backgroundColor = colourChange.value;
    hBtn.style.backgroundColor = colourChange.value;
    jBtn.style.backgroundColor = colourChange.value;
    kBtn.style.backgroundColor = colourChange.value;
    lBtn.style.backgroundColor = colourChange.value;
    zBtn.style.backgroundColor = colourChange.value;
    qBtn.style.backgroundColor = colourChange.value;
    cBtn.style.backgroundColor = colourChange.value;
    vBtn.style.backgroundColor = colourChange.value;
    nBtn.style.backgroundColor = colourChange.value;
    mBtn.style.backgroundColor = colourChange.value;
    bBtn.style.backgroundColor = colourChange.value;
    xBtn.style.backgroundColor = colourChange.value;

}

function displayKeyLeftKeyTo1() {
    showKeys.append(leftKeyTo1OnclickText);
}

function displayKeyLeftKeyTo1Shift() {
    showKeys.append("~");
}

function displayKeyExclaimationMark() {
    showKeys.append("!");
}

function displayKeyCommercialAt() {
    showKeys.append("@");
}

function displayKeyHashtag() {
    showKeys.append("#");
}

function displayKeyDollarSign() {
    showKeys.append("$");
}

function displayKeyPercent() {
    showKeys.append("%");
}

function displayKeyPower() {
    showKeys.append("^");
}

function displayKeyAndSymbol() {
    showKeys.append("&");
}

function displayKeyMultiplicationSymbol() {
    showKeys.append("*");
}

function displayKeyOpeningBrackets() {
    showKeys.append("(");
}

function displayKeyClosingBrackets() {
    showKeys.append(")");
}


function displayKeyUnderscore() {
    showKeys.append("_");
}

function displayKeyAdditionSymbol() {
    showKeys.append("+");
}

function displayKeyCurlyBrackets() {
    showKeys.append("{");
}

function displayKeyCurlyBracketsOpposite() {
    showKeys.append("}");
}

function displayKeyColon() {
    showKeys.append(":");
}

function displayKeyDoubleQuotes() {
    showKeys.append('"');
}

function displayKeyOpenHtmlTag() {
    showKeys.append('<');
}

function displayKeyClosingHtmlTag() {
    showKeys.append('>');
}

function displayKeyQuestionMark() {
    showKeys.append('?');
}

function displayKey1() {
    showKeys.append(one);
}

function displayKey2() {
    showKeys.append(two);
}

function displayKey3() {
    showKeys.append(three);
}

function displayKey4() {
    showKeys.append(four);
}

function displayKey5() {
    showKeys.append(five);
}

function displayKey6() {
    showKeys.append(six);
}

function displayKey7() {
    showKeys.append(seven);
}

function displayKey8() {
    showKeys.append(eight);
}


function displayKey9() {
    showKeys.append(nine);
}

function displayKey0() {
    showKeys.append(zero);
}

function displayKeyMinus() {
    showKeys.append(minus);
}

function displayKeyEqual() {
    showKeys.append(equal);
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
    showKeys.append(squareBrackets);
}

function displayKeySquareBracketsOpposite() {
    showKeys.append(squareBracketsOpposite);
}

function displayKeyBackSlash() {
    showKeys.append(backSlash);
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
    showKeys.append(l);
}

function displayKeySemiColon() {
    showKeys.append(semiColon);
}

function displayKeySingleApostrophe() {
    showKeys.append(singleQuote);
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
    showKeys.append(comma);
}

function displayKeyFullStop() {
    showKeys.append(fullStop);
}

function displayKeyForwardSlash() {
    showKeys.append(forwardSlash);
}

// not letter or number keys:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


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



function displayKeyBackspace() {
    let str = document.getElementById('displayKeys').innerText;
    let strRemove = str.substring(0, str.length - 1);
    document.getElementById('displayKeys').innerText = strRemove;
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


function displayKeyEnter() {
    let linebreak = document.createElement('br');
    showKeys.append(linebreak);
}

let shiftCheck = false;
let shiftOrNot = shiftCheck ? displayKeyShift : displayKeyNotShift;

function displayKeyShift() {
    shiftCheck = !shiftCheck;
    if (shiftCheck == true) {
        keyLeftKeyTo1.innerText = "~";
        number1Btn.innerText = "!";
        number2Btn.innerText = "@";
        number3Btn.innerText = "#";
        number4Btn.innerText = "$";
        number5Btn.innerText = "%";
        number6Btn.innerText = "^";
        number7Btn.innerText = "&";
        number8Btn.innerText = "*";
        number9Btn.innerText = "(";
        number0Btn.innerText = ")";
        keyMinusBtn.innerText = "_";
        keyEqualBtn.innerText = "+";
        keyBackSlashBtn.innerText = "|";
        keySemiColonBtn.innerText = ":";
        keySingleApostropheBtn.innerText = '"';
        keyCommaBtn.innerText = "<";
        keyFullStopBtn.innerText = ">";
        keyForwardSlashBtn.innerText = "?";
        keySquareBracketsBtn.innerText = "{";
        keySquareBracketsOppositeBtn.innerText = "}";

        leftKeyTo1OnclickText = "~";
        one = "!";
        two = "@";
        three = "#";
        four = "$";
        five = "%";
        six = "^";
        seven = "&";
        eight = "*";
        nine = "(";
        zero = ")";
        minus = "_";
        equal = "+";
        squareBrackets = "{";
        squareBracketsOpposite = "}";
        backSlash = "|";
        semiColon = ":";
        singleQuote = '"';
        comma = "<";
        fullStop = ">";
        forwardSlash = "?";

    } else if (shiftCheck == false) {
        keyLeftKeyTo1.innerText = "`";
        number1Btn.innerText = "1";
        number2Btn.innerText = "2";
        number3Btn.innerText = "3";
        number4Btn.innerText = "4";
        number5Btn.innerText = "5";
        number6Btn.innerText = "6";
        number7Btn.innerText = "7";
        number8Btn.innerText = "8";
        number9Btn.innerText = "9";
        number0Btn.innerText = "0";
        keyMinusBtn.innerText = "-";
        keyEqualBtn.innerText = "=";
        keyBackSlashBtn.innerText = "\\";
        keySemiColonBtn.innerText = ";";
        keySingleApostropheBtn.innerText = "'";
        keyCommaBtn.innerText = ",";
        keyFullStopBtn.innerText = ".";
        keyForwardSlashBtn.innerText = "/";
        keySquareBracketsBtn.innerText = "[";
        keySquareBracketsOppositeBtn.innerText = "]";

        leftKeyTo1OnclickText = "`";
        one = "1";
        two = "2";
        three = "3";
        four = "4";
        five = "5";
        six = "6";
        seven = "7";
        eight = "8";
        nine = "9";
        zero = "0";
        minus = "-";
        equal = "=";
        squareBrackets = "[";
        squareBracketsOpposite = "]";
        backSlash = "\\";
        semiColon = ";";
        singleQuote = "'";
        comma = ",";
        fullStop = ".";
        forwardSlash = "/";

    }
}

function displayKeyNotShift() {
    keyLeftKeyTo1.innerText = "`";
    number1Btn.innerText = "1";
    number2Btn.innerText = "2";
    number3Btn.innerText = "3";
    number4Btn.innerText = "4";
    number5Btn.innerText = "5";
    number6Btn.innerText = "6";
    number7Btn.innerText = "7";
    number8Btn.innerText = "8";
    number9Btn.innerText = "9";
    number0Btn.innerText = "0";
    keyMinusBtn.innerText = "-";
    keyEqualBtn.innerText = "=";
    keyBackSlashBtn.innerText = "\\";
    keySemiColonBtn.innerText = ";";
    keySingleApostropheBtn.innerText = "'";
    keyCommaBtn.innerText = ",";
    keyFullStopBtn.innerText = ".";
    keyForwardSlashBtn.innerText = "/";
    keySquareBracketsBtn.innerText = "[";
    keySquareBracketsOppositeBtn.innerText = "]";

    leftKeyTo1OnclickText = "`";
    one = "1";
    two = "2";
    three = "3";
    four = "4";
    five = "5";
    six = "6";
    seven = "7";
    eight = "8";
    nine = "9";
    zero = "0";
    minus = "-";
    equal = "=";
    squareBrackets = "[";
    squareBracketsOpposite = "]";
    backSlash = "\\";
    semiColon = ";";
    singleQuote = "'";
    comma = ",";
    fullStop = ".";
    forwardSlash = "/";
}