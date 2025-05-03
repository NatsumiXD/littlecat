import comp from "D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"潘思潼\",\"lang\":\"zh-CN\",\"frontmatter\":{\"home\":true,\"title\":\"潘思潼\",\"heroImage\":\"./logo.jpg\",\"actions\":[{\"text\":\"从这开始\",\"link\":\"./article/\",\"type\":\"primary\"},{\"text\":\"关于我\",\"link\":\"./posts/about/\",\"type\":\"secondary\"}],\"features\":[{\"title\":\"我很喜欢谈恋爱！\",\"details\":\"我已经谈过不少恋爱啦！大概有数十次那么多吧！\"},{\"title\":\"我很可爱！\",\"details\":\"因为我确实很可爱！\"},{\"title\":\"爱好\",\"details\":\"喜欢打王者荣耀！（农批一个呀）\"}],\"footer\":\"该网站遵循CC3.0协议 | 版权所有 © 潘思潼\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
