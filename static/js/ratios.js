/*
ratios.html相应逻辑
*/
var dd//debug
var ratios
var tab
function plus(){
  var trs = tab[0].getElementsByTagName('tr')
  if (trs.length>ratios.length) {
    newLine(trs.length-1,0)
  }else {
    newLine(trs.length-1,ratios[trs.length-1])
  }
  $('#levels').val(trs.length-2)
}
function minus(){
  var trs = tab[0].getElementsByTagName('tr')
  if (trs.length<=1) return
  trs[trs.length-1].remove()
  $('#levels').val(trs.length-2)
}
function updateStatus(t){
  $('#updateall').prop('disabled',!$('#syncall').is(":checked"))
}
function updateData(){
  var trs = tab[0].getElementsByTagName('tr')
  ratios = new Array(trs.length-1)
  for (i=1;i<trs.length;i++){
    ratios[i-1]=trs[i].children[1].children[0].value
  }
}
function newLine(index,row){
  var tr = $("<tr></tr>");
  //数据列
  var td = $("<td>" + index + "</td>");
  td.appendTo(tr)
  td = $("<td><input data-index='" + index + "'style='width:50px' class='text-right' type='text' onkeyup=\"value=value.replace(/[^\\d.]/g,'')\" name='ratio' value='" + row*100 + "'>%</td>");
  td.appendTo(tr)
  tr.appendTo(tab);
}
function showDailog(data){
  ratios = data.ratios
  $('#levels').val(ratios.length-1)
  tab = $("#table-result")
  tab.empty()
  tr = $("<tr><th>级</th><th>分成比例</th></tr>")
  tr.appendTo(tab)
  $.each(ratios, function (index, row) {
    newLine(index,row)
  });
}
$(document).ready(
  function() {
    $.ajax({
      type: "GET",
      url: "/apis/getratio",
      // data: form.serialize(),
      dataType: "json",
      //complete: function() {
        //queryButton.button('reset');
      //},
      error: function(xhr, status, error) {
        alert("系统错误：" + error);
      },
      success: function (data) {
        var className,label
        switch (data.respCode){
        case "200":
          showDailog(data)
          return
        default:
          label=data.respCode+" "+data.respMsg
          className='alert alert-danger'
          showAlert(label,className,4000);
        }
      }
    });

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
        success: function(data){
          switch (data.respCode){
          case "200":
            className='alert alert-success'
            label=data.respCode+data.respMsg
            updateData()
            break;
          default:
            label=data.respCode+" "+data.respMsg
            className='alert alert-danger'
          }
          showAlert(label,className,4000);

        }
      });
    });
});
