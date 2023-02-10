function goToScroll(className) {
    var location = document.querySelector(className).offsetTop;
    document.querySelector(".container").scrollTo({ top: location, behavior: "smooth" })
}