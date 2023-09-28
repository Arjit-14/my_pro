const readMoreButton = document.getElementById("readMoreButton");
const readMoreText = document.getElementById("readMoreText");

readMoreButton.addEventListener("click", function () {
    if (readMoreText.style.display === "none" || readMoreText.style.display === "") {
        readMoreText.style.display = "block";
        readMoreButton.textContent = "Read Less";
    } else {
        readMoreText.style.display = "none";
        readMoreButton.textContent = "Read More";
    }
});
