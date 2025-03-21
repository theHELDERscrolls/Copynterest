export const cardDesing = (photo) => {
  const li = document.createElement("li");
  li.className = "card-img";

  const img = document.createElement("img");
  img.src = photo.urls.regular;
  img.alt = photo.alt_description;
  img.className = "ppal-img";
  li.appendChild(img);

  const a = document.createElement("a");
  a.className = "download-btn";
  a.href = photo.links.download;
  a.setAttribute("target", "_blank");
  li.appendChild(a);

  const downloadImg = document.createElement("img");
  downloadImg.src = "/assets/icon_download.png";
  downloadImg.alt = "download";
  a.appendChild(downloadImg);

  const div = document.createElement("div");
  div.className = "like";

  const heart = document.createElement("img");
  heart.src = "/assets/icon_heart.png";
  heart.alt = "likes";
  div.appendChild(heart);

  const likes = document.createElement("p");
  likes.textContent = photo.likes;
  div.appendChild(likes);

  li.appendChild(div);

  return li;
};
