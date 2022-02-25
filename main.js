const thumbsUpBtn = document.querySelector("#thumbsUp");
const thumbsUpCnt = document.querySelector(".thumbsUpAndCnt");
const subscribeBtn = document.querySelector("#subscribeBtn");
let isClicked = true;
let isSubscribed = true;

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
  if (isSubscribed) {
    document.getElementById("subscribeBtn").innerHTML = "구독중";
    isSubscribed = !isSubscribed;
  } else {
    document.getElementById("subscribeBtn").innerHTML = "Subscribe";
    isSubscribed = !isSubscribed;
  }
  subscribeBtn.classList.toggle("active");
});
