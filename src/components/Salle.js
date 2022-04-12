import {useState} from "react"

const Salle = ({equipement}) => {

    const [reserved, setReserved] = useState(false)
   return (
       <div>

    <div style={{
        backgroundColor: 'purple',
        color: 'white',
        padding: 20, 
        width: 300,
        height: 400, 
        marginBottom: 10
    }}>

        <h3> {equipement.fields.nom_cplet_lieu}</h3> 

        <ul> Informations :
            <li>Adresse</li> 
            <li>{equipement.fields.adresse_lieu}</li> 
            <li>Téléphone</li> 
            <li>{equipement.fields.telephone}</li> 

            <li>Parking</li>
            <li>Infos pratiques</li>
            {equipement.fields.infos_pratiques}
            <li> Réservé : {reserved? "oui": "non"}</li>
        </ul> 
        </div>
        <button style={{
            backgroundColor: 'white', 
            color:"purple", 
            padding: 10, 
            borderRadius: 7, 
            backgroundColorHover: "pruple"}}    
        
            onClick={()=>{setReserved(!reserved)}}
        > 
            {reserved? "Libérer la salle" : "Réserver"}
        </button>
        
     </div>)
}
export default Salle 


// const Salle = () => {
//     return (
//      <div>
//          <h3> Nom de la salle</h3>
 
//          <ul> Informations :
//              <li>Adresse</li> 
//              <li>Téléphone</li> 
//              <li>Parking</li>
//              <li>infos_pratiques</li>
//          </ul> 
         
//       </div>)
//  }
//  export default Salle 