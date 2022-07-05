function calculateBmi(form) {
  	let bmiBar = document.getElementById("BMIbar");
  	let bmiData = document.getElementById("bmiData");
  	let bmi = form.weight.value / ((form.height.value / 100) * (form.height.value / 100));
  	let bmiText;

  	if (bmi <= 30) {
    	bmiText = "Underweight";
  	} else if (bmi > 30 && bmi <= 90) {
    	bmiText = "Normal Weight";
  	} else if (bmi > 90) {
    	bmiText = "Overweight";
  	}

	// Remove all classes from spans regarding Bar style

	let divs = Array.from(document.getElementsByTagName("span"));
	for (let div of divs) {
		div.className = "";
	}

  	if (bmi <= 30) {
    	bmiBar.style.width = "12%";
		bmiData.innerHTML = `BMI: ${parseFloat(bmi).toFixed(2)}  ${bmiText}`;
		bmiDataMain.innerHTML = `${parseFloat(bmi).toFixed(2)}`;
		document.getElementById("bmiSpan1").classList.toggle("active");
  	} else if (bmi > 30 && bmi < 90) {
    	bmiBar.style.width = "45%";
		bmiData.innerHTML = `BMI: ${parseFloat(bmi).toFixed(2)}  ${bmiText}`;
		bmiDataMain.innerHTML = `${parseFloat(bmi).toFixed(2)}`;
		document.getElementById("bmiSpan2").classList.toggle("active");
  	} else if (bmi > 90 && bmi < 120) {
    	bmiBar.style.width = "80%";
		bmiData.innerHTML = `BMI: ${parseFloat(bmi).toFixed(2)}  ${bmiText}`;
		bmiDataMain.innerHTML = `${parseFloat(bmi).toFixed(2)}`;
		document.getElementById("bmiSpan3").classList.toggle("active");
  	} else {
    	bmiBar.style.width = "100%";
    	bmiData.innerHTML = `Try again, BMI: ${parseFloat(bmi).toFixed(2)}  ${bmiText}`;
		// document.getElementById("bmiSpan").classList.remove("active");
  	}
  	return false;
}

	
