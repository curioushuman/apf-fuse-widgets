<template>
  <div class="featured-item featured-learning_plan">
    <a :href="href" :title="learning_plan.title" target="_parent">
      <span class="inner">
        <span class="featured-type">Learning Plan</span>
        <span v-if="!errorState" class="featured-title">
          {{ learning_plan.title }}
        </span>
        <span v-else class="api-error">
          <strong>
            {{ learning_plan.title }}
          </strong>
        </span>
        <span class="featured-progress">
          <div
            v-if="learning_plan.progress > 85"
            class="percent"
            :style="{ left: 86 + '%' }"
          >
            {{ learning_plan.progress }}%
          </div>
          <div
            v-else-if="learning_plan.progress > 15"
            class="percent"
            :style="{ left: learning_plan.progress - 12 + '%' }"
          >
            {{ learning_plan.progress }}%
          </div>
          <div v-else class="percent">{{ learning_plan.progress }}%</div>
          <div
            class="percent-complete"
            :style="{ width: learning_plan.progress + '%' }"
          >
            &nbsp;
          </div>
        </span>
        <span
          class="featured-thumbnail"
          :style="{ background: background_image_url }"
          >&nbsp;</span
        >
      </span>
    </a>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "FeaturedItem",
  data() {
    return {
      learning_plan: {
        title: "loading...",
        progress: 0
      },
      href: "#",
      background_image_url: "",
      errorState: false
    };
  },
  mounted() {
    const apiHost = window.location.protocol + "//" + window.location.host;

    axios
      .get(
        "https://my-json-server.typicode.com/timothybk/apf-js-stash/howto_tile"
      )
      .then(response => {
        const thumbnailUrl = response.data.thumbnail_2x_url.replace(
          "http://",
          "https://"
        );
        this.learning_plan = { ...response.data };
        this.href = apiHost + "/learning/plans/" + this.learning_plan.id;
        this.background_image_url = 'url("' + thumbnailUrl + '")';
        this.$emit("update-progress", this.learning_plan.progress > 0);
      })
      .catch(() => {
        this.learning_plan.title = "An error occurred, please reload the page";
        this.errorState = true;
      });
  }
};
</script>

<style></style>
