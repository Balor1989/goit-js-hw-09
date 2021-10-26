
const refs = {
startBtn: document.querySelector('[data-start]'),
stopBtn: document.querySelector('[data-stop]'),
timerId: null,
}
const changeColor = () => document.body.style.background = `${getRandomHexColor()}`;
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const onClickStartBtn = () => {
    changeColor();
    refs.startBtn.setAttribute('disabled', true);
    refs.stopBtn.removeAttribute('disabled')
    refs.timerId = setInterval(() => {
        changeColor()
    },1000)
}
const onClickStopBtn = () => {
    clearInterval(refs.timerId)
    refs.startBtn.removeAttribute('disabled')
    refs.stopBtn.setAttribute('disabled', true);
}

refs.startBtn.addEventListener('click', onClickStartBtn)
refs.stopBtn.addEventListener('click', onClickStopBtn)
refs.stopBtn.setAttribute('disabled', true);
