//Item component to display the character details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

//display Character
const CharacterItem = (props) => {
    useEffect(() => {
        console.log("Character Item:", props.myCharacter);
    }, [props.myCharacter]);

    const handleDelete = (e) =>{
        e.preventDefault();
    
        axios.delete('http://localhost:4000/api/character/' + props.myCharacter._id)
        .then((res)=>{
            props.Reload();
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    return (
        <div>
            <Card>
                <Card.Header>{props.myCharacter.characterName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myCharacter.characterImg} alt={props.myCharacter.characterName} style={{width: '100%', height: 'auto', maxWidth: '300px'}}/>
                    </blockquote>
                    <Card.Text>{props.myCharacter.characterDescription}</Card.Text>
                    <Card.Text>{props.myCharacter.characterRole}</Card.Text>
                </Card.Body>
                <Link to={"/editCharacter/" + props.myCharacter._id} className="btn btn-primary">Edit Character</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete Character</Button>
            </Card>
        </div>
    );
};

export default CharacterItem;