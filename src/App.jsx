
import { useEffect, useState } from 'react'
import './App.css'
function App() {
const [currentTime, setCurrentTime] = useState(new Date())
useEffect (() => {

  const timer = setInterval(() => {
    setCurrentTime(new Date())
  }, 1000);
},[])

const formetTimeZero = (num) =>{
  return num < 10 ? `0${num}` : num ;
}

const formetHour = (hour) => {
  return hour === 0 ? 12 : hour >  12 ? hour - 12 :hour ;
}

const formetdate = (date) => {
const options = {weekday : "long", year: "numeric",
  month: "long", day:"numeric"
}
return date.toLocaleDateString(undefined, options)
}
  return (
    <>
      <div className="digtital-clock">
        <h1>digtital clock</h1>
        <div className="time">
           {formetTimeZero(formetHour(currentTime.getHours()))}: 
           {formetTimeZero(currentTime.getMinutes())} :
           {formetTimeZero(currentTime.getSeconds())}
           {currentTime.getHours() >= 12 ? "  PM" : " AM"}
        </div>
        <div className="date">{formetdate(currentTime)}</div>
      </div>
    </>
  )
}

export default App
