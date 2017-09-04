</div>
<!-- Main Header -->
<header class="main-header">

  <!-- Logo -->
  <a href="\" class="logo">
    <!-- mini logo for sidebar mini 50x50 pixels -->
    <span class="logo-lg"><b>分级系统</b></span>
  </a>

  <!-- Header Navbar -->
  <nav class="navbar navbar-static-top" role="navigation">
    <!-- Sidebar toggle button-->
    <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
      <span class="sr-only">Toggle navigation</span>
    </a>
    <!-- Navbar Right Menu -->
    <div class="navbar-custom-menu">
      <ul class="nav navbar-nav">

        <!-- User Account Menu -->
        <li class="dropdown user user-menu">
          <!-- Menu Toggle Button -->
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">
            <!-- The user image in the navbar-->
            <img src="/static/dist/img/avatar.png" class="user-image" alt="User Image" />
            <!-- hidden-xs hides the username on small devices so only the image appears. -->
            <span class="hidden-xs">xxx Del</span>
          </a>
          <ul class="dropdown-menu">
            <!-- The user image in the menu -->
            <li class="user-header">
              <img src="/static/dist/img/avatar.png" class="img-circle" alt="User Image" />
              <p>Developer
                <small>Member since Nov. 2012</small>
              </p>
            </li>
            <!-- Menu Body -->
            <li class="user-body">
              <div class="col-xs-4 text-center">
                <a href="#">Followers</a>
              </div>
              <div class="col-xs-4 text-center">
                <a href="#">Sales</a>
              </div>
              <div class="col-xs-4 text-center">
                <a href="#">Friends</a>
              </div>
            </li>
            <!-- Menu Footer-->
            <li class="user-footer">
              <div class="pull-left">
                <a href="#" class="btn btn-default btn-flat">Profile</a>
              </div>
              <div class="pull-right">
                <a href="#" class="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
        <!-- Control Sidebar Toggle Button -->
        <li>
          <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
        </li>
      </ul>
    </div>
  </nav>
</header>
<!-- Left side column. contains the logo and sidebar -->
<aside class="main-sidebar">

  <!-- sidebar: style can be found in sidebar.less -->
  <section class="sidebar">

    <!-- Sidebar user panel (optional) -->
    <div class="user-panel">
      <div class="pull-left image">
        <img src="/static/dist/img/avatar.png" class="img-circle" alt="User Image" />
      </div>
      <div class="pull-left info">
        <p>XXX Del</p>
        <!-- Status -->
        <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
      </div>
    </div>

    <!-- search form (Optional) -->
    <form action="#" method="get" class="sidebar-form">
      <div class="input-group">
        <input type="text" name="q" class="form-control" placeholder="Search..." />
        <span class="input-group-btn">
          <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i></button>
        </span>
      </div>
    </form>
    <!-- /.search form -->

    <!-- Sidebar Menu -->
    <ul class="sidebar-menu">
      <li class="header">功能列表</li>
      <!-- Optionally, you can add icons to the links -->
      <li {{if eq .Page "newmember.html" "checkmember.html" "refmember.html" "bind.html"}}class='treeview active'{{else}}class='treeview' {{end}} >
        <a href="#"><i class="fa fa-link"></i> <span>会员管理</span> <i class="fa fa-angle-left pull-right"></i></a>
        <ul class="treeview-menu">
          <li {{if eq .Page "newmember.html"}}class="active"{{end}}><a href="/pages/newmember.html"><i class="fa fa-link"></i> <span>添加会员</span></a></li>
          <li {{if eq .Page "checkmember.html" }}class="active"{{end}}><a href="/pages/checkmember.html"><i class="fa fa-link"></i> <span>会员查询</span></a></li>
          <li {{if eq .Page "refmember.html" }}class="active"{{end}}><a href="/pages/refmember.html"><i class="fa fa-link"></i> <span>被推荐会员查询</span></a></li>
          <li {{if eq .Page "bind.html"}}class="active"{{end}}><a href="/pages/bind.html"><i class="fa fa-link"></i> <span>补绑定</span></a></li>
        </ul>
      </li>
      <li {{if eq .Page "consume.html" "gainhistory.html" "consumehistory.html"}}class='treeview active'{{else}}class='treeview' {{end}} >
        <a href="#"><i class="fa fa-link"></i> <span>消费及记录</span> <i class="fa fa-angle-left pull-right"></i></a>
        <ul class="treeview-menu">
          <li {{if eq .Page "consume.html"}}class="active"{{end}}><a href="/pages/consume.html"><i class="fa fa-link"></i> <span>新消费</span></a></li>
          <li {{if eq .Page "gainhistory.html" }}class="active"{{end}}><a href="/pages/gainhistory.html"><i class="fa fa-link"></i> <span>获取记录查询</span></a></li>
          <li {{if eq .Page "consumehistory.html" }}class="active"{{end}}><a href="/pages/consumehistory.html"><i class="fa fa-link"></i> <span>消费记录查询</span></a></li>
        </ul>
      </li>
      <li {{if eq .Page ".html" "ratio.html" "ratios.html"}}class='treeview active'{{else}}class='treeview' {{end}} >
        <a href="#"><i class="fa fa-link"></i> <span>费率配置</span> <i class="fa fa-angle-left pull-right"></i></a>
        <ul class="treeview-menu">
          <li {{if eq .Page "ratios.html" }}class="active"{{end}}><a href="/pages/ratios.html"><i class="fa fa-link"></i> <span>通用费率配置</span></a></li>
          <li {{if eq .Page "ratio.html" }}class="active"{{end}}><a href="/pages/ratio.html"><i class="fa fa-link"></i> <span>个体费率配置</span></a></li>
        </ul>
      </li>
      <li><a href="#"><i class="fa fa-link"></i> <span>blala</span></a></li>
    </ul><!-- /.sidebar-menu -->
  </section>
  <!-- /.sidebar -->
</aside>
<script type="text/javascript">
function showAlert(msg,className,delay){
  var alert = $('<div id="msgalert" class="'+className+'" style="width:60%;margin:10px 20%;position:fixed;left:0;top:0;z-index:10000;display:none"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><label id="msglbl">'+msg+'</label></div>');
  alert.appendTo($('body'))
  alert.show()
  window.setTimeout(function() { alert.alert('close') }, delay);
}
</script>
