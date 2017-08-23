/*newmember.js
newmember.html相应逻辑
*/
var dd//debug
function onclick(t){
  dd=$('#refname')
  $('#refname')[0].innerText=t.getElementsByTagName("td")[0].innerText
  $('#id').val( t.getAttribute("data-id"))
  $('#form-query').submit()
}
function hideAll(bList){
  var m = $('#memberinfo');
  m.hide()
  if ( bList==true ){
    $('#member-list').hide();
  }
  //$('refname').innerText=''
}
function fillMember(data){
  $('#refname')[0].innerText=data.respMsg
  var tab = $('#table-referenced');
  tab.empty()
  tr = $("<tr><th>姓名</th><th>电话</th><th>卡号</th><th>加入时间</th></tr>")
  tr.appendTo(tab)
  $.each(data.members, function (index, row) {
    var tr = $("<tr data-id='"+row.id+"'></tr>");
    //数据列
    var td = $("<td>" + row.name + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.phone + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.cardNo + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.createTime + "</td>");
    td.appendTo(tr)
    tr.appendTo(tab);
  });
  $('#member-info').show()
}

function getBack(data){
  dd=$('#id').val()
  $('#id').val("")
  hideAll(dd=="")
  var className,label
  switch (data.respCode){
  case "200":
  case "301":
    fillMember(data)
    $('#memberinfo').show()
    break;
  case "300":
    showTables(data,onclick)
    return
  default:
    label=data.respCode+" "+data.respMsg
    className='alert alert-danger'
    showAlert(label,className,4000);
  }
}
$(document).ready(initQuery);
//$('#phone').focus()
