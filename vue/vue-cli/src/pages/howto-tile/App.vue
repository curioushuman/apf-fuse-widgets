<template>
  <body class="local">
    <div class="l-container">
      <!-- START -->
      <!-- main html section -->
      <div
        id="howto-tile"
        class="widget-container"
        :class="{ initial: !progress }"
      >
        <div id="featured-items">
          <!-- featured item component -->
          <featured-item @update-progress="updateProgress" />
        </div>
        <!-- community link component -->
        <community-link />
      </div>

    <!-- END -->
    </div>
  </body>
</template>

<script>
import FeaturedItem from "./components/FeaturedItem.vue";
import CommunityLink from "./components/CommunityLink.vue";

export default {
  name: "App",
  components: {
    FeaturedItem,
    CommunityLink
  },
  data() {
    return {
      progress: false
    };
  },
  methods: {
    updateProgress: function(isProgress) {
      this.progress = isProgress;
    }
  }
};
</script>

<style></style>
