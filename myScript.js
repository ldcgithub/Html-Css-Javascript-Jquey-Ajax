function myFunction(){
	x = document.getElementById("demo");//找到内容
	x.innerHTML = "Hello JavaScript!";//改变内容
	x.style.color= "#ff0000";//改变样式
}
		
document.write("<h1>This is a heading</h1>");
document.write("<p>This is a paragraph.</p>");
		
function changeImage(){
	element=document.getElementById('myimage')
	if (element.src.match("eg_bulbon")){
		element.src = "E:/软件学习/html/eg_bulboff.gif";
	}
	else {
		element.src = "E:/软件学习/html/eg_bulbon.gif";
	}
}
		
function myFunction2(){
	var x=document.getElementById("demo2").value;
	if(x==""||isNaN(x)){
		alert("Not Numeric");
	}
	else{
		alert("Good job!");
	}
}
		
function myFunction3(){
	document.write("糟糕！文档消失了。");
}

var day = new Date().getDay();

switch(day){
	case 0:
	x = "Today it's Sunday."
	break;
	case 1:
	x = "Today it's Monday."
	break;
	case 2:
	x = "Today it's Tuesday."
	break;
	case 3:
	x = "Today it's Wednesday."
	break;
	case 4:
	x = "Today it's Thursday."
	break;
	case 5:
	x = "Today it's Friday."
	break;
	case 6:
	x = "Today it's Saturday."
	break;
}
document.write(x);

function changeImage2(){
	element2 = document.getElementById("myimage2");
	if (element2.src.match("cuhk")){
		element2.src = "E:/软件学习/html/hust.png";
	}
	else{
		element2.src = "E:/软件学习/html/cuhk(sz).png";//javascript路径名用的是斜线'/',而windows用的是反斜线'\'
	}
}

//创建对象
per=new Object();
per.firstname="Bill";
per.lastname="Gates";
per.age=56;
per.eyecolor="blue";

//创建对象替代语法
per={firstname:"John", lastname:"Doe", age:50, eyecolor:"blue"};

//用函数来构造对象
function person(firstname, lastname, age, eyecolor){
	this.firstname=firstname;
	this.lastname=lastname;
	this.age=age;
	this.eyecolor=eyecolor;
	
	this.changeName=changeName;
	function changeName(name){
		this.lastname=name;
	}//成员函数
}

//新的对象实例
var myFather=new person("Bill", "Gates", 56, "blue");
var myMother=new person("Steve", "Jobs", 48, "green");

//用for...in循环
var person={fname:"Bill", lname:"Gates", age:56};

for(x in person){
	txt=txt + person[x];
}//txt的结果为BillGates56

var y=0377;//数字第一位是0时，则自动转换为8进制数
var z=0xFF;

//时间操作
var myDate = new Date()
myDate.setFullYear(2008,7,9);//表示月份的参数介于 0 到 11 之间。也就是说，如果希望把月设置为 8 月，则参数应该是 7。
var myDate = new Date()
myDate.setDate(myDate.getDate() + 5);//天数+5，月份年份自动转换，日期对象可以直接用<, >来表示

var myBoolean=new Boolean("false");//对象为true
var myBoolean=new Boolean(false);//对象为false

window.location.assign("http://www.w3school.com.cn")//加载新文档（类似网页上的阅读全文按钮）
