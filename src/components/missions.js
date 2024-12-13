//Hooks to get the data from server/api
import { useState, useEffect } from "react";
import axios from "axios";
import MissionH from "./MissionH";
import '../Assets/styling/backgrd.css';

const Missions = () => {
    const [missions, setMissions] = useState([]);

    const reloadData = () => {
        axios.get('http://localhost:4000/api/missions', missions)
            .then((response) => {
                console.log(response.data);
                setMissions(response.data.missions);
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
            <h3>Mission List</h3>
            <MissionH myMissions={missions} ReloadData={reloadData} />
        </div>
    );
};

export default Missions;