//we are gonna create the function for the search box in our resource search engine
//first we are gonna make the array for our notes. These are our current notes but we will keep adding

const notes = [
  { title: "Compounds of Life", subject: "Biology", link: "https://docs.google.com/document/d/1rp3mzONRls5FifB_oemupViK7D6OJrLVnw4IivvN-dY/edit?usp=sharing" },
  { title:"Structure of Eukaryotic Cells", subject: "Biology", link: "https://docs.google.com/document/d/1lBd2BvTTCU0As_VXXyiFvkyIoyeE73o9GV_Mq_bpFHo/edit?tab=t.0#heading=h.kz0du7p8bw1b" },
  { title:"", subject:"", link:"" },
  { title:"Finding Secotrs and Arcs (degrees)", subject:"Geometry", link:"" },
  { title:"Imaginary and Complex Numbers", subject:"Algebra 2 (II)", link:"https://docs.google.com/document/d/1rGKOT4ttsSZsBpoLk8Txl6Ovhl_obSLyRHksqHWz5v4/edit?usp=sharing" },
  { title:"", subject:"", link:"" },
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
  { title:"", subject:"", link:""},
];
document.getElementById("searchBtn").onclick = function(e) {
    e.preventDefault(); // Prevent form submission
    let searchInput = document.getElementById("searchInput").value;
    let results = notes.filter(note => note.title.toLowerCase().includes(searchInput.toLowerCase()));
    displayResults(results);
};
function displayResults(results) {
    let linkContainer = document.getElementById("linkBox");
    linkContainer.innerHTML = ""; // Clear previous results
    if (results.length == 0) {
        linkContainer.innerHTML = "No results found :(";
    } else {
        results.forEach(note => {
            let noteElement = document.createElement("div");
            noteElement.innerHTML = `<a href="${note.link}" target="_blank">${note.title}</a>`;
            linkContainer.appendChild(noteElement);
        });
    }
}



