'use strict'
let allEmp=[]
let sectionEl=document.getElementById("showCard")
let fullName=document.getElementById("fullname")
let imgph=document.getElementById("imgph")

function Employee(id, name, department, level, image, salary) {
  this.employeeId = id;
  this.fullName = name;
  this.department = department;
  this.level = level;
  this.image = image;
  this.salary = salary;
  allEmp.push(this);

}

function getRndInteger(min,max){
  return Math.floor(Math.random()*(max-min+1))+min;
}

Employee.prototype.NewSalary11=function () {
  if(this.level=="Senior"){
    this.salary=getRndInteger(1500,2000)*(1-7.5)*(-1);
    
  }
  if(this.level=="Mid-Senior"){
    this.salary=getRndInteger(1000,1500)*(1-7.5)*(-1);
    
  }
  if(this.level=="Jonir"){
    this.salary=getRndInteger(500,1000)*(1-7.5)*(-1);
    
  }
}


Employee.prototype.render= function(){
  let card = document.createElement('div')
  card.style.textAlign="center"
  card.style.background="gray"
  card.style.width="150px"
  card.style.marginLeft="45%"
  // card.classList = ('cardDiv')
  sectionEl.appendChild(card)
  // create image for employee
  let imageEl = document.createElement('img');
  // imageEl.classList = ('card-img-top');
  imageEl.style.width="50px"
  imageEl.src = this.image;
  imageEl.style.padding="10px"
  imageEl.alt = 'profilePic';
  card.appendChild(imageEl);

  // create name for employee
  let name = document.createElement('h5');
  // name.classList = ('card-title');
  name.textContent = this.fullName;
  card.appendChild(name);

  // create Department, Level, salary, Id for employee
  let paragraph = document.createElement('p');
  // paragraph.classList = ('card-text');
  paragraph.textContent = `ID: ${this.employeeId}  \n - Department: ${this.department} \n - Level: ${this.level} \n - salary: ${this.salary} JD`;
  card.appendChild(paragraph);

 
}
function gitAllData(){
  var x = document.getElementById("depart");
  
}
let emp1=new Employee("1001","Ghazi Samer","Administration","Senior","./assest/Ghazi.jpg")
let emp2=new Employee("1002","Lana Ali","Finance","Senior","./assest/Lana.jpg")
let emp3=new Employee("1003","Tamara Ayoub","Marketing","Senior","./assest/Tamara.jpg")
let emp4=new Employee("1004","Safi Walid","Administration","Mid-Senior","./assest/Safi.jpg")
let emp5=new Employee("1005","Omar Zaid","Development","Senior","./assest/Omar.jpg")
let emp6=new Employee("1006","Rana Saleh","Development","Jonior","./assest/Rana.jpg")
let emp7=new Employee("1007","Hadi Ahmad","Finance","Mid-Senior","./assest/Hadi.jpg")


let btn=document.getElementById("submit")
btn.addEventListener("click",alt)
let id=1007;

function alt(){
  
  let i =document.getElementById("depart").selectedIndex;
  let i2 =document.getElementById("level").selectedIndex;
   let   dept=document.getElementById("depart").options[i].value
   let   level=document.getElementById("level").options[i2].value
   let   img= imgph.text
   let   nameCard=fullName.text
  //  let salary = Employee.prototype.salary();
    //  allEmp.NewSalary11()
    let salary = Employee.prototype.NewSalary11();
      id++;
      let newEmployee = new Employee(id, nameCard, dept, level, img, salary);
      allEmp.push(newEmployee)
      // allEmp.push("Employee",{id:id,Name:nameCard,department:dept,Level:level,image:img,Salary:salary})
        //  newEmployee.render()
        // allEmp.push({newEmployee})
        for(let i=0 ; i<allEmp.length ; i++){
          allEmp[i].NewSalary11();
          allEmp[i].render();
      }
}

// function showEmp(arr){

//     let sectionEl4=document.createElement("section")
//     main.appendChild(sectionEl4)
//     sectionEl4.style.backgroundColor="#0000"
//     sectionEl4.style.textAlign="center"
//     sectionEl4.style.width="300px"
//     sectionEl4.style.marginLeft="40%"
//     sectionEl4.style.backgroundColor="#860000"
       
        
//         var name=document.createElement("p")
//         var id=document.createElement("p")
//         var dept=document.createElement("p")
//         var level=document.createElement("p")
//         var salary=document.createElement("p")   
//         let img=document.createElement("img")
//         img.style.padding="20px"
//          img.style.width="150px"
//             for(var i=0 ; i<arr.length ; i++){
//                img.src=arr[i].image
//                sectionEl4.appendChild(img)
//                id.textContent="Id: "+arr[i].id
//                sectionEl4.appendChild(id)          
//                name.textContent="Name :"+arr[i].Name
//                sectionEl4.appendChild(name)
//                dept.textContent="Department :"+arr[i].department
//                sectionEl4.appendChild(dept)
//                level.textContent="Level :"+arr[i].Level
//                sectionEl4.appendChild(level)
//                salary.textContent="Salary :"+arr[i].Salary
//                sectionEl4.appendChild(salary)
               

//             }

//       }

console.log(allEmp);
