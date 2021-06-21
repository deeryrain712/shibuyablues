<script>
var myApp=angular.module(&#39;tabs&#39;,[]);
myApp.controller(&#39;shift_tabs&#39;,function(){
  this.activeTab;
  this.makeShift=function(e){
    this.activeTab=e;
  }
  this.isActive=function(f){
    if(f==this.activeTab){
      return true
    }
  }
});
</script>
