document.querySelector('#flip').addEventListener('click', flipCoin)
document.querySelector('#flip').addEventListener('click', flipCoinSound)
document.querySelector('#flip').addEventListener('click', flipCoinGif)

function flipCoin() {
    let rng = Math.random()
    if (rng < .5) {
        setTimeout(function(){
            let value = document.querySelector('#headsCounter').innerHTML
        value++
        document.querySelector('#result').src = 'heads.png';
        document.querySelector('#headsCounter').innerHTML = value;
        }, 750)
        
    }
    else {
        setTimeout(function() {
            let value = document.querySelector('#tailsCounter').innerHTML
            value++
            document.querySelector('#result').src = 'tails.jpg';
            document.querySelector('#tailsCounter').innerHTML = value;
        }, 750)
        
    }
}

// const flipCoinSound = function() {
//     const audio = new Audio('coinflip.mp3')
//     audio.play();
// }

function flipCoinSound() {
    const audio = new Audio('coinflip.mp3')
    audio.volume = .3;
    audio.play();
}

function flipCoinGif() {
    document.querySelector('#result').src = 'flip.gif';
}