//Create component for adding missions
//import useState & axios
import { useState } from "react";
import axios from "axios";

//Function to add missions
const AddMissions = () => {
    //hook
    const [missionName, setMissionName] = useState("");
    const [missionNumber, setMissionNumber] = useState("");
    const [missionDescription, setMissionDescription] = useState("");
    const [missionObjectives, setMissionObjectives] = useState("");
    const [missionLocation, setMissionLocation] = useState("");
    const [missionOST, setMissionOST] = useState("");

    //Function for form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Mission Name: ${missionName}`, `Mission Number: ${missionNumber}`, `Mission Description: ${missionDescription}`, `Mission Objectives: ${missionObjectives}`, `Mission Location: ${missionLocation}`, `Mission OST: ${missionOST}`);

        const mission = {
            missionName : missionName,
            missionNumber : missionNumber,
            missionDescription : missionDescription,
            missionObjectives : missionObjectives,
            missionLocation : missionLocation,
            missionOST : missionOST
        };

        axios.post('http://localhost:4000/api/missions', mission)
            .then(res => console.log(res.data))
            .catch(err => console.error(err));
    };

    //Input form for adding missions details
    return(
        <div>
            <h3>Adding Missions</h3>
            <form onSubmit = {handleSubmit}>
                <div>
                    <label>Add Mission Name: </label>
                    <input type = "text" className="form-control" value={missionName} onChange={(e) => setMissionName(e.target.value)} />

                    <label>Add Mission Number: </label>
                    <input type = "text" className="form-control" value={missionNumber} onChange={(e) => setMissionNumber(e.target.value)} />

                    <label>Add Mission Description: </label>
                    <input type = "text" className="form-control" value={missionDescription} onChange={(e) => setMissionDescription(e.target.value)} />

                    <label>Add Mission Objectives: </label>
                    <input type = "text" className="form-control" value={missionObjectives} onChange={(e) => setMissionObjectives(e.target.value)} />

                    <label>Add Mission Location: </label>
                    <input type = "text" className="form-control" value={missionLocation} onChange={(e) => setMissionLocation(e.target.value)} />

                    <label>Add Mission OST: </label>
                    <input type = "text" className="form-control" value={missionOST} onChange={(e) => setMissionOST(e.target.value)} />
                </div>
                <input type = "submit" value = "Add Mission" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default AddMissions;
