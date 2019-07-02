<template>
  <div
    class="item learning_plan"
    :class="{ active: isFocused, complete: isCompleted }"
  >
    <a :href="buildHref" title="Learning plan" target="_parent">
      <span class="inner">
        <span class="item-thumbnail" :style="chooseThumbnail">&nbsp;</span>
        <span class="item-text">
          <span class="item-type">
            Learning Plan
            <strong>Completed</strong>
          </span>
          <span class="item-title">{{ name }}</span>
          <span class="item-description">&nbsp;</span>
          <span class="item-progress">
            <div class="percent" :style="percentNumberLocation">
              {{ learningPlanItemProgress }}%
            </div>
            <div class="percent-complete" :style="percentBarWidth">&nbsp;</div>
          </span>
        </span>
      </span>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "Loading..."
    },
    learning_plan_item_id: {
      type: Number,
      default: 0
    },
    focusedLearningPlan: {
      type: String
    },
    learningPlanItemProgress: {
      type: Number
    },
    thumbnailUrls: {
      type: Object
    }
  },
  computed: {
    buildHref: function buildHref() {
      var apiHost = window.location.protocol + "//" + window.location.host;
      return apiHost + "learning/plans/" + this.learning_plan_item_id;
    },
    isFocused: function isFocused() {
      return this.name === this.focusedLearningPlan;
    },
    isCompleted: function isCompleted() {
      return this.learningPlanItemProgress === 100;
    },
    percentNumberLocation: function percentNumberLocation() {
      if (this.learningPlanItemProgress > 93) {
        return "left: " + 93 + "%";
      } else if (this.learningPlanItemProgress > 2) {
        return "left: " + (this.learningPlanItemProgress - 4) + "%";
      } else {
        return null;
      }
    },
    chooseThumbnail: function chooseThumbnail() {
      if (this.isFocused) {
        return "background-image: url(" + this.thumbnailUrls.thumbnail2x + ")";
      } else {
        return "background-image: url(" + this.thumbnailUrls.thumbnail1x + ")";
      }
    },
    percentBarWidth: function percentBarWidth() {
      return "width: " + this.learningPlanItemProgress + "%";
    }
  }
};
</script>

<style></style>
