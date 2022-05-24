function _disableDarkTheme() {
  document.documentElement.classList.remove('dark');

  return document.documentElement.classList.contains('dark');
}

function _enableDarkTheme() {
  document.documentElement.classList.add('dark');

  return document.documentElement.classList.contains('dark');
}

function osPrefersDarkTheme() {
  return (
    !('theme' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

function enableDarkTheme(enable) {
  switch (enable) {
    case true:
      return _enableDarkTheme();
    case false:
      return _disableDarkTheme();
  }
}

export { enableDarkTheme, osPrefersDarkTheme };
