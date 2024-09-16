const personalInfoSection = document.getElementById('personal-info-section');
personalInfoSection.innerHTML = `
    <h2>Personal Information</h2>
    <label for="fullName">Full Name:</label>
    <input type="text" id="fullName" required>

    <label for="email">Email Address:</label>
    <input type="email" id="email" required>

    <label for="phone">Phone Number:</label>
    <input type="tel" id="phone" required>

    <label for="address">Address:</label>
    <textarea id="address" required></textarea>

    <label for="linkedin">LinkedIn Profile:</label>
    <input type="url" id="linkedin">

    <label for="github">GitHub/Portfolio Link:</label>
    <input type="url" id="github">

    <label for="dob">Date of Birth:</label>
    <input type="date" id="dob">

    <label for="nationality">Nationality:</label>
    <input type="text" id="nationality" required>
`;
