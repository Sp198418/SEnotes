let allAthletes = document.getElementById('allAthletes');
let singleView = document.getElementById('singleView')



function addAthletes(e){
    let athletes = {
        name: document.getElementById('name').value,
        image: document.getElementById('image').value,
        team: document.getElementById('team').value,
        jersey: document.getElementById('jersey').value,
        position: document.getElementById('position').value
        
    }
    fetch('http://localhost:3000/athletes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(athletes)
    })

    .then(res => res.json())
    .then(getAthletes)
    .catch(error => console.log(error))
}

function getAthletes(){
    allAthletes.innerHTML = '';

    fetch('http://localhost:3000/athletes', {method: 'GET'})
    .then(res => res.json())
    .then(res => {
        res.forEach(athlete => {  
            let card = document.createElement('div');
            let delButton = document.createElement('button');
            let viewButton = document.createElement('button')
            
            
            card.setAttribute('id', athlete.id)
            card.setAttribute('class', 'card');
            card.setAttribute('style', `background-image: url(${athlete.image})`)
            delButton.setAttribute('class','delAthBut' )
            viewButton.setAttribute('class', 'delAthBut')
            
            delButton.onclick = (event) =>  deleteAthleteById(event);
            viewButton.onclick = (event) => viewAthleteById(event);


            delButton.innerText = `Delete ${athlete.name}`
            viewButton.innerText = `View ${athlete.name}`

            

            card.appendChild(delButton);
            card.appendChild(viewButton);

            
        

            allAthletes.appendChild(card);

            console.log(athlete)
        });
    })
    .catch(error => console.log(error))
}

function deleteAthleteById(event){
    console.log(event.target.parentNode.id);

    fetch(`http://localhost:3000/athletes/${event.target.parentNode.id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }

    })
    .then(getAthletes)
    .catch(error => console.log(error))

}

function viewAthleteById(event){
    singleView.innerHTML = ' <button id="closeButton" onclick=hidePopup(event)>X</button>';

    fetch(`http://localhost:3000/athletes/${event.target.parentNode.id}`, {method: 'GET',})
    .then(res => res.json())
    .then(athlete => {
        
        let image = document.createElement('img');
        let name = document.createElement('div');
        let team =document.createElement('div');
        let jersey =document.createElement('div');
        let position =document.createElement('div');

        singleView.setAttribute('style', 'display: flex')

        image.src  = `${athlete[0].image}`;
        name.innerText = `${athlete[0].name}`;
        team.innerText = `${athlete[0].team}`;
        jersey.innerText = `${athlete[0].jersey}`;
        position.innerText = `${athlete[0].position}`;

        name.style.color = "red";
        name.style.fontSize = "x-large";
        team.style.color = "red";
        team.style.fontSize = "x-large";
        jersey.style.color = "red";
        jersey.style.fontSize = "x-large";
        position.style.color = "red";
        position.style.fontSize = "x-large";


        
        singleView.appendChild(image);
        singleView.appendChild(name);
        singleView.appendChild(team);
        singleView.appendChild(jersey);
        singleView.appendChild(position);

        allAthletes.appendChild(singleView);

    })
    .catch(error => console.log(error))
}

function editAthlete(){
    let id = document.getElementById('id').value

    let athletes = {
        name: document.getElementById('name').value,
        image: document.getElementById('image').value,
        team: document.getElementById('team').value,
        jersey: document.getElementById('jersey').value,
        position: document.getElementById('position').value
        
    }

    fetch(`http://localhost:3000/athletes/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(athletes)
    })
    .then(getAthletes)
    .catch(error => console.log(error))
}

 function hidePopup(){
    singleView.setAttribute('style', 'display: none')
 }
             