var mydata = JSON.parse(data);
myname = (mydata[0].fname);
document.getElementById('fname').innerHTML = myname;
document.getElementById('fname2').innerHTML = myname;