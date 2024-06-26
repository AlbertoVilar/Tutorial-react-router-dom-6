import { Link, Outlet } from "react-router-dom";



function App() {
  return (
    <div>
      <h1>Bookkeeper</h1>
      <h2>Router DOM</h2>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/invoices">Invoices</Link> |{" "}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;