let output=document.getElementById('output')

let date= new Date()
let getDate=date.getDate()
let getM=date.getMonth()
let gety=date.getFullYear()
let times=date.getSeconds()
let timem=date.getMinutes()
let timeh=date.getHours()
output.innerHTML=getDate+'/'+getM+'/'+gety+'  '+' Time '+times+'-'+timem+'-'+timeh
