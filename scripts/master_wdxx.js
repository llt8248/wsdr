
$(function(){
    $('#selectAll').click(function(event) {
        var f = document.getElementById('selectAll').checked;
        var s=document.getElementsByName("itemTheme");
        if(f){
            document.getElementById('all').checked ="checked";
            for(var i=0;i<s.length;i++)//使每一个复选框都被选中   
            s[i].checked="checked"; 
        }else{   //全不选   for(vari=0;i<s.length;i+=1)//使每一个复选框都被不选中   
            document.getElementById('all').checked ="";
            for(var i=0;i<s.length;i++)
            s[i].checked=""; 
        } 
    });

    $('#all').click(function(event) {
        var f = document.getElementById('all').checked;
        var s=document.getElementsByName("itemTheme");
        if(f){
            document.getElementById('selectAll').checked ="checked";
            for(var i=0;i<s.length;i++)//使每一个复选框都被选中   
            s[i].checked="checked"; 
        }else{   //全不选   for(vari=0;i<s.length;i+=1)//使每一个复选框都被不选中  
            document.getElementById('selectAll').checked =""; 
            for(var i=0;i<s.length;i++)
            s[i].checked=""; 
        } 
    });
});


