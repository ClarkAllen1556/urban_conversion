function _disableDarkTheme() {
  document.documentElement.classList.remove('dark');

  return document.documentElement.classList.contains('dark');
}

function _enableDarkTheme() {
  document.documentElement.classList.add('dark');

  return document.documentElement.classList.contains('dark');
}

/**
 * Check if the user's OS theme settings are configured to prefer dark mode.
 *
 * @returns True if the user's OS theme settings are configured to prefer dark mode, and false otherwise.
 */
function osPrefersDarkTheme() {
  return (
    !('UL_THEME' in localStorage) &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );
}

/**
 * Toggle website dark theme on/off depending on the boolean value specified.
 * `true`: will toggle dark mode on
 * `false`: will toggle dark mode off
 *
 * @param {Boolean} enable
 * @returns Returns true if dark mode is enabled, and false otherwise.
 */
function toggleDarkTheme(enable) {
  switch (enable) {
    case true:
      return _enableDarkTheme();
    case false:
      return _disableDarkTheme();
  }
}

export { toggleDarkTheme, osPrefersDarkTheme };
