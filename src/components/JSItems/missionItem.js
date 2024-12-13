//Item component to display the misson details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

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

    return (
        <div className="general-background-cont">
            <Card>
                <Card.Body>
                    <Card.Title>{props.myMissions.missionName}</Card.Title>
                    <Card.Subtitle>{props.myMissions.missionNumber}</Card.Subtitle>
                    <Card.Text>{props.myMissions.missionDescription}</Card.Text>
                    <Card.Text>{props.myMissions.missionObjectives}</Card.Text>
                    <Card.Text>{props.myMissions.missionLocation}</Card.Text>
                    <Card.Link>{props.myMissions.missionOST}</Card.Link>
                </Card.Body>
                <Link to={"/editMission/" + props.myMissions._id} className="btn btn-primary">Edit Mission</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete Mission</Button>
            </Card>
        </div>
    );
};

export default MissionItem;