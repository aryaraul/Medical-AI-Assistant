const data = JSON.parse(localStorage.getItem("prescription"));

if (!data) {
    alert("No prescription data found.");
    throw new Error("No prescription data found.");
}

document.getElementById("pName").innerText = data.patientName || "Not Provided";
document.getElementById("pAge").innerText = data.age || "Not Provided";
document.getElementById("pGender").innerText = data.gender || "Not specified";
document.getElementById("date").innerText = new Date().toLocaleDateString();

document.getElementById("chiefComplaint").innerText =
    data.chiefComplaint || "Not Provided";

document.getElementById("history").innerText =
    data.medicalHistory || "Not Provided";

document.getElementById("observations").innerText =
    data.clinicalObservations || "Not Provided";

document.getElementById("diagnosis").innerText =
    data.diagnosis || "Not Provided";
document.getElementById("clinicalSummary").innerText =
    data.clinicalSummary || "Not Provided";

const symptomList = document.getElementById("symptoms");

if (Array.isArray(data.symptoms)) {
    data.symptoms.forEach(symptom => {
        const li = document.createElement("li");
        li.innerText = symptom;
        symptomList.appendChild(li);
    });
}

// Medicines
const table = document.getElementById("medicineTable");

if (Array.isArray(data.medicines)) {
    data.medicines.forEach(med => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${med.name}</td>
            <td>${med.dosage}</td>
            <td>${med.frequency}</td>
            <td>${med.duration}</td>
        `;

        table.appendChild(row);

    });
}

// Advice
const adviceList = document.getElementById("adviceList");

if (Array.isArray(data.advice)) {
    data.advice.forEach(item => {

        const li = document.createElement("li");

        li.innerText = item;

        adviceList.appendChild(li);

    });
}