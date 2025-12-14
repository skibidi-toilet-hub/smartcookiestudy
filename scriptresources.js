//we are gonna create the function for the search box in our resource search engine
//first we are gonna make the array for our notes. These are our current notes but we will keep adding

const notes = [
 { title: "Compounds of Life-that fat, protein, etc.", subject: "Biology", link: "https://docs.google.com/document/d/1rp3mzONRls5FifB_oemupViK7D6OJrLVnw4IivvN-dY/edit?usp=sharing" },
  { title:"Structure of Eukaryotic Cells-the bricks in our bricks", subject: "Biology", link: "https://docs.google.com/document/d/1lBd2BvTTCU0As_VXXyiFvkyIoyeE73o9GV_Mq_bpFHo/edit?tab=t.0#heading=h.kz0du7p8bw1b" },
  { title:"Enzymes-the helpers in our bodies", subject: "Biology", link: "https://docs.google.com/document/d/1HyFps-6YQ5rGnts1RYyigb3k_uaaBMvyg3CRfibU5Tw/edit?usp=sharing"},
  { title:"Hydrologic Cycle-water flowing through Earth", subject:"Environmental Science", link:"https://docs.google.com/document/d/1SPVe5NnaRN1QdwbRMyzanpVbW-ZZwzLAM2YBBjCf9bQ/edit?usp=sharing" },
  { title:"Weather Fronts & Air Masses-properties and weather", subject:"Environmental Science", link:""},
  { title:"Formation of Natural Disasters-hurricanes, tornadoes, etc.", subject: "Environmental Science", link: ""},
  { title:"Basics of potential and kinetic energy", subject: "Physics", link: "https://docs.google.com/document/d/1hGz1Hd51uuiiqp5CpE8YAthbqoCK-Hs0L4ByfAuk0ek/edit?usp=sharing"
  { title:"Inscribed Angle Proof (Khan Academy)", subject:"Geometry", link:"https://www.khanacademy.org/math/geometry/hs-geo-circles/hs-geo-inscribed-angles/a/inscribed-and-central-angles-proof" },
  { title:"Imaginary and Complex Numbers", subject:"Algebra 2 (II)", link:"https://docs.google.com/document/d/1rGKOT4ttsSZsBpoLk8Txl6Ovhl_obSLyRHksqHWz5v4/edit?usp=sharing" },
  { title:"Adding, FOIL-ing, and 'Defining' Polynomials", subject:"Algebra 2 (II)", link:""},
  { title:"Degree, Zeros, Factors-how to find the polynomial shape", subject:"Algebra 2 (II)", link:""},
  { title:"The French and Indian War Overivew-britain and america tea pt. 1", subject:"US History", link:"https://docs.google.com/document/d/1dMeVZCPg2PbqewWd2Srf_dA6_GQkEHFPlcy6TyGJnH0/edit?usp=sharing"},
  { title:"British Policies for Colonial America-britain and america tea", subject:"US History", link:"https://docs.google.com/document/d/1-eKMBDBDJ4uMvNJtAO0FIGzCV4KnMShclXM8kC2YZdY/edit?usp=sharing"},
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
        linkContainer.innerHTML = `No results found for "${searchInput}." :( Try something different?`;
    } else {
        results.forEach(note => {
            let noteElement = document.createElement("div");
            noteElement.innerHTML = `<a href="${note.link}" target="_blank">${note.title}</a>`;
            linkContainer.appendChild(noteElement);
        });
    }
}







