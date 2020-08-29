<template>
  <li class="order-list--row">
    <span class="order-list--column">{{ order.orderNumber }}</span>
    <span class="order-list--column">{{ order.date }}</span>
    <span class="order-list--column">{{ order.company }}</span>
    <span class="order-list--column">{{ order.courierName }}</span>
    <span class="order-list--column">{{ order.phoneNumber }}</span>
    <div class="order-list--options">
      <Button title="Комментарии" type="rounded success" @click="onCommentsClick">
        {{ order.comments.length }}
      </Button>
      <a :href="order.atiCode">
        <Button type="rounded neutral">
          <img :alt="options.atiLink.id" :src="options.atiLink.src"/>
        </Button>
      </a>
      <router-link :to="`/orders/${order._id}`">
        <Button type="rounded neutral">
          <img :alt="options.edit.id" :src="options.edit.src"/>
        </Button>
      </router-link>
      <span @click="onDelete">
        <Button type="rounded neutral">
          <img :alt="options.delete.id" :src="options.delete.src"/>
        </Button>
      </span>
    </div>
  </li>
</template>

<script>
import deleteIcon from '@/assets/icons/delete.svg';
import editIcon from '@/assets/icons/square-edit-outline.svg';
import linkIcon from '@/assets/icons/open-in-new.svg';

import Button from '@/components/Button';
import { mapActions } from 'vuex';

export default {
  props: ['order'],
  components: {
    Button
  },
  data () {
    return {
      options: {
        atiLink: { id: 'external-link', src: linkIcon },
        edit: { id: 'edit', src: editIcon },
        delete: { id: 'delete', src: deleteIcon }
      }
    };
  },
  methods: {
    ...mapActions(['deleteOrder']),
    onCommentsClick () {
      this.$emit('comments-click', this.order._id)
    },
    onDelete () {
      this.$emit('ondelete', this.order._id)
      this.deleteOrder(this.order._id)
    }
  }
};
</script>

<style lang="scss">
.order-list {
  &--row {
    height: 40px;
    position: relative;
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
    background-color: rgba(0, 0, 0, 0.1);
    color: #000;
    padding: 0.5em 1.5em;
    border-radius: 10px;
    transition: background-color 0.133s ease-in-out;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);

      &,
      .order-list--options {
        opacity: 1;
      }
    }
  }

  &--column {
    display: inline-block;
    text-align: center;
    width: 180px;
    font-size: 1em;
    margin-right: 50px;

    &:first-child {
      width: 30px;
    }

    &:last-child {
      width: 130px;
      margin-right: 0;
    }
  }

  &--options {
    display: inline-flex;
    justify-content: space-between;
    width: 150px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }
}
</style>
