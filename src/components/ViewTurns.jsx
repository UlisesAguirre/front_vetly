import React from 'react'
import TurnTable from './TurnTable';
import "./ViewTurns.css"

const ViewTurns = ({ turnList, setSection }) => {

  const sortedTurns = [...turnList].sort((a, b) => a.petName.localeCompare(b.petName));

  const turns = sortedTurns.map((turn) =>
    <TurnTable
      key={turn.key}
      petName={turn.petName}
      petOwnerName={turn.petOwnerName}
      date={turn.date}
      hour={turn.hour}
      petType={turn.petType}
      reason={turn.reason}
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
          </tr>
        </thead>
        <tbody>{turns}</tbody>
      </table>
      <button className="btn" onClick={clickHandler}>Volver Atras</button>
    </div>
  )
}

export default ViewTurns