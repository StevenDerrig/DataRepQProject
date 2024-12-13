//Item component to display the character details
import { useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import axios from "axios";

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
        <div>
            <Card>
                <Card.Header>{props.myPlayerlog.plmissionName}</Card.Header>
                <Card.Body>
                    <Card.Text>{props.myPlayerlog.plmissionNumber}</Card.Text>
                    <Card.Text>{props.myPlayerlog.plmissionScore}</Card.Text>
                    <Card.Text>{props.myPlayerlog.plmissionTime}</Card.Text>
                    <Card.Text>{props.myPlayerlog.plmissionRank}</Card.Text>
                </Card.Body>
                <Link to={"/editPlayerlog/" + props.myPlayerlog._id} className="btn btn-primary">Edit Player Log</Link>
                <Button className="btn btn-danger" onClick={handleDelete}>Delete Player Log</Button>
            </Card>
        </div>
    );
};

export default PlayerlogItem;