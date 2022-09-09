let userNumber = "+380939390173";
let telegramAccount = "@NNick89";
let userEmail = "N.nikiforov1989@gmail.com";

const phonecall = document.getElementById('phonecall');
const viber = document.getElementById('viber');
const telegram = document.getElementById('telegram');
const email = document.getElementById('email');

phonecall.addEventListener('click', () => {
    alert(userNumber);
});
viber.addEventListener('click', () => {
    alert(userNumber);
});
telegram.addEventListener('click', () => {
    alert(telegramAccount);
});
email.addEventListener('click', () => {
    alert(userEmail);
});
