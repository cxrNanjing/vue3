<template>
  <div class="chat">
    <el-table :data="[{}]">
      <el-table-column>
        <template #default>
          <el-image
            style="width: 40px; height: 40px"
            :src="img"
            fit="cover"
            :preview-src-list="imgs"
          >
            >
          </el-image>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Chat',
  components: {},
  setup() {
    const img = ref(
      'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
    )
    const imgs = ref([
      'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
      'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
    ])
    return {
      img,
      imgs
    }
  }
})
</script>

<style lang="less"></style>
