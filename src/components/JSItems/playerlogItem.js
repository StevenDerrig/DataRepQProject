//Item component to display the character details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../Assets/styling/backgrd.css';
import '../../Assets/styling/cardstyle.css';

//display Character
const PlayerlogItem = (props) => {
    useEffect(() => {
        console.log("Playerlog Item:", props.myPlayerlog);
    }, [props.myPlayerlog]);

    const handleDelete = (e) =>{
        e.preventDefault();
    
        axios.delete('http://localhost:4000/api/playerlog/' + props.myPlayerlog._id)
        .then((res)=>{
            props.Reload();
        })
        .catch((err)=>{
            console.log(err);
        });
    };

    return (
        <div className="general-background-cont">
            <Card className="generalitem-card">
                <Card.Header className="generalitem-card-header">{props.myPlayerlog.plMissionName}</Card.Header>
                <Card.Body className="generalitem-card-body">
                    <Card.Text className="generalitem-card-text">{props.myPlayerlog.plMissionNumber}</Card.Text>
                    <Card.Text className="generalitem-card-text">{props.myPlayerlog.plMissionScore}</Card.Text>
                    <Card.Text className="generalitem-card-text">{props.myPlayerlog.plMissionTime}</Card.Text>
                    <Card.Text className="generalitem-card-text">{props.myPlayerlog.plMissionRank}</Card.Text>
                </Card.Body>
                <div className="generalitem-card-buttons">
                <Link to={"/editPlayerlog/" + props.myPlayerlog._id} className="btn btn-primary">Edit Player Log</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete Player Log</Button>
                </div>
            </Card>
        </div>
    );
};

export default PlayerlogItem;