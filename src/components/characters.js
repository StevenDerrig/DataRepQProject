import { useEffect, useState } from "react";
import axios from "axios";
import CharacterP from "./CharacterP";

const Character = () => {
    const [character, setCharacter] = useState([]);

    const reloadData = () => {
        axios.get('http://localhost:4000/api/character', character)
            .then((response) => {
                console.log(response.data);
                setCharacter(response.data.character);
            })
            .catch((error) => {
                console.log("Error reloading data:", error);
            });
    }

    useEffect(() => {
        reloadData();
    }, []);

    return (
        <div>
            <h3>Characters List</h3>
            <CharacterP myCharacter={character} ReloadData={reloadData} />
        </div>
    );
}

export default Character;