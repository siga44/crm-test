<template>
  <div>
    <InputField
      :disabled="key === 'Уникальный ID' ? true : false"
      v-for="(key, index) in keys"
      :key="index"
      :value="values[index]"
      :index="index"
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
    return {
      keys: keysToLabels(Object.keys(this.order)),
      values: Object.values(this.order)
    };
  },
  methods: {
    onChange (value, index) {
      this.$emit('update', value, index);
    }
  }
};
</script>
