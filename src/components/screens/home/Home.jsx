import React, { useEffect, useMemo, useState } from "react";
import styles from './Home.module.css'
import {cars as carsData} from './cars.data.js'
import CarItem from "./car-item/CarItem";
import CreateCarForm from "./create-car-form/CreateCarForm";

function Home() {
const [cars, setCars] = useState(carsData)

useEffect(() => {
  console.log('hey')
}, [cars]) //hook useEffect Что-то выполняет при каких-то зависимостях,если cars изменится, то выведится hey
//Получить данные с сервера для useEffect
/*
useEffect(() => {
  console.log('hey')
}, [cars])

useEffect(() => {
  const fetchData = async () => {
    const response =await fetch('http://localhost:4200/cars')
  const data = await response.json()
  setCars(data)
}
setCars(data)
}
fetchData()
}, [])
*/



  return (
<div> 
    <h1>Cars catalog</h1>
    <CreateCarForm setCars ={setCars}/>
    <div>
      {cars.length ? (
        cars.map(car => <CarItem key= {car.id} car=
          {car}/>)
      ) : (
      <p>There are no cars</p>
    )}
    </div>
    </div>
  );
}

export default Home;
