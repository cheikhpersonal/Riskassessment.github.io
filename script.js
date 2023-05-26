// Function to prompt the user and assign numerical values to risks
function promptRisk(risk) {
    return parseFloat(prompt(`Enter the risk level for ${risk} (0-10):`)) || 0;
  }
  
  // Array to store the risks and their assigned values
  const risks = [];
  
  // Prompt the user to enter 10 different types of risks
  for (let i = 1; i <= 10; i++) {
    const risk = prompt(`Enter risk number ${i}:`);
    const riskValue = promptRisk(risk);
    risks.push({ risk, value: riskValue });
  }
  
  // List of responsibilities attached to the job description
  const responsibilities = [
    { responsibility: 'Economic Risk', riskValue: 0 },
    { responsibility: 'Strategic Risk', riskValue: 0 },
    { responsibility: 'Human resources management', riskValue: 0 },
    { responsibility: 'Fraud, corruption, theft', riskValue: 0 },
    { responsibility: 'Legal and compliance management', riskValue: 0 }
  ];
  
  // Prompt the user to choose responsibilities and assign total risk to each choice
  responsibilities.forEach((res) => {
    const risk = parseFloat(prompt(`Enter the risk level for ${res.responsibility} (0-10):`)) || 0;
    res.riskValue = risk;
  });
  
  // Calculate the total risk for each choice
  responsibilities.forEach((res) => {
    res.totalRisk = res.riskValue + risks.reduce((acc, cur) => acc + cur.value, 0);
  });
  
  // Sort responsibilities based on total risk in descending order
  responsibilities.sort((a, b) => b.totalRisk - a.totalRisk);
  
  // Get the result element in the HTML
  const resultList = document.getElementById('resultList');
  
  // Clear any existing content
  resultList.innerHTML = '';
  
  // Function to calculate the total risk for each responsibility
function calculateRisk() {
    const risks = Array.from(document.querySelectorAll('#riskTable tbody tr'));
    const responsibilities = Array.from(document.querySelectorAll('#responsibilityTable tbody tr'));
    const resultList = document.getElementById('resultList');
  
    resultList.innerHTML = '';
  
    responsibilities.forEach((res) => {
      const responsibility = res.querySelector('td:first-child').textContent;
      const riskValue = parseInt(res.querySelector('input').value);
      const totalRisk = riskValue + risks.reduce((acc, cur) => acc + parseInt(cur.querySelector('input:last-child').value), 0);
  
      const row = document.createElement('tr');
      const responsibilityCell = document.createElement('td');
      responsibilityCell.textContent = responsibility;
      const totalRiskCell = document.createElement('td');
      totalRiskCell.textContent = totalRisk;
  
      row.appendChild(responsibilityCell);
      row.appendChild(totalRiskCell);
      resultList.appendChild(row);
    });
  
    document.getElementById('result').style.display = 'block';
  }
  
  // Add event listener to the "Calculate" button
  document.getElementById('calculateBtn').addEventListener('click', calculateRisk);
  
  
  
  // Display the result on the webpage
  responsibilities.forEach((res) => {
    const listItem = document.createElement('li');
    listItem.textContent = `${res.responsibility}: ${res.totalRisk}`;
    resultList.appendChild(listItem);
  });
  
  // Show the result section
  const resultSection = document.getElementById('result');
  resultSection.style.display = 'block';
  