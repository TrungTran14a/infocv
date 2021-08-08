var mydata2 = JSON.parse(helpdesk)
php = (mydata2[0].php);
html = (mydata2[0].html);

document.getElementById('Sphp').setAttribute('aria-valuenow',php);
document.getElementById('Shtml').setAttribute("aria-valuenow",html)