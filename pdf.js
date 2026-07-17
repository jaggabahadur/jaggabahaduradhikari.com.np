function savePDF(){

let title=document.getElementById("pdfTitle").value;
let link=document.getElementById("pdfLink").value;

if(title=="" || link==""){
alert("Please fill all fields");
return;
}

let pdfs=JSON.parse(localStorage.getItem("pdfs")) || [];

pdfs.push({
title:title,
link:link
});

localStorage.setItem("pdfs",JSON.stringify(pdfs));

alert("PDF Saved");

location.reload();

}

let pdfs=JSON.parse(localStorage.getItem("pdfs")) || [];

let html="";

for(let i=0;i<pdfs.length;i++){

html+=`
<div class="card">
<h3>${pdfs[i].title}</h3>

<a href="${pdfs[i].link}" target="_blank">
Download PDF
</a>

</div>
`;

}

document.getElementById("pdfList").innerHTML=html;
