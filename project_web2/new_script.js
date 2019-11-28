var my_input=document.getElementById("test");
function getrandom()
{
	return Math.floor(Math.random()*25);

}
var alphpet=['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','Q','W','E','R','T','Y','U','I','O','P'];
var my_button=document.getElementById("test_button");
var my_b=document.getElementsByClassName("newClass");

my_button.addEventListener("click",function(e){
	
			var target_a=e.target.value;
			var type_b=e.type;
			var data_c=new Date();
			var bb=target_a+""+type_b+""+data_c;
				localStorage.setItem("generate",bb);
 var n=parseInt(my_input.value);
	 for(var i=0 ;i<n;i++)
	 {
	 	var Element=document.createElement("input");
	 	Element.setAttribute("type","button");

	 	Element.setAttribute("value",alphpet[ getrandom()]);
		Element.setAttribute("class","newClass");
	   document.body.appendChild(Element);
	 }
	 
	 	for(var y=0; y < my_b.length;y=y+1)
	{    
		my_b[y].addEventListener("click",function(e){

		
			var target_a=e.target.value;
			var type_b=e.type;
			var data_c=new Date();
			var bb=target_a+""+type_b+""+data_c;
			localStorage.setItem("event on buuton",bb);

	    var ch=document.getElementById("m");
		if(ch!=null)
			ch.remove();
		  
		var sh=e.target.getAttribute("value");
	    var imag1=document.createElement("img");
		imag1.setAttribute("id","m");
		imag1.setAttribute("src","images/"+sh+".jpg");
		document.body.appendChild(imag1);
		});
		
	}
     
});
setTimeout(function(){localStorage.clear();},5000);
window.addEventListener("load",function(e){
	
			//var a=e.target.value;
			var type_b=e.type;
			var data_c=new Date();
			var bb=type_b+""+data_c;
			localStorage.setItem("event load",bb);
	
});
	
	window.addEventListener("unload",function(e){
	
			//var a=e.target.value;
			var type_b=e.type;
			var data_c=new Date();
			var bb=type_b+""+data_c;
			localStorage.setItem("event unload",bb);
	
});
 





	
	