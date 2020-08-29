<template>
  <div>
    <InputField
      v-for="(key, index) in keys"
      :key="index"
      :disabled="key === 'Уникальный ID' ? true : false"
      :index="index"
      :value="values[index]"
      @update="onChange"
    >{{ key }}
    </InputField>
  </div>
</template>

<script>
import InputField from '@/components/InputField';

import { keysToLabels } from '@/utils';

export default {
  components: {
    InputField
  },
  props: ['order'],
  data () {
    const currentOrder = {
      _id: this.order._id,
      orderNumber: this.order.orderNumber,
      date: this.order.date,
      company: this.order.company,
      courierName: this.order.courierName,
      phoneNumber: this.order.phoneNumber,
      atiCode: this.order.atiCode
    }
    return {
      keys: keysToLabels(Object.keys(currentOrder)),
      values: Object.values(currentOrder)
    };
  },
  methods: {
    onChange (value, index) {
      this.$emit('update', value, index);
    }
  }
};
</script>
