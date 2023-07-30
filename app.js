const endDate="11 July 2023 12:00 PM"
document.getElementById("end-date").innerText=endDate;
const inputs=document.querySelectorAll("input")

function clock(){
    const end=new Date(endDate); 
    const now=new Date();
    const diff=(end-now)/1000; /*millisec me show hoga and by dividing it by 1000 changes to sec*/
    if(diff<0) return;
    inputs[0].value=Math.floor(diff/3600/24);   //converting sec to days
    inputs[1].value=Math.floor(diff/3600)%24 ; //5 days k baad kitne hours bche hai
    inputs[2].value=Math.floor(diff/60)%60;
    inputs[3].value=Math.floor(diff)%60;

}
clock()

setInterval(
    () => {
        clock()
    },
     1000
)