<template>
  <FontAwesomeIcon @click="toggleTheme" class="theme" :icon="theme === 'dark' ? 'moon' : 'sun'"/>
  <router-view/>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup () {
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = ref(localStorage.getItem('theme') ?? (prefersDarkMode ? 'dark' : 'light'));
    document.documentElement.setAttribute('data-theme', theme.value);
    localStorage.setItem('theme', theme.value);

    const toggleTheme = () => {
      theme.value = theme.value === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', theme.value);
      localStorage.setItem('theme', theme.value);
    };

    return { theme, toggleTheme };
  }
};
</script>

<style lang="scss">
@import "~@fontsource/roboto/300.css";
@import "~@fontsource/roboto/400.css";
@import "~@fontsource/roboto/400-italic.css";
@import "~@fontsource/roboto/700.css";
@import "~@fontsource/roboto/900.css";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Roboto;
  font-weight: 400;
  transition: background-color var(--t-duration) ease, color var(--t-duration) ease;
}

:root {

  --bg-dark: hsl(0, 0%, 20%);
  --bg-dark-2: hsl(0, 0%, 30%);

  --bg-light: hsl(0, 0%, 80%);
  --bg-light-2: hsl(0, 0%, 90%);

  --text-dark: hsl(0, 0%, 80%);
  --text-dark-2: hsl(0, 0%, 20%);
  --text-light: hsl(0, 0%, 20%);
  --text-light-2: hsl(0, 0%, 80%);

  --accent: hsl(0, 50%, 50%);
  --t-duration: 250ms;
  --shadow: hsla(0, 0%, 0%, .5);
  --radius: 14px;

  --bg: var(--bg-light);
  --bg-2: var(--bg-light-2);
  --text: var(--text-light);
  --text-2: var(--text-light-2);
}

[data-theme="dark"] {
  --bg: var(--bg-dark);
  --bg-2: var(--bg-dark-2);
  --text: var(--text-dark);
  --text-2: var(--text-dark-2);
}

#app, html, body {
  width: 100%;
  height: 100%;
}

#app {
  background-color: var(--bg-2);
  min-height: 568px;
  min-width: 320px;
}

.theme {
  color: black;
  font-size: 2rem;
  cursor: pointer;
  position: absolute;
  user-select: none;
}
</style>
