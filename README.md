# 📚 Assignment Checker API

## 🚀 Overview
The **Assignment Checker API** is a Node.js Express-based application that automates the grading of student assignment submissions. It integrates with **Google Cloud Run, Firebase Firestore, and OpenRouter AI (Gemini model)** to fetch assignments, evaluate student answers, and store grading reports.

## 🔧 Features
✅ Fetches assignments from Firestore  
✅ Evaluates student answers using AI  
✅ Stores AI-generated marks and reports  
✅ Secure authentication using Firebase Admin SDK  
✅ Hosted on **Google Cloud Run** for scalability  

## 📂 Project Structure
📦 assignment-checker ├── 📂 config │ ├── firebase_service_account.json │ ├── firebase.js │ ├── googleAuth.js ├── 📂 controllers │ ├── assignmentCheckerController.js │ ├── assignmentController.js ├── 📂 middlewares │ ├── authMiddleware.js ├── 📂 models │ ├── assignmentModel.js │ ├── submissionModel.js ├── 📂 routes │ ├── assignmentRoutes.js ├── 📂 services │ ├── aiGradingService.js │ ├── databaseService.js │ ├── emailService.js │ ├── googleDocsService.js │ ├── googleDriveService.js ├── server.js ├── .env ├── .gitignore ├── Dockerfile ├── package.json └── README.md

bash
Copy
Edit

## ⚙️ Installation
### 1️⃣ Clone the repository
```sh
git clone https://github.com/your-username/assignment-checker.git
cd assignment-checker
2️⃣ Install dependencies
sh
Copy
Edit
npm install
3️⃣ Setup Firebase Service Account
Place the Firebase service account JSON in the config/ directory.

Add Firestore database and enable Firebase Admin SDK.

4️⃣ Create a .env file
ini
Copy
Edit
PORT=5000
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_client_email
FIREBASE_PRIVATE_KEY=your_private_key
OPENROUTER_API_KEY=your_api_key
▶️ Running the API
Development Mode
sh
Copy
Edit
npm run dev
Production Mode
sh
Copy
Edit
npm start
Deploy to Google Cloud Run
sh
Copy
Edit
gcloud run deploy assignment-checker --source .
🔥 API Endpoints
Method	Endpoint	Description
GET	/api/assignments/check/:assignmentId	Fetch & evaluate assignment submissions
Example:

sh
Copy
Edit
curl -X GET "https://assigment-checker-xyz.run.app/api/assignments/check/Ha5zZ1Vk0a60j2fkgmT"
📜 License
This project is licensed under the MIT License.

🤝 Contributing
Pull requests are welcome! Feel free to contribute.
