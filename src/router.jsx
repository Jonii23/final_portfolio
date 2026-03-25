// src/router.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
import Blog from "./pages/Blog.jsx";
import BlogPost from "./pages/BlogPost.jsx";
import CreatePost from "./pages/CreatePost.jsx";
import EditPost from "./pages/EditPost.jsx";
import Navbar from "./components/Navbar.jsx";

// Admin
import AdminLogin from "./admin/Login.jsx";
import Dashboard from "./admin/Dashboard.jsx";
import ProtectedRoute from "./admin/ProtectedRoute.jsx";

// Error Boundary
import ErrorBoundary from "./components/ErrorBoundary.jsx";

// Layout wrapper with Navbar
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

// NotFound page
function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: 50 }}>
      <h1>404 - Page Not Found 😢</h1>
      <p>
        The page you’re looking for doesn’t exist. Go back{" "}
        <a href="/final_portfolio">home</a>.
      </p>
    </div>
  );
}

// Routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />, // catch-all for unknown routes
  },
  // ----- public pages with navbar -----
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/skills",
    element: (
      <Layout>
        <Skills />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/blog",
    element: (
      <Layout>
        <Blog />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/blog/:slug",
    element: (
      <Layout>
        <BlogPost />
      </Layout>
    ),
    errorElement: <NotFound />,
  },
  // ----- admin pages (no navbar) -----
  { path: "/admin", element: <AdminLogin />, errorElement: <NotFound /> },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/admin/create",
    element: (
      <ProtectedRoute>
        <CreatePost />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/admin/edit/:slug",
    element: (
      <ProtectedRoute>
        <EditPost />
      </ProtectedRoute>
    ),
    errorElement: <NotFound />,
  },
]);

export default router;