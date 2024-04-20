

const selectImage = document.querySelectorAll(".modal-content-box img");
const myImgMain = document.querySelector(".modal-hover-box");
const myImagePlacer = document.querySelector(".modal-main-box img");



selectImage.forEach(function (sltImage) {

    sltImage.addEventListener("click", function () {
        myImgMain.style = "opacity: 1;pointer-events: all;"
        myImagePlacer.src = sltImage.src
    });

    myImgMain.addEventListener("click", function () {
        myImgMain.style = "opacity: 0;   pointer-events: none;"
    });



}); 



