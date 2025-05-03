import comp from "D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/tag/test/index.html.vue"
const data = JSON.parse("{\"path\":\"/tag/test/\",\"title\":\"Tag Test\",\"lang\":\"zh-CN\",\"frontmatter\":{\"title\":\"Tag Test\",\"sidebar\":false,\"blog\":{\"type\":\"category\",\"name\":\"Test\",\"key\":\"tag\"},\"layout\":\"Tag\"},\"headers\":[],\"git\":{},\"filePathRelative\":null,\"excerpt\":\"\"}")
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
