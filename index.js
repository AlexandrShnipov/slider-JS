// find elements
const buttonPrev = document.querySelector('.button--prev');
const buttonNext = document.querySelector('.button--next');
const slideImages = document.querySelector('.images-slider');

//create images array
let imagesUrls = [];
imagesUrls.push('./images/Aventador_ultimae_model_mobile.webp');
imagesUrls.push('./images/front-left-side-47.webp');
imagesUrls.push('./images/iCar-iphonehacks_large.jpg');

currentImagesIndex = 0;


slideImages.src = imagesUrls[currentImagesIndex];
buttonPrev.disabled = true;

// function definitions
const onShowPrevBtnClick = () => {
  console.log('prev-click');
  currentImagesIndex--;
  slideImages.src = imagesUrls[currentImagesIndex];
  buttonNext.disabled = false;

  if (currentImagesIndex === 0) {
    buttonPrev.disabled = true;
  }
};


const onShowNextBtnClick = () => {
  console.log('next-click');
  currentImagesIndex++;
  slideImages.src = imagesUrls[currentImagesIndex];
  buttonPrev.disabled = false;

  if (currentImagesIndex === imagesUrls.length - 1) {
    buttonNext.disabled = true;
  }
}


// subscribe to events
buttonPrev.addEventListener('click', onShowPrevBtnClick);
buttonNext.addEventListener('click', onShowNextBtnClick);