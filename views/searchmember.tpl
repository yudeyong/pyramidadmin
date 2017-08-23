<div class="row">
  <!-- left column -->
  <div class="col-md-9">
    <!-- general form elements disabled -->
    <div class="box box-warning">
      <div class="box-body">
        <form role="form" id="form-query" action="/apis/{{template "actionpath"}}">
          <!-- text input -->
          <div class="row">
          <div class="col-xs-3">
            <label>手机号</label><br/>
            <input type="text" name="phone" class="form-control" value="{{.Phone}}" placeholder="手机号" autofocus>
          </div>
          <div class="col-xs-3">
            <label>姓名</label>
            <input type="text" name="name" class="form-control"  value="{{.Name}}" placeholder="">
          </div>
          <div class="col-xs-3">
            <label>卡号</label>
            <input type="text" name="cardno" class="form-control" value="{{.Cardno}}" placeholder="No.">
          </div>
          <input hidden type="text" name="id" id="id"></input>
          <div class="col-xs-3">
            <button type="submit" id="btn-query" class="btn btn-primary">查询</button>
          </div>
          </div>
        </form>
      </div><!-- /.box-body -->
    </div><!-- /.box -->
  </div><!--/.col (right) -->
</div>   <!-- /.row -->
