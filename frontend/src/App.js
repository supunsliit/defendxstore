import { BrowserRouter, Routes, Route } from "react-router-dom"

import Layout from "./components/Layout"
import Components from "./pages/Components"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import { AuthProvider } from "./contexts/AuthProvider"
import PrivateRoute from "./components/PrivateRoute"
import Profile from "./pages/Profile"
import Admin from "./pages/Admin"
import NotFound from "./pages/errors/NotFound"
import Home from "./pages/Home"
import Forum from "./pages/Forum"
import ForumThread from "./pages/ForumThread"

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="components" element={<Components />} />
              <Route path="forum">
                <Route index element={<Forum />} />
                <Route path="thread" element={<ForumThread />} />
              </Route>
              <Route element={<PrivateRoute />}>
                <Route path="profile" element={<Profile />} />
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route element={<PrivateRoute requiredRole="SUPPORT_AGENT" />}>
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route element={<PrivateRoute requiredRole="DELIVERY_AGENT" />}>
                <Route path="*" element={<NotFound />} />
              </Route>
              <Route element={<PrivateRoute requiredRole="ADMIN" />}>
                <Route path="admin" element={<Admin />} />
                <Route path="*" element={<NotFound />} />
              </Route>
            </Route>
            <Route path="/auth">
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  )
}

export default App
