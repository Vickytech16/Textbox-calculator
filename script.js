// 23/04/2023

 let b=document.querySelector("button")
 b.addEventListener('click',calculate)

 function calculate()
 {
  let a=document.getElementById("calc").value
  console.log(a)
  let c,e

  if (a.includes("+"))
  {
   c='+'
   d=a.split('+')
  }
  else if (a.includes("-"))
  {
   c='-'
   d=a.split('-')
  } 
  else if (a.includes("*"))
  {
   c='*'
   d=a.split('*')
  } 
  else if (a.includes("/"))
  {
   c='/'
   d=a.split("/")
  }
  else
  {
   c=null
  }
  console.log(d[0],d[1])
  d[0]=Number(d[0])
  d[1]=Number(d[1])
  console.log(typeof(d[0],d[1]))
  console.log(d[0],d[1])

  console.log(c)
  
  switch(c)
  {
   case '+':
    e=d[0]+d[1]
    break;
   case '-':
    e=d[0]-d[1]
    break; 
   case '*':
    e=d[0]*d[1]
    break;
   case '/':
    e=d[0]/d[1]
    break;
  }
  console.log(e)
  let f=document.getElementById("result")
  f.innerHTML="The value is "+e    
 }