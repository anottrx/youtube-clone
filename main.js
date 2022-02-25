const thumbsUpBtn = document.querySelector("#thumbsUp");
const thumbsUpCnt = document.querySelector(".thumbsUpAndCnt");
const subscribeBtn = document.querySelector("#subscribeBtn");
let isClicked = true;

thumbsUpBtn.addEventListener("click", () => {
  if (isClicked) {
    document.getElementById("thumbsUpCnt").innerHTML =
      Number(document.getElementById("thumbsUpCnt").innerHTML) + 1;
    isClicked = !isClicked;
  } else {
    document.getElementById("thumbsUpCnt").innerHTML =
      Number(document.getElementById("thumbsUpCnt").innerHTML) - 1;
    isClicked = !isClicked;
  }
  thumbsUpCnt.classList.toggle("active");
});

subscribeBtn.addEventListener("click", () => {
  subscribeBtn.classList.toggle("active");
});
