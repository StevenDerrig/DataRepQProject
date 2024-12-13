//Item component to display the aircraft details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

//display Aircraft
const AircraftItem = (props) => {
    useEffect(() => {
        console.log("Aircraft Item:", props.myAircraft);
    }, [props.myAircraft]);

    const handleDelete = (e) =>{
        e.preventDefault();
    
        axios.delete('http://localhost:4000/api/aircraft/' + props.myAircraft._id)
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
                <Card.Header>{props.myAircraft.aircraftName}</Card.Header>
                <Card.Body>
                    <blockquote className="blockquote mb-0">
                        <img src={props.myAircraft.aircraftImg} alt={props.myAircraft.aircraftName} style={{width: '100%', height: 'auto', maxWidth: '300px'}}/>
                    </blockquote>
                    <Card.Text>{props.myAircraft.aircraftDescription}</Card.Text>
                    <Card.Text>{props.myAircraft.aircraftStats}</Card.Text>
                    <Card.Text>{props.myAircraft.aircraftWeapons}</Card.Text>
                    <Card.Text>{props.myAircraft.aircraftPrice}</Card.Text>
                    <Card.Text>{props.myAircraft.aircraftUnlock}</Card.Text>
                </Card.Body>
                <Link to={"/editAircraft/" + props.myAircraft._id} className="btn btn-primary">Edit Aircraft</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete Aircraft</Button>
            </Card>
        </div>
    );
};

export default AircraftItem;