import react, { useState, useEffect, } from "react";
import { useParams, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { getGames } from "./GameManager";
import { putEvents } from "./EventManager";

export const UpdateEvent = (props) => {
  const [gameList, setGameList] = useState([])
  let { id } = useParams()
 const history = useHistory()

 


    useEffect(() => {
      getGames().then(data => setGameList(data))
      }, 
  []
)

    // Still need to write out this form and figure out controlled/uncontrolled input for it. Event pk value needs to be passed to the form as props if I'm understanding this correctly
    const eventupdateform = () => {
        return(
            <>
            <h2>Update Event</h2>
            <form id="editeventform">
            <input type="text" id="event_id" disabled hidden value={id} ></input>
            <label for="description">Event Description</label> 
            <input type="text" id="description"></input>
            <label for="games">Select Game</label>
            <select name="games" form_id="editeventform">
              <option selected disabled hidden >Select a Game</option>
              {gameList.map(
                (gameList) => <option>{gameList.title}</option>
              )
            }
            </select>
            <label for="eventdate">Updated Event Date</label>
            <input type="date" id="eventdate"></input>
            <label for="eventtime">Updated Event Time</label>
            <input type="time" id="eventtime"></input>
            <input type="submit" onClick={(evt)=> putEvents(evt)} onSubmit={()=> history.push("/")}></input>
            </form>
        
            </>
            // How to associate the event id with the form?
    // Rough form completed, need to change input type to be controlled by React. Import putEvents and then worry about getting state to be controlled by React.
        )
    }
  return(
    eventupdateform()
  )  
}

