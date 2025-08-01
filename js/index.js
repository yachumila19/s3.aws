const dropdown = document.getElementById('dropdown');
const dropdownSelect = document.getElementById('dropdownSelect');
const dropdownOptions = document.getElementById('dropdownOptions');

dropdownSelect.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

dropdownOptions.addEventListener('click', (e) => {
  if (e.target.tagName === 'DIV') {
    dropdownSelect.textContent = `${e.target.textContent} ▾`;
    dropdown.classList.remove('open');
  }
});

window.addEventListener('click', (e) => {
  if (!dropdown.contains(e.target)) {
    dropdown.classList.remove('open');
  }
});
