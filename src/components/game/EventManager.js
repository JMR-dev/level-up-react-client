export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}

export const getEventById = (id) => {
    return fetch(`http://localhost:8000/events/${id}`, {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const putEvents = (editedEvent) => {
    return fetch(`http://localhost:8000/events/${editedEvent.id}`, {
        method: "PUT",
        body: JSON.stringify(
            editedEvent 
        ),
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`,
            "Content-Type": "Application/json"
            }
        }
    )
    .then(response => {response => {
        return response.json()
            }
        }
    )

}

export const createEvent = (event) => {
    return fetch("http://localhost:8000/events", { 
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}