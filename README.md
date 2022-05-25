![Logo](src/assets/logo.png)

# UrbanConversion

## Introduction

A unit conversion site that prides itself on simplicity. It can be found over at [conversion.urbanlife.me](https://conversion.urbanlife.me/).

## Local development setup

### Pre-setup

UrbanConversion is built using [pnpm](https://pnpm.io/) and [Vite](https://vitejs.dev/) for their speed and excellent developer experiences.

To run the app locally pnpm must first be installed using the following:

```bash
# Other options to install pnpm can be found here: https://pnpm.io/installation

curl -fsSL https://get.pnpm.io/install.sh | sh -

# After installation is completed, either open a new shell session or source the shell's configuration file

# BASH
source ~/.bashrc

# Zsh
source ~/.zshrc
```

### Install dependencies

To install dependencies, run the following:

```bash
# Installs all dependencies specified in the package.json file

pnpm install
```

### Run locally

UrbanConversion can be run locally using the following command:

```bash
# Uses Vite to run a dev server on localhost:3000

pnpm run dev
```

Once running, the site can be accessed at `localhost:3000`.

## Building for release

UrbanConversion can be built using the following:

```bash
# Uses vite to bundle the application

pnpm run build
```

The application bundle will be output to the `dist/` directory. This bundle can then be served to any static hosting service.

## Project Details

### Deployment

The live version of UrbanConversion is continuously deployed to an Nginx server running on an Ubuntu VPS. This is done using a Jenkins build server running on a Raspberry Pi. Jenkins polls the Git repository every 5 minutes. If changes are detected, it fetches the repo, builds the release, and deploys over SSH.

### Technology & Architecture

UrbanConversion is built using Vue3 and is styled using Tailwind. I chose Vue due to my prior experience with the framework. While the app is objectively simple and could have been written without a framework, using one allowed for faster development time and a more manageable architecture. The reason for Tailwind was the effortless way it provides for "dark mode" implementations. It was also an excuse to play around with Tailwind as I don't have much experience with it.

The app is designed to be extendable. As of version `1.0.0`, it only supports converting degrees Celsius to Fahrenheit however, new conversions can be added by creating a new conversion component under the `src/components/conversions/` directory and then wrapping it in a `Card` component inside of `App.vue`.

**Example**
Adding a new "Distance" calculator:

```text
├── src/
│   ├── App.vue
│   ├── assets/
│   ├── components/
│   │   ├── Card.vue
│   │   ├── Input.vue
│   │   ├── ThemeButton.vue
│   │   └── conversions/
│   │       ├── Temperature.vue
│   │       └── Distance.vue # <--- new conversion component
│   ├── main.js
│   └── utils/
```

```vue
<script setup>
...
import Temperature from './components/conversions/Temperature.vue';
<!-- Import new conversion component -->
import Distance from './components/conversions/Distance.vue';
<!-- -->
...
</script>

<div :class="['grid', 'justify-items-center']">
   ...
    <Card title="Temperature">
      <Temperature />
    </Card>

    <!-- Add new conversion component -->
    <Card title="Distance">
      <Distance />
    </Card>
    <!-- -->
</div>
```

The ability to extend the application to support other conversion calculations was intended from the beginning and was one of the driving reasons that a JavaScript framework was used.

In future releases, the process of implementing new conversions will be improved by eliminating the need to modify `App.js`.

### Feature implementations

**Dark/Light modes**

As previously mentioned, Tailwind was chosen because it provides a simple way to add both light and dark modes using its [`dark` variant feature](https://tailwindcss.com/docs/dark-mode). UrbanConversion will default to the user's OS theme settings. The theme can also be changed by clicking the "sun"/"moon" icon in the upper right-hand corner of the window. If the user does toggle the app's theme settings, the result of the toggle will be stored in the browser's local storage. This will be used to determine the user's theme settings during their next visit.

The theme settings are queried during the `App.vue`'s `onMounted` lifecycle event. First, it checks the local storage for a saved theme value, then the OS's preferred mode. Helper functions exist under `src/utils/theme.js` for querying the OS's preferred theme and toggling dark mode: `osPrefersDarkTheme` and `toggleDarkTheme`.

```javascript
/**
 * Check if the user's OS theme settings are configured to prefer dark mode.
 *
 * @returns True if the user's OS theme settings are configured to prefer dark mode, and false otherwise.
 */
function osPrefersDarkTheme() {}
```

```javascript
/**
 * Toggle website dark theme on/off depending on the boolean value specified.
 * `true`: will toggle dark mode on
 * `false`: will toggle dark mode off
 *
 * @param {Boolean} enable
 * @returns Returns true if dark mode is enabled, and false otherwise.
 */
function toggleDarkTheme(enable) {}
```

**Conversions**

To allow for easy extendibility, calculations should be managed by the conversion components themselves. For the temperature conversion, the following calculations are used:

- _Celsius_: `(degrees Fahrenheit - 32) / 1.8`
- _Fahrenheit_: `(degrees Celsius * 1.8) + 32`

_Calculated degrees are rounded to two decimal places._

To save the user from having to click a button, conversions are calculated as the user enters in their value. If the user's input is anything that's but a valid positive or negative number/float, no calculation will be made and the corresponding input field will be blank.

### Design decisions

For the UI, I wanted the branding to be consistent with other sites that I host on the same domain, [urbanlife.me](https://urbanlife.me). To achieve this, I used the same color palette, Ethan Schoonover's [Solarized](https://ethanschoonover.com/solarized/), and font family, Mozilla's [Zilla Slab](https://blog.mozilla.org/opendesign/zilla-slab-common-language-shared-font/).

The icons that I used are from [OpenMoji](https://openmoji.org/). I discovered this icon set while working on this project and thought they looked really cute. They add a friendly personality on the site.

I also made sure that the UI components, cards, input fields, titles, etc., all matched with UrbanLife's current stylings. Tailwind made this process very easy. I could reuse most of my Tailwind configuration from my other projects. This meant things like my color palette were instantly available inside my project.
