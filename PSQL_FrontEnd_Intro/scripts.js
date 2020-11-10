function addAthletes(e){
    let athletes = {
        name: 'Kobe Bryant'
        team: 'LAKERS'
    }
    fetch('http://localhost:3000/athletes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(athletes)
    })
    .then(res => console.log(res))
    .then(res => res.json())
    .catch(error => console.log(error))
}

addAthletes()