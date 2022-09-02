<template>
  <div id="app">
    <!-- 主体 -->
    <Header></Header>
    <router-view class="router-view" />

    <!-- 播放器 -->
    <audio ref="mmPlayer"></audio>
  </div>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
import { getPlaylistDetail } from '@/api'
import { defaultSheetId } from '@/config'

import { createTopList } from '@/utils/song'
import Header from '@/components/Header'

export default {
  name: 'App',
  components: {
    Header,
  },
  created() {
    // 获取正在播放列表
    getPlaylistDetail(defaultSheetId).then(playlist => {
      const list = playlist.tracks.slice(0, 100)
      this.setPlaylist({ list })
    })

    // 设置audio元素
    this.$nextTick(() => {
      this.setAudioele(this.$refs.mmPlayer)
    })
  },
  methods: {
    // 歌曲数据处理
    _formatSongs(list) {
      let ret = []
      list.forEach(item => {
        const musicData = item
        if (musicData.id) {
          ret.push(createTopList(musicData))
        }
      })
      return ret
    },
    ...mapMutations({
      setAudioele: 'SET_AUDIOELE'
    }),
    ...mapActions(['setPlaylist'])
  }

}
</script>

<style lang="less">
#app {
  position: relative;
  width: 100%;
  height: 100%;
  color: @text_color;
  font-size: @font_size_medium;

  .router-view {
    width: 100%;
    height: 100%;
  }

  audio {
    position: fixed;
  }
}
</style>
