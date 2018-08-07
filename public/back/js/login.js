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
            message:'密码长度必须在6到12之间'
          }
        }
      }
    }
  })
})