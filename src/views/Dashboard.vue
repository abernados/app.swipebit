<template>
  <section class="o-page gap-8 mx-auto">
    <header class="grid grid-cols-4 mx-40 gap-8">
      <widget-tile
        title="Users"
        value="20"
        icon="users"
        url="/home"
        class="bg-blue"
      />
      <widget-tile
        title="Total Sales"
        value="27,244"
        icon="money-bill"
        url="/home"
      />
      <widget-tile
        title="Transactions"
        value="483"
        icon="table"
        url="/home"
      />
      <widget-tile
        title="Balance"
        value="20,432"
        icon="coins"
        url="/home"
      />
    </header>
    <div>
      <!-- <chart></chart> -->
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",
  components: {},
});
</script>
