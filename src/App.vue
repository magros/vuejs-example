<template lang="pug">

#app
  img(src='dist/logo.png')
  h1 PlatziMusic
  select(v-model="selectedCountry")
    option(v-for="country in countries" :value="country.value") {{ country.name }}
  spinner(v-show="loading")
  ul
    artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
    // li(v-for="artist in artists") {{ artist.name }}
</template>

<script>
import api from './api'
import Artist from './components/Artist.vue'
import Spinner from './components/Spinner.vue'

export default {
    name: 'app',
    data() {
        return {
          artists: [],
          countries: [
            {name: 'Argentina', value:'argentina'},
            {name: 'Colombia', value:'colombia'},
            {name: 'España', value:'spain'},
            {name: 'México', value:'mexico'}
          ],
          selectedCountry: 'mexico',
          loading: true
        }
    },
    methods: {
      refreshArtists(){
        const _self = this
        this.loading = true
        this.artists = []
        api.getArtists(this.selectedCountry)
         .then(function(artists){
           _self.artists = artists
           _self.loading = false
        })
      }
    },
    components: {
      Artist,
      Spinner
    },
    mounted: function() {
      this.refreshArtists()
    },
    watch: {
      selectedCountry(){
        this.refreshArtists()
      }
    }
}

</script>


<style lang="stylus">
  #app
      font-family 'Avenir', Helvetica, Arial, sans-serif
      -webkit-font-smoothing antialiased
      -moz-osx-font-smoothing grayscale
      text-align center
      color #2c3e50
      margin-top 60px

  h1,
  h2
      font-weight normal

  ul
      list-style-type none
      padding 0

  li
      display inline-block
      margin 0 10px

  a
      color #42b983
</style>
