const heart = document.querySelector(".heart");

heart.addEventListener("mousemove", function () {
  let size = 10;
  let beat = setInterval(function () {
    size += 5;
    heart.style.transform = `scale(${size / 10})`;

    if (size >= 30) {
      clearInterval(beat);
    }
  }, 100);

  heart.style.left = `${Math.random() * (window.innerWidth - heart.offsetWidth)}px`;
  heart.style.top = `${Math.random() * (window.innerHeight - heart.offsetHeight)}px`;
});
const followMe = document.getElementById("follow-me");

document.addEventListener("mousemove", function(event) {
  followMe.style.left = event.clientX + "px";
  followMe.style.top = event.clientY + "px";
});