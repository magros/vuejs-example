import config from './config'
const apiKey = config.apiKey


function getArtists(country) {
  const URL = `https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=${country}&api_key=${apiKey}&format=json`
  return fetch(URL)
      .then(res => res.json())
      .then(json => json.topartists.artist)
}
export default {getArtists}
