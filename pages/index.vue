<template>
  <section class="container fixed-height">
    <div class="columns">
      <div class="column is-4-desktop is-hidden-mobile">
        <div class="section">
          <b-menu>
            <b-menu-list label="Menu">
              <b-menu-item label="カンバン一覧" />
              <b-menu-item label="部屋" />
            </b-menu-list>
          </b-menu>
        </div>
      </div>
      <div class="column is-4">
        <Character ref="Character"
            @click="igniteTouchEvent()"
            height="100%"
            :emote="currentEmote"
            :voicename="voicename" />
      </div>
    </div>
  </section>
</template>

<script>
import Card from '~/components/Card'
import Character from '~/components/Character'
export default {
  name: 'HomePage',
  data() {
    return {
      currentEmote: 'normal',
      voicename: '',
    }
  },
  components: {
    Card,
    Character,
  },
  methods: {
    igniteTouchEvent() {
      this.voicename = 'akane_greeting'
      this.$refs.Character.playVoice()
    }
  }
}
</script>

<style lang="scss" scoped>
section {
  perspective: 1000px;
  .columns {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 1rem;
    padding-bottom: 0;
    .column {
      height: 100%;
      padding-bottom: 0;
    }
    .section {
      transform: rotate3d(0, 1, 0, 20deg);
      background: rgba($color: $base-color, $alpha: 0.2);
      filter: drop-shadow(2px 2px 0 $base-color);
      .menu-label {
        padding: 0.25rem;
        background: $accent-color;
        color: $main-color;
      }
      li{
        border-left: 5px solid $accent-color;
        border-bottom: solid 1px $accent-color;
        & ::v-deep a {
          overflow: hidden;
          color: white;
          transition: 0.5s;
          background-color: transparent;
          position: relative;
          &:before {
            content: "";
            z-index: -1;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: -100%;
            background-color: $accent-color;
            transition: 0.2s;
          }
        &:hover:before {
          left: 0;
        }
        }
      }
    }
    img {
      filter: drop-shadow(2px 0px 0px $accent-color) drop-shadow(2px 0px 0px $base-color);
    }
  }
}
.card {
  transform: rotate3d(0, 30, 0);
  transform: rotate3d(0, 1, 0, 
30deg
);
}
</style>
