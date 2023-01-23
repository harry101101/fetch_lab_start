
//Create get country by name function
const getCountryByName = async (name) => {
    const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
    //Turn response into json
    const jsonData = await response.json();
    //console.log(jsonData);

    //DISPLAY on webpage
    //name
    const countryName = document.createElement("div");
    countryName.textContent = jsonData[0].name.official;
    const countrySection = document.querySelector("#countries");
    countrySection.appendChild(countryName);
    //population
    const countryPop = document.createElement("div");
    countryPop.textContent = jsonData[0].population;
   // const popSection = document.querySelector("#countries");
    countrySection.appendChild(countryPop);

    //console.log(jsonData[0].name.official);

}
getCountryByName("australia");

const getAllCountries = async () => {
    const response = await fetch(`https://restcountries.com/v3.1/all`);
    const jsonDataAll = await response.json;

    const countries = document.createElement("div");
    countries.textContent = jsonDataAll;
    //const allCountrySection = document.querySelector("#countries");
    countrySection.appendChild(countries);
}

