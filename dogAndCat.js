const colorPickerElement = document.querySelector("#color-picker");
const animalPickerElement = document.querySelector("#animal-picker");
const imgElement = document.querySelector(".img");

imgElement.style.backgroundColor = "blueviolet";

function updateImageBG(event) {
  const colorCode = event.target.value;
  imgElement.style.backgroundColor = colorCode;
}
colorPickerElement.addEventListener("input", updateImageBG);

function updateImageSource(event) {
  const selectedImage = event.target.value;
  imgElement.src = selectedImage;
}
animalPickerElement.addEventListener("input", updateImageSource);
