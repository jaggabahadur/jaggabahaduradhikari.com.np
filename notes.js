function saveNote(){

let title=document.getElementById("title").value;
let content=document.getElementById("content").value;

if(title=="" || content==""){
alert("Please fill all fields.");
return;
}

let notes=JSON.parse(localStorage.getItem("notes")) || [];

notes.push({
title:title,
content:content
});

localStorage.setItem("notes",JSON.stringify(notes));

alert("Note Saved Successfully");

location.reload();

}

let notes=JSON.parse(localStorage.getItem("notes")) || "";

let html="";

for(let i=0;i<notes.length;i++){

html+=`
<div class="card">
<h3>${notes[i].title}</h3>
<p>${notes[i].content}</p>
</div>
`;

}

document.getElementById("notesList").innerHTML=html;
