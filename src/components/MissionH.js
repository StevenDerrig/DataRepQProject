import MissionItem from "./JSItems/missionItem";

//using map function to display the missions
const MissionH = (props)=>{
    return props.myMissions.map(
        (mission)=>{
            //reloadData is passed to child components, so they can trigger a refresh after deletion
            return <MissionItem myMissions ={mission} key={mission._id} Reload={props.ReloadData}/>
        }
    );
}
export default MissionH;