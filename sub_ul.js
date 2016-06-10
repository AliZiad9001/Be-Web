  $(document).ready(function(){
$(&quot;.sub_ul&quot;).hide();
$(&quot;.menu li&quot;).hover(function(){
$(&quot;.sub_ul&quot;,this).show();
});
$(&quot;.menu li&quot;).mouseleave(function(){
$(&quot;.sub_ul&quot;,this).hide();
});
});
