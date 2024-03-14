function calculate() {
  try {
    let weightInput = document.getElementById("weight-input").value;
    console.log(weightInput);

    if (parseInt(weightInput) > 0 && parseInt(weightInput) < 25) {
      alert("Harap Isi Berat Badan Anda");
    } else {
      document.getElementById("result-bmi").innerHTML = weightInput;
      console.log("Ada Isi");
    }
  } catch (error) {
    console.log(error);
  }

  let ageInput = document.getElementById("age-input").value;
  console.log(ageInput);

  if (ageInput == "") {
    alert("Harap Isi Usia Anda");
  } else {
    console.log("Ada Isi");
  }

  let heightInput = document.getElementById("height-input").value;
  console.log(heightInput);

  if (heightInput == "") {
    alert("Harap Isi Tinggi Badan Anda");
  } else {
    console.log("Ada Isi");
  }

  height = parseFloat(document.getElementById("height-input").value);
  height /= 100;
  weight = parseFloat(document.getElementById("weight-input").value);
  resultbmi = weight / (height * height);
  if (resultbmi < 18.5) {
    message = "Kekurangan Berat Badan";
  } else if ((resultbmi >= 18.5) & (resultbmi <= 24.9)) {
    message = "Normal (Ideal)";
  } else if ((resultbmi >= 25.0) & (resultbmi <= 29.9)) {
    message = "Kelebihan Berat Badan";
  } else {
    message = "Kegemukan (Obesitas)";
  }
  document.getElementById("result-bmi").innerHTML = " " + resultbmi.toFixed(1);
  document.getElementById("message").innerHTML = " " + message;

  resultbmi = weight / (height * height);
  if (resultbmi < 18.5) {
    message2 = "Kurang dari 18.5";
  } else if ((resultbmi >= 18.5) & (resultbmi <= 24.9)) {
    message2 = "Diantara 18.5 dan 24.9";
  } else if ((resultbmi >= 25.0) & (resultbmi <= 29.9)) {
    message2 = "Diantara 25.0 dan 29.9";
  } else {
    message2 = "Lebih dari 30.0";
  }
  document.getElementById("message2").innerHTML = " " + message2;

  resultbmi = weight / (height * height);
  if (resultbmi < 18.5) {
    message3 = "Underweight (Berat Rendah)";
    message4 = "Perbanyak konsumsi makanan berkalori dan bernutrisi serta berolahraga rutin. Anda dianjurkan untuk menaikkan berat badan hingga batas normal.";
  } else if ((resultbmi >= 18.5) & (resultbmi <= 24.9)) {
    message3 = "Normal (Ideal)";
    message4 = "Pertahankan pola hidup sehat dan konsumsi makanan bergizi, Anda!";
  } else if ((resultbmi >= 25.0) & (resultbmi <= 29.9)) {
    message3 = "Obesitas (Berat Berlebih)";
    message4 = "Utamakan pola hidup sehat dengan berolahraga dan mengonsumsi makanan bergizi. Konsultasikan kondisi berat badan Anda dengan dokter.";
  } else {
    message3 = "Obesitas";
    message4 = "Utamakan pola hidup sehat dengan berolahraga dan mengonsumsi makanan bergizi. Konsultasikan kondisi berat badan Anda dengan dokter.";
  }
  document.getElementById("message3").innerHTML = " " + message3;
  document.getElementById("message4").innerHTML = " " + message4;
}

function reset() {
  document.getElementById("sex-man").value = "";
  document.getElementById("sex-woman").value = "";
  document.getElementById("weight-input").value = "";
  document.getElementById("age-input").value = "";
  document.getElementById("height-input").value = "";
}
