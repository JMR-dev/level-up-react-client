import react, { useState, useEffect, } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getGames, getGameById, getGameTypes, putGames } from "./GameManager";

// getGames is imported to allow the select to display a list of games
export const UpdateGame = (props) => {
  const [ gameList, setGameList] = useState([])
  const [ gameToEdit, setGameToEdit ] = useState({})
    const [gametypes, setGameTypes ] = useState([])
  let { id } = useParams()
  const history = useHistory()

 


useEffect(() => {
  getGames().then(data => setGameList(data))
  getGameTypes().then(data=> setGameTypes(data))
  getGameById(id).then(data => 
    {
    data.game_type = data.game_type.id
      setGameToEdit(data)
      
    }
    )
      }, 
  []
)


    
    const gameupdateform = () => {
        return(
            <>
            <h2>Update Game</h2>
            <form id="editgameform">
            <label for="title">Game Title</label> 
            <input type="textearea" id="title" value={gameToEdit.title} onChange=
            {
              (e)=>
              {
                const copy = {...gameToEdit}
                copy.title = e.target.value
                setGameToEdit(copy)
                }
              }
              />

              
            <label for="maker">Maker</label>
           <input type="text" id="maker" value={gameToEdit.maker} onChange= {
               (e)=> 
               {
                 const copy = {...gameToEdit}
                 copy.maker = e.target.value
                 setGameToEdit(copy)
               }
           } />
            <label for="numberofplayers">Update number of players allowed</label>
            <input type="number" id="numberofplayers" value={gameToEdit.number_of_players} 
            onChange={(e)=>
            {
              const copy = {...gameToEdit}
              copy.number_of_players = e.target.value
              setGameToEdit(copy)}
            }
              
            />
            <label for="skillevel">Update required skill level</label>
            <input type="number" id="skilllevel" value={gameToEdit.skill_level} 
            onChange={(e)=>
            {
              const copy = {...gameToEdit}
              copy.skill_level = e.target.value
              setGameToEdit(copy)}
            }
              
            />
             <label for="gametype">Select Game</label>
            <select name="gametype" form_id="editgameform"
            /* Why is the nested information on game_type_id not returning from the API? What server side problem is causing this to be inaccessible?*/
            onChange={(e)=>
              {
                const copy = {...gameToEdit}
                copy.game_type = e.target.value
                setGameToEdit(copy)}
              }>
              
              { gametypes.map(
                (gametypes) => <option value={gametypes.id} selected={gameToEdit.game_type === gametypes.id}>{gametypes.label}</option>
              )
            }
            </select>
        
            <input type="submit" 
            
            onClick={
              (e)=> 
              {
              e.preventDefault()
              putGames(gameToEdit)
              history.push("/")
              }
            }
              />

              
            </form>
        
            </>
            
        )
    }
  return(
    gameupdateform()
  )  
}

