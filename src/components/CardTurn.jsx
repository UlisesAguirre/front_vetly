import React from 'react'

const CardTurn = ({ name, img, setState}) => {

    const eventHandler = () => {
        setState(name)
    };

    return (
        <>
            <button className='buttonCardContainer' onClick={eventHandler}>
                <div className='cardContainer'>
                    <img src={img} alt="" />
                    <h1>{name}</h1>
                </div>
            </button>
        </>
    )
}

export default CardTurn