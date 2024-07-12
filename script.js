let icon = document.querySelector(".icon");
let ul = document.querySelector("ul");
const modal = document.getElementById('modal');


icon.addEventListener("click", () => {
    ul.classList.toggle("showData");

})
document.getElementById('feedback-form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('feedbackMessage').style.display = 'block';

    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('feedback').value = '';

    setTimeout(function () {
        document.getElementById('feedbackMessage').style.display = 'none';
    }, 3000);
});