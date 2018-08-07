$(function () {
  //表单校验
  $('#form').bootstrapValidator({
    //输入是否准确的提示
    feedbackIcons: {
      valid: 'glyphicon glyphicon-heart',
      invalid: 'glyphicon glyphicon-remove',
      validating: 'glyphicon glyphicon-refresh'
    },
    fields: {
      //用户名校验
      username: {
        validators: {
          notEmpty: {
            message: '用户名不能为空'
          },
          //长度校验
          stringLength: {
            min: 2,
            max: 10,
            message: '用户名长度必须在2到6之间'
          },
          callback: {
            message: '用户名不存在',
          }
        }
      },
      //密码校验
      password: {
        validators: {
          notEmpty: {
            message: '密码不能为空'
          },
          stringLength: {
            min: 6,
            max: 12,
            message: '密码长度必须在6到12之间'
          },
          callback: {
            message: '密码错误',
          }
        }
      }
    }
  })

  //如果表单校验成功,阻止summit的默认行为
  $("#form").on('success.form.bv', function (e) {
    e.preventDefault();
    //使用ajax提交逻辑
    $.ajax({
      type: 'post',
      url: '/employee/employeeLogin',
      dateType: 'json',
      data: $('#form').serialize(),
      success: function (info) {
        console.log(info);
        if (info.error === 1000) {
          // 输入错误弹出错误信息
          $('#form').data('bootstrapValidator').updateStatus('username', 'INVALID', 'callback');
        }
        if (info.error === 1001) {
          $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback');
        }
        if (info.success) {
          location.href = 'index.html';
        }
      }
    })
  });

  //点击重置按钮,重置表单 传true表示全部重置,但是因为reset本身有重置的功能,所以不用传
  $("[type='reset']").click(function(){
    $('#form').data('bootstrapValidator').resetForm();
  })
})


