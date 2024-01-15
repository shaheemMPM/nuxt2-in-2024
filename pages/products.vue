<template>
  <div>
    <h1>Products Page</h1>
    <div v-for="product in products.products">
      <table border="1">
        <tr>
          <td><img :src="product.image.src" height="50" width="50" /></td>
          <td>{{ product.title }}</td>
          <td>{{ product.handle }}</td>
          <td v-html="product.body_html"></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Context } from "@nuxt/types";

export default {
  head: {
    title: "Products Page",
  },
  layout: "dashboard",
  async asyncData({ $axios }: Context) {
    const { data: products } = await $axios.get(
      "https://shaheem.free.beeceptor.com/products"
    );

    return { products };
  },
};
</script>
