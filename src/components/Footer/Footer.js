import "./Footer.css"

export const createFooter = () => {
  const footer = document.querySelector("footer");
  footer.innerHTML = `
    <p><span>&copy;2024 Copynterest</span>. All rights reserved.</p>
    <p>Website created by <a href="https://github.com/theHELDERscrolls" target="_blank" rel="noopener noreferrer">theHELDERscrolls</a>.</p>
  `;
};
