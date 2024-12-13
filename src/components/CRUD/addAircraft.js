import { useState } from "react";
import axios from "axios";

import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddAircraft = () => {

    const [aircraftName, setAircraftName] = useState("");
    const [aircraftImg, setAircraftImg] = useState("");
    const [aircraftDescription, setAircraftDescription] = useState("");
    const [aircraftStats, setAircraftStats] = useState("");
    const [aircraftWeapons, setAircraftWeapons] = useState("");
    const [aircraftPrice, setAircraftPrice] = useState("");
    const [aircraftUnlock, setAircraftUnlock] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Aircraft Name: ${aircraftName}`, `Aircraft Image: ${aircraftImg}`, `Aircraft Description: ${aircraftDescription}`, `Aircraft Stats: ${aircraftStats}`, `Aircraft Weapons: ${aircraftWeapons}`, `Aircraft Price: ${aircraftPrice}`, `Aircraft Unlock: ${aircraftUnlock}`);

        const aircraft = {
            aircraftName: aircraftName,
            aircraftImg: aircraftImg,
            aircraftDescription: aircraftDescription,
            aircraftStats: aircraftStats,
            aircraftWeapons: aircraftWeapons,
            aircraftPrice: aircraftPrice,
            aircraftUnlock: aircraftUnlock
        };

        axios.post('http://localhost:4000/api/aircraft', aircraft)
            .then(res => {
                console.log(res.data);
                toast.success("Aircraft added successfully!");
                //clear the form feilds
                setAircraftName("");
                setAircraftImg("");
                setAircraftDescription("");
                setAircraftStats("");
                setAircraftWeapons("");
                setAircraftPrice("");
                setAircraftUnlock("");
            })
            .catch(err => {
                console.error(err);
                toast.error("Error adding aircraft!");
            });
    };

    return (
        <div>
            <h3>Adding Aircraft</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Aircraft Name: </label>
                    <input type="text" className="form-control" value={aircraftName} onChange={(e) => setAircraftName(e.target.value)} />

                    <label>Add Aircraft Image: </label>
                    <input type="text" className="form-control" value={aircraftImg} onChange={(e) => setAircraftImg(e.target.value)} />

                    <label>Add Aircraft Description: </label>
                    <input type="text" className="form-control" value={aircraftDescription} onChange={(e) => setAircraftDescription(e.target.value)} />

                    <label>Add Aircraft Stats: </label>
                    <input type="text" className="form-control" value={aircraftStats} onChange={(e) => setAircraftStats(e.target.value)} />

                    <label>Add Aircraft Weapons: </label>
                    <input type="text" className="form-control" value={aircraftWeapons} onChange={(e) => setAircraftWeapons(e.target.value)} />

                    <label>Add Aircraft Price: </label>
                    <input type="text" className="form-control" value={aircraftPrice} onChange={(e) => setAircraftPrice(e.target.value)} />

                    <label>Add Aircraft Unlock: </label>
                    <input type="text" className="form-control" value={aircraftUnlock} onChange={(e) => setAircraftUnlock(e.target.value)} />
                </div>
                <input type="submit" value="Add Aircraft" className="btn btn-primary" />
            </form>
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce} />
        </div>
    );
};

export default AddAircraft;