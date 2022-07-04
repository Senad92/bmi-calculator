function calculateImc(form) {
  let imcBar = document.getElementById("IMCbar");
  let imcData = document.getElementById("imcData");
  let imc =
    form.weight.value / ((form.height.value / 100) * (form.height.value / 100));
  let imcText;
  if (imc <= 30) {
    imcText = "Underweight";
  } else if (imc > 30 && imc <= 90) {
    imcText = "Normal Weight";
  } else if (imc > 90) {
    imcText = "Level 4 obesity";
  }
  if (imc <= 30) {
    imcBar.style.width = "30%";
  } else if (imc >= 50) {
    imcBar.style.width = "100%";
  } else {
    imcBar.style.width = ((imc - 15) * 100) / 35 + "%";
  }
  imcData.innerHTML = `IMC: ${parseFloat(imc).toFixed(2)}  ${imcText}`;
  return false;
}
