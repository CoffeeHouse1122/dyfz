/* ======================= axios start ======================= **/
const $axios = axios.create({
    // baseURL: 'http://casa.herogame.com',
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    timeout: 30000,
    transformRequest: [function (data) {
      return Qs.stringify(data)
    }]
  })
  
  // request拦截器
  $axios.interceptors.request.use(
    config => {
      return config
    },
    error => {
      Promise.reject(error)
    })
  
  // respone拦截器
  $axios.interceptors.response.use(
    response => {
      const res = response.data
      return res
    },
    error => {
      return Promise.reject(error)
    }
  )
  /* ======================= axios end ======================= **/
// 顶部导航
$(".header-menuBtn").click(function() {
  if($(".header-nav").hasClass("cur")) {
    $(".header-nav").removeClass("cur")
  } else {
    $(".header-nav").addClass("cur")
  }
})
// 左侧分类切换
$(".com-left-con li").click(function() {
  var i = $(this).index()
  $(".com-left-con li").eq(i).addClass("cur").siblings().removeClass("cur")
  $(".com-sideBar-con li").eq(i).addClass("cur").siblings().removeClass("cur")
})
$(".com-sideBar-con li").click(function() {
  var i = $(this).index()
  $(".com-left-con li").eq(i).addClass("cur").siblings().removeClass("cur")
  $(".com-sideBar-con li").eq(i).addClass("cur").siblings().removeClass("cur")
})

$(".com-sideBar-btn").click(function() {
  if($(".com-sideBar-mask").hasClass("cur")) {
    $(".com-sideBar-mask").removeClass("cur")
    $(".com-sideBar-con").removeClass("cur")
  } else {
    $(".com-sideBar-mask").addClass("cur")
    $(".com-sideBar-con").addClass("cur")
  }
})

$(".com-sideBar-mask").click(function() {
  $(".com-sideBar-mask").removeClass("cur")
  $(".com-sideBar-con").removeClass("cur")
})

// 产品二级分类切换
$(".pl-right-type li").click(function() {
  var i = $(this).index()
  $(".pl-right-type li").eq(i).addClass("cur").siblings().removeClass("cur")
})