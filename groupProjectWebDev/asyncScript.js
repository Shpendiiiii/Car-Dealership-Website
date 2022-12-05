var i = 0;
var images = [];

images[0] =
  "https://hips.hearstapps.com/hmg-prod/images/2023-aston-martin-dbx-707-158-1649784164.jpg?crop=1.00xw:0.846xh;0,0.154xh&resize=1200:*";
images[1] =
  "https://pictures.dealer.com/w/warrenhenryauto/1623/7ba71876c3b9551e6a7e262907c0f6c2x.jpg";
images[2] =
  "https://th.bing.com/th/id/R.8a762fc29c828e80f87b3f0534e38995?rik=HDh4mRqvFW2Ebg&riu=http%3a%2f%2fwww.hdcarwallpapers.com%2fwalls%2f2020_dodge_charger_srt_hellcat_widebody_4-HD.jpg&ehk=kY0o6J0JzMPUC6AYu%2fqIDBVy8KwXe2yi7Qt4G1DrjbQ%3d&risl=&pid=ImgRaw&r=0";
images[3] =
  "https://hips.hearstapps.com/hmg-prod/images/2024-ford-mustang-exterior-112-1663170333.jpg?crop=0.712xw:0.601xh;0.142xw,0.306xh&resize=1200:*";

function slideChange() {
  document.slide.src = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("slideChange()", 3020);
}
window.onload = slideChange;
