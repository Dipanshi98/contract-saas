# 📑 Contract Management and Query System (SaaS)

A SaaS-style **Contract Management and Query System** built with **React + Tailwind CSS (frontend)**, **FastAPI (backend)**, and **PostgreSQL + pgvector (database)**.  
This project supports **JWT authentication, multi-tenancy, contract upload & parsing, RAG-style query interface, and AI insights**.

---

## 🚀 Features
- 🔐 **Authentication (JWT)** → Secure login and multi-tenancy (user-specific contracts).  
- 📂 **Upload Contracts** → Upload PDF/DOCX/TXT, parsed into text chunks with embeddings.  
- 🗄️ **Database (Postgres + pgvector)** → Store contract chunks + metadata.  
- 📊 **Dashboard** → Manage contracts, view metadata, filters, pagination, risk score.  
- 🤖 **Query Interface (RAG)** → Ask natural language queries, retrieve evidence, and show AI answers.  
- ☁️ **Deployment Ready** → Frontend (Netlify/Vercel), Backend (Render/Heroku), DB (Supabase/Docker).  

---

## 📂 Project Structure
contract-management-system/
│── frontend/ # React + Tailwind frontend
│── backend/ # FastAPI backend
│── db/ # SQL schema + setup instructions
│── README.md # Documentation

---

## 🖥️ Frontend (React + Tailwind)
### Installation
cd frontend
npm install
npm run dev
Build for Production
npm run build
Deployment
Netlify/Vercel → Connect GitHub repo & deploy.
Configure VITE_API_BASE_URL in .env to point to backend API.
⚙️ Backend (FastAPI)
Installation
cd backend
python -m venv venv
source venv/bin/activate   # (Linux/Mac)
venv\Scripts\activate      # (Windows)

pip install -r requirements.txt
uvicorn main:app --reload
Endpoints
POST /api/auth/login → Login, returns JWT token.
POST /api/contracts/upload → Upload contracts.
GET /api/contracts → Get list of contracts.
POST /api/query → Ask questions about contracts.
🗄️ Database (Postgres + pgvector)
Schema Setup
CREATE EXTENSION IF NOT EXISTS vector;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL
);

CREATE TABLE contracts (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id),
    name TEXT,
    parties TEXT,
    expiry DATE,
    status TEXT,
    risk_score TEXT,
    content TEXT
);

CREATE TABLE contract_chunks (
    id SERIAL PRIMARY KEY,
    contract_id INT REFERENCES contracts(id),
    chunk TEXT,
    embedding VECTOR(1536)
);
Use Supabase (recommended) or a local Docker PostgreSQL with pgvector.
🔍 Query Workflow (RAG-style)
User enters a natural language query in the UI.
Backend retrieves top-k contract chunks from Postgres using embeddings.
Mock AI generates an answer + evidence (can be replaced with OpenAI API).
Response is shown in the dashboard.
📸 Screenshots (Mock)
Login Page
Dashboard with Contracts
Upload Contract UI
Query Interface with AI Answer + Evidence
☁️ Deployment
Frontend → Deploy on Netlify/Vercel.
Backend → Deploy on Render/Heroku with PostgreSQL add-on.
Database → Use Supabase (managed Postgres + pgvector).
📌 Future Scope
Integrate real AI embeddings (OpenAI/LLMs).
Add contract clause risk detection with ML models.
Enable role-based access control (RBAC) for multi-tenant SaaS.
Support notifications/reminders for contract expiry.
👨‍💻 Author
Developed as a Full-Stack SaaS Project for internship/academic submission.

