const questions = [
  {
    title: "Sample Question",
    subject: "Physics",
    link: "#"
  }
];

function loadQuestions() {
  const list = document.getElementById("questionsList");

  questions.forEach(q => {
    list.innerHTML += `
      <div style="border:1px solid #ccc;padding:15px;margin:10px;border-radius:8px;">
        <h3>${q.title}</h3>
        <p>${q.subject}</p>
        <a href="${q.link}" target="_blank">View / Download</a>
      </div>
    `;
  });
}

loadQuestions();
