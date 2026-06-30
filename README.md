# 🩺 Medical AI Assistant

An AI-powered web application that helps doctors generate structured clinical summaries and prescriptions from patient-doctor conversations using Speech Recognition and Large Language Models (LLMs).

The application converts spoken conversations into text, extracts key medical information using AI, and presents it in a structured prescription format, reducing manual documentation time and improving workflow efficiency.

---

## 🚀 Features

- 🎤 Real-time Speech-to-Text transcription
- 🤖 AI-generated clinical summaries
- 💊 Automatic prescription generation
- 📋 Extracts patient information
- 🩺 Identifies symptoms and diagnosis
- 📑 Generates structured medical reports
- 🌐 Simple and responsive web interface
- 🔒 JSON-based API communication

---

## 📷 Demo

### Workflow

```
Doctor & Patient Conversation
            │
            ▼
 Speech Recognition (Browser)
            │
            ▼
     Flask Backend API
            │
            ▼
 Large Language Model (LLM)
            │
            ▼
 Structured Medical JSON
            │
            ▼
 Prescription & Clinical Summary
```

---

# 🛠️ Tech Stack

### Frontend

- HTML5
- CSS3
- JavaScript
- Web Speech API

### Backend

- Python
- Flask
- Flask-CORS

### AI

- Gemini API
- Large Language Model (Llama 3.2)

### Tools

- VS Code
- Git & GitHub

---

# 📂 Project Structure

```
Medical-AI-Assistant/
│
├── backend/
│   ├── app.py
│   ├── requirements.txt
│   ├── .env
│   └── ...
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── assets/
│
├── README.md
└── LICENSE
```

---

# ⚙️ Installation

## 1. Clone Repository

```bash
git clone https://github.com/yourusername/Medical-AI-Assistant.git

cd Medical-AI-Assistant
```

---

## 2. Create Virtual Environment

### Windows

```bash
python -m venv venv

venv\Scripts\activate
```

### Linux/Mac

```bash
python3 -m venv venv

source venv/bin/activate
```

---

## 3. Install Dependencies

```bash
pip install -r requirements.txt
```

---

## 4. Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
OPENROUTER_API_KEY=your_api_key_here
```

---

## 5. Run Flask Server

```bash
cd backend

python app.py
```

Server runs on

```
http://127.0.0.1:5000
```

---

## 6. Launch Frontend

Open another terminal.

```bash
cd frontend

python -m http.server 5500
```

Visit

```
http://localhost:5500
```

---

# 🧠 How It Works

1. Doctor starts voice recording.
2. Browser converts speech into text using the Web Speech API.
3. Transcript is sent to the Flask backend.
4. Backend sends the conversation to the LLM through OpenRouter.
5. AI extracts medical information and returns structured JSON.
6. Frontend displays:
   - Patient Details
   - Symptoms
   - Medical History
   - Clinical Observations
   - Diagnosis
   - Medicines
   - Advice
   - Clinical Summary

---

# 📄 JSON Output Format

```json
{
  "patientName": "",
  "age": "",
  "gender": "",
  "chiefComplaint": "",
  "symptoms": [],
  "medicalHistory": "",
  "clinicalObservations": "",
  "diagnosis": "",
  "clinicalSummary": "",
  "medicines": [],
  "advice": []
}
```

---

# 📌 API Endpoint

## Generate Clinical Summary

**POST**

```
/summary
```

### Request

```json
{
    "text":"Patient has fever and headache for two days..."
}
```

### Response

```json
{
  "patientName":"John Doe",
  "age":"42",
  "gender":"Male",
  "chiefComplaint":"Fever and headache",
  "symptoms":[
      "Fever",
      "Headache"
  ],
  "medicalHistory":"Hypertension",
  "clinicalObservations":"Temperature 101°F",
  "diagnosis":"Viral Fever",
  "clinicalSummary":"Patient presents with fever and headache...",
  "medicines":[
      "Paracetamol 650mg",
      "ORS"
  ],
  "advice":[
      "Drink plenty of fluids",
      "Take adequate rest"
  ]
}
```

---

# 🔮 Future Enhancements

- Patient history database
- PDF prescription download
- Multi-language speech recognition
- Voice synthesis for prescriptions
- Electronic Health Record (EHR) integration
- Authentication and user management
- Cloud deployment
- Fine-tuned medical language model

---

# 💡 Use Cases

- Hospitals
- Clinics
- Telemedicine
- Rural Healthcare
- Medical Documentation
- Digital Health Solutions

---

# 👨‍💻 Author

**Arya Raul**

Bachelor of Engineering (Computer Engineering)

GitHub: https://github.com/aryaraul

LinkedIn: https://linkedin.com/in/aryaraul

---
