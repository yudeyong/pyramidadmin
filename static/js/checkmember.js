/*newmember.js
newmember.html相应逻辑
*/
var dd//debug
function showTables(data){
  var m = $('#member-list');
  tab = $("#table-result")
  //$('#memberinfo').trigger('reset')
  tab.empty()
  tr = $("<tr><th>姓名</th><th>电话</th><th>卡号</th></tr>")
  tr.appendTo(tab)
  $.each(data.members, function (index, row) {
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
  m.show()

  $('#table-result tbody').on('click', 'tr', function(){
    $('#id').val( this.getAttribute("data-id"))
    $('#form-query').submit()
  });
}
function hideAll(bList){
  var m = $('#memberinfo');
  m.hide()
  if ( bList==true ){
    $('#member-list').hide();
  }
}
function fillMember(data){
  $('#member-id').val(data.member.id)
  $('#memberphone')[0].value=data.member.phone
  $('#membername')[0].value=data.member.name
  $('#membercardno')[0].value=data.member.cardNo
  $('#refphone')[0].innerText=data.reference.phone
  $('#refname')[0].innerText=data.reference.name
  $('#refcardno')[0].innerText=data.reference.cardNo
  $('#amount')[0].innerText=data.amount
  $('#total')[0].innerText=data.total
  $('#createtime')[0].innerText=data.member.createTime
}
function fillTable(data){
  tab = $("#table-result")
  tab.empty()
  tr = $("<tr><th>姓名</th><th>电话</th><th>卡号</th></tr>")
  tr.appendTo(tab)
  $.each(data.members, function (index, row) {
    dd = row
    //数据行
    var tr = $("<tr data-id='"+row.ID+"'></tr>");
    //数据列
    var td = $("<td>" + row.Name.String + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.Phone.String + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.CardNo.String + "</td>");
    td.appendTo(tr)
//    td = $("<td>" + row('Phone'] + "</td>");
    td.appendTo(tr)
    tr.appendTo(tab);
  });
}
function getBack(data) {
  dd=$('#id').val()
  $('#id').val("")
  hideAll(dd=="")
  switch (data.respCode){
  case "200":
    fillMember(data)
    $('#memberinfo').show()
    break;
  case "300":
  case "301":
    showTables(data)
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
    var form1 = $('#form-edit');
    form1.submit(
    function(event) {
    event.preventDefault();
    var queryButton = $('#btn-edit');
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
        switch (data.respCode){
        case "200":
          className='alert alert-success'
          break;
        default:
          className='alert alert-danger'
        }
        label=data.respCode+" "+data.respMsg
        showAlert(label,className,4000);
      }
    });
  });
});
//$('#phone').focus()
