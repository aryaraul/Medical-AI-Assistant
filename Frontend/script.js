
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const clearBtn = document.getElementById("clearBtn");
const processBtn = document.getElementById("processBtn");

const transcript = document.getElementById("transcript");
const summary = document.getElementById("summary");


const SpeechRecognition =
    window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
    alert("Speech Recognition is not supported in this browser.");
}

const recognition = new SpeechRecognition();

recognition.continuous = true;
recognition.interimResults = true;
recognition.lang = "en-US";


startBtn.addEventListener("click", function () {

    transcript.value = "";

    recognition.start();

});


stopBtn.addEventListener("click", function () {

    recognition.stop();

});


clearBtn.addEventListener("click", function () {

    transcript.value = "";
    summary.value = "";

});


recognition.onresult = function (event) {

    let text = "";

    for (let i = 0; i < event.results.length; i++) {

        text += event.results[i][0].transcript + " ";

    }

    transcript.value = text;

};


recognition.onerror = function (event) {

    console.log(event.error);

};

processBtn.addEventListener("click", async function () {

    const transcriptText = transcript.value;

    if (transcriptText.trim() === "") {

        alert("Please record something first.");

        return;

    }

    processBtn.innerText = "Processing...";

    try {

        const response = await fetch("http://127.0.0.1:5000/summary", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                transcript: transcriptText

            })

        });

        const data = await response.json();
        console.log(data);

        summary.value =
`Patient Name : ${data.patientName}

Age : ${data.age}

Gender : ${data.gender}

Chief Complaint :
${data.chiefComplaint}

Symptoms :
${data.symptoms.join(", ")}

Diagnosis :
${data.diagnosis}

Clinical Summary :
${data.clinicalSummary}`;

        localStorage.setItem(
            "prescription",
            JSON.stringify(data)
        );

        window.open("print.html", "_blank");

    }

    catch (error) {

        console.log(error);

        alert("Unable to connect to server.");

    }

    processBtn.innerText = "Process with AI";

});