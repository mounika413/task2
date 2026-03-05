document.getElementById("assignmentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("studentName").value.trim();
    let roll = document.getElementById("rollNumber").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let date = document.getElementById("submissionDate").value;

    let valid = true;

    // Clear previous errors
    document.getElementById("nameError").innerText = "";
    document.getElementById("rollError").innerText = "";
    document.getElementById("subjectError").innerText = "";
    document.getElementById("dateError").innerText = "";

    if (name === "") {
        document.getElementById("nameError").innerText = "Student name is required";
        valid = false;
    }

    if (roll === "") {
        document.getElementById("rollError").innerText = "Roll number is required";
        valid = false;
    }

    if (subject === "") {
        document.getElementById("subjectError").innerText = "Subject name is required";
        valid = false;
    }

    if (date === "") {
        document.getElementById("dateError").innerText = "Submission date is required";
        valid = false;
    }

    if (valid) {
        let li = document.createElement("li");
        li.innerHTML = `
            ${name} | ${roll} | ${subject} | ${date}
            <button onclick="this.parentElement.remove()">Delete</button>
        `;

        document.getElementById("assignmentList").appendChild(li);

        alert("Assignment submitted successfully!");
        document.getElementById("assignmentForm").reset();
    }
});