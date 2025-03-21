import "./Navbar.css";

export const createHeader = () => {
  const header = document.querySelector("header");
  header.innerHTML = `
        <img id="logo" src="/assets/logo_copynterest.png" alt="Copynterest logo">
        <nav>
            <ul>
                <li>
                    <a id="home_link" href="#home">Home</a>
                </li>
                <li>
                    <a id="explore_link" href="#explore">Explore</a>
                </li>
            </ul>
        </nav>
        <input type="text" id="search" name="search" placeholder="Search for images..." aria-label="Search">
        <div id="icons">
            <div>
                <span class="buble"></span>
                <img id="notification" src="/assets/icon_notification.svg" alt="Notifications">
            </div>
            <img id="ld-btn" src="/assets/icon_sun.svg" alt="Light mode">
        </div>
  `;
};
