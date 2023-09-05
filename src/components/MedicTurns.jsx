import React, { useState } from 'react'

import CardTurn from './CardTurn'
import AddTurn from './AddTurn'
import ViewTurns from './ViewTurns'

import "./MedicTurns.css"

const MedicTurns = ({profesionalList, turnList, setTurnList}) => {

    const [section, setSection] = useState("");

    const img = {
        addTurn: "https://cdn-icons-png.flaticon.com/512/6325/6325028.png",
        viewTurns: "https://cuorepilar.com.ar/wp-content/uploads/2023/04/TURNOS_ICONO-1024x1024.png"
    }


    return (
        <div className='medicTurnsContainer'>
            {section === "Sacar turno" ? < AddTurn profesionalList={profesionalList} setTurnList={setTurnList} setSection={setSection}/> 
            : section === "Ver mis turnos" ? 
            <ViewTurns turnList = {turnList} setSection={setSection}/> : (
                <>
                    <CardTurn name="Sacar turno" img={img.addTurn} setState={setSection}/>
                    <CardTurn name="Ver mis turnos" img={img.viewTurns} setState={setSection}/>
                </>
            )
            }
        </div>
    )
}

export default MedicTurns