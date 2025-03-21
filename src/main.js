import "./style.css";
import { changeMode } from "./utils/changeModeBtn";
import { createFooter } from "./components/Footer/Footer";
import { createHeader } from "./components/Navbar/Navbar";
import { Explore } from "./pages/Explore/Explore";
import { Home } from "./pages/Home/Home";
import { linkPage } from "./utils/linkPage";
import { loadMoreBtn } from "./components/Load-btn/Load-btn";
import { searchImg } from "./utils/getImages";

const init = () => {
  Home();
  createHeader();
  linkPage("#home_link", Home);
  linkPage("#home_link", Explore);
  createFooter();
  searchImg();
  changeMode();
  loadMoreBtn();
};

init();
