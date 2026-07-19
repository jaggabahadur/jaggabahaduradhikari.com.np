import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ogidwfpxpfbpjippefow.supabase.co";
const SUPABASE_KEY = "तपाईंको पूरा Publishable Key यहाँ राख्नुहोस्";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

// Upload File
window.uploadFile = async function () {
  const file = document.getElementById("file").files[0];

  if (!file) {
    alert("Please select a file.");
    return;
  }

  const { error } = await supabase.storage
    .from("files")
    .upload(file.name, file, {
      upsert: true
    });

  if (error) {
    alert("Upload failed: " + error.message);
  } else {
    alert("File uploaded successfully!");
    loadFiles();
  }
};

// Load Files
async function loadFiles() {
  const { data, error } = await supabase.storage
    .from("files")
    .list();

  if (error) {
    console.log(error);
    return;
  }

  const list = document.getElementById("fileList");
  list.innerHTML = "";

  data.forEach(file => {
    const { data: url } = supabase.storage
      .from("files")
      .getPublicUrl(file.name);

    list.innerHTML += `
      <li>
        <a href="${url.publicUrl}" target="_blank">${file.name}</a>
      </li>
    `;
  });
}

loadFiles();
