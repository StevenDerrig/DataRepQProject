import { useEffect, useState } from "react";
import axios from "axios";
import PlayerLogP from "./PlayerLogP";

const PlayerLog = () => {
    const [playerLog, setPlayerLog] = useState([]);

    const reloadData = () => {
        axios.get('http://localhost:4000/api/playerlog', playerLog)
            .then((response) => {
                console.log(response.data);
                setPlayerLog(response.data.playerLog);
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
            <PlayerLogP myPlayerLog={playerLog} ReloadData={reloadData} />
        </div>
    );
}

export default PlayerLog;