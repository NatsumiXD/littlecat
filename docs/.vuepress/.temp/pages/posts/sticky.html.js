import comp from "D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/posts/sticky.html.vue"
const data = JSON.parse("{\"path\":\"/posts/sticky.html\",\"title\":\"A DEMO\",\"lang\":\"zh-CN\",\"frontmatter\":{\"date\":\"2021-01-01T00:00:00.000Z\",\"category\":[\"Category Sticky\"],\"tag\":[\"tag E\"],\"sticky\":false,\"excerpt\":\"<p>DEMO</p>\"},\"headers\":[],\"git\":{},\"filePathRelative\":\"posts/sticky.md\"}")
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
