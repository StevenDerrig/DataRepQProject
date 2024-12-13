import AircraftItem from "./JSItems/aircraftItem";

//using map function to display the aircraft
const AircraftP = (props)=>{
    return props.myAircrafts.map(
        (aircraft)=>{
            //reloadData is passed to child components, so they can trigger a refresh after deletion
            return <AircraftItem myAircraft ={aircraft} key={aircraft._id} Reload={props.ReloadData}/>
        }
    );
}
export default AircraftP;