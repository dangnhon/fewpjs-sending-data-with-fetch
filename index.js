// Add your code here
function submitData(userName, userEmail) {
    let fetchData = { 
        name: userName, 
        email: userEmail
    }

    let fetchConfig = {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(fetchData)
    }

    return fetch("http://localhost:3000/users", fetchConfig)
    .then(function(response) {
        
        return response.json()
    }) 
    .then(function(jsonObject) {
        const ul = document.createElement("ul")
        ul.innerText = jsonObject.id
        document.body.append(ul)
    })
    .catch(function(error) {
        const eMessage = document.createElement("ul")
        eMessage.innerText = error.message
        document.body.append(eMessage)
    })
}