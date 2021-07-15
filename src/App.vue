<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    |
    <router-link to="/about">About</router-link>
    |
    <router-link to="/login">Login</router-link>
  </div>
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

    return { theme };
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --bg-dark: #333;
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

html, body, #app {
  width: 100%;
  height: 100%;
}

div {
  display: flex;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  background-color: var(--bg);
  color: var(--text);
  flex-direction: column;
}

#nav {
  padding: 30px;
  gap: 10px;
  justify-content: center;

  a {
    font-weight: bold;
    color: var(--text);

    &.router-link-exact-active {
      color: var(--accent);
    }
  }
}
</style>
