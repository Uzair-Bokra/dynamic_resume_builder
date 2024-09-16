const workExperienceSection = document.getElementById('work-experience-section');
workExperienceSection.innerHTML = `
    <h2>Work Experience</h2>
    <label for="jobTitle">Job Title:</label>
    <input type="text" id="jobTitle" required>

    <label for="companyName">Company Name:</label>
    <input type="text" id="companyName" required>

    <label for="jobLocation">Location (City, Country):</label>
    <input type="text" id="jobLocation" required>

    <label for="startDateJob">Start Date:</label>
    <input type="date" id="startDateJob" required>

    <label for="endDateJob">End Date:</label>
    <input type="date" id="endDateJob">

    <label for="jobDescription">Job Description/Responsibilities:</label>
    <textarea id="jobDescription" required></textarea>
`;
