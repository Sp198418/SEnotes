let container = document.getElementById('container');
let query = 'supercars'
let url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=4GstN7sacWd5HhfiPraXKPHXIz4QgTuoJeLpEbLqI_0`


  function search(){
      let query = document.getElementById('search').value ||'tech';
      let url = `https://api.unsplash.com/search/photos/?query=${query}&client_id=4GstN7sacWd5HhfiPraXKPHXIz4QgTuoJeLpEbLqI_0`
      container.innerHTML= ''

      fetch(url)

    .then(res =>  res.json()) 
    .then(res=> {
        for(let i = 0; i < res.results.length; i++){
            console.log(res.results[i])

            let card = document.createElement('div');
            let newImg = document.createElement('img');
            let description = document.createElement('p')
            let alt_description = document.createElement('h1')

            card.setAttribute('class','card' );

            newImg.src = res.results[i].urls.full;
            description.innerText = res.results[i].description
            alt_description.innerText = res.results[i].alt_description


            card.appendChild(alt_description);
            card.appendChild(newImg);
            card.appendChild(description);

            container.appendChild(card);
        }
  })
    console.log(err=> console.log(err))
}
window.onload = search