//Item component to display the character details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../Assets/styling/cardstyle.css';

//display Character
const CharacterItem = (props) => {
    useEffect(() => {
        console.log("Character Item:", props.myCharacter);
    }, [props.myCharacter]);

    const handleDelete = (e) => {
        e.preventDefault();

        axios.delete('http://localhost:4000/api/character/' + props.myCharacter._id)
            .then((res) => {
                props.Reload();
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div className="generalDisplay">
            <Card className="generalitem-card">
                <Card.Header className="generalitem-card-header">{props.myCharacter.characterName}</Card.Header>
                <Card.Body className="generalitem-card-body">
                    <blockquote className="blockquote mb-0">
                        <img src={props.myCharacter.characterImg} alt={props.myCharacter.characterName} style={{ width: '100%', height: 'auto', maxWidth: '300px' }} />
                    </blockquote>
                    <Card.Text className="generalitem-card-text">{props.myCharacter.characterDescription}</Card.Text>
                    <Card.Text className="generalitem-card-text">{props.myCharacter.characterRole}</Card.Text>
                </Card.Body>
                <div className="generalitem-card-buttons">
                    <Link to={"/editCharacter/" + props.myCharacter._id} className="btn btn-primary">Edit Character</Link>
                    <Button className="btn btn-danger" onClick={handleDelete}>Delete Character</Button>
                </div>
            </Card>
        </div>
    );
};

export default CharacterItem;