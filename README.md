# User_-posts_-Project

A social media-style posts application with a **Node.js/Express backend** and **React (Vite) frontend**. Users can create posts with images (powered by ImageKit), view a feed of posts, and interact with content.

## 🚀 Features

- **Create Posts** — Create new posts with text and image uploads
- **Post Feed** — View all posts in a feed layout
- **Image Upload** — Image handling via ImageKit (cloud image storage & optimization)
- **REST API** — Express backend with MongoDB for data persistence
- **React Frontend** — Vite-powered React frontend with modern component structure

## 📁 Project Structure

```
user_miniproject/
├── .gitignore
├── Backend/                          # Node.js + Express backend
│   ├── server.js                     # Entry point, starts server on port 3000
│   ├── app.js                        # Express app configuration
│   ├── db.js                         # MongoDB connection
│   ├── post.model.js                 # Post schema (content, image, timestamps)
│   ├── storage.service.js            # ImageKit image storage service
│   ├── .env                          # Environment variables
│   └── package.json
└── frontend/                         # React + Vite frontend
    ├── src/
    │   ├── App.jsx                   # Root app component
    │   ├── createpost.jsx            # Create post form component
    │   ├── Feed.jsx                  # Posts feed component
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── vite.config.js
    ├── eslint.config.js
    └── .gitignore
```

## 🛠️ Backend API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/posts` | Get all posts |
| POST | `/api/posts` | Create a new post |
| ... | ... | Additional post routes |

*(Exact routes depend on backend implementation in `app.js`)*

## 🛠️ Frontend Pages/Components

| Component | Description |
|-----------|-------------|
| `App.jsx` | Root application with routing |
| `createpost.jsx` | Form to create a new post |
| `Feed.jsx` | Display feed of all posts |

## 📦 Installation & Setup

### Backend

```bash
# Navigate to backend
cd Backend

# Install dependencies
npm install

# Create .env file
# Required: MONGODB_URI, IMAGEKIT credentials, etc.

# Run development server
npx nodemon server.js
# or
node server.js
```

### Frontend

```bash
# Navigate to frontend
cd frontend

# Install dependencies
npm install

# Run development server
npm run dev
```

Frontend runs on **http://localhost:5173** (default Vite port)

### .env Variables (Backend)

```env
MONGODB_URI=<your-mongodb-connection-string>
IMAGEKIT_URL_ENDPOINT=<your-imagekit-url-endpoint>
IMAGEKIT_PUBLIC_KEY=<your-imagekit-public-key>
IMAGEKIT_PRIVATE_KEY=<your-imagekit-private-key>
PORT=3000
```

## 🛠️ Tech Stack

**Backend:**
- Node.js + Express
- MongoDB + Mongoose
- ImageKit (image storage & CDN)
- Multer (file upload handling)
- CORS
- dotenv

**Frontend:**
- React
- Vite
- CSS

## 👨‍💻 Author

**anubh7** — https://github.com/anubh7

## 📄 License

ISC