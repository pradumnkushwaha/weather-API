const lat =33.44 ;
const lon = -94.04 ;
const API = "3850e582a9ac80682887846b73085506";
let city= "satna"
let flag = 0;
let weather = "";
let windspeed =""
let humidity =""
let temp =""
let clouds =""

async function weatherAPI(){
    try{ 

const call_api =  await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`);

var data = await call_api.json();
weather=data.weather[0].main
windspeed = data.wind.windspeed
humidity = data.main.humidity
temp = Math.floor(data.main.temp- 273.15)
clouds= await data.clouds[0].all;
console.log(data);

 console.log(Math.floor(data.main.temp- 273.15));
}
catch(e){
  console.log(data.message )
  alert("No city found ")
}
}
function setValue(){
    console.log(clouds )
    document.getElementById("city").innerHTML= city;
    document.getElementById("clouds").innerHTML= weather;
    document.getElementById("windspeed_data").innerHTML= windspeed;
    document.getElementById("temp").innerHTML= temp;
    document.getElementById("clouds_data").innerHTML= clouds;
    document.getElementById("humidity_data").innerHTML= humidity;
    

}
function your_weather(){
    
    document.getElementById("contents").style.opacity =1;
}
function search_weather(){
    flag=1;
    console.log("search")
    document.getElementById("contents_search").style.opacity =1;
    
}
const syour_weather = document.getElementById
function searchClicked(){
     city = document.getElementById("search_bar").value;
     weatherAPI();
     setValue();
     document.getElementById("search_bar").value="";

     document.getElementById("searchs_content").style.opacity =1;

   
}