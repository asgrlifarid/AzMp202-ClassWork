const studentForm=document.querySelector(".studentForm");
const studentList=document.querySelector(".studentList")
const addButton=document.querySelector(".addButton")
const score=document.querySelector(".score")
const Sname=document.querySelector(".name")
const result=document.querySelector(".result")
const calculate=document.querySelector(".calcuate")


const students =[];

studentForm.addEventListener(`submit`,function (event){
    event.preventDefault();
  const obj={
  id:Date.now(),
  name:Sname.value,
  score:score.value,
  }
  students.push(obj);
  console.log(students);
})

calculate.addEventListener("click", function(){
  
       if(arr.length===0){
        result.innerHTML="bos";
        return;
    }
    let total=0;
   arr.forEach((item)=>{
    total+=item.score
   });
   const average=total/arr.length;
   result.innerHtml=`umumi:${total} <br> Average:${average}`;
});



