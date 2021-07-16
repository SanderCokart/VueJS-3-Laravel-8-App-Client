<template>
  <router-view class="route"/>
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

    return { theme };
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
}

:root {

  --bg-dark: #0C120C;
  --bg-dark-2: #222;
  --bg-light: #EEE;
  --bg-light-2: #DDD;
  --text-dark: #fff;
  --text-light: #000;
  --accent: #ff5722;

  --bg: var(--bg-light);
  --bg-2: var(--bg-light-2);
  --text: var(--text-light);
}

[data-theme="dark"] {
  --bg: var(--bg-dark);
  --bg-2: var(--bg-dark-2);
  --text: var(--text-dark);
}

#app, html, body {
  width: 100%;
  height: 100%;
}

#app {
  background-color: #d1e8fa;
  min-height: 568px;
  min-width: 320px;
}
</style>
