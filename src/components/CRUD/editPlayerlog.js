//Component for editing playerlog
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditPlayerlog = () => {

    const { id } = useParams();
    const [plmissionName, setPlmissionName] = useState("");
    const [plmissionNumber, setPlmissionNumber] = useState("");
    const [plmissionScore, setPlmissionScore] = useState("");
    const [plmissionTime, setPlmissionTime] = useState("");
    const [plmissionRank, setPlmissionRank] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:4000/api/playerlog/' + id)
            .then((res) => {
                setPlmissionName(res.data.plmissionName);
                setPlmissionNumber(res.data.plmissionNumber);
                setPlmissionScore(res.data.plmissionScore);
                setPlmissionTime(res.data.plmissionTime);
                setPlmissionRank(res.data.plmissionRank);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [id]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const playerlog = {
            plmissionName, plmissionNumber, plmissionScore, plmissionTime, plmissionRank
        };

        axios.put('http://localhost:4000/api/playerlog/' + id, playerlog)
            .then(res => {
                console.log(res.data);
                navigate("/playerlog");
            })
            .catch(err => console.error(err));
    };

    return (
        <div>
            <h3>Editing Player Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Edit Mission Name: </label>
                    <input type="text" className="form-control" value={plmissionName} onChange={(e) => setPlmissionName(e.target.value)} />

                    <label>Edit Mission Number: </label>
                    <input type="text" className="form-control" value={plmissionNumber} onChange={(e) => setPlmissionNumber(e.target.value)} />

                    <label>Edit Mission Score: </label>
                    <input type="text" className="form-control" value={plmissionScore} onChange={(e) => setPlmissionScore(e.target.value)} />

                    <label>Edit Mission Time: </label>
                    <input type="text" className="form-control" value={plmissionTime} onChange={(e) => setPlmissionTime(e.target.value)} />

                    <label>Edit Mission Rank: </label>
                    <input type="text" className="form-control" value={plmissionRank} onChange={(e) => setPlmissionRank(e.target.value)} />

                    <input type="submit" value="Edit Player Log" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
}

export default EditPlayerlog;

