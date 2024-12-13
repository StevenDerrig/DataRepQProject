//Item component to display the misson details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../Assets/styling/cardstyle.css';

//display Missions
const MissionItem = (props) => {
    useEffect(() => {
        console.log("Mission Item:", props.myMissions);
    }, [props.myMissions]);

    const handleDelete = (e) =>{
        e.preventDefault();
    
        axios.delete('http://localhost:4000/api/missions/' + props.myMissions._id)
        .then((res)=>{
            props.Reload();
        })
        .catch((err)=>{
            console.log(err);
        });
    };
    //return the mission details with card styling
    return (
        <div className="generalDisplay">
            <Card className="generalitem-card">
                <Card.Body className="generalitem-card-body">
                    <Card.Title className="generalitem-card-title">{props.myMissions.missionName}</Card.Title>
                    <Card.Subtitle className="generalitem-card-subtitle">{props.myMissions.missionNumber}</Card.Subtitle>
                    <Card.Text className="generalitem-card-text">{props.myMissions.missionDescription}</Card.Text>
                    <Card.Text className="generalitem-card-text">{props.myMissions.missionObjectives}</Card.Text>
                    <Card.Text className="generalitem-card-text">{props.myMissions.missionLocation}</Card.Text>
                    <Card.Link>{props.myMissions.missionOST}</Card.Link>
                </Card.Body>
                <div className="generalitem-card-buttons">
                <Link to={"/editMission/" + props.myMissions._id} className="btn btn-primary">Edit Mission</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete Mission</Button>
                </div>
            </Card>
        </div>
    );
};

export default MissionItem;