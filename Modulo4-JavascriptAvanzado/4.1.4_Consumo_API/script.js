function requestApi(){
  const url = 'https://swapi.dev/api/'
  fetch(`${url}/people/1`).then((response) => {
    const responseJSON = response.json().then((data) => {
      console.log(data)
      const starships = data.starships
      const name = data.name
      const height = data.height
      console.log({
        name,
        height
      })

      fetch(starships[0]).then((response) => {
        const responseJSON = response.json().then((data) => {
          console.log(data)
        }).catch((error) => {})
      }).catch((error) => {
        console.log(error)
      })
    })

    // console.log(responseJSON)
  }).catch((error) => {
    console.log(error)
  })
}

requestApi()