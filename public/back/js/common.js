$(function(){

  // 5.判断用户有没有登入,没有就回到登录框登录
  if(location.href.indexOf('login.html') == -1){
    $.ajax({
      type: 'get',
      url : '/employee/checkRootLogin',
      dataType: 'json',
      success : function(info){
        console.log(info);
        if (info.success){
          // 直接进入
        }
        if (info.error === 400){
          location.href = 'login.html';
        }
      }
    })
  }

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

   //点击分类管理,弹出二级菜单
   $('.category').click(function(){
     $('.child').stop().slideToggle();
   })

   //点击切换侧边栏
   $('.icon-menu').click(function(){
     $('.lt-aside').toggleClass('hidden-m')
     $('.top-bar').toggleClass('hidden-m')
     $('.lt-contain').toggleClass('hidden-m')
   })

  //  4.点击退出按钮,退出登入
  $('.btn-logout').click(function(){
    $.ajax({
      type:'get',
      url : '/employee/employeeLogout',
      dataType: 'json',
      success: function(info){
        // console.log(info)
        if (info.success){
          location.href = 'login.html';
        }
      }
    })
  })
  //模态框显示
  $('.icon-logout').click(function(){
    $('.logout').modal('show')
  })
})