<template>
  <a-layout-content class="knife4j-body-content">
    <a-row class="markdown-body editormd-preview-container" v-if="this.settings.enableHomeCustom">
      <Markdown :source="settings.homeCustomLocation" />
    </a-row>
    <a-row v-else>
      <a-col :span="24">
        <div class="title">
          <h2>{{ swaggerCurrentInstance.title }}</h2>
        </div>
        <div class="description">
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.description')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.description" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.author')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.contact" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.version')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.version" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.host')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.host" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.basePath')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.basePath" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.serviceUrl')"></h4>
            </a-col>
            <a-col :span="15">
              <a :href="swaggerCurrentInstance.termsOfService" target="_blank">{{ swaggerCurrentInstance.termsOfService }}</a>
              <!-- <span v-html="swaggerCurrentInstance.termsOfService" /> -->
            </a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.groupName')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.name" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.groupUrl')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.url" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.groupLocation')"></h4>
            </a-col>
            <a-col :span="15"><span v-html="swaggerCurrentInstance.location" /></a-col>
          </a-row>
          <a-divider class="divider" />
          <a-row class="content-line">
            <a-col :span="5">
              <h4 v-html="$t('homePage.apiCountNumber')"></h4>
            </a-col>
            <a-col :span="15">
              <a-row class="content-line-count" v-for="param in swaggerCurrentInstance.pathArrs" :key="param.method">
                <a-col :span="3">
                  {{ param.method }}
                </a-col>
                <a-col :span="2">
                  <a-tag color="#108ee9">{{ param.count }}</a-tag>
                </a-col>
                <a-divider class="divider-count" />
              </a-row>
            </a-col>
          </a-row>
        </div>
      </a-col>
    </a-row>

  </a-layout-content>
</template>
<script>
export default {
  props: {
    data: {
      type: Object
    }
  },
  components: {
    "Markdown": () => import('@/components/Markdown')
  },
  computed: {
    swaggerCurrentInstance() {
      return this.$store.state.globals.swaggerCurrentInstance;
    },
    settings() {
      return this.$store.state.globals.settings;
    }

  },
  data() {
    return {
      title: "knife4j"
    };
  },
  created() {
    // console.log(this.settings);
    // console("子组件渲染");
    // console(this.data);
  }
};
</script>
<style scoped>
.content-line {
  height: 25px;
  line-height: 25px;
}

.content-line-count {
  height: 35px;
  line-height: 35px;
}

.title {
  text-align: center;
  width: 80%;
  margin: 5px auto;
}

.description {
  width: 90%;
  margin: 15px auto;
}

.divider {
  margin: 4px 0;
}

.divider-count {
  margin: 8px 0;
}
</style>
