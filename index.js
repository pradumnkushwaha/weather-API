const lat =33.44 ;
const lon = -94.04 ;
const API = "3850e582a9ac80682887846b73085506";
let city= "satna"
let flag = 0;
async function weatherAPI(){
    try{ 

const call_api =  await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`);
var data = await call_api.json();

 console.log(Math.floor(data.main.temp- 273.15));
}
catch(e){
  console.log(data.message )
}
}
function your_weather(){
    
    document.getElementById("contents").style.opacity =1;
}
function search_weather(){
    flag=1;
    console.log("search")
    document.getElementById("contents_search").style.opacity =1;
    document.getElementById("searchs_content").style.opacity =1;
}
const syour_weather = document.getElementById