<template>
  <div class="input-field">
    <label v-if="label.length" :for="name">{{ label }}</label>
    <Field :id="name" :name="name" :placeholder="placeholder" :type="type"/>
    <ErrorMessage :name="name" class="error-message"/>
  </div>
</template>

<script>
import { ErrorMessage, Field } from 'vee-validate';

export default {
  name: 'InputField',
  components: { Field, ErrorMessage },
  props: {
    name: {
      required: true,
      type: String,
      default: '',
      validator: (value) => value.length > 0
    },
    type: {
      required: true,
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.input-field {
  display: flex;
  flex-direction: column;
  min-height: 106px;

  label {
    text-transform: capitalize;
    font-weight: 700;
    color: var(--text);
    margin-left: calc(var(--radius) / 2);
  }

  input {
    padding: 10px;
    font-size: 2rem;
    border-radius: 14px;
    border: none;
    outline: none;
    background-color: var(--bg-2);
    font-weight: 700;
    color: var(--text);
    transition: background-color var(--t-duration) ease, box-shadow calc(var(--t-duration) * 2) ease;

    &::placeholder {
      color: var(--text);
      font-weight: 300;
    }

    &:active, &:focus {
      background-color: white;
      color: var(--text-2);
    }
  }

  .error-message {
    color: var(--text);
    font-weight: 300;
    margin-left: calc(var(--radius) / 2);
    color: var(--accent);
  }

}
</style>
