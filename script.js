import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

const SUPABASE_URL = "https://ogidwfpxpfbpjippefow.supabase.co";
const SUPABASE_KEY = "YOUR_PUBLISHABLE_KEY";

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

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
        alert(error.message);
    } else {
        alert("Upload Successful");
        loadFiles();
    }
};

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
            <a href="${url.publicUrl}" target="_blank">
                ${file.name}
            </a>
        </li>
        `;

    });

}

loadFiles();
