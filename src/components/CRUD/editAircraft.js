//Component for editing an aircraft
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditAircraft = () => {

    const { id } = useParams();
    const [aircraftName, setAircraftName] = useState("");
    const [aircraftImg, setAircraftImg] = useState("");
    const [aircraftDescription, setAircraftDescription] = useState("");
    const [aircraftStats, setAircraftStats] = useState("");
    const [aircraftWeapons, setAircraftWeapons] = useState("");
    const [aircraftPrice, setAircraftPrice] = useState("");
    const [aircraftUnlock, setAircraftUnlock] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/aircraft/' + id)
            .then((res) => {
                setAircraftName(res.data.aircraftName);
                setAircraftImg(res.data.aircraftImg);
                setAircraftDescription(res.data.aircraftDescription);
                setAircraftStats(res.data.aircraftStats);
                setAircraftWeapons(res.data.aircraftWeapons);
                setAircraftPrice(res.data.aircraftPrice);
                setAircraftUnlock(res.data.aircraftUnlock);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const aircraft = {
            aircraftName, aircraftImg, aircraftDescription, aircraftStats, aircraftWeapons, aircraftPrice, aircraftUnlock
        };

        axios.put('http://localhost:4000/api/aircraft/' + id, aircraft)
            .then(res => {
                console.log(res.data);
                navigate("/aircraft");
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h3>Editing Aircraft</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Aircraft Name: </label>
                    <input type="text" className="form-control" value={aircraftName} onChange={(e) => setAircraftName(e.target.value)} />

                    <label>Edit Aircraft Image: </label>
                    <input type="text" className="form-control" value={aircraftImg} onChange={(e) => setAircraftImg(e.target.value)} />

                    <label>Edit Aircraft Description: </label>
                    <input type="text" className="form-control" value={aircraftDescription} onChange={(e) => setAircraftDescription(e.target.value)} />

                    <label>Edit Aircraft Stats: </label>
                    <input type="text" className="form-control" value={aircraftStats} onChange={(e) => setAircraftStats(e.target.value)} />

                    <label>Edit Aircraft Weapons: </label>
                    <input type="text" className="form-control" value={aircraftWeapons} onChange={(e) => setAircraftWeapons(e.target.value)} />

                    <label>Edit Aircraft Price: </label>
                    <input type="text" className="form-control" value={aircraftPrice} onChange={(e) => setAircraftPrice(e.target.value)} />

                    <label>Edit Aircraft Unlock: </label>
                    <input type="text" className="form-control" value={aircraftUnlock} onChange={(e) => setAircraftUnlock(e.target.value)} />

                    <input type="submit" value="Edit Aircraft" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default EditAircraft;