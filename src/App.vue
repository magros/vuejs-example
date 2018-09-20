<template lang="pug">

#app
  img(src='./assets/logo.png')
  h1 PlatziMusic
  ul
    artist(v-for="artist in artists" v-bind:artist="artist" v-bind:key="artist.mbid")
    // li(v-for="artist in artists") {{ artist.name }}
</template>

<script>
import api from './api'
import Artist from './components/Artist.vue'

export default {
    name: 'app',
    data() {
        return {
          artists: [ ]
        }
    },
    components: {
      Artist
    },
    mounted: function() {
      const _self = this
      api.getArtists()
       .then(function(artists){
         _self.artists = artists
      })
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
