import Salle from "./Salle"
import data from "../data/data.js"

const Repertory = () => {

    console.log(data)
    return (
    <div >
        <h1> Répertoire des salles nantaises</h1>
        <div style={{display : 'flex', gap: 20, flexWrap: 'wrap'}}> 
        
        {data.map((equipement, index) => {
            return  <Salle equipement={equipement} key={index}/> 
        })}

        </div> 

     </div>)
}
export default Repertory