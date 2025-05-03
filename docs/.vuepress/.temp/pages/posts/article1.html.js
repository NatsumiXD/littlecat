import comp from "D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/posts/article1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/article1.html\",\"title\":\"测试文章\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-01T00:00:00.000Z\",\"category\":[\"Test Article\"],\"tag\":[\"Test\"]},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/article1.md\",\"excerpt\":\"\\n\"}")
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
