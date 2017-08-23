/*newmember.js
newmember.html相应逻辑
*/
var dd//debug
function refreshWithID(t){
  refreshWithIDText(t.getAttribute("data-id"))
}
function refreshWithIDText(id){
  $('#id').val( id)
  $('#idconsume').val( id)
  $('#form-query').submit()
}

function hideAll(bList){
  if ( bList==true ){
    $('#member-list').hide();
  }
}

function fillMember(data){
  $('#memberphone')[0].innerText=data.member.phone
  $('#membername')[0].innerText=data.member.name
  $('#membercardno')[0].innerText=data.member.cardNo
  $('#validamount')[0].innerText=data.amount
  $('#total')[0].innerText=data.total
  $('#idconsume').val( data.member.id)
  calculatePayAmount()
}

function calculatePayAmount(){
  var checked=$('#usepoint')[0].checked
  if (checked){
    var  point,a
    a = parseFloat($('#amount')[0].value)

    point = parseFloat($('#validamount')[0].innerText)
    if (isNaN(point)){
      point=0
    }
    if (point>a){
      $('#payamount')[0].value=0
    }else{
      $('#payamount')[0].value=a-point
    }
  }else {
    $('#payamount')[0].value=$('#amount')[0].value
  }
}
function getBack(data) {
  dd=$('#id').val()
  $('#id').val("")
  hideAll(dd=="")
  switch (data.respCode){
  case "200":
    fillMember(data)
    //$('#memberinfo').show()
    break;
  case "300":
    showTables(data,refreshWithID)
    return
  default:
    var className,label
    label=data.respCode+" "+data.respMsg
    className='alert alert-danger'
    showAlert(label,className,4000);
  }
}
$(document).ready(
  function() {
    initQuery();

    $('#usepoint').change(function(){calculatePayAmount()});
    $('#amount').change(function(){calculatePayAmount()});
    var form1 = $('#form-consume');
    form1.submit(
    function(event) {
    event.preventDefault();
    b = !($('#idconsume').val().length>5)//必须用!(>)可以自动处理undefined
    b = b||!(parseFloat($('#amount')[0].value)>=0.01)//必须用!(>=)可以自动处理NaN
    if (b){
      var alt = $('#msgalert')[0];
      alt.innerText='无效参数'
      alt.className='alert alert-danger'
      $('#msgalert').show()
      return
    }
    var queryButton = $('#btn-consume');
    queryButton.button('Loading');
    $.ajax({
      type: "GET",
      url: form1.attr('action'),
      data: form1.serialize(),
      dataType: "json",
      complete: function() {
        queryButton.button('reset');
      },
      error: function(xhr, status, error) {
        alert("系统错误：" + error);
      },
      success: function (data) {
        var className,label
        dd=$('#id').val()
        $('#id').val("")
        hideAll(dd=="")
        switch (data.respCode){
        case "200":
          className='alert alert-success'
          label = "消费记录添加成功,使用余额"+data.pointused+",支付"+data.payamount
          if (data.pointused!="0"){
            refreshWithIDText(data.id)
          }
          break;
        case "300":
          showTables(data,refreshWithID)
          return
        default:
          label=data.respCode+" "+data.respMsg
          className='alert alert-danger'
        }
        showAlert(label,className,4000);
      }
    });
  });
});
//$('#phone').focus()
