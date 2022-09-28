import '../assets/styles/Character.css'

function Character(props){
    return(
        <div id={props.id} className="containerCharacter">
            <img className='imgCharacter' src={props.img}/>
            <div className='txtCharacter'>
               <p className='nameCharacter'>{props.name}</p>
               <p className='descriptionCharacter'>{props.description}</p>
            </div>
        </div>
    )
}export default Character;