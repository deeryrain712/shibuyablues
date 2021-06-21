<b:if cond='data:blog.pageType in {&quot;static_page&quot;,&quot;item&quot;}'>
<script type='text/javascript'>//<![CDATA[
$(document).ready(function(){$("#content").find("[id^='tab']").hide(),$("#tabs li:first").attr("id","current"),$("#content #tab1").fadeIn(),$("#tabs a").click(function(t){t.preventDefault(),"current"!=$(this).closest("li").attr("id")&&($("#content").find("[id^='tab']").hide(),$("#tabs li").attr("id",""),$(this).parent().attr("id","current"),$("#"+$(this).attr("name")).fadeIn())})});
//]]></script>
</b:if>