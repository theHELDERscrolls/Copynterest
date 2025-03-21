import "./Load-btn.css"

import { photoKeys } from "../../utils/getImages";
import { printImages } from "../../utils/printImg";

let sumPage = 1;

export const loadMoreBtn = () => {
  const btn = document.querySelector("#load-btn");
  btn.addEventListener("click", async () => {
    try {
      const input = document.querySelector("#search");
      sumPage++;
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=${sumPage}&query=${
          input.value
        }&per_page=12&client_id=${import.meta.env.VITE_CLIENT_ID}`
      );
      const res = await data.json();
      const newImages = res.results;
      photoKeys.push(...newImages);
      printImages(newImages);
    } catch (error) {
      console.error("Please, search something to get more photos");
      alert("Please, search something to get more photos");
    }
  });
};
