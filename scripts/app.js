document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Personal Info
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const dob = document.getElementById("dob").value;
    const nationality = document.getElementById("nationality").value;

    // Education
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const eduLocation = document.getElementById("eduLocation").value;
    const startDateEdu = document.getElementById("startDateEdu").value;
    const endDateEdu = document.getElementById("endDateEdu").value;
    const gpa = document.getElementById("gpa").value;

    // Skills
    const technicalSkills = document.getElementById("technicalSkills").value;
    const softSkills = document.getElementById("softSkills").value;
    const languages = document.getElementById("languages").value;

    // Work Experience
    const jobTitle = document.getElementById("jobTitle").value;
    const companyName = document.getElementById("companyName").value;
    const jobLocation = document.getElementById("jobLocation").value;
    const startDateJob = document.getElementById("startDateJob").value;
    const endDateJob = document.getElementById("endDateJob").value;
    const jobDescription = document.getElementById("jobDescription").value;

    // Generate Resume Content
    const resumeContent = `
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>LinkedIn:</strong> ${linkedin}</p>
        <p><strong>GitHub:</strong> ${github}</p>
        <p><strong>Date of Birth:</strong> ${dob}</p>
        <p><strong>Nationality:</strong> ${nationality}</p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> ${degree}</p>
        <p><strong>Institution:</strong> ${institution}</p>
        <p><strong>Location:</strong> ${eduLocation}</p>
        <p><strong>Start Date:</strong> ${startDateEdu}</p>
        <p><strong>End Date:</strong> ${endDateEdu}</p>
        <p><strong>GPA:</strong> ${gpa}</p>

        <h3>Skills</h3>
        <p><strong>Technical Skills:</strong> ${technicalSkills}</p>
        <p><strong>Soft Skills:</strong> ${softSkills}</p>
        <p><strong>Languages:</strong> ${languages}</p>

        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> ${jobTitle}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Location:</strong> ${jobLocation}</p>
        <p><strong>Start Date:</strong> ${startDateJob}</p>
        <p><strong>End Date:</strong> ${endDateJob}</p>
        <p><strong>Job Description:</strong> ${jobDescription}</p>
    `;

    document.getElementById("resumeContent").innerHTML = resumeContent;
});
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// here is a editble resume code
document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();

    generateResume();
});

function generateResume() {
    // Personal Info
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const dob = document.getElementById("dob").value;
    const nationality = document.getElementById("nationality").value;

    // Education
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const eduLocation = document.getElementById("eduLocation").value;
    const startDateEdu = document.getElementById("startDateEdu").value;
    const endDateEdu = document.getElementById("endDateEdu").value;
    const gpa = document.getElementById("gpa").value;

    // Skills
    const technicalSkills = document.getElementById("technicalSkills").value;
    const softSkills = document.getElementById("softSkills").value;
    const languages = document.getElementById("languages").value;

    // Work Experience
    const jobTitle = document.getElementById("jobTitle").value;
    const companyName = document.getElementById("companyName").value;
    const jobLocation = document.getElementById("jobLocation").value;
    const startDateJob = document.getElementById("startDateJob").value;
    const endDateJob = document.getElementById("endDateJob").value;
    const jobDescription = document.getElementById("jobDescription").value;

    // Generate Resume Content
    const resumeContent = `
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> <span class="editable" id="editFullName">${fullName}</span></p>
        <p><strong>Email:</strong> <span class="editable" id="editEmail">${email}</span></p>
        <p><strong>Phone:</strong> <span class="editable" id="editPhone">${phone}</span></p>
        <p><strong>Address:</strong> <span class="editable" id="editAddress">${address}</span></p>
        <p><strong>LinkedIn:</strong> <span class="editable" id="editLinkedin">${linkedin}</span></p>
        <p><strong>GitHub:</strong> <span class="editable" id="editGithub">${github}</span></p>
        <p><strong>Date of Birth:</strong> <span class="editable" id="editDob">${dob}</span></p>
        <p><strong>Nationality:</strong> <span class="editable" id="editNationality">${nationality}</span></p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> <span class="editable" id="editDegree">${degree}</span></p>
        <p><strong>Institution:</strong> <span class="editable" id="editInstitution">${institution}</span></p>
        <p><strong>Location:</strong> <span class="editable" id="editEduLocation">${eduLocation}</span></p>
        <p><strong>Start Date:</strong> <span class="editable" id="editStartDateEdu">${startDateEdu}</span></p>
        <p><strong>End Date:</strong> <span class="editable" id="editEndDateEdu">${endDateEdu}</span></p>
        <p><strong>GPA:</strong> <span class="editable" id="editGpa">${gpa}</span></p>

        <h3>Skills</h3>
        <p><strong>Technical Skills:</strong> <span class="editable" id="editTechnicalSkills">${technicalSkills}</span></p>
        <p><strong>Soft Skills:</strong> <span class="editable" id="editSoftSkills">${softSkills}</span></p>
        <p><strong>Languages:</strong> <span class="editable" id="editLanguages">${languages}</span></p>

        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> <span class="editable" id="editJobTitle">${jobTitle}</span></p>
        <p><strong>Company Name:</strong> <span class="editable" id="editCompanyName">${companyName}</span></p>
        <p><strong>Location:</strong> <span class="editable" id="editJobLocation">${jobLocation}</span></p>
        <p><strong>Start Date:</strong> <span class="editable" id="editStartDateJob">${startDateJob}</span></p>
        <p><strong>End Date:</strong> <span class="editable" id="editEndDateJob">${endDateJob}</span></p>
        <p><strong>Job Description:</strong> <span class="editable" id="editJobDescription">${jobDescription}</span></p>
    `;

    document.getElementById("resumeContent").innerHTML = resumeContent;

    // Show the Edit button
    document.getElementById("editBtn").style.display = "block";
}

// Add functionality to edit the resume
document.getElementById("editBtn").addEventListener("click", function () {
    const editableElements = document.querySelectorAll(".editable");

    editableElements.forEach(function (element) {
        const currentValue = element.innerText;
        element.innerHTML = `<input type="text" value="${currentValue}" class="edit-field">`;
    });

    // Hide the Edit button and show Save Changes button
    document.getElementById("editBtn").style.display = "none";
    document.getElementById("saveChangesBtn").style.display = "block";
});

// Save the edited changes
document.getElementById("saveChangesBtn").addEventListener("click", function () {
    const editedFields = document.querySelectorAll(".edit-field");

    editedFields.forEach(function (inputField) {
        const parentElement = inputField.parentElement;
        parentElement.innerHTML = inputField.value;  // Update with new value
    });

    // Hide the Save Changes button and show Edit button again
    document.getElementById("editBtn").style.display = "block";
    document.getElementById("saveChangesBtn").style.display = "none";
});
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// ===================================================================================================================
// here is a shere resume link code
document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault();
    generateResume();
});

function generateResume() {
    // Personal Info
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const address = document.getElementById("address").value;
    const linkedin = document.getElementById("linkedin").value;
    const github = document.getElementById("github").value;
    const dob = document.getElementById("dob").value;
    const nationality = document.getElementById("nationality").value;

    // Education
    const degree = document.getElementById("degree").value;
    const institution = document.getElementById("institution").value;
    const eduLocation = document.getElementById("eduLocation").value;
    const startDateEdu = document.getElementById("startDateEdu").value;
    const endDateEdu = document.getElementById("endDateEdu").value;
    const gpa = document.getElementById("gpa").value;

    // Skills
    const technicalSkills = document.getElementById("technicalSkills").value;
    const softSkills = document.getElementById("softSkills").value;
    const languages = document.getElementById("languages").value;

    // Work Experience
    const jobTitle = document.getElementById("jobTitle").value;
    const companyName = document.getElementById("companyName").value;
    const jobLocation = document.getElementById("jobLocation").value;
    const startDateJob = document.getElementById("startDateJob").value;
    const endDateJob = document.getElementById("endDateJob").value;
    const jobDescription = document.getElementById("jobDescription").value;

    // Generate Resume Content
    const resumeContent = `
        <h3>Personal Information</h3>
        <p><strong>Full Name:</strong> <span class="editable" id="editFullName">${fullName}</span></p>
        <p><strong>Email:</strong> <span class="editable" id="editEmail">${email}</span></p>
        <p><strong>Phone:</strong> <span class="editable" id="editPhone">${phone}</span></p>
        <p><strong>Address:</strong> <span class="editable" id="editAddress">${address}</span></p>
        <p><strong>LinkedIn:</strong> <span class="editable" id="editLinkedin">${linkedin}</span></p>
        <p><strong>GitHub:</strong> <span class="editable" id="editGithub">${github}</span></p>
        <p><strong>Date of Birth:</strong> <span class="editable" id="editDob">${dob}</span></p>
        <p><strong>Nationality:</strong> <span class="editable" id="editNationality">${nationality}</span></p>

        <h3>Education</h3>
        <p><strong>Degree:</strong> <span class="editable" id="editDegree">${degree}</span></p>
        <p><strong>Institution:</strong> <span class="editable" id="editInstitution">${institution}</span></p>
        <p><strong>Location:</strong> <span class="editable" id="editEduLocation">${eduLocation}</span></p>
        <p><strong>Start Date:</strong> <span class="editable" id="editStartDateEdu">${startDateEdu}</span></p>
        <p><strong>End Date:</strong> <span class="editable" id="editEndDateEdu">${endDateEdu}</span></p>
        <p><strong>GPA:</strong> <span class="editable" id="editGpa">${gpa}</span></p>

        <h3>Skills</h3>
        <p><strong>Technical Skills:</strong> <span class="editable" id="editTechnicalSkills">${technicalSkills}</span></p>
        <p><strong>Soft Skills:</strong> <span class="editable" id="editSoftSkills">${softSkills}</span></p>
        <p><strong>Languages:</strong> <span class="editable" id="editLanguages">${languages}</span></p>

        <h3>Work Experience</h3>
        <p><strong>Job Title:</strong> <span class="editable" id="editJobTitle">${jobTitle}</span></p>
        <p><strong>Company Name:</strong> <span class="editable" id="editCompanyName">${companyName}</span></p>
        <p><strong>Location:</strong> <span class="editable" id="editJobLocation">${jobLocation}</span></p>
        <p><strong>Start Date:</strong> <span class="editable" id="editStartDateJob">${startDateJob}</span></p>
        <p><strong>End Date:</strong> <span class="editable" id="editEndDateJob">${endDateJob}</span></p>
        <p><strong>Job Description:</strong> <span class="editable" id="editJobDescription">${jobDescription}</span></p>
    `;

    document.getElementById("resumeContent").innerHTML = resumeContent;

    // Show the Edit button
    document.getElementById("editBtn").style.display = "block";

    // Generate unique URL for the resume
    const uniqueUrl = `https://resume.vercel.app/${fullName.toLowerCase().replace(/\s+/g, '-')}`;
    document.getElementById("shareableLink").innerHTML = `Shareable Link: <a href="${uniqueUrl}" target="_blank">${uniqueUrl}</a>`;

    // Show share and download buttons
    document.getElementById("downloadPdfBtn").style.display = "block";
    document.getElementById("shareLinkBtn").style.display = "block";
}

// Add functionality to download the resume as a PDF
document.getElementById("downloadPdfBtn").addEventListener("click", function () {
    const element = document.getElementById("resumeContent");
    html2pdf().from(element).save('resume.pdf');
});

// Add functionality to share the resume URL
document.getElementById("shareLinkBtn").addEventListener("click", function () {
    const link = document.getElementById("shareableLink").innerText;

    if (navigator.share) {
        navigator.share({
            title: 'My Resume',
            url: link
        }).then(() => {
            console.log('Thanks for sharing!');
        }).catch(console.error);
    } else {
        alert("Sharing is not supported in this browser.");
    }
});
