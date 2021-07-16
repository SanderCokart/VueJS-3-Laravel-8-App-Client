<template>
  <div class="login">
    <div class="container">
      <header>
        <h1>LOGIN</h1>
      </header>
      <main>
        <DynamicForm :schema="schema" @submit="onSubmit"/>
      </main>
    </div>
  </div>
</template>

<script>
import * as yup from 'yup';
import DynamicForm from '@/views/DynamicForm';
import { useApi } from '@/plugins/api';

export default {
  name: 'Login',
  components: { DynamicForm },
  setup () {
    const api = useApi();

    const schema = {
      fields: [
        { as: 'input', label: 'name', name: 'name', placeholder: 'Full Name', type: 'text' },
        { as: 'input', label: 'email', name: 'email', placeholder: 'example@gmail.com', type: 'text' },
        { as: 'input', label: 'password', name: 'password', placeholder: 'Password', type: 'password' }
      ],
      validation: yup.object().shape({
        name: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required()
      })
    };

    const onSubmit = (values) => {
      api.get('/login', values)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
    };

    return { schema, onSubmit };
  }
};
</script>

<style lang="scss" scoped>
.login {
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    background: var(--bg);
    min-width: 320px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0 0 var(--radius) var(--radius);
    border: solid var(--accent) 2px;

    header {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--accent);
      width: 100%;
      height: 100px;
      border-radius: 0 0 50% 50%;

      h1 {
        font-weight: 900;
        color: var(--text-2)
      }
    }

    main {
      height: 100%;
      width: 100%;
      padding: 0 20px;

      form {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 100%;
        gap: 10px;
      }
    }
  }
}
</style>
