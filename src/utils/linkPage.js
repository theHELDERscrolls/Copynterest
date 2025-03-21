export const linkPage = (id, page) => {
  const link = document.querySelector(id);
  link.addEventListener("click", () => {
    const input = document.querySelector("#search");
    input.value = "";
    page();
  });
};
