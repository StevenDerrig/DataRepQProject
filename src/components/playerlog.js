import { useEffect, useState } from "react";
import axios from "axios";
import PlayerLogP from "./PlayerLogP";

const PlayerLog = () => {
    const [playerlog, setPlayerLog] = useState([]);

    const reloadData = () => {
        axios.get('http://localhost:4000/api/playerlog', playerlog)
            .then((response) => {
                console.log(response.data);
                setPlayerLog(response.data.playerlog);
            })
            .catch((error) => {
                console.log("Error reloading data:", error);
            });
    }

    useEffect(() => {
        reloadData();
    }, []);

    return (
        <div>
            <h3>Player Log</h3>
            <PlayerLogP myPlayerlog={playerlog} ReloadData={reloadData} />
        </div>
    );
}

export default PlayerLog;