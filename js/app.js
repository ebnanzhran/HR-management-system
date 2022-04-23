
// let allEmp=[];
// let checksalary=(empLevel)=>{
// if(empLevel=="Senior"){
//     return (1500+2000)/2;
// }else if(empLevel == "Mid-Senior"){
//     return (1000+1500)/2;
// }else if(empLevel == "Junior"){
//     return (500+1000)/2;
// }
// else{
//     return "There isnt from this department";
// }
// }

// let calcSalary=(salary,tax)=>{
// return salary-salary*tax;
// }


// function employeeDetales(empId,empFullname,empDept,empLevel,empImage,empSalary){
// this.empId=empId;
// this.empFullname=empFullname;
// this.empDept=empDept;
// this.empLevel=empLevel;
// this.empImage=empImage;
// this.empSalary=calcSalary(checksalary(this.empLevel),0.075);

// allEmp.push(this)
// }

// function imgFunction(url) {
//     var x = document.createElement("IMG");
//     x.setAttribute("src", url);
//     x.setAttribute("width", "50");
//     x.setAttribute("height", "50");
//     x.setAttribute("alt", "The Pulpit Rock");
//     document.body.appendChild(x);
//   }

// employeeDetales.prototype.render= function(){

    
    
//     document.write(`<p>ID : ${this.empId} </p>`)
//     imgFunction(this.empImage)
//     document.write(`<p>The name is : ${this.empFullname} </p>`)
//     document.write(`<p>The Department is : ${this.empDept} </p>`)
//     document.write(`<p>The Level is : ${this.empLevel} </p>`)
//     document.write(`<p>The Salary is : ${this.empSalary} </p>`)
//     document.write(`<p>----------------------------</p>`)
// }

// let gazeSamer=new employeeDetales(1000,"Gazi Samer","Administration","Senior","./assest/emp1.png");
// let lanaAli=new employeeDetales(1001,"Lana Ali","Finance","Senior","./assest/emp2.png");
// let tamaraAyoub=new employeeDetales(1002,"Tamara Ayoub","Marketing","Senior","./assest/emp3.png");
// let safiWalid=new employeeDetales(1003,"Safi Walid","Administration","Mid-Senior","./assest/emp4.png");
// let omarZaid=new employeeDetales(1004,"Omar Zaid","Development","Senior","./assest/emp5.png");
// let ranaSaleh=new employeeDetales(1005,"Rana Saleh","Development","Junior","./assest/emp6.png");
// let hadiAhmad=new employeeDetales(1006,"Hadi Ahmad","Finance","Mid-Senior","./assest/emp1.png");




// document.write(`<h1>Welcome</h1>`)
// console.log(allEmp);
// gazeSamer.render();
// lanaAli.render();
// tamaraAyoub.render();
// safiWalid.render();
// omarZaid.render();
// ranaSaleh.render();
// hadiAhmad.render();
let sectionEl1=document.getElementById("form");
let main=document.getElementById("main");
let heading=document.createElement("h1")
heading.textContent="Welcome to System "
heading.style.textAlign="Center"
sectionEl1.appendChild(heading)
sectionEl1.setAttribute("backgroundColor","black")
sectionEl1.style.textAlign="center"

//  main.style.textAlign="center"
let newbar=document.createElement("br")
main.append(newbar)

let sectionEl2=document.createElement("section")
sectionEl2.setAttribute("id","form2")
main.appendChild(sectionEl2)
sectionEl2.style.textAlign="center"
let newbar2=document.createElement("br")
main.append(newbar2)

let sectionEl3=document.createElement("section")
sectionEl3.setAttribute("id","form3")
main.appendChild(sectionEl3)
sectionEl3.style.textAlign="center"

let newbar3=document.createElement("br")
main.append(newbar3)

let nav1=document.createElement("nav")
nav1.setAttribute("id","input1")
main.appendChild(nav1)
nav1.style.textAlign="center"


let newbar4=document.createElement("br")
main.append(newbar4)



let nav2=document.createElement("nav")
nav2.setAttribute("id","input1")
main.appendChild(nav2)
nav2.style.textAlign="center"
// let nav3=document.createElement("nav")
// nav2.setAttribute("id","inputname")
// main.appendChild(nav2)

let inputName;
  inputName =document.createElement("INPUT");
  inputName.setAttribute("type","text");
  inputName.setAttribute("value","Enter your name");
sectionEl1.appendChild(inputName)

let inputText
function creatInputText(){
inputText=document.createElement("INPUT")
inputText.setAttribute("type","text");
inputText.setAttribute("value","Input Image URL")
nav1.appendChild(inputText)

}

let btn;
let noteBtn
var x
var x1
var dept;
var level;
var img;
var nameCard;
var arr=[];
var salary;
var i;
var id=1000;
function createButton(){
 btn=document.createElement("BUTTON")
 noteBtn=document.createTextNode("Submit")
 btn.appendChild(noteBtn)
 btn.addEventListener("click",alt)
 nav2.appendChild(btn)
 
}

function netSalary(lev){

    if(lev=="Senior"){
            salary= (1500+2000)/2;
        }else if(lev == "Mid-Senior"){
           salary= (1000+1500)/2;
        }else if(lev == "Junior"){
            salary= (500+1000)/2;
        }
        else {salary= 0}
}

function alt(){
    
    i =x.selectedIndex;
    dept=x.options[i].text
    level=x1.options[i].text
    img= inputText.value
    nameCard=inputName.value
    netSalary(level)
    id++;
    arr.push({id:id,Name:nameCard,department:dept,Level:level,image:img,Salary:salary})
    console.log(arr);
    showEmp(arr)
}



    function dropList1() {
         x = document.createElement("SELECT");
        x.setAttribute("id", "mySelect");
        sectionEl2.appendChild(x)

        var ze = document.createElement("option");
        ze.setAttribute("id", "Administrationopt");
        var t = document.createTextNode("Select Department");
        ze.appendChild(t);
        document.getElementById("mySelect").appendChild(ze);
      
        var z = document.createElement("option");
        z.setAttribute("id", "Administrationopt");
        var t = document.createTextNode("Administration");
        z.appendChild(t);
        document.getElementById("mySelect").appendChild(z);

        var z2 = document.createElement("option");
        z2.setAttribute("id", "Marketingopt");
        var t2 = document.createTextNode("Marketing");
        z2.appendChild(t2);
        document.getElementById("mySelect").appendChild(z2);

        var z3 = document.createElement("option");
        z3.setAttribute("id", "develop");
        var t2 = document.createTextNode("Development");
        z3.appendChild(t2);
        document.getElementById("mySelect").appendChild(z3);

        var z4 = document.createElement("option");
        z4.setAttribute("id", "Finance");
        var t2 = document.createTextNode("Finance");

        z4.appendChild(t2);
        document.getElementById("mySelect").appendChild(z4); 
      }

      function dropList2() {
        x1 = document.createElement("SELECT");
        x1.setAttribute("id", "mySelect2");
        
        sectionEl3.appendChild(x1)

        var zw = document.createElement("option");
        zw.setAttribute("admin", "Administrationopt");
        var t = document.createTextNode("Select Level");
        zw.appendChild(t);
        document.getElementById("mySelect2").appendChild(zw);
      
        var z = document.createElement("option");
        z.setAttribute("admin", "Administrationopt");
        var t = document.createTextNode("Junior");
        z.appendChild(t);
        document.getElementById("mySelect2").appendChild(z);

        var z2 = document.createElement("option");
        z2.setAttribute("marketing", "Marketingopt");
        var t = document.createTextNode("Mid-Senior");
        z2.appendChild(t);
        document.getElementById("mySelect2").appendChild(z2);

        var z3 = document.createElement("option");
        z2.setAttribute("dev", "develop");
        var t = document.createTextNode("Senior");
        z3.appendChild(t);
        document.getElementById("mySelect2").appendChild(z3);
        
      }



function showEmp(arr){

    let sectionEl4=document.createElement("section")
    main.appendChild(sectionEl4)
    sectionEl4.style.backgroundColor="#0000"
    sectionEl4.style.textAlign="center"
    sectionEl4.style.width="300px"
    sectionEl4.style.marginLeft="40%"
    sectionEl4.style.backgroundColor="#860000"
       
        
        var name=document.createElement("p")
        var id=document.createElement("p")
        var dept=document.createElement("p")
        var level=document.createElement("p")
        var salary=document.createElement("p")   
        let img=document.createElement("img")
        img.style.padding="20px"
         img.style.width="150px"
            for(var i=0 ; i<arr.length ; i++){
               img.src=arr[i].image
               sectionEl4.appendChild(img)
               id.textContent="Id: "+arr[i].id
               sectionEl4.appendChild(id)          
               name.textContent="Name :"+arr[i].Name
               sectionEl4.appendChild(name)
               dept.textContent="Department :"+arr[i].department
               sectionEl4.appendChild(dept)
               level.textContent="Level :"+arr[i].Level
               sectionEl4.appendChild(level)
               salary.textContent="Salary :"+arr[i].Salary
               sectionEl4.appendChild(salary)
               

            }

      }
dropList1()
dropList2()
creatInputText()      
createButton()






































