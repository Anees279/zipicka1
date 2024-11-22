// Country list mapping currencies to country codes
const countryList = {
    AED: "AE", AFN: "AF", XCD: "AG", ALL: "AL", AMD: "AM", ANG: "AN", AOA: "AO", 
    AQD: "AQ", ARS: "AR", AUD: "AU", AZN: "AZ", BAM: "BA", BBD: "BB", BDT: "BD", 
    XOF: "BE", BGN: "BG", BHD: "BH", BIF: "BI", BMD: "BM", BND: "BN", BOB: "BO", 
    BRL: "BR", BSD: "BS", NOK: "BV", BWP: "BW", BYR: "BY", BZD: "BZ", CAD: "CA", 
    CDF: "CD", XAF: "CF", CHF: "CH", CLP: "CL", CNY: "CN", COP: "CO", CRC: "CR", 
    CUP: "CU", CVE: "CV", CYP: "CY", CZK: "CZ", DJF: "DJ", DKK: "DK", DOP: "DO", 
    DZD: "DZ", ECS: "EC", EEK: "EE", EGP: "EG", ETB: "ET", EUR: "FR", FJD: "FJ", 
    FKP: "FK", GBP: "GB", GEL: "GE", GGP: "GG", GHS: "GH", GIP: "GI", GMD: "GM", 
    GNF: "GN", GTQ: "GT", GYD: "GY", HKD: "HK", HNL: "HN", HRK: "HR", HTG: "HT", 
    HUF: "HU", IDR: "ID", ILS: "IL", INR: "IN", IQD: "IQ", IRR: "IR", ISK: "IS", 
    JMD: "JM", JOD: "JO", JPY: "JP", KES: "KE", KGS: "KG", KHR: "KH", KMF: "KM", 
    KPW: "KP", KRW: "KR", KWD: "KW", KYD: "KY", KZT: "KZ", LAK: "LA", LBP: "LB", 
    LKR: "LK", LRD: "LR", LSL: "LS", LTL: "LT", LVL: "LV", LYD: "LY", MAD: "MA", 
    MDL: "MD", MGA: "MG", MKD: "MK", MMK: "MM", MNT: "MN", MOP: "MO", MRO: "MR", 
    MTL: "MT", MUR: "MU", MVR: "MV", MWK: "MW", MXN: "MX", MYR: "MY", MZN: "MZ", 
    NAD: "NA", XPF: "NC", NGN: "NG", NIO: "NI", NPR: "NP", NZD: "NZ", OMR: "OM", 
    PAB: "PA", PEN: "PE", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", RON: "RO", 
    PGK: "PG", PHP: "PH", PKR: "PK", PLN: "PL", PYG: "PY", QAR: "QA", RON: "RO", 
    RSD: "RS", RUB: "RU", RWF: "RW", SAR: "SA", SBD: "SB", SCR: "SC", SDG: "SD", 
    SEK: "SE", SGD: "SG", SKK: "SK", SLL: "SL", SOS: "SO", SRD: "SR", STD: "ST", 
    SVC: "SV", SYP: "SY", SZL: "SZ", THB: "TH", TJS: "TJ", TMT: "TM", TND: "TN", 
    TOP: "TO", TRY: "TR", TTD: "TT", TWD: "TW", TZS: "TZ", UAH: "UA", UGX: "UG", 
    USD: "US", UYU: "UY", UZS: "UZ", VEF: "VE", VND: "VN", VUV: "VU", YER: "YE", 
    ZAR: "ZA", ZMK: "ZM", ZWD: "ZW"
};

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const dropdowns = document.querySelectorAll(".dropdown select");

  // Fetch and load the navbar
  fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
      // Insert the fetched navbar into the container
      document.getElementById('navbar-container').innerHTML = data;

      // Make the navbar sticky and apply opacity once loaded
      const navbar = document.querySelector('.navbar'); // Assuming the class for the navbar is 'navbar'
      if (navbar) {
        navbar.classList.add('sticky-navbar');
      }

      // Populate the dropdowns with country options
      populateDropdowns();
    })
    .catch(error => console.error('Error loading navbar:', error));
});

// Function to populate dropdowns with country options and set flags
const populateDropdowns = () => {
  const dropdowns = document.querySelectorAll(".dropdown select");
  dropdowns.forEach(select => {
    for (let currCode in countryList) {
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      
      // Default selected option logic
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = true;
      } else if (select.name === "to" && currCode === "INR") {
        newOption.selected = true;
      }
      select.appendChild(newOption);
    }

    // Add event listener to update flag when an option is selected
    select.addEventListener("change", (evt) => {
      updateFlag(evt.target);
    });

    // Initialize the flag for the currently selected option
    updateFlag(select);
  });
};

// Function to update the flag based on selected country
const updateFlag = (element) => {
  let currCode = element.value;
  let countryCode = countryList[currCode];
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");

  // Update the flag image source
  if (img) {
    img.src = newSrc;
  }
};


