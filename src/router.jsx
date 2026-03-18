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

// Layout wrapper with Navbar
function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // ----- public pages with navbar -----
  { 
    path: "/about", 
    element: (
      <Layout>
        <About />
      </Layout>
    ) 
  },
  { 
    path: "/projects", 
    element: (
      <Layout>
        <Projects />
      </Layout>
    ) 
  },
  { 
    path: "/skills", 
    element: (
      <Layout>
        <Skills />
      </Layout>
    ) 
  },
  { 
    path: "/contact", 
    element: (
      <Layout>
        <Contact />
      </Layout>
    ) 
  },
  { 
    path: "/blog", 
    element: (
      <Layout>
        <Blog />
      </Layout>
    ) 
  },
  { 
    path: "/blog/:slug", 
    element: (
      <Layout>
        <BlogPost />
      </Layout>
    ) 
  },
  // ----- admin pages (no navbar) -----
  { 
    path: "/admin", 
    element: <AdminLogin /> 
  },
  {
    path: "/admin/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/create",
    element: (
      <ProtectedRoute>
        <CreatePost />
      </ProtectedRoute>
    ),
  },
  {
    path: "/admin/edit/:slug",
    element: (
      <ProtectedRoute>
        <EditPost />
      </ProtectedRoute>
    ),
  },
]);

export default router;