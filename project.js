function convertTemperature() {
    var temperature = parseFloat(document.getElementById('temperature').value);
    var unit = document.getElementById('unit').value;
    var result;

    if (isNaN(temperature)) {
        result = "Please enter a valid number.";
    } else {
        if (unit === "Celsius") {
            result = (temperature * 9/5) + 32 + " Fahrenheit";
        } else if (unit === "Fahrenheit") {
            result = (temperature - 32) * 5/9 + " Celsius";
        }
    }

    document.getElementById('result').innerText = result;
}