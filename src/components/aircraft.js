import { useEffect, useState } from "react";
import axios from "axios";
import AircraftP from "./AircraftP";
import '../Assets/styling/backgrd.css';

const Aircraft = () => {
    const [aircraft, setAircraft] = useState([]);

    const reloadData = () => {
        axios.get('http://localhost:4000/api/aircraft', aircraft)
            .then((response) => {
                console.log(response.data);
                setAircraft(response.data.aircraft);
            })
            .catch((error) => {
                console.log("Error reloading data:", error);
            });
    }

    useEffect(() => {
        reloadData();
    }, []);

    return (
        <div className="general-background-cont">
            <h3>Aircraft List</h3>
            <AircraftP myAircraft={aircraft} ReloadData={reloadData} />
        </div>
    );
}

export default Aircraft;