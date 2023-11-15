<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Blood Donation Network</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1 style="text-align: center; width: 100%;">Blood Donation Network</h1>
        <button id="requestButton">Request Blood</button>
    </header>

    <section id="donorsList">
        <h2>Blood Donors</h2>
        <ul id="donors"></ul>
    </section>
    
    <section id="requestForm">
        <h2>Request Blood</h2>
        <form id="bloodRequestForm">
            <input type="text" id="patientName" placeholder="Patient Name" required>
            <select id="bloodType" required>
                <option value="" disabled selected>Select Blood Type</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
            </select>
            <button type="submit">register donor</button>
        </form>
    </section>
    <script src="script.js"></script>
</body>

</html>
