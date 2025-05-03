import comp from "D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/posts/archive1.html.vue"
const data = JSON.parse("{\"path\":\"/posts/archive1.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2022-01-31T00:00:00.000Z\",\"category\":[\"History\"],\"tag\":[\"Create\"],\"archive\":true},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/archive1.md\",\"excerpt\":\"<p>今天是这个博客创建的日子</p>\\n\"}")
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
