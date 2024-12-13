//Item component to display the character details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";
import '../../Assets/styling/backgrd.css';

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
            <Card>
                <Card.Header>{props.myPlayerlog.plMissionName}</Card.Header>
                <Card.Body>
                    <Card.Text>{props.myPlayerlog.plMissionNumber}</Card.Text>
                    <Card.Text>{props.myPlayerlog.plMissionScore}</Card.Text>
                    <Card.Text>{props.myPlayerlog.plMissionTime}</Card.Text>
                    <Card.Text>{props.myPlayerlog.plMissionRank}</Card.Text>
                </Card.Body>
                <Link to={"/editPlayerlog/" + props.myPlayerlog._id} className="btn btn-primary">Edit Player Log</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete Player Log</Button>
            </Card>
        </div>
    );
};

export default PlayerlogItem;