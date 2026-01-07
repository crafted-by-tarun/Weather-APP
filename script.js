let usertab = document.querySelector("[data-userWeather]");
let searchtab = document.querySelector("[data-searchWeather]");
let usercontainer = document.querySelector(".weather-container");
let grantaccesscontainer = document.querySelector(".grant-location");
let grantaccessbtn = document.querySelector(".btn");
let formcontainer = document.querySelector(".form-container");
let loadingscreen = document.querySelector(".loading-screen-container");
let userinfocontainer = document.querySelector(".user-info-container");
let currenttab = usertab;
let wrapper_style = document.querySelector(".wrapper");
const API_KEY = "d1845658f92b31c64bd94f06f7188c9c";
currenttab.classList.add("current-tab");
getfromsessionstorage();
usercontainer.classList.add("active"); 
function switchTab(clickedTab) {
    // if (clickedTab === currenttab) return;

    currenttab.classList.remove("current-tab");
    currenttab = clickedTab;
    currenttab.classList.add("current-tab");

    // HIDE EVERYTHING FIRST
    userinfocontainer.classList.remove("active");
    loadingscreen.classList.remove("active");
    grantaccesscontainer.classList.remove("active");
    formcontainer.classList.remove("active");

    // THEN SHOW REQUIRED SCREEN
    if (clickedTab === searchtab) {
        formcontainer.classList.add("active");
        
    } else {
        getfromsessionstorage();
    }
}

usertab.addEventListener("click",()=>{
    switchTab(usertab);
});

searchtab.addEventListener("click",()=>{
    switchTab(searchtab);
});
function getfromsessionstorage(){
    let localcordinates = sessionStorage.getItem("user-coordinates");
    if(!localcordinates){
        grantaccesscontainer.classList.add("active");
    }
    else{
        let coordinates = JSON.parse(localcordinates);
        fetchuserweatherinfo(coordinates);
    }
}
async function fetchuserweatherinfo(coordinates){
    const {lat,lon} = coordinates;
    grantaccesscontainer.classList.remove("active");
    loadingscreen.classList.add("active");
    try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

        );
        let data = await response.json();
        loadingscreen.classList.remove("active");
userinfocontainer.classList.add("active");
        renderweatherinfo(data);
    }
    catch(err){
        loadingscreen.classList.remove("active");
        alert(err);
    }
};
function renderweatherinfo(weatherInfo){
    let cityname = document.querySelector("[data-cityName]");
    let countryicon = document.querySelector("[data-countryIcon]");
    let weatherdesc = document.querySelector("[data-weather_desc]");
    let weathericon = document.querySelector("[data-weather_Icon]");
    let data_temp = document.querySelector("[data-temp]");
    let windspeed = document.querySelector("[data-windSpeed]");
    let humidity = document.querySelector("[data-humidity]");
    let clouds = document.querySelector("[data-cloudiness]");
    cityname.innerText = weatherInfo?.name;
countryicon.src = `https://flagcdn.com/144x108/${weatherInfo?.sys?.country.toLowerCase()}.png`;
    weatherdesc.innerText = weatherInfo?.weather?.[0]?.description;
    weathericon.src = `http://openweathermap.org/img/w/${weatherInfo?.weather?.[0]?.icon}.png`;
    data_temp.innerText = weatherInfo?.main?.temp;
    windspeed.innerText = weatherInfo?.wind?.speed;
    humidity.innerText = weatherInfo?.main?.humidity;
    clouds.innerText = weatherInfo?.clouds?.all;
    //changebackground(weatherdesc.innerText);
}
function changebackground(weather_description){
    let description = weather_description;

    if(description.includes("cloud")){
wrapper_style.style.background = "linear-gradient(180deg, #cfd9df, #e2ebf0";
  
}
else if(description.includes("clear")){
wrapper_style.style.background =
      "linear-gradient(180deg, #f4fc0fff, rgba(237, 125, 6, 1))";
      wrapper_style.style.opacity = "50%";
}
else{
    wrapper_style.style.backgroundColor = " rgb(57, 54, 54)";  

}
}
function getlocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }
    else{
        alert('No geolocation support available');
    }
}

function showPosition(position){
 const usercordinates = {
    lat: position.coords.latitude,
    lon: position.coords.longitude
};

    sessionStorage.setItem("user-coordinates",JSON.stringify(usercordinates));
    fetchuserweatherinfo(usercordinates);

}
grantaccessbtn.addEventListener("click",getlocation);

const searchInfo = document.querySelector("[data-searchInput]");
formcontainer.addEventListener("submit",(e)=>{
    e.preventDefault();
    let cityName = searchInfo.value;

    if(cityName==="") return;
    else fetchsearchweatherinfo(cityName);
})

async function fetchsearchweatherinfo(city){
    loadingscreen.classList.add("active");
    userinfocontainer.classList.remove("active");
    grantaccesscontainer.classList.remove("active");
      formcontainer.classList.remove("active");
     try{
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

        );
        const data = await response.json();
        loadingscreen.classList.remove("active");
        userinfocontainer.classList.add("active");
        renderweatherinfo(data);
    }
        catch(err){
alert(err);
        }
    }