import React from "react";

function AdminFooter() {
  return (
    <footer className="bg-light text-center text-lg-start">
      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(20, 12, 125, 0.3)" }}
      >
        © 2023 Copyright:
        <a className="text-dark" href="#">
          Carthiknlive.com
        </a>
      </div>
    </footer>
  );
}

export default AdminFooter;
