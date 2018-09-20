import config from './config'
const apiKey = config.apiKey

const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=mexico&api_key=${apiKey}&format=json`

function getArtists() {
  return fetch(URL)
      .then(res => res.json())
      .then(json => json.topartists.artist)
}
export default {getArtists}
