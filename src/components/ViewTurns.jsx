import React from 'react'
import TurnTableData from './TurnTableData';
import "./ViewTurns.css"
import { useContext } from 'react';
import { UserContext } from '../contexts/User';

const ViewTurns = ({ setSection}) => {

  const {user} = useContext(UserContext);

  const turnList = JSON.parse(localStorage.getItem("turns")) || []; 
  
  const sortedturns = user.type === "VETERINARIA" ?
    [...turnList].sort((a, b) => a.date.localeCompare(b.date))
    :
    [...turnList].sort((a, b) => a.petName.localeCompare(b.petName));

  const turns = sortedturns.map((turn) =>
    <TurnTableData
      userType= {user.type}
      key={turn.key}
      petName={turn.petName}
      petOwnerName={turn.petOwnerName}
      date={turn.date}
      hour={turn.hour}
      petType={turn.petType}
      reason={turn.reason}
      profesional={turn.profesional}
    />
  )

  const clickHandler = (event) => {
    event.preventDefault();
    setSection("");
  }

  return (
    <div className='viewTurnsContainer'>
      <table className='table table-striped'>
        <caption>
          Turnos
        </caption>
        <thead>
          <tr>
            <th scope="col">Mascota</th>
            <th scope="col">Dueño</th>
            <th scope="col">Fecha</th>
            <th scope="col">Hora</th>
            <th scope="col">Tipo de Mascota</th>
            <th scope="col">Razón</th>
            {user.type === "CLIENTE" ? <th scope="col">Profesional</th> : null}
          </tr>
        </thead>
        <tbody>{turns}</tbody>
      </table>
      <button className="btn" onClick={clickHandler}>Volver Atras</button>
    </div>
  )
}

export default ViewTurns