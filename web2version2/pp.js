var my_input=document.getElementById("test");
function getrandom()
{
	return Math.floor(Math.random()*25);

}
//////////template//////////////
function oc(target,type,time)
{
	this.target=target;
	this.type=type;
	this.time=time;
}


var alphpet=['A','S','D','F','G','H','J','K','L','Z','X','C','V','B','N','M','Q','W','E','R','T','Y','U','I','O','P'];

var my_button=document.getElementById("test_button");
var my_b=document.getElementsByClassName("newClass");

my_button.addEventListener("click",function(e){
				var occ=new oc();
				occ.target=my_button.value;
				occ.time=new Date();
				occ.type=e.type;
				var con=occ.target+"-"+occ.type+"-"+occ.time;
				
				if(localStorage.getItem("my_button")===null)
				{
					localStorage.setItem("my_button",con);
				}
				else
				{
					var arr=new Array(localStorage.getItem("my_button"));
					arr.push(con);
					localStorage.setItem("my_button",arr);
				}
				
				
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

		
		 
		   var occ=new oc();
		     occ.target=e.target.value;
			occ.time=new Date();
			occ.type=e.type;
			var con=occ.target+"-"+occ.type+"-"+occ.time;
				if(localStorage.getItem("my_b")===null)
				{
					localStorage.setItem("my_b",con);
				}
				else
				{
					var arr=new Array(localStorage.getItem("my_b"));
					arr.push(con);
					localStorage.setItem("my_b",arr);
				}
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
//setTimeout(function(){localStorage.clear();},5000);
window.addEventListener("load",function(e){
	      
		   var occ=new oc();
		   occ.target=e.target.value;
			occ.time=new Date();
			occ.type=e.type;
			var con=occ.type+"&"+occ.time+"&"+"ggg";
				if(localStorage.getItem("load")===null)
				{
					localStorage.setItem("load",con);
				}
				else
				{
					var arr=new Array(localStorage.getItem("load"));
					arr.push(con);
					localStorage.setItem("load",arr);
				}
});
	
	window.addEventListener("unload",function(e){
	        
			var occ=new oc();
			   occ.target=e.target.value;
				occ.time=new Date();
				occ.type=e.type;
				var con=occ.type+"&"+occ.time+"&"+"hhh";
				if(localStorage.getItem("unload")===null)
				{
					localStorage.setItem("unload",con);
				}
				else
				{
					var arr=new Array(localStorage.getItem("unload"));
					arr.push(con);
					localStorage.setItem("unload",arr);
					
				}
});

////////////////////////////////////////




setInterval(function(){
	      
        var ob_arr=[];
var ar_mybutton=[];
var ar_myb=[];
var ar_myload=[];
var ar_myunload=[];
var count2;
if(localStorage.getItem("my_button"))
{     var f=0;
	ar_mybutton=localStorage.getItem("my_button").split(",");
	console.log(ar_mybutton[0]);
	for(var x=0;x<ar_mybutton.length;x++){
		
		 var ls=ar_mybutton[f].split("-");
		ob_arr[x]=new oc(ls[0],ls[1],ls[2]);
		f++;
	}
}

if(localStorage.getItem("my_b"))
{     var f=0;
	ar_myb=localStorage.getItem("my_b").split(",");
	count2=ar_myb.length+ob_arr.length;
	console.log(ar_myb[0]);
	for(var x=ob_arr.length;x<count2;x++){
		
		 var ls=ar_myb[f].split("-");
		ob_arr[x]=new oc(ls[0],ls[1],ls[2]);
		f++;
	}
}

if(localStorage.getItem("unload"))
{     var f=0;
	ar_myunload=localStorage.getItem("unload").split(",");
	count2=ar_myunload.length+ob_arr.length;
	console.log(ar_myunload[0]);
	for(var x=ob_arr.length;x<count2;x++){
		
		 var ls=ar_myunload[f].split("&");
		ob_arr[x]=new oc(ls[2],ls[0],ls[1]);
		f++;
	}
}

if(localStorage.getItem("load"))
{     var f=0;
	ar_myload=localStorage.getItem("load").split(",");
	count2=ar_myload.length+ob_arr.length;
	console.log(ar_myload[0]);
	for(var x=ob_arr.length;x<count2;x++){
		
		 var ls=ar_myload[f].split("&");
		ob_arr[x]=new oc(ls[2],ls[0],ls[1]);
		f++;
	}
}




// console.log(ob_arr);		
		
	
	$.ajax({
				"type": "POST",
                "url": "pp.php",
                "data": {"object":JSON.stringify(ob_arr)},
                "success": function()
				{
                 // console.log(response);
                //localStorage.clear();
                
                   
				} 
 });

	
	
},1000);


$("#bt").on("click",function(){
	
		$.ajax({
	"type":"GET",
	"url":"pp.php",
	"data":{"person":""},
	"success":function(response){
	  if(response){
		  var persons=JSON.parse(response);
	  // console.log(persons);
	  $("#p").text(persons);
	}
	}
	});
	
});