const educationSection = document.getElementById('education-section');
educationSection.innerHTML = `
    <h2>Education</h2>
    <label for="degree">Degree:</label>
    <input type="text" id="degree" required>

    <label for="institution">Institution Name:</label>
    <input type="text" id="institution" required>

    <label for="eduLocation">Location (City, Country):</label>
    <input type="text" id="eduLocation" required>

    <label for="startDateEdu">Start Date:</label>
    <input type="date" id="startDateEdu" required>

    <label for="endDateEdu">End Date:</label>
    <input type="date" id="endDateEdu">

    <label for="gpa">GPA/Grades (Optional):</label>
    <input type="text" id="gpa">
`;
