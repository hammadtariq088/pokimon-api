import React, {useState, useEffect} from 'react';
import axios from 'axios';

 const PokimonApi = () => {

    const [number, setNumber] = useState();
    const [name, setName] = useState();
    const [moves, setMoves] = useState();

    useEffect(() => {

        const pokimonFunction = async () => {

            const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${number}`);
            // console.log(response.data.name);
            setName(response.data.name);
            setMoves(response.data.moves.length);
        }

        pokimonFunction();
    })
    

  return (

    <div className="main-div">
        <h1>Pokimon Api</h1>
        <div className="main-heading">
            <h3>You Choose: <span>{number}</span> Pokemon number</h3>
            <br/>
            <h3>This name is: <span>{name}</span></h3>
            <br/>
            <h3>This pokemon has: <span>{moves}</span> moves</h3>
        </div>
        <select value={number} onChange={(e)=> setNumber(e.target.value)}>
            <option selected="selected" value="">Choose Number</option>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </div>

  )

}

export default PokimonApi;
