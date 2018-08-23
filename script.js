import request from 'superagent'

// request.get('https://itunes.apple.com/search?term=jack+johnson')
//   .then(response => JSON.parse(response.text))
//   .then(body => {
//     let searchResults = (body.results)
//     for (var i = 0; i < body.results.length; i++) {
//       let page = document.getElementById('testList')
//       let songLi = document.createElement('li')
//       songLi.innerText = searchResults[i].trackName
//       page.appendChild(songLi)
//     }
//     console.log(body.results[0])
//   })

getId('search-button').addEventListener('click', event => {
  event.preventDefault()

  let searchValue = getId('search-bar').value.replace(' ', '+')
  request.get(`https://itunes.apple.com/search?term=${searchValue}`)
    .then(response => JSON.parse(response.text))
    .then(body => {
      let searchResults = (body.results)
      for (var i = 0; i < body.results.length; i++) {
        let page = document.getElementById('testList')
        let songLi = document.createElement('li')
        songLi.innerText = searchResults[i].trackName
        page.appendChild(songLi)
      }
      console.log(body.results[0])
    })
})

function getId (id) {
  return document.getElementById(id)
}
function el (tag) {
  return document.createElement(tag)
}
