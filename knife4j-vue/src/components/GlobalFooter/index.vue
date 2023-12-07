<template>
  <div class="globalFooter">
    <a-row v-if="settings.enableFooterCustom">
      <Markdown v-if="settings.enableFooterCustom" :source="settings.footerCustomContent" />
    </a-row>
    <a-row v-else-if="settings.enableFooter">
      <div class="copyright">Copyright
        <a-icon type="copyright" /> 2018-2024 芸爱科技（深圳）有限公司 
      </div>
      <div class="copyright1">
        粤ICP备18021055号-2，关于具体使用条款，<a target="_blank" style="color: red;" href="https://wiki.yunai.org">点我了解更多</a>
      </div>
    </a-row>
  </div>
</template>
<script>
export default {
  name: "GlobalFooter",
  props: {
    links: {
      type: Array,
      default: () => {
        [];
      }
    }
  },
  components: {
    "Markdown": () => import('@/components/Markdown')
  },
  computed: {
    settings() {
      return this.$store.state.globals.settings;
    }
  },
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
@import "./index.less";
</style>

