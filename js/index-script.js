var mail = document.querySelector(".mail-button");
var CloseFeedback = document.querySelector(".feedback-close");
var feedback = document.querySelector(".feedback-modal");
var minimap = document.querySelector(".mini-map");
var bigmap = document.querySelector(".big-map");
var mapclose = document.querySelector(".map-close");
var focusName = document.querySelector(".input-name");

mail.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
    focusName.focus();
});
CloseFeedback.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.remove("modal-show");
})
minimap.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigmap.classList.add("modal-show");
});
mapclose.addEventListener("click", function (evt) {
    evt.preventDefault();
    bigmap.classList.remove("modal-show");
})