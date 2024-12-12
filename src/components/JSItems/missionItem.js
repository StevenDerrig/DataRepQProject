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

    return (
        <div>
            <Card>
                <Card.Body>
                    <Card.Title>{props.myMissions.missionName}</Card.Title>
                    <Card.Subtitle>{props.myMissions.missionNumber}</Card.Subtitle>
                    <Card.Text>{props.myMissions.missionDescription}</Card.Text>
                    <Card.Text>{props.myMissions.missionObjectives}</Card.Text>
                    <Card.Text>{props.myMissions.missionLocation}</Card.Text>
                    <Card.Link>{props.myMissions.missionOST}</Card.Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default MissionItem;