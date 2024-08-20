"use client";
import axios from "axios";
import { Typography } from '@mui/material';
import { Input } from "@mui/material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import DeviceThermostatRoundedIcon from '@mui/icons-material/DeviceThermostatRounded';
import WaterDropRoundedIcon from '@mui/icons-material/WaterDropRounded';
import WavesRoundedIcon from '@mui/icons-material/WavesRounded';
import Battery3BarRoundedIcon from '@mui/icons-material/Battery3BarRounded';
import WindPowerRoundedIcon from '@mui/icons-material/WindPowerRounded';
import { WindPowerRounded } from "@mui/icons-material";

const Weather = () => {
  const [weather, setweather] = useState("");
  const [api, setapi] = useState("");
  const handleInput = (e) => {
    setweather(e.target.value);
    console.log(setweather);
  };
  const apicall = async () => {
    const res = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=ca225f65d34708334da706be7569e1a2`
    );
    const finalData=res.data;
    // console.log(finalData)
    console.log(finalData.name);
   setapi(finalData);
   console.log(api);
    
  };
  return (
    <>
      <div className="parent-div  border border-black bg-gradient-to-r from-indigo-500 ">
        <div className="w-full h-14 text-white bg-black text-center pt-4" >Weather Forcast</div>
        
        <div className="input-btn-div flex items-center justify-around p-5">
          <Input type="text" value={weather} onChange={handleInput} />
      <Button onClick={apicall}className="w-32 h-12 bg-black text-white">
        click   
      </Button></div>


      {api ?(<div className="description-display text-center pl-10">
     <div className="namediv">
     <Typography sx={{ fontWeight: 'bold' }} variant="h4" component="h2">
     {api.name}</Typography>  
      </div>
      
      <div className="feelslike-humidity flex p-3 justify-between">
       <div className="flex">

        <Typography variant="h6" sx={{ color: 'text.secondary' }}>Feels Like<Typography variant="h4" sx={{ fontWeight: 'bold' }} >{api.main.feels_like} °C</Typography> </Typography><span className="pt-5 pl-8"><DeviceThermostatRoundedIcon fontSize="large"/></span> </div>
       <div className="flex"><span className="pt-5 pr-8"><WaterDropRoundedIcon fontSize="large"/></span>  <Typography className="pr-8" variant="h6" sx={{ color: 'text.secondary'}}>Humidity<Typography variant="h4" sx={{ fontWeight: 'bold' }} >{api.main.humidity} %</Typography></Typography> </div>
      </div>

      <div className="temp-sealevel flex p-3 justify-between">
    <div className="flex"><Typography  variant="h6" sx={{ color: 'text.secondary' }} className>Temperature<Typography variant="h4" sx={{ fontWeight: 'bold' }} > {api.main.temp} °C </Typography></Typography><span className="pt-5 pl-8"><DeviceThermostatRoundedIcon fontSize="large"/></span></div>
    <div className="flex"> <span className="pt-5 pr-8"><WavesRoundedIcon fontSize="large"/></span> <Typography  className="pr-8" variant="h6" sx={{ color: 'text.secondary' }}>S-Level<Typography variant="h4" sx={{ fontWeight: 'bold' }} >{api.main.sea_level}(mb)</Typography></Typography></div>
      </div>
    
      <div className="pressure-wind flex p-5 justify-between">
      <div className="flex"><Typography variant="h6" sx={{ color: 'text.secondary' }}>Pressure<Typography variant="h4" sx={{ fontWeight: 'bold' }} >{api.main.pressure} Pa</Typography></Typography><span className="pt-5 pl-14"><Battery3BarRoundedIcon fontSize="large"/></span></div>
      <div className="flex"><span className="pt-5 pr-8"><WindPowerRounded fontSize="large"/></span><Typography  className="pr-6"  variant="h6" sx={{ color: 'text.secondary' }}>W-Speed<Typography variant="h4" sx={{ fontWeight: 'bold' }} >{api.wind.speed}  (m/s)</Typography></Typography></div>
      </div>  
      </div> ): (
    <div role="status" className="absolute -translate-x-1/2 -translate-y-1/2 top-2/4 left-1/2">
        <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
        <span className="sr-only">Loading...</span>
    </div>

 )}
      
      





      </div>
    </>
  );
};

export default Weather;
