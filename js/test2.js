var modalForm = feedback.querySelector("form");
var userNames = modalForm.querySelector("[name=user-names]");
var userEmail = modalForm.querySelector("[name=email]");
var textarea = modalForm.querySelector("textarea");


modalForm.addEventListener("submit", function (evt) {
	if (!userNames.value || !userEmail.value || !textarea.value) {
		feedback.classList.remove("modal-error");
		feedback.offsetWidth = feedback.offsetWidth;
		feedback.classList.add("modal-error");
		evt.preventDefault();
	}
})
