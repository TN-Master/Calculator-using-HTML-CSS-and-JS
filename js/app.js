function num1() {
    document.getElementById("input").value += "1";
}

function num2() {
    document.getElementById("input").value += "2";
}

function num3() {
    document.getElementById("input").value += "3";
}

function num4() {
    document.getElementById("input").value += "4";
}

function num5() {
    document.getElementById("input").value += "5";
}

function num6() {
    document.getElementById("input").value += "6";
}

function num7() {
    document.getElementById("input").value += "7";
}

function num8() {
    document.getElementById("input").value += "8";
}

function num9() {
    document.getElementById("input").value += "9";
}

function num0() {
    document.getElementById("input").value += "0";
}

function numDot() {
    document.getElementById("input").value += ".";
}

function operation1() {
    document.getElementById("input2").value = document.getElementById("input").value + " x";
    document.getElementById("input").value = "";
}

function operation2() {
    document.getElementById("input2").value = document.getElementById("input").value + " -";
    document.getElementById("input").value = "";
}

function operation3() {
    document.getElementById("input2").value = document.getElementById("input").value + " +";
    document.getElementById("input").value = "";
}

function operation4() {
    document.getElementById("input2").value = document.getElementById("input").value + " /";
    document.getElementById("input").value = "";
}

function operation5() {
    document.getElementById("input2").value = document.getElementById("input").value + " ^";
    document.getElementById("input").value = "";
}

function operation6() {
    document.getElementById("input2").value = document.getElementById("input").value + " ^ 2";
    let num = Number(document.getElementById("input").value);
    document.getElementById("input").value = num * num;
}

function clearField() {
    document.getElementById("input").value = "";
    document.getElementById("input2").value = "";
}

function back() {
    let str = document.getElementById("input").value
    str = str.slice(0, -1);
    document.getElementById("input").value = str;
}

function equal() {
    let str = document.getElementById("input2").value;
    let numTemp = str.slice(0, -1);
    let num1 = Number(numTemp);
    let num2 = Number(document.getElementById("input").value);

    let last = str.charAt(str.length - 1);
    if (last == 'x') {
        document.getElementById("input2").value += " " + document.getElementById("input").value + " = ";
        document.getElementById("input").value = num1 * num2;
    }
    else if (last == '-') {
        document.getElementById("input2").value += " " + document.getElementById("input").value + " = ";
        document.getElementById("input").value = num1 - num2;
    }
    else if (last == '+') {
        document.getElementById("input2").value += " " + document.getElementById("input").value + " = ";
        document.getElementById("input").value = num1 + num2;
    }
    else if (last == '/') {
        document.getElementById("input2").value += " " + document.getElementById("input").value + " = ";
        document.getElementById("input").value = num1 / num2;
    }
    else if (last == '^') {
        document.getElementById("input2").value += " " + document.getElementById("input").value + " = ";
        document.getElementById("input").value = Math.pow(num1, num2);
    }
}

document.onclick = () => applyCursorRippleEffect(event);

function applyCursorRippleEffect(e) {
    const ripple = document.createElement("div");

    ripple.className = "ripple";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;

    ripple.style.animation = "ripple-effect .2s  linear";
    ripple.onanimationend = () => document.body.removeChild(ripple);
}

function infoBox(){
    document.getElementById("infoBox").style = "display: flex;";
}

function closeInfoBox(){
    document.getElementById("infoBox").style = "display: none;";
}