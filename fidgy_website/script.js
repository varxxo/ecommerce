document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    form.addEventListener("submit", function (e) {
        e.preventDefault(); 
        showMessage();
    });
});

function showMessage() {
    alert("Welcome to Messimo!");
}
