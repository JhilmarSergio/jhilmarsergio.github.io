const images = [
  "1--OR.jpg",
  "2--ROL.png",
  "3--vs_3B_5.jpg",
  "4--vs_3B_6_7.jpg",
  "5--vs_3B_8_9.jpg",
  "6--vs_3B_10_11.jpg",
  "7--vs_3B_12_14.jpg",
  "8--vs_3B_15_17.jpg",
  "9--vs_3B_18_21.jpg",
  "10--Cold_4B.png",
  "11--vs_Cold_4B.jpg",
  "12--vs_OR_0_8.png",
  "13--vs_OR_8_12.png",
  "14--vs_OR_12_17.png",
  "15--vs_OR_17_24.png",
  "16--vs_OR_24_33.png",
  "17--vs_OR_33_44.png",
  "18--vs_OR_43_55.png",
];

function showImage(index) {
  const img = document.getElementById("image");
  img.src = images[index];
}
