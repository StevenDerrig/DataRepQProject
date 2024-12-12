//Component for editing a mission
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditMission = () => {

    const { id } = useParams();
    const [missionName, setMissionName] = useState("");
    const [missionNumber, setMissionNumber] = useState("");
    const [missionDescription, setMissionDescription] = useState("");
    const [missionObjectives, setMissionObjectives] = useState("");
    const [missionLocation, setMissionLocation] = useState("");
    const [missionOST, setMissionOST] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/missions/' + id)
            .then((res) => {
                setMissionName(res.data.missionName);
                setMissionNumber(res.data.missionNumber);
                setMissionDescription(res.data.missionDescription);
                setMissionObjectives(res.data.missionObjectives);
                setMissionLocation(res.data.missionLocation);
                setMissionOST(res.data.missionOST);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const mission = {
            missionName, missionNumber, missionDescription, missionObjectives, missionLocation, missionOST
        };

        axios.put('http://localhost:4000/api/missions/' + id, mission)
            .then(res => {
                console.log(res.data);
                navigate("/missions");
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h3>Editing Mission</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Mission Name: </label>
                    <input type="text" className="form-control" value={missionName} onChange={(e) => setMissionName(e.target.value)} />

                    <label>Edit Mission Number: </label>
                    <input type="text" className="form-control" value={missionNumber} onChange={(e) => setMissionNumber(e.target.value)} />

                    <label>Edit Mission Description: </label>
                    <input type="text" className="form-control" value={missionDescription} onChange={(e) => setMissionDescription(e.target.value)} />

                    <label>Edit Mission Objectives: </label>
                    <input type="text" className="form-control" value={missionObjectives} onChange={(e) => setMissionObjectives(e.target.value)} />

                    <label>Edit Mission Location: </label>
                    <input type="text" className="form-control" value={missionLocation} onChange={(e) => setMissionLocation(e.target.value)} />

                    <label>Edit Mission OST: </label>
                    <input type="text" className="form-control" value={missionOST} onChange={(e) => setMissionOST(e.target.value)} />
                </div>
                <input type="submit" value="Save Edit" className="btn btn-primary" />
            </form>
        </div>
    );
};

export default EditMission;