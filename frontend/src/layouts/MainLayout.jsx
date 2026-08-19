import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
import "../App.css";

function MainLayout({ children }) {
  return (
    <div className="app">
      <div className="app-shell">
        <Sidebar />

        <div className="main-area">
          <Topbar />

          <main className="page-content">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default MainLayout;
