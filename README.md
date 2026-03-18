# 🚀 Thandolwethu Joni - Portfolio Website

A modern, full-featured portfolio website built with React, featuring a stunning 3D landing page, blog management system, and admin dashboard.

---

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Admin Panel](#admin-panel)
- [Styling System](#styling-system)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)

---

## ✨ Features

### Public Features
- 🎨 **3D Landing Page** - Interactive Three.js background with geometric shapes
- 📱 **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- 🧭 **Navigation** - Fixed navbar with smooth scrolling
- 📝 **Blog System** - Read blog posts with markdown support
- 💼 **Portfolio Sections**:
  - About Me
  - Projects (with GitHub repos integration)
  - Skills
  - Certifications
  - Contact Form (EmailJS integration)
- 🎨 **Navy Blue Theme** - Consistent professional color scheme

### Admin Features
- 🔐 **Secure Login** - Password-protected admin area
- 📊 **Dashboard** - Manage all content from one place
- ✍️ **Blog Management**:
  - Create new posts
  - Edit existing posts
  - Delete posts
  - Auto-generated URL slugs
  - Markdown support
- 🎓 **Qualifications Management** - Add/edit/delete certifications
- 🎨 **Glass Morphism UI** - Beautiful translucent design
- 🌌 **3D Backgrounds** - Animated Three.js scenes

---

## 🛠️ Tech Stack

- **Framework:** React 18.3.1
- **Routing:** React Router 6.28.0
- **Build Tool:** Vite 6.4.1
- **3D Graphics:** Three.js
- **Animations:** Framer Motion 11.11.17
- **Styling:** CSS (Inline styles + CSS files)
- **Email:** EmailJS
- **Storage:** LocalStorage (for blog posts and data)

---

## 📁 Project Structure

```
final_portfolio/
├── public/                  # Static assets
├── src/
│   ├── admin/               # Admin-only components
│   │   ├── Dashboard.jsx    # Main admin dashboard
│   │   ├── Login.jsx        # Admin login page
│   │   ├── ProtectedRoute.jsx # Auth guard
│   │   ├── admin.css        # Admin styles (navy theme)
│   │   └── adminStorage.js  # Storage utilities
│   │
│   ├── components/
│   │   ├── Certifications/
│   │   │   └── CertificationManager.jsx # Cert display
│   │   ├── Chatbot/         # Chatbot components
│   │   ├── Landing/
│   │   │   ├── Landing.jsx      # 3D landing page
│   │   │   ├── landing.css      # Landing styles
│   │   │   └── three-landing.js # Three.js setup
│   │   ├── Footer.jsx
│   │   ├── GitHubRepos.jsx
│   │   ├── GlobalBackground.jsx
│   │   ├── Hero.jsx
│   │   └── Navbar.jsx
│   │
│   ├── context/
│   │   ├── AuthContext.jsx      # Authentication state
│   │   └── ThemeContext.jsx     # Theme management
│   │
│   ├── data/
│   │   ├── certifications.json  # Certifications data
│   │   ├── messages.json        # Contact messages
│   │   └── projects.json        # Portfolio projects
│   │
│   ├── hooks/
│   │   └── useChatbot.js        # Chatbot hook
│   │
│   ├── pages/
│   │   ├── About.jsx        # About page
│   │   ├── Blog.jsx         # Blog listing
│   │   ├── BlogPost.jsx     # Single blog post
│   │   ├── Contact.jsx      # Contact form
│   │   ├── CreatePost.jsx   # Create blog post (admin)
│   │   ├── EditPost.jsx     # Edit blog post (admin)
│   │   ├── Projects.jsx     # Projects showcase
│   │   └── Skills.jsx       # Skills page
│   │
│   ├── posts/
│   │   └── *.md             # Blog post markdown files
│   │
│   ├── App.jsx              # Main app component
│   ├── index.css            # Global CSS styles
│   ├── main.jsx             # Entry point
│   └── router.jsx           # React Router config
│
├── package.json
├── vite.config.js
└── README.md
```

---

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd final_portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173` (or the port shown in terminal)

---

## 📖 Usage

### Public Site

1. **Landing Page**
   - First-time visitors see an animated 3D landing page
   - Click "Enter" to access the main portfolio

2. **Navigation**
   - Use the navbar to navigate between sections:
     - Home
     - About
     - Projects
     - Skills
     - Contact
     - Blog

3. **Contact Form**
   - Fill out the form on the Contact page
   - Powered by EmailJS (configure your keys)

---

## 🔐 Admin Panel

### Access Admin Dashboard

1. **Login**
   - Navigate to `/admin`
   - Enter password: `admin123` (change this in production!)

2. **Dashboard Features**

   **Blog Posts:**
   - View all published posts
   - Click "➕ Create New Post" to write a new blog post
   - Click "✏️ Edit" to modify existing posts
   - Click "🗑️ Delete" to remove posts

   **Qualifications:**
   - Add certifications with title, issuer, date, and notes
   - Edit or delete existing qualifications

### Creating a Blog Post

1. Click "➕ Create New Post" on the dashboard
2. Fill in the form:
   - **Title:** Your post title (slug auto-generates)
   - **Slug:** URL-friendly version (e.g., "my-first-post")
   - **Date:** Publication date
   - **Excerpt:** Short description
   - **Content:** Full post (supports Markdown)
3. Click "📝 Publish Post"

### Editing a Blog Post

1. Click "✏️ Edit" on any post in the dashboard
2. Modify the fields
3. Click "💾 Save Changes"

### Data Storage

- All data is stored in browser **localStorage**
- Blog posts: `blog-posts`
- Qualifications: `admin_qualifications_v1`
- To export/backup: Open browser DevTools → Application → Local Storage

---

## 🎨 Styling System

This project uses a **hybrid styling approach**:

### 1. Global Styles (`src/index.css`)
- CSS variables for consistent theming:
  ```css
  --navy: #1e3a5f
  --navy-dark: #162d47
  --accent: #1e40af
  --body: #475569
  --bg: #ffffff
  --border: #e5e7eb
  ```
- Utility classes: `.btn-primary`, `.card`, `.section-title`

### 2. Admin Styles (`src/admin/admin.css`)
- Navy blue gradient backgrounds
- Glass morphism effects
- Button styles
- Login page styling

### 3. Component-Specific CSS
- `src/components/Landing/landing.css` - Landing page
- `src/components/GlobalBackground.css` - Background effects

### 4. Inline Styles
- Most page components use inline `style={{}}` for reliability
- Used in: Navbar, Hero, About, Projects, Skills, Contact

---

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Preview Production Build

```bash
npm run preview
```

### Deploy to Hosting

**Recommended platforms:**
- **Vercel** (Easy React deployment)
- **Netlify** (Automatic deployments)
- **GitHub Pages** (Free hosting)

#### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

#### Deploy to Netlify

1. Build the project:
   ```bash
   npm run build
   ```

2. Drag the `dist/` folder to [Netlify Drop](https://app.netlify.com/drop)

---

## 🔧 Configuration

### Change Admin Password

Edit `src/admin/Login.jsx`:
```javascript
const ADMIN_PASSWORD = "your-new-password"; // Line 20
```

**For production:** Use environment variables:
```javascript
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
```

### Configure EmailJS

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your Service ID, Template ID, and Public Key
3. Update `src/pages/Contact.jsx`:
   ```javascript
   emailjs.sendForm(
     'YOUR_SERVICE_ID',
     'YOUR_TEMPLATE_ID',
     form.current,
     'YOUR_PUBLIC_KEY'
   )
   ```

### Customize Theme Colors

Edit `src/index.css`:
```css
:root {
  --navy: #1e3a5f;      /* Main navy blue */
  --accent: #1e40af;    /* Accent blue */
  /* ... more colors ... */
}
```

---

## 🐛 Troubleshooting

### Common Issues

#### Port Already in Use
```bash
# Vite will automatically try another port
# Or manually specify port:
npm run dev -- --port 3000
```

#### Files Not Found Error
```
Failed to resolve import "pages/CreatePost.jsx"
```
**Solution:** Make sure all required files are in place:
- `src/pages/CreatePost.jsx`
- `src/pages/EditPost.jsx`

#### Admin Login Not Working
**Check:**
1. Password is correct (`admin123` by default)
2. AuthContext is properly set up
3. LocalStorage is enabled in browser

#### 3D Background Not Showing
**Check:**
1. Three.js is installed: `npm install three`
2. Canvas element exists in the DOM
3. No JavaScript errors in console

#### Navbar Not Showing on All Pages
**Check:**
1. Router is using Layout wrapper
2. `src/router.jsx` has Layout for all public pages

---

## 📝 Additional Notes

### File Locations

**User Uploads:**
- Original location: `/mnt/user-data/uploads`
- Not used in final build

**Final Outputs:**
- Development: Served by Vite dev server
- Production: Static files in `dist/`

### LocalStorage Keys

- `blog-posts` - Blog posts array
- `admin_qualifications_v1` - Qualifications array
- `admin-auth` - Admin authentication token

### Browser Compatibility

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- Mobile browsers: ✅ Full support

---

## 🤝 Contributing

This is a personal portfolio project. If you'd like to use it as a template:

1. Fork the repository
2. Update personal information
3. Customize colors and content
4. Deploy to your preferred platform

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author

**Thandolwethu Joni**
- Junior Software Developer
- Peer Tutor @ WeThinkCode_

---

## 🙏 Acknowledgments

- Three.js for 3D graphics
- React team for the amazing framework
- Vite for lightning-fast development
- All open-source contributors

---

## 📞 Support

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review console errors in browser DevTools
3. Verify all files are in correct locations
4. Ensure all dependencies are installed

---

**Built with ❤️ by Thandolwethu Joni**