const api_token = ""

const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${api_token}` 
    }
}

function createMovieLayout({
    id,
    title,
    stars,
    image,
    time, 
    year,
}) {
    return `
    <div class="movie">
        <div class="title">
            <h2>${title}</h2>
            <div class="score">
                <i class="ph-fill ph-star"></i>
                ${stars}
            </div>
        </div>
        <div class="poster">
            <img src="https://image.tmdb.org/t/p/w500/${image}" alt="">
        </div>
        <div class="movie-info">
            <div class="duration">
                <i class="ph ph-clock"></i>
                ${time}
            </div>
            <div class="year">
                <i class="ph ph-calendar"></i>
                ${year}
            </div>
        </div>
        <button onclick="watch(event)" data-id="${id}" class="watch-trailer">
            <i class="ph-fill ph-play"></i>
            Assistir trailer
        </button>  
    </div>
    `
}

async function watch(e){
    try{
        const { results } = await fetch(`https://api.themoviedb.org/3/movie/${e.currentTarget.dataset.id}/videos`, options)
            .then(response => response.json())

        const youtubeVideo = results.find(v => v.site === 'YouTube' & v.type === 'Trailer')
        window.open( `https://youtube.com/watch?v=${youtubeVideo.key}`, 'blank')

    } catch (err) {
        console.log(err)
    }
}

function select3Videos(results) {
    const random = () => Math.floor(Math.random()*results.length)

    let selectedVideos = new Set();
    while(selectedVideos.size < 3){
        selectedVideos.add(results[random()].id)
    }

    return [...selectedVideos]
}

async function getMoreInfo(id){
    try{
        return await fetch(`https://api.themoviedb.org/3/movie/${id}`, options)
            .then(response => response.json())
    } catch (err) {
        console.log(err)
    }
}

function minutesToHourMinutesAndSeconds(minutes){
    const date = new Date(null)
    date.setMinutes(minutes)
    return date.toISOString().slice(11,19)
}

const getMovies = async () => {
    try{
        return await fetch("https://api.themoviedb.org/3/movie/popular", options)
            .then(response => response.json())
    } catch ( err ) {
        console.log(err)
    }
}

async function start(){

   const { results } = await getMovies() 
   const best3 = select3Videos(results).map(async m => {
      const info = await getMoreInfo(m)
      const props = {
        id: info.id,
        title: info.title,
        stars: Number(info.vote_average).toFixed(1),
        image: info.poster_path,
        time: minutesToHourMinutesAndSeconds(info.runtime), 
        year: info.release_date.slice(0, 4),
      }
      return createMovieLayout(props)
    
   })

   const output = await Promise.all(best3)

   document.querySelector('.movies').innerHTML = output.join("")
}

start()