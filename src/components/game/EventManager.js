export const getEvents = () => {
    return fetch("http://localhost:8000/events", {
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
        }
    })
        .then(response => response.json())
}
export const putEvents = (evt) => {
    return fetch(`http://localhost:8000/events/${evt.id}`, {
        method: "PUT",
        body: JSON.stringify(
            evt 
        ),
        headers:{
            "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        }
    )
    .then(response => {response => {
        return response.json()
            }
        }
    )

}