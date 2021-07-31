<template>
    <div>
        <div class="bullet-point" v-for="(bulletPoint, index) in points" :key="index">
            <span class="bullet-point--point">
                <bullet-point height="12px" width="12px"/>
            </span>
            <paragraph size="small" :text="bulletPoint"/>
        </div>
    </div>
</template>

<script>
import Paragraph from '../Paragraph';
import BulletPoint from '../../assets/svg/BulletPoint.vue'

export default {
  name: 'BulletPoints',
  props: {
    points: Array,
  },
  components: {BulletPoint, Paragraph}
}
</script>

<style scoped>
.bullet-point {
    text-align: left;
    display: flex;
    justify-content: flex-start;
    font-weight: 300;
    align-items: center;
}
.bullet-point--point{
    padding-right: 8px;
}
</style>