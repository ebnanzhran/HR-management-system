
let allEmp=[];
let checksalary=(empLevel)=>{
if(empLevel=="Senior"){
    return (1500+2000)/2;
}else if(empLevel == "Mid-Senior"){
    return (1000+1500)/2;
}else if(empLevel == "Junior"){
    return (500+1000)/2;
}
else{
    return "There isnt from this department";
}
}

let calcSalary=(salary,tax)=>{
return salary-salary*tax;
}


function employeeDetales(empId,empFullname,empDept,empLevel,empImage,empSalary){
this.empId=empId;
this.empFullname=empFullname;
this.empDept=empDept;
this.empLevel=empLevel;
this.empImage=empImage;
this.empSalary=calcSalary(checksalary(this.empLevel),0.075);

allEmp.push(this)
}

function imgFunction(url) {
    var x = document.createElement("IMG");
    x.setAttribute("src", url);
    x.setAttribute("width", "50");
    x.setAttribute("height", "50");
    x.setAttribute("alt", "The Pulpit Rock");
    document.body.appendChild(x);
  }

employeeDetales.prototype.render= function(){

    
    
    document.write(`<p>ID : ${this.empId} </p>`)
    imgFunction(this.empImage)
    document.write(`<p>The name is : ${this.empFullname} </p>`)
    document.write(`<p>The Department is : ${this.empDept} </p>`)
    document.write(`<p>The Level is : ${this.empLevel} </p>`)
    document.write(`<p>The Salary is : ${this.empSalary} </p>`)
    document.write(`<p>----------------------------</p>`)
}

let gazeSamer=new employeeDetales(1000,"Gazi Samer","Administration","Senior","./assest/emp1.png");
let lanaAli=new employeeDetales(1001,"Lana Ali","Finance","Senior","./assest/emp2.png");
let tamaraAyoub=new employeeDetales(1002,"Tamara Ayoub","Marketing","Senior","./assest/emp3.png");
let safiWalid=new employeeDetales(1003,"Safi Walid","Administration","Mid-Senior","./assest/emp4.png");
let omarZaid=new employeeDetales(1004,"Omar Zaid","Development","Senior","./assest/emp5.png");
let ranaSaleh=new employeeDetales(1005,"Rana Saleh","Development","Junior","./assest/emp6.png");
let hadiAhmad=new employeeDetales(1006,"Hadi Ahmad","Finance","Mid-Senior","./assest/emp1.png");




document.write(`<h1>Welcome</h1>`)
console.log(allEmp);
gazeSamer.render();
lanaAli.render();
tamaraAyoub.render();
safiWalid.render();
omarZaid.render();
ranaSaleh.render();
hadiAhmad.render();