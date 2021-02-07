<template>
  <div class="character" :style="{ height: height }" @click="igniteParentEvent()">
    <img src="/characters/akane/body.png" class="chara-body">
    <img :src="`/characters/akane/${curEmote}.png`" alt="" class="chara-emote">
    <img :src="`/characters/akane/${curLip}.png`" alt="" class="chara-mouse">
  </div>
</template>

<script>
let audioCtx = null
let audioSrc = null
let analyzer = null
let sampleInterval = null
let prevSpec = 0
export default {
  props: {
    height: {
      type: String,
      required: false,
      default: '80vh'
    },
    emote: {
      type: String,
      required: true
    },
    voicename: {
      type: String,
      required: false,
      default: ''
    }
  },
  data() {
    return {
      curEmote: this.emote,
      isPlayingVoice: false,
      curLip: 'close',
    }
  },
  methods: {
    igniteParentEvent() {
      this.$emit('click')
    },
    /**
     * 音声をAudioBufferに変換する
     * @param {string} voicepath - 再生したい音声ファイルパス
     * @return {AudioBuffer} - 音声ファイルを変換したBuffer
     */
    async convertAudio2Buffer(voicepath) {
      audioCtx = new AudioContext()
      const voice = await fetch(voicepath)
      const arrayBuffer = await voice.arrayBuffer()
      const result = await audioCtx.decodeAudioData(arrayBuffer)

      return result
    },
    /**
     * 音声解析ノードと入力ノードを出力ノードにつなげる
     * @param {audioBuffer} - 出力するAudioBuffer
     */
    connectNodes(audioBuffer) {
      audioSrc = new AudioBufferSourceNode(audioCtx, { buffer: audioBuffer })
      analyzer = new AnalyserNode(audioCtx)
      analyzer.fftSize = 512
      audioSrc.connect(analyzer).connect(audioCtx.destination)
    },
    /**
     * リップシンクを行う
     * @param {array} - 音声解析で取得したスペクトル
     */
    syncLip(spectrums) {
      const totalSpec = spectrums.reduce(function(a, x) {return a+x})
      if (totalSpec > prevSpec) {
        this.curLip = 'open2'
      } else if (prevSpec - totalSpec < 1000) {
        this.curLip = 'open'
      } else {
        this.curLip = 'close'
      }
      prevSpec = totalSpec
    },
    /**
     * 音声を再生する
     * @param {string} - 再生音声のファイルパス
     */
    async playVoice() {
      if (this.voicename == '' || this.isPlayingVoice)
        return

      const VOICE_PATH = `/voices/akane/${ this.voicename }.mp3`
      const audioBuffer = await this.convertAudio2Buffer(VOICE_PATH)
      this.connectNodes(audioBuffer)
      this.isPlayingVoice = true
      audioSrc.start()

      sampleInterval = setInterval(() => {
        let spec = new Uint8Array(analyzer.fftSize)
        analyzer.getByteFrequencyData(spec)
        this.syncLip(spec)
      }, 50)

      audioSrc.onended = () => {
        clearInterval(sampleInterval)
        audioSrc = null
        audioCtx.close()
        audioCtx = null
        prevSpec = 0
        this.isPlayingVoice = false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.character {
  
  position: relative;
  height: 100%;
  width: 100%;
  img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    max-width: initial;
    &.chara-body {
      z-index: 0;
      filter: drop-shadow(4px 4px 0px $accent-color) drop-shadow(4px 4px 0px $base-color);
    }
    &.chara-emote {
      z-index: 1;
    }
    &.chara-mouse {
      z-index: 2;
    }
  }
}
</style>