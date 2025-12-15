# BlogApp — Blog Platform

DevLog is a full-stack blog application built with **React** and **Appwrite**.  
It allows users to authenticate, create and manage blog posts with rich text content and images, while enforcing proper authorization and access control.

---

## ✨ Features

- User authentication (Signup / Login / Logout)
- Protected routes
- Create, edit, and delete blog posts
- Text editor for writing posts
- Image upload and display using Appwrite Storage
- Role-based actions (only author can edit/delete their post)
- Reusable component architecture

---

## 🛠️ Tech Stack

### Frontend
- React
- React Router
- Redux Toolkit
- Tailwind CSS
- React Hook Form
- TinyMCE (Rich Text Editor)

### Backend (BaaS)
- Appwrite
  - Authentication
  - Database
  - Storage

---

## 📝 Post Management

Each blog post includes:
- Title
- Slug (used as document ID)
- Rich text content
- Featured image
- Status (active / inactive)
- Author ID

The slug is used as the document ID to simplify routing and avoid additional lookups.

---