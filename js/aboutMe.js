
function machineWrittingForMainPage() {
    const spanText = document.querySelector('.textAbout');
    const spanCursor = document.querySelector('.aboutCursor')
    const text = ['Welcome to My website! 🙋‍♀️🖐', 'My name is Jacob 😊', 'I am a bit of a full stack developer 😅', 'Enjoy viewing My website 😄'];

    let activeLetter = 0;
    let activeText = 0;

    const addLetter = () => {
        if(activeLetter >= 0) spanText.textContent += text[activeText][activeLetter];
        activeLetter++;
        if(activeLetter == text[activeText].length) {
            activeText++;
            if(activeText == text.length) activeText = 0;
            return setTimeout(() => {
                activeLetter = 0;
                spanText.textContent = '';
                addLetter();
            }, 2000)
        }
        setTimeout(addLetter, 100)
    }
    addLetter();

    const cursorAnimation = () => {
        spanCursor.classList.toggle('active');
    }
    setInterval(cursorAnimation, 400);
}
machineWrittingForMainPage();

function machineWrittingForDates() {
    const h1Text = document.querySelector('.fourth .content .textAbout');
    const spanCursor = document.querySelector('.fourth .content .aboutCursor');
    const text = ['Here we have times', 'From Your TimeZone', 'New York', 'and Tokyo', 'Maybe more in the future😅'];
    let activeLetter = 0;
    let activeText = 0;

    const addLetter = () => {
        if(activeLetter >= 0) h1Text.textContent += text[activeText][activeLetter];
        activeLetter++;
        if(activeLetter == text[activeText].length) {
            activeText++;
            if(activeText == text.length) activeText = 0;
            return setTimeout(() => {
                activeLetter = 0;
                h1Text.textContent = '';
                addLetter();
            }, 2000)
        }
        setTimeout(addLetter, 100)
    }
    addLetter();

    const cursorAnimation = () => {
        spanCursor.classList.toggle('active');
    }
    setInterval(cursorAnimation, 400);
}

machineWrittingForDates();