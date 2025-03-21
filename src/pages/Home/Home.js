import "./Home.css";

import { pageCleaner } from "../../utils/cleanPage";
import { fetchImg } from "../../utils/getImages";
import { printImages } from "../../utils/printImg";
import { loadMoreBtn } from "../../components/Load-btn/Load-btn";

export const Home = () => {
  const main = document.querySelector("main");
  pageCleaner(main);
  main.innerHTML = `
    <p id="message"></p>
    <ul id="photo-results"></ul>
    <button id="load-btn">Load more</button>
  `;
  fetchImg("dark");
  printImages();
  loadMoreBtn();
};
