import PlayerlogItem from "./JSItems/playerlogItem";

//using map function to display the playerlog
const PlayerLogP = (props)=>{
    return props.myPlayerlog.map(
        (playerlog)=>{
            //reloadData is passed to child components, so they can trigger a refresh after deletion
            return <PlayerlogItem myPlayerlog ={playerlog} key={playerlog._id} Reload={props.ReloadData}/>
        }
    );
}
export default PlayerLogP;