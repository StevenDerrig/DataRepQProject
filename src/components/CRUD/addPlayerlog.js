import { useState } from "react";
import axios from "axios";

//toastify for notification
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddPlayerlog = () => {

    const [plMissionName, setPlMissionName] = useState("");
    const [plMissionNumber, setPlMissionNumber] = useState("");
    const [plMissionScore, setPlMissionScore] = useState("");
    const [plMissionTime, setPlMissionTime] = useState("");
    const [plMissionRank, setPlMissionRank] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(`Mission Name: ${plMissionName}`, `Mission Number: ${plMissionNumber}`, `Mission Score: ${plMissionScore}`, `Mission Time: ${plMissionTime}`, `Mission Rank: ${plMissionRank}`);

        const playerlog = {
            plMissionName: plMissionName,
            plMissionNumber: plMissionNumber,
            plMissionScore: plMissionScore,
            plMissionTime: plMissionTime,
            plMissionRank: plMissionRank
        };

        axios.post('http://localhost:4000/api/playerlog', playerlog)
            .then(res => {
                console.log(res.data);
                toast.success("Player Log added successfully!");
                //clear the form feilds
                setPlMissionName("");
                setPlMissionNumber("");
                setPlMissionScore("");
                setPlMissionTime("");
                setPlMissionRank("");
            })
            .catch(err => {
                console.error(err)
                toast.error("Error adding player log!");
            });
    };

    return (
        <div>
            <h3>Add Player Log</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Add Mission Name: </label>
                    <input type="text" className="form-control" value={plMissionName} onChange={(e) => setPlMissionName(e.target.value)} />

                    <label>Add Mission Number: </label>
                    <input type="text" className="form-control" value={plMissionNumber} onChange={(e) => setPlMissionNumber(e.target.value)} />

                    <label>Add Mission Score: </label>
                    <input type="text" className="form-control" value={plMissionScore} onChange={(e) => setPlMissionScore(e.target.value)} />

                    <label>Add Mission Time: </label>
                    <input type="text" className="form-control" value={plMissionTime} onChange={(e) => setPlMissionTime(e.target.value)} />

                    <label>Add Mission Rank: </label>
                    <input type="text" className="form-control" value={plMissionRank} onChange={(e) => setPlMissionRank(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Add Player Log" className="btn btn-primary" />
                </div>
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
export default AddPlayerlog;