/*newmember.js
newmember.html相应逻辑
*/
var dd//debug

function showDailog(data){
  var m = $('#modal-info');
  m.modal("show")
  $('#modal-title')[0].innerText=data.respMsg
  var id = $(data.respCode=="300"?'#id':'#refid')
  tab = $("#table-result")
  tab.empty()
  tr = $("<tr><th>姓名</th><th>电话</th><th>卡号</th></tr>")
  tr.appendTo(tab)
  $.each(data.members, function (index, row) {
    dd = row
    //数据行
    var tr = $("<tr data-id='"+row.id+"'></tr>");
    //数据列
    var td = $("<td>" + row.name + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.phone + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.cardNo + "</td>");
    td.appendTo(tr)
    tr.appendTo(tab);
  });

  $('#table-result tbody').on('click', 'tr', function(){
    var refid = $('#refid');
    refid.val(this.getAttribute("data-id"))
    $('#modal-info').modal('hide')
    $('#form-query').submit()
  });
}
$(document).ready(
  function() {
  var form = $('#form-query');
  form.submit(
    function(event) {
    event.preventDefault();

    var queryButton = $('#btn-query');
    queryButton.button('Loading');
    $.ajax({
      type: "GET",
      url: form.attr('action'),
      data: form.serialize(),
      dataType: "json",
      complete: function() {
        queryButton.button('reset');
      },
      error: function(xhr, status, error) {
        alert("系统错误：" + error);
      },
      success: function (data) {
        var className,label
        switch (data.respCode){
        case "200":
          className='alert alert-success'
          label=data.respCode+"添加成功"
          form.trigger('reset')
          $('#phone').focus()
          break;
        case "300":
        case "301":
          showDailog(data)
          return
        default:
          label=data.respCode+" "+data.respMsg
          className='alert alert-danger'
        }
        showAlert(label,className,4000);
//        $('#msgalert').show()
      }
    });
  });
});
$('#phone').focus()
