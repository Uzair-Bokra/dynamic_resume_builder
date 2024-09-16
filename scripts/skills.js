const skillsSection = document.getElementById('skills-section');
skillsSection.innerHTML = `
    <h2>Skills</h2>
    <label for="technicalSkills">Technical Skills:</label>
    <input type="text" id="technicalSkills" placeholder="e.g., HTML, CSS, JavaScript">

    <label for="softSkills">Soft Skills:</label>
    <input type="text" id="softSkills" placeholder="e.g., Leadership, Teamwork">

    <label for="languages">Languages:</label>
    <input type="text" id="languages" placeholder="e.g., English, Urdu">
`;
