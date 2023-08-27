import React from 'react'

import "./AddTurn.css"
import { useState } from 'react';

const AddTurn = ({ turnList, setTurnList, setSection }) => {

    const [turn, setTurn] = useState({
        date: "",
        hour: "",
        petOwnerName: "",
        petName: "",
        petType: "",
        reason: ""
    });

    const dateHandler = (event) => {
        const date = event.target.value;
        setTurn((prevData) => ({
            ...prevData,
            date: date
        }))
    };

    const hourHandler = (event) => {
        const hour = event.target.value;
        setTurn((prevData) => ({
            ...prevData,
            hour: hour
        }))
    };

    const petOwnerNameHandler = (event) => {
        const petOwnerName = event.target.value;
        setTurn((prevData) => ({
            ...prevData,
            petOwnerName: petOwnerName
        }))
    };

    const petNameHandler = (event) => {
        const petName = event.target.value;
        setTurn((prevData) => ({
            ...prevData,
            petName: petName
        }))
    };

    const petTypeHandler = (event) => {
        const petType = event.target.value;
        setTurn((prevData) => ({
            ...prevData,
            petType: petType
        }))
    };

    const reasonHandler = (event) => {
        const reason = event.target.value;
        setTurn((prevData) => ({
            ...prevData,
            reason: reason
        }))
    };


    const submitHandler = (event) => {
        event.preventDefault();

        const validationInputs = Object.values(turn).some((valid) => !valid);

        if (validationInputs) {
            return alert("Por favor, complete correctamente todos los campos");
        } else {
            setTurnList((prevTurns) => [...prevTurns, turn]);
            alert("Turno registrado correctamente");
            setSection("")

            setTurn({
                date: "",
                hour: "",
                petOwnerName: "",
                petName: "",
                petType: "",
                reason: ""
            })
        }
    };

    return (
        <div className='addTurnContainer'>
            <form className='addTurnForm'>
                <div className='dataTurnContainer'>
                    <label>
                        Fecha:
                        <input type="date" onChange={dateHandler} />
                    </label>
                    <label>
                        Hora:
                        <select onChange={hourHandler}>
                            <option value="">--</option>
                            <option value="8:00">8:00</option>
                            <option value="10:00">10:00</option>
                            <option value="12:00">12:00</option>
                            <option value="14:00">14:00</option>
                        </select>
                        hs
                    </label>
                </div>
                <div className='dataTurnContainer'>

                    <label>
                        Nombre del dueño:
                        <input type="text" onChange={petOwnerNameHandler} />
                    </label>
                    <label>
                        Nombre de la mascota:
                        <input type="text" onChange={petNameHandler} />
                    </label>
                    <label>
                        Tipo de mascota:
                    </label>
                    <select onChange={petTypeHandler}>
                        <option value="">Seleccionar</option>
                        <option value="gato">Gato</option>
                        <option value="perro">Perro</option>
                        <option value="otro">Otro</option>
                    </select>
                    <label>
                        Motivo del turno:
                    </label>
                    <textarea onChange={reasonHandler}></textarea>
                    <button onClick={submitHandler}>Enviar</button>
                </div>
            </form>
        </div>
    )
}

export default AddTurn