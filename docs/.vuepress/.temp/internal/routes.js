export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"潘思潼"} }],
  ["/posts/create.html", { loader: () => import(/* webpackChunkName: "posts_create.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/posts/create.html.js"), meta: {"_blog":{"title":"","author":"","date":"2022-01-31T00:00:00.000Z","category":["History"],"tag":["Create"],"excerpt":"<p>今天是这个博客创建的日子</p>\n"},"title":""} }],
  ["/posts/sticky.html", { loader: () => import(/* webpackChunkName: "posts_sticky.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/posts/sticky.html.js"), meta: {"_blog":{"title":"A DEMO","author":"","date":"2021-01-01T00:00:00.000Z","category":["Category Sticky"],"tag":["tag E"],"excerpt":"<p>DEMO</p>"},"title":"A DEMO"} }],
  ["/posts/test.html", { loader: () => import(/* webpackChunkName: "posts_test.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/posts/test.html.js"), meta: {"_blog":{"title":"测试文章","author":"","date":"2022-01-01T00:00:00.000Z","category":["Test Article"],"tag":["Test"],"excerpt":"\n"},"title":"测试文章"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/category/", { loader: () => import(/* webpackChunkName: "category_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/category/index.html.js"), meta: {"title":"Categories"} }],
  ["/category/history/", { loader: () => import(/* webpackChunkName: "category_history_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/category/history/index.html.js"), meta: {"title":"Category History"} }],
  ["/category/category-sticky/", { loader: () => import(/* webpackChunkName: "category_category-sticky_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/category/category-sticky/index.html.js"), meta: {"title":"Category Category Sticky"} }],
  ["/category/test-article/", { loader: () => import(/* webpackChunkName: "category_test-article_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/category/test-article/index.html.js"), meta: {"title":"Category Test Article"} }],
  ["/category/%E5%85%B3%E4%BA%8E/", { loader: () => import(/* webpackChunkName: "category_关于_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/category/关于/index.html.js"), meta: {"title":"Category 关于"} }],
  ["/tag/", { loader: () => import(/* webpackChunkName: "tag_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/tag/index.html.js"), meta: {"title":"Tags"} }],
  ["/tag/create/", { loader: () => import(/* webpackChunkName: "tag_create_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/tag/create/index.html.js"), meta: {"title":"Tag Create"} }],
  ["/tag/tag-e/", { loader: () => import(/* webpackChunkName: "tag_tag-e_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/tag/tag-e/index.html.js"), meta: {"title":"Tag tag E"} }],
  ["/tag/test/", { loader: () => import(/* webpackChunkName: "tag_test_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/tag/test/index.html.js"), meta: {"title":"Tag Test"} }],
  ["/tag/%E5%85%B3%E4%BA%8E/", { loader: () => import(/* webpackChunkName: "tag_关于_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/tag/关于/index.html.js"), meta: {"title":"Tag 关于"} }],
  ["/article/", { loader: () => import(/* webpackChunkName: "article_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/article/index.html.js"), meta: {"title":"Articles"} }],
  ["/timeline/", { loader: () => import(/* webpackChunkName: "timeline_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/timeline/index.html.js"), meta: {"title":"Timeline"} }],
  ["/posts/about/", { loader: () => import(/* webpackChunkName: "posts_about_index.html" */"D:/Users/Natsumi/Documents/GitHub/littlecat/docs/.vuepress/.temp/pages/posts/about/index.html.js"), meta: {"_blog":{"title":"关于潘思潼","author":"","date":"2025-05-04T00:00:00.000Z","category":["关于"],"tag":["关于"],"excerpt":"\n<h2>喜好</h2>\n<p>喜欢谈恋爱！喜欢被人爱的感觉！喜欢TS讨厌男娘！郭楠滚！</p>\n<h2>情感经历</h2>\n<p>从初二开始谈了第一个男朋友，一直到高中目前已经谈过十数个男朋友啦！</p>\n<h2>学校</h2>\n<p>我目前就读于南宁市第二中学国际部。\n已从南宁市天桃实验学校(小学),南宁二中初中部毕业</p>\n<h2>家庭</h2>\n<p>母亲目前在南宁市第一人民医院就职。年入50W</p>\n<h2>社交帐号</h2>\n<p>欢迎来以下平台关注我！</p>\n<p><a href=\"https://www.douyin.com/user/MS4wLjABAAAAdIsUoRvOHRAAIJHDZ9Cm3decTF4k9QxDiZ8_GVStnmg\" target=\"_blank\" rel=\"noopener noreferrer\">抖音</a></p>"},"title":"关于潘思潼"} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
