<template>
  <!-- <iframe src="http:/www.ihaunglimin.com" class="iframe" ref="iframe"></iframe> -->
  <iframe :src="urlPath" class="iframe" ref="iframe"></iframe>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
export default {
  name: "nxframe",
  data() {
    return {
      urlPath: this.getUrlPath() // iframe src 路径
    };
  },
  created() {
    console.log(this.$route);
    NProgress.configure({ showSpinner: false });
  },
  mounted() {
    this.load();
    this.resize();
  },
  watch: {
    $route: function() {
      this.load();
    }
  },
  components: {
    ...mapGetters(["tagList"]),
    tagListNum: function() {
      return this.tagList.length !== 0;
    },
    ...mapState({
      name: state => state.user.name
    })
  },
  methods: {
    // 显示等待框
    show() {
      NProgress.start();
    },
    // 隐藏等待狂
    hide() {
      NProgress.done();
    },
    // 加载浏览器窗口变化自适应
    resize() {
      window.onresize = () => {
        this.iframeInit();
      };
    },
    // 加载组件
    load() {
      this.show();
      let time = 3;
      const timeFunc = setInterval(() => {
        time--;
        if (time === 0) {
          this.hide();
          clearInterval(timeFunc);
        }
      }, 1000);
      this.iframeInit();
    },
    // iframe窗口初始化
    iframeInit() {
      const iframe = this.$refs.iframe;
      const clientHeight = document.documentElement.clientHeight - 100;
      iframe.style.height = `${clientHeight}px`;
      if (iframe.attachEvent) {
        iframe.attachEvent("onload", () => {
          this.hide();
        });
      } else {
        iframe.onload = () => {
          this.hide();
        };
      }
    },
    getUrlPath: function() {
      // 获取 iframe src 路径
      let url = window.location.href;
      console.log("url:" + url);
      if (url.indexOf("myhttp/") >= 0) {
        url = "http://" + url.split("myhttp/")[1];
      }
      if (url.indexOf("myhttps/") >= 0) {
        console.log(url.split("myhttps/")[1]);
        url = "https://" + url.split("myhttps/")[1];
      }
      console.log(url);
      return url;
    }
  }
};
</script>

<style lang="scss">
.iframe {
  width: 100%;
  height: 100%;
  border: 0;
  overflow: hidden;
  box-sizing: border-box;
}
</style>