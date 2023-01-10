<script>
export default {
  name: "card",
  props: {
    Info: {
      type: Object,
      required: true,
    },
  },
  methods: {
    openNews(url) {
      window.open(url);
    },
  },
};
</script>

<template>
  <div class="card" @click="openNews(Info.url)">
    <div class="newsTitle">
      <h2>
        {{ Info.title }}
      </h2>
    </div>
    <div class="image_box">
      <img class="news_image" :src="Info.urlToImage" alt="newsImage" />
    </div>
    <div class="newsContent">
      {{ Info.description }}
    </div>
    <div class="newsAuthor">
      {{ Info.author ? `Author: ${Info.author}` : "" }}
    </div>
  </div>
</template>

<style>
.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .4em;
  width: 100%;
  height: 100%;
  transition: .5s;
  gap: .5em;
}
.card:hover{
    scale: 1.03;
    box-shadow: 0 0 8px 0 rgba(0,0,0,0.5);
    cursor: pointer;
}
.news_image {
  width: 100%;
  height: 100%;
}
.newsTitle a{
    text-decoration: none;
}
.newsAuthor{
    padding-top: .5em;
    font-size: 0.8em;
    color: #666;

}
</style>
