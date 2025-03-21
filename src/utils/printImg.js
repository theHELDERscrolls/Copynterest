import { photoKeys } from "./getImages";
import { cardDesing } from "../components/Image_card/image-card";

/* Reutilizar la función para pintar nuevas imágenes */
export const printImages = (images = photoKeys) => {
  const p = document.querySelector("#message");
  const ul = document.querySelector("#photo-results");

  if (images.length === 0) {
    p.textContent = "No results found";
    ul.innerHTML = "";
  } else {
    p.textContent = "";
    for (const photo of images) {
      const card = cardDesing(photo);
      ul.appendChild(card);
    }
  }
};
