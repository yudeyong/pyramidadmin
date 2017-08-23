<div class="box" id='member-list' hidden="true">
  <div class="box-header">
    <h3 class="box-title">会员列表</h3>
  </div><!-- /.box-header -->
  <div class="box-body table-responsive no-padding">
    <table id='table-result' class="table table-hover text-danger">
    </table>
  </div><!-- /.box-body -->
</div><!-- /.box -->
<script type="text/javascript">
function showTables(data,recall){
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
    recall(this)
  });
}

function initQuery() {
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
      success: getBack
    });
  });
}
</script>
