const url = 'https://restcountries.eu/rest/v2/name/';
const countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries() {
    let countryName = document.getElementById('country-name').value;
    if(!countryName.length) countryName = 'Poland';
    fetch(url + countryName)
        .then(function(resp) {
            return resp.json();
        })
        .then(showCountriesList)  
};


function showCountriesList(resp) {
    let countryName = document.getElementById('country-name').value;
    countriesList.innerHTML = '';

    let filteredArray = resp.filter(function(item) {
        let smallName = item.name.toLocaleLowerCase();
        return smallName.includes(countryName);
    });

    filteredArray.forEach(function(item) {
        const liEl = document.createElement('li');
        liEl.innerText = item.name + ', ' + "Capital: " + item.capital;
        countriesList.appendChild(liEl);
    });
};

