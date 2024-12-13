import { useState } from "react";
import axios from "axios";

const AddCharacter = () => {

    const [characterName, setCharacterName] = useState("");
    const [characterImg, setCharacterImg] = useState("");
    const [characterDescription, setCharacterDescription] = useState("");
    const [characterRole, setCharacterRole] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Character Name: ${characterName}`, `Character Image: ${characterImg}`, `Character Description: ${characterDescription}`, `Character Role: ${characterRole}`);

        const character = {
            characterName: characterName,
            characterImg: characterImg,
            characterDescription: characterDescription,
            characterRole: characterRole
        };

        axios.post('http://localhost:4000/api/character', character)
            .then(res => {
                console.log(res.data);
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h3>Adding a Character</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Character Name: </label>
                    <input type="text" className="form-control" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />

                    <label>Add Character Image: </label>
                    <input type="text" className="form-control" value={characterImg} onChange={(e) => setCharacterImg(e.target.value)} />

                    <label>Add Character Description: </label>
                    <input type="text" className="form-control" value={characterDescription} onChange={(e) => setCharacterDescription(e.target.value)} />

                    <label>Add Character Role: </label>
                    <input type="text" className="form-control" value={characterRole} onChange={(e) => setCharacterRole(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Add Character" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default AddCharacter;