const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  body: document.querySelector('body'),
  toolbar: document.querySelector('.toolbar'),
  stateCheckbox: document.getElementById('theme-switch-toggle'),
};

refs.toolbar.addEventListener('change', сhangeTheme);

currentTheme();

function сhangeTheme() {
  if (refs.stateCheckbox.checked) {
    refs.body.classList.add(Theme.DARK);
    refs.body.classList.remove(Theme.LIGHT);
    localStorage.setItem('Theme', Theme.DARK);
    return;
  }

  refs.body.classList.remove(Theme.DARK);
  refs.body.classList.add(Theme.LIGHT);
  localStorage.setItem('Theme', Theme.LIGHT);
}

function currentTheme() {
  const currentTheme = localStorage.getItem('Theme');

  if (currentTheme === Theme.DARK) {
    refs.body.classList.add(Theme.DARK);
    refs.stateCheckbox.checked = true;
  }
}
