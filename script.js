const div = document.createElement("div");
div.setAttribute("class","container");
div.innerHTML=`<nav class="navbar">
<ul class="line-row">
<li class="pages" onclick="fun1()">1</li>
<li class="pages" onclick="fun2()">2</li>
<li class="pages" onclick="fun3()">3</li>
<li class="pages" onclick="fun4()">4</li>
<li class="pages" onclick="fun5()">5</li>
<li class="pages" onclick="fun6()">6</li>
<li class="pages" onclick="fun7()">7</li>
<li class="pages" onclick="fun8()">8</li>
<li class="pages" onclick="fun9()">9</li>
<li class="pages" onclick="fun10()">10</li>
</ul>
</nav>
`;

document.body.append(div);
const div1= document.createElement("div");
div1.setAttribute("class","container2")

function  details(a,b){
    
    fetch("https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json")
    .then(response=>response.json())
    .then(data=>
   {
       for(let i=a; i<b; i++){
        var div2= document.createElement("div");
        div2.setAttribute("class","sec-container")
        div2.innerHTML=`
        <p><span class="key">Id:</span> ${data[i].id}</p>
        <p><span class="key">Name:</span>  ${data[i].name}</p>
        <p><span class="key">Email:</span>  ${data[i].email}</p>
        `;
       // console.log(div2);
       // console.log(data[i].id,data[i].name,data[i].email);
       div1.append(div2)
       document.body.append(div1);
       
       //console.log(div1.innerHTML)
       }
    
   }
    )};


function fun1(){
    div1.innerHTML="";
    details(0,10);
 }

function fun2(){
  div1.innerHTML="";
    details(10,20);
 }

 function fun3(){
    div1.innerHTML="";
    details(20,30);
 }

 function fun4(){
    div1.innerHTML="";
    details(30,40);
 }

 function fun5(){
    div1.innerHTML="";
    details(40,50);
 }

 function fun6(){
    div1.innerHTML="";
    details(50,60);
 }

 function fun7(){
    div1.innerHTML="";
    details(60,70);
 }

 function fun8(){
    div1.innerHTML="";
    details(70,80);
 }

 function fun9(){
    div1.innerHTML="";
    details(80,90);
 }

 function fun10(){
    div1.innerHTML="";
    details(90,100);
 }


 fun1();