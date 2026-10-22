# Predictive Healthcare Analytics — Flask backend

## Requirements
- Python 3.10+
- Flask (`pip install -r requirements.txt`)

## Run on Windows
1. Extract this project folder.
2. Open the folder in VS Code.
3. Open Terminal in VS Code.
4. Create a virtual environment (recommended):
   ```powershell
   py -m venv .venv
   .venv\Scripts\activate
   ```
5. Install dependencies:
   ```powershell
   pip install -r requirements.txt
   ```
6. Set a secret key for local development (PowerShell):
   ```powershell
   $env:PHA_SECRET_KEY = "replace-with-a-long-random-secret"
   ```
7. Start the backend:
   ```powershell
   python app.py
   ```
8. Open **http://127.0.0.1:5000**. Do not open `index.html` directly, because the UI needs the Flask API.

## API endpoints
- `GET /api/health` — service check
- `POST /api/register` — register with email/password
- `POST /api/login`, `POST /api/logout`, `GET /api/me` — session authentication
- `PATCH /api/profile` — update display name
- `GET/PUT /api/settings` — user settings
- `POST /api/predict` — validate inputs, produce rule-based screening signals, save a minimal history summary
- `GET/DELETE /api/history` — per-user history
- `POST /api/uploads` — authenticated report uploads, max 12 MB request; accepted types PDF, PNG, JPG, WEBP, TXT

## Storage
SQLite database and uploads are placed under `instance/`. The upload directory is not served as a public static folder. The backend stores files but does not extract or interpret clinical report contents.

## Critical production warnings
This is a learning prototype, not a production medical system. Before deploying publicly:
- Set a strong, secret `PHA_SECRET_KEY` from environment configuration.
- Use HTTPS and set `PHA_COOKIE_SECURE=1`.
- Add CSRF protection, rate limiting, account recovery, email verification, audit logging, malware scanning, strict upload quotas, and a managed database.
- Encrypt and control access to patient records/files; add consent, retention/deletion controls and privacy/legal review.
- The demo's rule-based score is not clinically validated and does not predict future disease. For real AI, use appropriately validated, modality-specific models, clinical governance, external validation, bias assessment, and clinician oversight.
- Uploaded report files are stored but not medically interpreted. Do not use real patient data in this prototype.
- Passwords are hashed server-side, unlike the earlier browser-only prototype; still do not deploy without the production hardening above.


## Added visualization and condition-screening table
The results screen includes an animated screening indicator, animated ranked contributor bars, a contributing-factor table, and a separate table of possible health areas to discuss with a clinician (for example, high blood pressure screening, dysglycaemia assessment, obesity-related metabolic concerns, tobacco-associated concerns, and low oxygen saturation concerns when relevant).

These are rule-triggered screening flags based on entered values—not predictions that a disease will occur and not disease-specific probabilities. Do not present the overall score as a probability of future disease. Real probability estimates require a suitable trained model, representative data, external clinical validation, calibration, and clinician oversight.


## Frontend/backend connection
The browser frontend calls same-origin endpoints such as `/api/login`, `/api/register`, `/api/predict`, `/api/history`, and `/api/uploads`. Flask serves `static/index.html`, `static/style.css`, and `static/script.js`, so the frontend and backend are connected automatically when you open the app at the Flask server URL. Do not open the HTML file directly or use a static-only host for this integrated setup.

## Optional online deployment (Render)
1. Push this project folder to a GitHub repository.
2. In Render, create a new Blueprint or Web Service from that repository.
3. Render can use `render.yaml`; ensure `PHA_SECRET_KEY` is a private generated secret and `PHA_COOKIE_SECURE=1`.
4. After deployment, open the service URL. The frontend and API are served from the same domain.
5. Important: local SQLite and uploaded files may not persist across redeploys on ephemeral hosting. Configure a persistent disk and `PHA_DB_PATH` / `PHA_UPLOAD_DIR`, or use a managed database and private object storage before relying on saved accounts/history/uploads.

The app is a prototype and should not be used with identifiable patient data or for real clinical decisions. Production deployment needs additional security and privacy review.


## Optional AI report explanation and AI assistant
The AI feature uses the OpenAI Responses API through the server-side Python SDK. The browser never receives the API key.

### Enable AI on Windows PowerShell
1. Install updated dependencies:
   ```powershell
   python -m pip install -r requirements.txt
   ```
2. Create an API key in your Google Gemini API account. API access and billing may be required.
3. In the same terminal where you will run the server, set your key:
   ```powershell
   $env:GEMINI_API_KEY = "paste-your-own-api-key-here"
   $env:PHA_AI_MODEL = "gemini-2.5-flash"
   $env:PHA_SECRET_KEY = "replace-with-a-long-random-secret"
   python app.py
   ```
   Do not share your key, commit it to GitHub, or paste it into frontend files. These PowerShell environment variables apply only to that terminal session.
4. Log in, select reports, click **Upload reports**, tick the AI consent checkbox, then click **Analyze uploaded reports with AI**. You can also ask the AI assistant a question about the latest report explanation and current form inputs.

### AI endpoints
- `GET /api/ai/status` — reports whether the server has AI configuration
- `POST /api/ai/analyze-reports` — analyzes the current account's most recently uploaded supported reports
- `POST /api/ai/ask` — answers an educational question using the latest AI report explanation and allowlisted current form fields

### Privacy, cost, and clinical safety
- The report-analysis action sends selected account report contents to the configured AI provider. Use only with appropriate consent/authorization; do not upload identifiable patient information unless your organization has approved the provider, configuration, legal basis, and data handling.
- API usage may incur charges. Set spending limits/usage alerts in the provider account.
- The model may misread scans or reports and may omit important findings. This feature is an educational report explainer, not a radiology/ECG interpretation system, diagnosis, triage service, or validated disease prediction model.
- It does not generate numerical future-disease probabilities or recommend medicines. A qualified healthcare professional must interpret the original reports and clinical context.
- The app stores report files locally and stores generated AI explanations in SQLite. Review access controls, retention/deletion, encryption, audit logging, and production security before using any real patient data.


## Hosted AI configuration

This version uses the Google Gemini API through the server-side `GEMINI_API_KEY` environment variable. Never put this key in browser JavaScript or commit it to GitHub. Configure `GEMINI_API_KEY`, `PHA_AI_MODEL` (default `gemini-2.5-flash`), and a strong `PHA_SECRET_KEY` in the hosting provider's environment settings. Gemini free-tier availability, model access, rate limits, and data-use terms may vary by account and region. Do not use real patient data unless your privacy, consent, and provider terms permit it.

The default Render filesystem and free service are not a production-grade store for patient records: local files may be ephemeral and free instances can sleep. Before using real users, configure persistent database/file storage, HTTPS, backups, access controls, retention/deletion procedures, and review applicable privacy requirements. This project is an educational prototype, not a validated medical diagnostic device.
