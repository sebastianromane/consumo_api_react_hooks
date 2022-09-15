// insert api renderer component
import React from 'react'
import {useEffect } from "react";
import Card from "react-bootstrap/Card";

const MiApi = (props) => {
  
    // 1. Función que consulta la API
     const queryApi = async () => {
       try {
     const url = "https://secure-hamlet-19722.herokuapp.com/api/v1/characters";
     const response = await fetch(url);
     const data = await response.json();
    
     // con setInfo actualizamos el estado
     props.setInfo(data);
     } catch (e) {
        alert(e.message);
      }
  };
  
    // 2. LLamamos al función que consume la API al momento de montar el componente
    useEffect(() => {queryApi()}, []);

  return (

    <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.info
          .filter((character) =>
          character.name.toLowerCase().includes(props.filtroCharacter)
          )
          .map((character) => (
            <Card style={{ width: "18rem" }} key={character.id}>
              <Card.Img variant="top" src={character.head_shot} />
              <Card.Body>
                <Card.Title>{character.name} </Card.Title>
                <Card.Text>Universo: {character.universe}</Card.Text>
              </Card.Body>
            </Card>
          ))}
      </div>
  )
}

export default MiApi