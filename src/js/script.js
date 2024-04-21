const backImage = document.querySelector('.back-content')
const frontImage = document.querySelector('.front-content')
const controlSlider = document.querySelector('.control-slider')
const challenger = document.querySelector('.main-challenger')
const congrats = document.querySelector('.main-congrats')
const questerVictory = document.querySelector('.quester-victory')
const btnReset = document.querySelector('.btn-reset')

randomPosition()
rotateImages()

controlSlider.addEventListener('input', () => {
    challenger.style.opacity = 1
    rotateImages()
})

controlSlider.addEventListener('change', () => {
    verify()
})

btnReset.addEventListener('click', () => {
    reset()
})

function rotateImages() {
    const rotation = controlSlider.value
    frontImage.style.transform = `translate(-50%, -50%) rotate(${rotation}deg)`
    backImage.style.transform = `translate(-50%, -50%) rotate(${-rotation}deg)`
}

function randomPosition() {
    challenger.style.opacity = 0.5
    controlSlider.min = -(Math.floor(Math.random() * 120) + 60)
    controlSlider.max = Math.floor(Math.random() * 120) + 60;
    controlSlider.value = controlSlider.min
}

function reset() {
    randomPosition()
    rotateImages()
    controlSlider.value = controlSlider.min
    challenger.classList.toggle('disabled')
    congrats.classList.toggle('disabled')
    questerVictory.classList.toggle('disabled')
    controlSlider.classList.toggle('disabled')
    btnReset.classList.toggle('disabled')
}

function verify() {
    const rotation = controlSlider.value
    if (rotation < 1 && rotation > -1) {
        challenger.style.opacity = 0
        setTimeout(() => {
            controlSlider.value = controlSlider.min
            challenger.classList.toggle('disabled')
            congrats.classList.toggle('disabled')
            questerVictory.classList.toggle('disabled')
            controlSlider.classList.toggle('disabled')
            btnReset.classList.toggle('disabled')
        }, 1000)
    } else {
        challenger.style.opacity = 0.3
        alert('Errou Noob, tente de novo!')
    }
}