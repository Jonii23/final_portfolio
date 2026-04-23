import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import About from "./pages/About.jsx";
import Projects from "./pages/Projects.jsx";
import Skills from "./pages/Skills.jsx";
import Contact from "./pages/Contact.jsx";
// import Blog from "./pages/Blog.jsx";
// import BlogPost from "./pages/BlogPost.jsx";
import Resume from "./pages/Resume.jsx";
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

// NotFound page
function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "50px", paddingTop: "150px" }}>
      <h1>404 - Page Not Found 😢</h1>
      <p>The page you're looking for doesn't exist.</p>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
  },
  // Public pages with navbar
  {
    path: "/about",
    element: (
      <Layout>
        <About />
      </Layout>
    ),
  },
  {
    path: "/projects",
    element: (
      <Layout>
        <Projects />
      </Layout>
    ),
  },
  {
    path: "/skills",
    element: (
      <Layout>
        <Skills />
      </Layout>
    ),
  },
  {
    path: "/contact",
    element: (
      <Layout>
        <Contact />
      </Layout>
    ),
  },
  // {
  //   path: "/blog",
  //   element: (
  //     <Layout>
  //       <Blog />
  //     </Layout>
  //   ),
  // },
  // {
  //   path: "/blog/:slug",
  //   element: (
  //     <Layout>
  //       <BlogPost />
  //     </Layout>
  //   ),
  // },
  {
    path: "/resume",
    element: (
      <Layout>
        <Resume />
      </Layout>
    ),
  },
  // Admin login (not protected)
  {
    path: "/admin",
    element: <AdminLogin />,
  },
  // Protected admin routes
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