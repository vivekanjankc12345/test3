// fill in javascript code here
document.querySelector("form").addEventListener("submit",myfunction);
let formtag=document.querySelector("form");
function myfunction(event)
{
    event.preventDefault();
    let nam=formtag.name.value;
    let empid=formtag.employeeID.value;
    let dep=formtag.department.value;
    let exp=formtag.exp.value;
    let email=formtag.email.value;
    let mobile=formtag.mbl.value;
    let tr=document.createElement("tr");
    let th1=document.createElement("th");
    th1.innerText=nam;
    let th2=document.createElement("th");
    th2.innerText=empid;
    let th3=document.createElement("th");
    th3.innerText=dep;
    let th4=document.createElement("th");
    th4.innerText=exp;
    let th5=document.createElement("th");
    th5.innerText=email;
    let th6=document.createElement("th");
    th6.innerText=mobile;
    let th7=document.createElement("th");
    if(exp>5)
    {
        th7.innerText="Senior";
    }
    else if(exp=>2 &&exp<=5)
    {
        th7.innerText="Junior";
    }
    else if(exp<=1)
    {
        th7.innerText="Fresher"
    }

    let th8=document.createElement("th");
    th8.addEventListener("click",deletrow);
    th8.innerText="Delete";
    th8.style.cursor="pointer";
    tr.append(th1,th2,th3,th4,th5,th6,th7,th8);
    document.querySelector("thead").append(tr);
    
}
function deletrow(event)
{
event.target.parentNode.remove("tr");
}