(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{3208:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var s=a(5155),n=a(2115),i=a(6766);a(3784);let c=()=>{let e=(0,n.useRef)(),[t,a]=(0,n.useState)(!1),[c,l]=(0,n.useState)(!1),r="/my-weather-app",d=e=>({"01d":"".concat(r,"/images/clear.png"),"01n":"".concat(r,"/images/clear.png"),"02d":"".concat(r,"/images/cloud.png"),"02n":"".concat(r,"/images/cloud.png"),"03d":"".concat(r,"/images/cloud.png"),"03n":"".concat(r,"/images/cloud.png"),"04d":"".concat(r,"/images/drizzle.png"),"04n":"".concat(r,"/images/drizzle.png"),"09d":"".concat(r,"/images/rain.png"),"09n":"".concat(r,"/images/rain.png"),"10d":"".concat(r,"/images/rain.png"),"10n":"".concat(r,"/images/rain.png"),"13d":"".concat(r,"/images/snow.png"),"13n":"".concat(r,"/images/snow.png")})[e]||"".concat(r,"/images/clear.png"),o=async e=>{if(""===e){alert("Enter City Name");return}l(!0);try{let t=await fetch("https://api.openweathermap.org/data/2.5/weather?q=".concat(e,"&units=metric&appid=","dd17db1dcc505af08d9e75631a1107ef")),s=await t.json();if(!t.ok){alert(s.message),l(!1);return}let n=d(s.weather[0].icon);a({humidity:s.main.humidity,windSpeed:s.wind.speed,temperature:Math.floor(s.main.temp),location:s.name,icon:n,description:s.weather[0].description})}catch(e){console.error("Error in fetching weather data:",e),a(!1)}finally{l(!1)}};return(0,n.useEffect)(()=>{o("London")},[]),(0,s.jsxs)("div",{className:"w-full max-w-md mx-auto bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl shadow-lg p-8 text-white",children:[(0,s.jsxs)("div",{className:"flex items-center gap-2 mb-6",children:[(0,s.jsx)("input",{ref:e,type:"text",placeholder:"Search city...",className:"w-full px-4 py-3 rounded-full text-white focus:outline-none focus:ring-2 focus:ring-blue-300 transition",onKeyPress:t=>{"Enter"===t.key&&o(e.current.value)}}),(0,s.jsx)("button",{onClick:()=>o(e.current.value),className:"bg-white p-3 rounded-full hover:bg-gray-100 transition",children:(0,s.jsx)(i.default,{src:"".concat(r,"/images/search.png"),alt:"Search",width:24,height:24,className:"cursor-pointer"})})]}),c?(0,s.jsx)("div",{className:"flex justify-center items-center h-64",children:(0,s.jsx)("div",{className:"animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"})}):t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("div",{className:"flex justify-center py-4",children:(0,s.jsx)(i.default,{src:t.icon,alt:"Weather",width:150,height:150,className:"object-contain"})}),(0,s.jsxs)("div",{className:"text-center",children:[(0,s.jsxs)("p",{className:"text-6xl font-semibold mb-2",children:[t.temperature,"\xb0C"]}),(0,s.jsx)("p",{className:"text-2xl mb-1",children:t.location}),(0,s.jsx)("p",{className:"text-lg mb-6 capitalize text-blue-100",children:t.description})]}),(0,s.jsxs)("div",{className:"grid grid-cols-2 gap-6 mt-4",children:[(0,s.jsxs)("div",{className:"flex items-center gap-4 bg-blue-500/30 p-4 rounded-lg",children:[(0,s.jsx)(i.default,{src:"".concat(r,"/images/humidity.png"),alt:"Humidity",width:40,height:40}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"text-xl font-medium",children:[t.humidity,"%"]}),(0,s.jsx)("span",{className:"text-sm text-blue-100",children:"Humidity"})]})]}),(0,s.jsxs)("div",{className:"flex items-center gap-4 bg-blue-500/30 p-4 rounded-lg",children:[(0,s.jsx)(i.default,{src:"".concat(r,"/images/wind.png"),alt:"Wind Speed",width:40,height:40}),(0,s.jsxs)("div",{children:[(0,s.jsxs)("p",{className:"text-xl font-medium",children:[t.windSpeed," m/s"]}),(0,s.jsx)("span",{className:"text-sm text-blue-100",children:"Wind Speed"})]})]})]})]}):(0,s.jsx)("div",{className:"text-center py-16",children:(0,s.jsx)("p",{className:"text-xl",children:"No weather data available"})})]})}},3830:(e,t,a)=>{Promise.resolve().then(a.bind(a,3208))}},e=>{var t=t=>e(e.s=t);e.O(0,[599,441,684,358],()=>t(3830)),_N_E=e.O()}]);