const selectProvince = document.getElementById('select-province');
const selectCity_Province = document.getElementById('province-cities');
const selectBarangay_Province = document.getElementById('province-barangay');
const selectCountry = document.getElementById('select-country')

const selectCity_Manila = document.getElementById('manila-cities');
const selectBarangay_Manila = document.getElementById('manila-barangay');

const showMetroManila = document.getElementById('showMetroManila')
const showProvince = document.getElementById('showProvince')

const manila = document.getElementById('manila')
const province = document.getElementById('province')

//For Countries
async function Countries() {
    try{
        const response = await fetch('https://countriesnow.space/api/v0.1/countries');
        const result = await response.json();
        const countries = result.data;
        countries.forEach(country => {
            const option = document.createElement('option');
            option.value = country.country;
            option.textContent = country.country;
            selectCountry.appendChild(option);
        });
    }
    catch(error){
        console.error('Error fetching data:', error)
    }
}
Countries();


//For Provinces
async function Provinces() {
    try{
        const response = await fetch('https://psgc.cloud/api/provinces');
        const provinces = await response.json();
        provinces.sort((a, b) => a.name.localeCompare(b.name));

        provinces.forEach(province => {
            const option = document.createElement('option');
            option.value = province.code;
            option.textContent = province.name;
            selectProvince.appendChild(option);
        });
    }
    catch(error){
        console.error('Error fetching data:', error)
    }
}

async function Province_Cities(code) {
    try{
        const response = await fetch(`https://psgc.cloud/api/provinces/${code}/cities-municipalities`);
        const cities = await response.json();
        cities.sort((a, b) => a.name.localeCompare(b.name));
    
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.code;
            option.textContent = city.name;
            selectCity_Province.appendChild(option);
        });
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}

async function Province_Barangays(code) {
    try{
        const response = await fetch(`https://psgc.cloud/api/cities-municipalities/${code}/barangays`);
        const barangays = await response.json();
        barangays.sort((a, b) => a.name.localeCompare(b.name));
    
        barangays.forEach(barangay => {
            const option = document.createElement('option');
            option.value = barangay.zip;
            option.textContent = barangay.name;
            selectBarangay_Province.appendChild(option);
        });
    }
    catch(error){
        console.error('Error fetching data:', error);
    }
}   
Provinces();   
//Show Provinces
showProvince.addEventListener('click', function() {
    province.style.display = 'block';
    manila.style.display = 'none';
    selectCity_Manila.value = '';
    selectBarangay_Manila.value = ''; 
    selectCity_Province.disabled = true;
    selectBarangay_Province.disabled = true;
})


selectProvince.addEventListener('change', function() {
    if (selectProvince.value == ''){
        selectCity_Province.disabled = true;
    }
    else{
        selectCity_Province.disabled = false;
        const code = selectProvince.value;
        selectCity_Province.innerHTML = '<select id="province-cities"> <option selected value="">Select Province</option> </select>'
        selectBarangay_Province.innerHTML = '<select id="province-barangay"> <option selected value="">Select Barangay</option> </select>'
        Province_Cities(code)
    }

});
selectCity_Province.addEventListener('change', function() {
    if (selectProvince.value == ''){
        selectBarangay_Province.disabled = true;
    }
    else{
        selectBarangay_Province.disabled = false;
        selectBarangay_Province.innerHTML = '<select id="province-barangay"> <option selected value="">Select Barangay</option> </select>'
        const code = selectCity_Province.value;
        Province_Barangays(code)
    }
});




//For Metro Manila 
async function Manila_Cities() {
    try{
        const response = await fetch('https://psgc.cloud/api/regions/1300000000/cities-municipalities');
        const cities = await response.json();
        cities.sort((a, b) => a.name.localeCompare(b.name));
    
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city.code;
            option.textContent = city.name;
            selectCity_Manila.appendChild(option);
        });
    }
    catch(error){
        console.error('Error fetching data:', error)
    }
}
async function Manila_Barangays(code) {
    try{
        const response = await fetch(`https://psgc.cloud/api/cities-municipalities/${code}/barangays`);
        const barangays = await response.json();
        barangays.sort((a, b) => a.name.localeCompare(b.name));
    
        barangays.forEach(barangay => {
            const option = document.createElement('option');
            option.value = barangay.code;
            option.textContent = barangay.name;
            selectBarangay_Manila.appendChild(option);
        });
    }
    catch(error){
        console.error('Error fetching data:', error)
    }
}
Manila_Cities();
//Show Metro Manila
showMetroManila.addEventListener('click', function() {
    manila.style.display = 'block';
    province.style.display = 'none';
    selectProvince.value = '';
    selectCity_Province.value = '';
    selectBarangay_Province.value = '';
    selectBarangay_Manila.disabled = true;
});


selectCity_Manila.addEventListener('change', function() {
if (selectCity_Manila.value == ''){
    selectBarangay_Manila.disabled = true;
}
else{
    selectBarangay_Manila.disabled = false;
    selectBarangay_Manila.innerHTML = '<select id="manila-barangay"><option selected value="">Select Barangay</option></select>'
    const code = selectCity_Manila.value;
    Manila_Barangays(code)
}
});


function validateForm() {
    const email = document.getElementById("email").value;
    const confirmEmail = document.getElementById("confirm_email").value;

    if (email !== confirmEmail) {
        alert("Email addresses do not match");
        return false;
    }

    const username = document.getElementById("username").value;
    const confirmUsername = document.getElementById("confirm_username").value;

    if (username !== confirmUsername) {
        alert("User ID do not match");
        return false;
    }
    
    const password = document.getElementById("username").value;
    const confirmPassword = document.getElementById("confirm_username").value;

    if (password !== confirmPassword) {
        alert("Password do not match");
        return false;
    }
    return true;
}



