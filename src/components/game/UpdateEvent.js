import react, { useState, useEffect, } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getGames } from "./GameManager";
import { putEvents } from "./EventManager";
import { getEvents, getEventById } from "./EventManager";

// getGames is imported to allow the select to display a list of games
export const UpdateEvent = (props) => {
  const [ gameList, setGameList] = useState([])
  const [ eventList, setEventList] = useState([])
  const [ eventToEdit, setEventToEdit ] = useState({})
  

  let { id } = useParams()
  const history = useHistory()

 


useEffect(() => {
  getGames().then(data => setGameList(data))
  getEvents().then(data => setEventList(data))
  getEventById(id).then(data => 
    {
      setEventToEdit(data)
      
    }
    )
      }, 
  []
)


    // Still need to write out this form and figure out controlled/uncontrolled input for it. Event pk value needs to be passed to the form as props if I'm understanding this correctly
    const eventupdateform = () => {
        return(
            <>
            <h2>Update Event</h2>
            <form id="editeventform">
            <label for="description">Event Description</label> 
            <input type="text" id="description" value={eventToEdit.description} onChange=
            {
              (e)=>
              {
                const copy = {...eventToEdit}
                copy.description = e.target.value
                setEventToEdit(copy)
                }
              }
              >

              </input>
            <label for="games">Select Game</label>
            <select name="games" form_id="editeventform"
            /* Set game via parsing the gameId as the indicator to select the correct game for the event*/
            onChange={(e)=>
              {
                const copy = {...eventToEdit}
                copy.game_id = e.target.value
                setEventToEdit(copy)}
              }>
              <option value={""} selected disabled>Change Game from {eventToEdit.game?.title}</option>
              
              
              
              { gameList.map(
                (gameList) => <option value={gameList.id}>{gameList.title}</option>
              )
            }
            </select>
            <label for="date">Updated Event Date</label>
            <input type="date" id="eventdate" value={eventToEdit.date}
            onChange={
            (e)=> 
            {
              const copy = {...eventToEdit}
              copy.date = e.target.value
              setEventToEdit(copy)
            }
          }
            >

            </input>
            <label for="time">Updated Event Time</label>
            <input type="time" id="time" value={eventToEdit.time} onChange={(e)=>
            {
              const copy = {...eventToEdit}
              copy.time = e.target.value
              setEventToEdit(copy)}
            }
              
            >
            </input>
            <input type="submit" 
            
            onClick={
              (e)=> 
              {
              e.preventDefault()
              putEvents(eventToEdit)
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
    eventupdateform()
  )  
}

