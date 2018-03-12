// JavaScript Document
//window.onload = function (){ setTimeout(genC(),1000);};

var colors = new Array("red","green","blue","yellow");
var input ;
var point = 0;
	
window.onload = function ()	{
					var intrvl = setInterval(function genC(){	
										var cc = Math.floor((Math.random()* 4)+0);
										
										funreset();
										if(cc == 0){
												$('#red').css("background-color","red");
												
											}
										if(cc == 1){
												$('#green').css("background-color","green");
											}
										if(cc == 2){
												$('#blue').css("background-color","blue");
											}		
										if(cc == 3){
												$('#yellow').css("background-color","yellow");
											}
											
										setTimeout(function(){	if (cc == input){
												point ++;
												document.getElementById("pnt").innerHTML = point;
												}else {
													clearInterval(intrvl);
													alert ("Game Over : Point : " + point);
													if (window.localStorage){
														if(localStorage.highScore){
															if(point> localStorage.highScore){
																localStorage.setItem("highScore",point);
															}
														}else {
														localStorage.setItem("highScore",point);
														}
													}
													
													 window.location="index.html";
												}	
												
													},1000);
								},1010);
}

function funreset(){
	
	$('#red').css("background-color","white");
	$('#green').css("background-color","white");
	$('#blue').css("background-color","white");
	$('#yellow').css("background-color","white");
	}
function inpB(){
	input = 2;
	}
function inpG(){
	input = 1;
	}	
function inpR(){
	input = 0;
	}
function inpY(){
	input = 3;
	}			
