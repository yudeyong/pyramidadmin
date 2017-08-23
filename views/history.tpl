<!DOCTYPE html>
<html>
  {{template "head.tpl" .}}
  <body class="skin-blue sidebar-mini">
    {{template "frame.tpl" .}}
    <div class="wrapper">

      <!-- Content Wrapper. Contains page content -->
      <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
          <h1>
            查询会员
            <small>条件</small>
          </h1>
        </section>

        <!-- Main content -->
        <section class="content">
          {{template "searchmember.tpl" .}}



          <div class="box box-warning" id="member-info" >
            <div class="box-header with-border">
              <h3 class="box-title"> <em style='color:#dd4b39' id='list-title'> </em> {{template "actiontitle"}}总额<em style='color:#dd4b39' id='list-amount'>.</em></h3>
            </div><!-- /.box-header -->
            <div class="box-body table-responsive no-padding">
              <table id='table-history' class="table ">
              </table>
            </div><!-- /.box-body -->
          </div><!-- /.box -->
          {{template "memberlist.tpl" .}}
        </section><!-- /.content -->
      </div><!-- /.content-wrapper -->
      {{template "footer.tpl" .}}
    </div><!-- ./wrapper -->


    <div class="modal modal-info fade" id="modal-info" tabindex="-1" role="dialog" aria-hidden="true">
     <div class="modal-dialog">
       <div class="modal-content">
         <div class="modal-header">
           <button type="button" class="close" data-dismiss="modal" aria-label="Close">
             <span aria-hidden="true">&times;</span></button>
           <h4 class="modal-title" id="modal-title">Info Modal</h4>
         </div>
         <div class="modal-body">
           <div class="box-body table-responsive no-padding">
              <table id='table-result' class="table table-hover text-danger">
              </table>
         </div>
         <div class="modal-footer">
           <button type="button" class="btn btn-outline pull-right" data-dismiss="modal">放弃</button>

         </div>
       </div>
       <!-- /.modal-content -->
     </div>
     <!-- /.modal-dialog -->
   </div>
   <!-- /.modal -->


   {{template "publicjs.tpl" .}}
    <script src="../../static/plugins/select2/select2.full.min.js" type="text/javascript"></script>
    <script src="../../static/plugins/input-mask/jquery.inputmask.js" type="text/javascript"></script>
    <script src="../../static/plugins/input-mask/jquery.inputmask.date.extensions.js" type="text/javascript"></script>
    <script src="../../static/plugins/input-mask/jquery.inputmask.extensions.js" type="text/javascript"></script>

    <!-- app js -->
    <script src="../../static/js/history.js" type="text/javascript"></script>

    </body>
</html>
