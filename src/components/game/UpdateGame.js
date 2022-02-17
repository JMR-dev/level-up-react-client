import react, { useState, useEffect, } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getEvents } from "./EventManager";
import { putGames } from "./GameManager";
import { getGames, getGameById } from "./GameManager";

// getGames is imported to allow the select to display a list of games
export const UpdateGame = (props) => {
  const [ gameList, setGameList] = useState([])
  const [ eventList, setEventList] = useState([])
  const [ gameToEdit, setGamegameToEdit ] = useState({})
  

  let { id } = useParams()
  const history = useHistory()

 


useEffect(() => {
  getGames().then(data => setGameList(data))
  getEvents().then(data => setEventList(data))
  getGameById(id).then(data => 
    {
      setGamegameToEdit(data)
      
    }
    )
      }, 
  []
)


    
    const gameupdateform = () => {
        return(
            <>
            <h2>Update Event</h2>
            <form id="editeventform">
            <label for="description">Event Description</label> 
            <input type="text" id="description" value={gameToEdit.description} onChange=
            {
              (e)=>
              {
                const copy = {...gameToEdit}
                copy.description = e.target.value
                setGameToEdit(copy)
                }
              }
              >

              </input>
            <label for="games">Select Game</label>
            <select name="games" form_id="editeventform"
            /* Set game via parsing the gameId as the indicator to select the correct game for the event*/
            onChange={(e)=>
              {
                const copy = {...gameToEdit}
                copy.game_id = e.target.value
                setGameToEdit(copy)}
              }>
              <option disabled>Change Game from {gameToEdit.game?.title}</option>
              
              
              
              { gameList.map(
                (gameList) => <option value={gameList.id}>{gameList.title}</option>
              )
            }
            </select>
            <label for="date">Updated Event Date</label>
            <input type="date" id="eventdate" value={gameToEdit.date}
            onChange={
            (e)=> 
            {
              const copy = {...gameToEdit}
              copy.date = e.target.value
              setGameToEdit(copy)
            }
          }
            >

            </input>
            <label for="time">Updated Event Time</label>
            <input type="time" id="time" value={gameToEdit.time} onChange={(e)=>
            {
              const copy = {...gameToEdit}
              copy.time = e.target.value
              setGameToEdit(copy)}
            }
              
            >
            </input>
            <input type="submit" 
            
            onClick={
              (e)=> 
              {
              e.preventDefault()
              putEvents(gameToEdit)
              history.push("/")
              }
            }
              >

              </input>
            </form>
        
            </>
            
        )
    }
  return(
    gameupdateform()
  )  
}

