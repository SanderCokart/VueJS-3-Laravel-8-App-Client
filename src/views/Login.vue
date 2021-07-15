<template>
  <div class="login">
    <div>
      <h1>Login</h1>
      <form novalidate>
        <input placeholder="John Doe" type="text" name="name">
        <input placeholder="something@something.com" type="email" name="email">
        <input type="password" placeholder="..." name="password">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  setup () {

  }
};
</script>

<style scoped lang="scss">
.login {
  background-color: var(--bg-2);
  flex: 1;

  > div {
    background-color: var(--bg);
    margin: 10vmin;
    flex: 1;
    border-radius: 10px;
    flex-direction: column;
    place-content: center;

    > h1 {
      color: var(--accent);
    }

    > form {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 20px;
      margin: 10vmin;

      > input {
        width: 100%;
        outline: none;
        border: var(--accent) solid 1px;
        border-radius: 10px;
        padding: 5px;
        background-color: var(--bg-2);
      }
    }
  }
}
</style>
