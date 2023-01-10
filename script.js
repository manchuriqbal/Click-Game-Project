// Write your code here
const stats = document.querySelector('.stats');
const startBtn = document.querySelector('button[name=start]');
const clickBtn = document.querySelector('button[name=click]');

const winScore = 10;
let count = 0;



startBtn.addEventListener('click', () => {
    start();
})




clickBtn.addEventListener('click', () => {

    count++;
    stats.textContent = count;

})



const start = () => {

    count = 0;

    stats.textContent = count;

    clickBtn.removeAttribute('disabled');

    startCounting()
}




const startCounting = () => {

    setTimeout(() =>{

        if (isWin()) {
            stats.textContent = 'You Win!';

        } else{
            stats.textContent = 'You Lost';
        }

        clickBtn.setAttribute('disabled', 'true');

    },3000);

}




const isWin = () => {

    if (count < winScore) {
        return false;
    } else{
        return true;
    }

}