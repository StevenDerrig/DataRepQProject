import CharacterItem from "./JSItems/characterItem";

const CharacterP = (props)=>{
    return props.myCharacter.map(
        (character)=>{
            return <CharacterItem myCharacter ={character} key={character._id} Reload={props.ReloadData}/>
        }
    );
}
export default CharacterP;