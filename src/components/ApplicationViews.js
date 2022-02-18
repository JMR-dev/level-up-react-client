import React from "react"
import { Route } from "react-router-dom"
import { EventList } from "./game/EventList.js"
import { GameList } from "./game/GameList.js"
import { GameForm } from "./game/GameForm.js"
import { EventForm } from "./game/EventForm.js"
import { UpdateEvent } from "./game/UpdateEvent.js"
import { UpdateGame} from "./game/UpdateGame.js"
export const ApplicationViews = () => {
    return <>
        <main style={{
            margin: "5rem 2rem",
            lineHeight: "1.75rem"
        }}>
            <Route exact path="/">
                <GameList />
            </Route>
            <Route exact path="/">
                <EventList />
            </Route> 
            <Route exact path = "/games/new" >
                <GameForm />
            </Route>
            <Route exact path = "/events/new" >
                <EventForm />
            </Route>
            <Route exact path= "/events/update/:id(\d+)">
                <UpdateEvent />
            </Route>
            <Route exact path= "/games/update/:id(\d+)">
                <UpdateGame />
            </Route>
        </main>
    </>
}