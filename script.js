function mouseScript(event) {
    let i = document.createElement('i');
    i.style.left = (event.pageX) + 'px';
    i.style.top = (event.pageY) + 'px';
    i.style.scale = `${Math.random() * 2 + 1}`;
    i.style.setProperty('--x', rodarMouse());
    i.style.setProperty('--y', rodarMouse());

    document.body.appendChild(i);

    setTimeout(() => {
        document.body.removeChild(i)
    }, 2000);
}

function rodarMouse() {
    return `${Math.random() * 400 - 200}px`
}

document.addEventListener('mousemove', mouseScript)

const typedTextSpan = document.querySelector("#texto-digitar-2");
const cursorSpan = document.querySelector("#cursor");

const textArray = ["WEB", "back-end"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    }
    else {
        cursorSpan.classList.remove("typing");
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

const typingText = document.querySelector('#typing');
const textArray2 = typingText.textContent.split('');
typingText.textContent = '';

let typingIndex = 0;

function type2() {
    if (typingIndex < textArray2.length) {
        typingText.textContent += textArray2[typingIndex];
        typingIndex++;
        setTimeout(type2, 100);
    }
}

type2();


var verificarDark = false;

function DarkMode() {
    var dark = document.body;
    var darkButtom = document.body.querySelector('#Dark-Span');

    dark.classList.toggle('dark-mode');

    if (verificarDark == false) {
        verificarDark = true;
        darkButtom.innerHTML = "light_mode";
    } else if (verificarDark == true) {
        verificarDark = false;
        darkButtom.innerHTML = "dark_mode";
    }
}