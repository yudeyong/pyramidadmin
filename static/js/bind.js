/*newmember.js
newmember.html相应逻辑
*/
var dd//debug
function query(id){
  if (id.length>0){
    $('#id').val( id)
    $('#form-query').submit()
  }else{
    $('#modal-search').modal("show")
  }
}



function showRefTable(data){
  var m = $('#member-list-ref');
  tab = $("#table-result-ref")
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

  $('#table-result-ref tbody').on('click', 'tr', function(){
    //dd=this;
    var td = this.getElementsByTagName('td')

    fillRef(this.getAttribute("data-id"),td[1].innerText,td[0].innerText)
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
  $('#reference-id')[0].value=data.reference.id
  $('#btn-bind')[0].disabled=data.reference.id.length>0
  $('#refphone')[0].innerText=data.reference.phone
  $('#refname')[0].innerText=data.reference.name
//  $('#refcardno')[0].innerText=data.reference.cardNo
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
    showRefTable(data)
    return
  default:
    var className,label
    label=data.respCode+" "+data.respMsg
    className='alert alert-danger'
    showAlert(label,className,4000);
  }
}
function fillRef(id,phone,name){
  $('#refid')[0].value=id
  $('#refphone')[0].innerText=phone
  $('#refname')[0].innerText=name
  $('#modal-search').modal('hide')
}
$(document).ready(
  function() {
    initQuery();
    var form = $('#form-queryref');
    form.submit(
      function(event) {
      event.preventDefault();

      var queryButton = $('#btn-queryref');
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
          var className,label
          switch (data.respCode){
          case "200":
            form.trigger('reset')
            fillRef(data.member.id,data.member.phone,data.member.name)
            break;
          case "300":
          case "301":
            showRefTable(data)
            return
          default:
            label=data.respCode+" "+data.respMsg
            className='alert alert-danger'
          }
          showAlert(label,className,4000);
  //        $('#msgalert').show()
        }
      });
    });//form

    var form1 = $('#form-edit');
    form1.submit(
    function(event) {
    event.preventDefault();
    var queryButton = $('#btn-bind');
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
          label = "绑定成功."
          $('#btn-bind')[0].disabled = true
          break;
        default:
          className='alert alert-danger'
          label=data.respCode+" "+data.respMsg
        }
        showAlert(label,className,4000);
      }
    });
  });//form1
});
//$('#phone').focus()
