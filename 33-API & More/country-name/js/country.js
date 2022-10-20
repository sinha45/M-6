const countryName = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displayCountries(data))
}

const countrySection = document.getElementById('country-section');
const displayCountries = countries => {
    countries.forEach(country => {
        console.log(country);
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('styleCountry');
        countryDiv.innerHTML = `
            <h3>name: ${country.name.common} </h3>
            <h4>capital: ${country.capital ? country.capital[0] : 'no capital'} </h4>
            <button onclick="loadCountryDetails('${country.cca2}')">Details</button>
        `;
        countrySection.appendChild(countryDiv);
    });
}
const loadCountryDetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`;
    // console.log('country details', code);
    fetch(url)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))
}

const countryDetails = country => {
    const countryDetail = document.getElementById('country-details');
    countryDetail.innerHTML = `
    <h3>Details: ${country.name.common}</h3>
    <img src= "${country.flags.png}">
    `
}

countryName();