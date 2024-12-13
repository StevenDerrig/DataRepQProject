//Component for editing a character
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditCharacter = () => {

    const { id } = useParams();
    const [characterName, setCharacterName] = useState("");
    const [characterImg, setCharacterImg] = useState("");
    const [characterDescription, setCharacterDescription] = useState("");
    const [characterRole, setCharacterRole] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/character/' + id)
            .then((res) => {
                setCharacterName(res.data.characterName);
                setCharacterImg(res.data.characterImg);
                setCharacterDescription(res.data.characterDescription);
                setCharacterRole(res.data.characterRole);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const character = {
            characterName, characterImg, characterDescription, characterRole
        };

        axios.put('http://localhost:4000/api/character/' + id, character)
            .then(res => {
                console.log(res.data);
                navigate("/character");
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h3>Editing Character</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Character Name: </label>
                    <input type="text" className="form-control" value={characterName} onChange={(e) => setCharacterName(e.target.value)} />

                    <label>Edit Character Image: </label>
                    <input type="text" className="form-control" value={characterImg} onChange={(e) => setCharacterImg(e.target.value)} />

                    <label>Edit Character Description: </label>
                    <input type="text" className="form-control" value={characterDescription} onChange={(e) => setCharacterDescription(e.target.value)} />

                    <label>Edit Character Role: </label>
                    <input type="text" className="form-control" value={characterRole} onChange={(e) => setCharacterRole(e.target.value)} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Edit Character" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default EditCharacter;