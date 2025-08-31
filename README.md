📁 Drive Project — Backend Logic
A secure, full-featured backend for a Google Drive-style application built with Node.js, Express, MongoDB, Cloudinary, and JWT authentication. Users can register, log in, upload files to Cloudinary, view their uploaded files, and download them securely via signed URLs.

🚀 Features
- 🔐 User Authentication — Register & login with JWT-based session management
- ☁️ Cloudinary Integration — Upload files directly to Cloudinary using multer-storage-cloudinary
- 📥 Secure File Downloads — Signed URLs for authenticated access to private files
- 🧾 File Listing — View all uploaded files with download links
- 🧰 Protected Routes — Middleware to restrict access to authenticated users only
- 🎨 EJS Frontend — Clean UI with TailwindCSS and Flowbite components

🛠️ Tech Stack
|  |  | 
|  |  | 
|  |  | 
|  |  | 
|  |  | 
|  |  | 
|  |  | 
|  |  | 



📸 Screenshots
Replace each placeholder with actual screenshots once you capture them.

🧑‍💻 User Registration
<img width="1917" height="1079" alt="Screenshot 2025-08-31 112403" src="https://github.com/user-attachments/assets/a5fc6bd7-05f8-4beb-8291-925222ea846e" />

🔐 User Login
<img width="1918" height="1077" alt="Screenshot 2025-08-31 112440" src="https://github.com/user-attachments/assets/fe2c1619-46a3-4a3e-a759-4b86fd6a5307" />

📤 File Upload
<img width="1919" height="1079" alt="Screenshot 2025-08-31 112501" src="https://github.com/user-attachments/assets/3d336e72-f094-4499-a30c-f978de5929b1" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 112513" src="https://github.com/user-attachments/assets/e02ef43a-3d9b-4c5e-824f-0d79fd9d4d6b" />
<img width="1919" height="1079" alt="Screenshot 2025-08-31 112652" src="https://github.com/user-attachments/assets/444f9e2c-e051-4707-b964-13adce8f32ad" />

📄 File Listing
<img width="1919" height="1079" alt="Screenshot 2025-08-31 112513" src="https://github.com/user-attachments/assets/b245fa9a-d7ed-4cae-8034-dec4c59168f9" />

📥 Secure File Download
<img width="1916" height="1079" alt="Screenshot 2025-08-31 112706" src="https://github.com/user-attachments/assets/27bcb95b-c609-46e9-b575-268512e92cb6" />


📦 Installation
git clone https://github.com/sagarsaini010/drive-project.git
cd drive-project
npm install


Create a .env file:
MONGO_URI=mongodb://127.0.0.1:27017/men-drive
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret



▶️ Run the App
npm run dev



🔐 Auth Middleware
All protected routes use JWT stored in cookies. Middleware verifies token and attaches req.user.

📁 File Upload Flow
- Files are uploaded via Multer to Cloudinary
- Cloudinary public_id is stored in MongoDB
- Signed URLs are generated dynamically for secure downloads

📄 Folder Structure
├── app.js
├── routes/
│   └── index.routes.js
├── models/
│   └── user.model.js
│   └── file.model.js
├── middlewares/
│   └── auth.js
├── views/
│   └── *.ejs
├── public/
│   └── css, js



🙌 Author
Sagar Saini
Backend Developer | Passionate about secure, scalable systems
📧 sagarsaini954818@gmail.co

