function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    let outputTemp = '';
  
    if (isNaN(inputTemp)) {
      alert('Please enter a valid number for temperature!');
      return;
    }
  
    switch (inputUnit) {
      case 'Celsius':
        outputTemp = `
          ${inputTemp}°C = ${(inputTemp * 9/5) + 32}°F = ${inputTemp + 273.15}K
        `;
        break;
      case 'Fahrenheit':
        outputTemp = `
          ${inputTemp}°F = ${((inputTemp - 32) * 5/9)}°C = ${((inputTemp - 32) * 5/9) + 273.15}K
        `;
        break;
      case 'Kelvin':
        outputTemp = `
          ${inputTemp}K = ${inputTemp - 273.15}°C = ${(inputTemp - 273.15) * 9/5 + 32}°F
        `;
        break;
      default:
        outputTemp = 'Invalid unit selected!';
    }
  
    document.getElementById('outputTemp').textContent = outputTemp;
  }
  