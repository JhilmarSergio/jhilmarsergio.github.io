const images = [
  "1_OR_EP.png",
  "2_OR_MP.png",
  "3_OR_CO.png",
  "4_OR_BTN_SB.png",
  "5_MP-CO_vs_EP.png",
  "6_CO_vs_MP.png",
  "7_BTN_vs_EP-MP.png",
  "8_SB_vs_EP-MP.png",
  "9_BB_vs_EP-MP.png",
  "10_BTN_vs_CO.png",
  "11_SB_vs_CO.png",
  "12_BB_vs_CO.png",
  "13_SB_vs_BTN.png",
  "14_BB_vs_BTN.png",
  "15_BB_vs_SB.png",
  "ROL.png",
  "cold4b.png",
];

function showImage(index) {
  const img = document.getElementById("image");
  img.src = images[index];
}
