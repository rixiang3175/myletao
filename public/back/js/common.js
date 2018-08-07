$(function(){
  //进度条
// //beforeSend回调函数
// 2. ajaxSend在beforeSend回调函数之后触发
// //success回调函数
// //error
// 4. ajaxError在error回调函数之后触发
// //complete
// 5. ajaxComplete在complete回调函数之后触发
// 6. ajaxStop在ajax请求结束时触发

  //   1. ajaxStart在开始一个ajax请求时触发
  $(document).ajaxStart(function () {
    NProgress.start();
  })
  // 3. ajaxSuccess在success回调函数之后触发
   setInterval(function(){
    $(document).ajaxSuccess(function () {
      NProgress.done();
    })
   },3000)

   
})