/*newmember.js
newmember.html相应逻辑
*/
var dd//debug
function onclick(t){
  $('#list-title')[0].innerText=t.getElementsByTagName("td")[0].innerText
  $('#id').val( t.getAttribute("data-id"))
  $('#form-query').submit()
}
function hideAll(bList){
  //$('#member-info');.hide()
  if ( bList==true ){
    $('#member-list').hide();
  }
}
function fillHistory(data){
  $('#list-title')[0].innerText=data.respMsg
  var tab = $('#table-history');
  var i=0;
  tab.empty()
  tr = $("<tr><th>来源姓名</th><th>金额</th><th>时间</th></tr>")
  tr.appendTo(tab)
  $.each(data.history, function (index, row) {
    var tr = $("<tr data-id='"+row.id+"'></tr>");
    //数据列
    var td = $("<td>" + row.name + "</td>");
    td.appendTo(tr)
    i += parseFloat(row.amount,10)
    td = $("<td>" + row.amount + "</td>");
    td.appendTo(tr)
    td = $("<td>" + row.time.substring(0,16).replace(/T/," ") + "</td>");
    td.appendTo(tr)
    tr.appendTo(tab);
  });
  $('#list-amount')[0].innerText=i.toFixed(2)
  //$('#member-info').show()
}

function getBack(data){
  dd=$('#id').val()
  $('#id').val("")
  hideAll(dd=="")
  var className,label
  switch (data.respCode){
  case "200":
    fillHistory(data)
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
$(document).ready(function() {
  initQuery()

  dateStr = '<br/>\
<div class="row">\
<div class="col-xs-5">\
  <label>开始时间</label>\
  <div class="input-group">\
    <div class="input-group-addon">\
      <i class="fa fa-calendar"></i>\
    </div>\
    <input type="text" id="startdate" name="start" class="form-control" data-inputmask="\'alias\': \'yyyy/mm/dd\'" data-mask="">\
  </div>\
</div>\
<div class="col-xs-5">\
  <label>结束时间</label>\
  <div class="input-group">\
    <div class="input-group-addon">\
      <i class="fa fa-calendar"></i>\
    </div>\
    <input type="text" id="enddate" name="end" class="form-control" data-inputmask="\'alias\': \'yyyy/mm/dd\'" data-mask="">\
  </div>\
</div>\
</div>'
  dateHtml = $(dateStr)
  $('#form-query').append(dateHtml)
  {
      //Initialize Select2 Elements
      $(".select2").select2();

      //Datemask yyyy/dd/mm
      $("#datemask").inputmask("yyyy/mm/dd", {"placeholder": "yyyy/mm/dd"});
      //Datemask2 mm/dd/yyyy
      $("#datemask2").inputmask("mm/dd/yyyy", {"placeholder": "mm/dd/yyyy"});
      //Money Euro
      $("[data-mask]").inputmask();


    }
});
//$('#phone').focus()
