function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg custom-navbar fixed-top">

      <div className="container-fluid px-5">

        <a className="navbar-brand logo" href="/">
          Nature Stay
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarContent"
        >

          <ul className="navbar-nav mx-auto">

            <li className="nav-item">
              <a className="nav-link" href="/">VILLAS</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">COLLECTIONS</a>
            </li>

            <li className="nav-item">
              <a className="nav-link active-link" href="/">
                CELEBRATIONS
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">JOURNAL</a>
            </li>

          </ul>

          <div className="right-menu d-flex align-items-center">

            <i className="bi bi-search nav-icon"></i>

            <i className="bi bi-heart nav-icon"></i>

            <button className="reserve-btn">
              RESERVE NOW
            </button>

          </div>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;