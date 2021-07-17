<template>
  <Form :validation-schema="schema.validation" @submit="onSubmit">
    <div :style="`display: grid;grid-template-columns: repeat(${columns}, 1fr);`">
      <InputField :id="name" v-bind="attrs" :name="name" v-for="{ name, ...attrs} in schema.fields" :key="name"/>
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
    },
    columns: {
      type: Number,
      default: 1,
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
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 2rem;
  margin: 20px 0;
  cursor: pointer;
}
</style>
