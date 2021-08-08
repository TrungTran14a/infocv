var mydata = JSON.parse(data);

var myname = (mydata[0].fname);
var bday = (mydata[1].bdaytxt);
var linkcv = (mydata[2].linkcv);
var phonenum = (mydata[2].phonenum);
var city = (mydata[2].city);
var age = (mydata[1].age);
var mymail = (mydata[2].email1);
var mymail2 = (mydata[2].email2);
var wexp = (mydata[2].workexp);
var job = (mydata[2].job);

document.getElementById('fname').innerHTML = myname;
document.getElementById('fname2').innerHTML = myname;
document.getElementById('bday').innerHTML = bday;
document.getElementById('linkcv').innerHTML = linkcv;
var Cphone = document.getElementById('phonenum');

if(Cphone)
{
    Cphone.innerHTML = phonenum;
    
}


document.getElementById('city').innerHTML = city;
document.getElementById('age').innerHTML = age;
document.getElementById('mymail').innerHTML = mymail + " - " +mymail2;
document.getElementById('wexp').innerHTML = wexp + " years";
document.getElementById('job').innerHTML = job;

