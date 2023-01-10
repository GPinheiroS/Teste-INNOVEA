<script>
import card from "./components/card.vue";
import { getNews } from "./api/api";

export default {
  data() {
    return {
      news: [],
    };
  },
  components: {
    card,
  },
  methods: {},
  async created() {
    this.news = await getNews();
  },
};
</script>

<template>
<div>
    <div class="container">
        <div class="news_box">
            <card v-for="item in news" :key="item.id" :Info="item" />
        </div>
    </div>
</div>

</template>


<style>
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
}
.news_box {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    gap: 1.5em;
}
</style>
