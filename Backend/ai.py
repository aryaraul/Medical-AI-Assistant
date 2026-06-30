import os
import json
from dotenv import load_dotenv
from google import genai

load_dotenv()

client = genai.Client(api_key=os.getenv("GEMINI_API_KEY"))

def generate_summary(transcript):

    prompt = f"""
You are an experienced doctor and medical AI assistant.

Analyze the doctor's conversation.

Conversation:
{transcript}

Return ONLY valid JSON.

{{
  "patientName":"",
  "age":"",
  "gender":"",
  "chiefComplaint":"",
  "symptoms":[],
  "medicalHistory":"",
  "clinicalObservations":"",
  "diagnosis":"",
  "clinicalSummary":"",
  "medicines":[
    {{
      "name":"",
      "dosage":"",
      "frequency":"",
      "duration":""
    }}
  ],
  "advice":[]
}}

Instructions:

1. Extract the following information from the conversation:
   - Patient Name
   - Age
   - Gender
   - Chief Complaint
   - Symptoms
   - Medical History
   - Clinical Observations
   - Diagnosis
   - Clinical Summary
   - Medicines
   - Advice

2. If the diagnosis is not explicitly mentioned, infer the most likely diagnosis based on the patient's symptoms and clinical information.

3. Generate a concise Clinical Summary (2–4 sentences) that includes:
   - Patient demographics (name, age, gender)
   - Presenting complaint
   - Important symptoms
   - Relevant medical history
   - Clinical impression or likely diagnosis

4. Suggest 1–3 commonly prescribed example medicines appropriate for the likely diagnosis. For each medicine include:
   - Name
   - Dosage
   - Frequency
   - Duration

5. Generate 2–3 practical medical advice points based on the patient's condition.

6. If a field cannot reasonably be determined from the conversation, return "Not Provided".

7. Return ONLY valid JSON matching the specified schema.

8. Do NOT include markdown, explanations, notes, or additional text outside the JSON object.
"""

    response = client.models.generate_content(
        model="gemini-2.5-flash",
        contents=prompt
    )

    text = response.text.strip()

    if text.startswith("```"):
        text = text.replace("```json", "").replace("```", "").strip()

    return json.loads(text)