<template>
  <Form :validation-schema="schema.validation" @submit="onSubmit">
    <div v-for="{ name, ...attrs} in schema.fields" :key="name">
      <InputField :id="name" v-bind="attrs" :name="name"/>
    </div>
    <button type="submit">Submit</button>
  </Form>
</template>

<script>
import { Form } from 'vee-validate';
import InputField from '@/components/form/InputField';

export default {
  name: 'DynamicForm',
  components: { InputField, Form },
  emits: ['submit'],
  props: {
    schema: {
      type: Object,
      required: true
    }
  },
  setup (_, { emit }) {
    const onSubmit = (values) => {
      emit('submit', values);
    };

    return { onSubmit };
  }
};
</script>

<style lang="scss" scoped>
button {
  background-color: var(--accent);
  border: none;
  outline: none;
  border-radius: var(--radius);
  color: var(--text);
  font-weight: 900;
  font-size: 2rem;
  margin: 20px 0;
  cursor: pointer;
}
</style>
