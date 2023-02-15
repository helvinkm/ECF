let listCountries = [];
let sortedCountries = [];

function fetchCountries(){
    fetch(" https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
        listCountries = data;
        console.log(data);
        displayCountries (listCountries);   
    })
}

 function displayCountries(all){
    listCountries.filter(listCountries => listCountries.length > 6)
     all.map((t) => {
         displayTask.innerHTML += `
         <div class="country">
         <img src="${t.flags.svg}">
            <div class="nomCountries">${t.name.common} </div>
            <div class="capitalCountries">${t.capital} </div>
            <div>Population : <span id="populationCountries"></span>${t.population} </div>
            </div>
         `      
     }); 
}

fetchCountries();

