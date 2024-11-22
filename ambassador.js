document.addEventListener("DOMContentLoaded", () => {
    const countryCodeSelect = document.getElementById("countryCode");
  
    // List of countries and their codes
    const countryCodes = [
      { name: "FACEBOOK"},
      { name: "INSTAGRAM" },
      { name: "TIK TOK"},
      { name: "TWEETER" },
      { name: "OTHER" },
      
      
    ];
  
    // Populate the select element with country codes
    countryCodes.forEach((country) => {
      const option = document.createElement("option");
      option.value = country.code;
      option.textContent = `${country.name}`;
      countryCodeSelect.appendChild(option);
    });
  });
  