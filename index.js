var imgArr = [{ pic5 }, { pic6 }, { pic7 }, { pic8 }],
img = 0,
imgDuration = 6000

function slideShow() {
document.getElementById("image").className = "";
document.getElementById("image").src = imgArr[img];
setTimeout(function () {
  document.getElementById("image").className = "fadeOut";
}, 3000);
img++;
if (img == imgArr.length) {
  img = 0;
}
setTimeout(slideShow, imgDuration);
}
slideShow();