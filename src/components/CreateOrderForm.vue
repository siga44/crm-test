<template>
  <div>
    <InputField
      v-for="(label, index) in labels"
      :key="index"
      :index="index"
      :required="label.text === 'Комментарии' ? false : true"
      :htmlType="label.type"
      :placeholder="label.placeholder"
      @update="onChange"
    >{{ label.text }}
    </InputField>
  </div>
</template>

<script>
import InputField from '@/components/InputField';

export default {
  components: {
    InputField
  },
  data () {
    return {
      labels: [
        { type: 'number', text: 'Номер заказа', placeholder: '123456' },
        { type: 'date', text: 'Дата', placeholder: '' },
        { type: 'text', text: 'Название компании', placeholder: 'YetiCrab' },
        { type: 'text', text: 'ФИО Перевозчика', placeholder: 'Ivanov I.I.' },
        { type: 'tel', text: 'Телефон', placeholder: '+70123456789' },
        {
          type: 'url',
          text: 'АТИ',
          placeholder: 'https://ati.su/firms/12345/info'
        }
      ]
    };
  },
  methods: {
    onChange (value, index) {
      this.$emit('update', value, index);
    }
  }
};
</script>
