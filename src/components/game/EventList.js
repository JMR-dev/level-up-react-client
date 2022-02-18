import React, { useEffect, useState, } from "react"
import { getEvents, } from "./EventManager.js"
import { UpdateEvent } from "./UpdateEvent.js"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

export const EventList = (props) => {
    const [ events, setEvents ] = useState([])
    const history = useHistory()

    useEffect(() => {
        getEvents().then(data => setEvents(data))
    }, [])

return (
    
    <article className="events">
        
        <button 
            className="btn btn-2 btn-sep icon-create"
    onClick={
        () => {
        history.push(
            { pathname: "/events/new" }
        )
    }
    
}
    >Register New Event
</button>
            {
                events.map(
                    event => {
                    return( 
                    <>
                    <section key={`event--${event.id}`} className="event">
                        <button onClick={()=> history.push(`./events/update/${event.id}`) }>Update Event</button>
                        <div className="event__description">{event.description}</div>
                        <div className="event__date">The event is happening on {event.date} at {event.time}.</div>
                    </section>
                    </>
                    )
                    
                        }
                    )
                }
            
           
        </article>
   
    )
}