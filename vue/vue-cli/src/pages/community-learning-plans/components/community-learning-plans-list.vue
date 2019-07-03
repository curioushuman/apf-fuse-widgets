<template>
  <div>
    <community-learning-plans-list-item
      v-for="learning_plan_item in learningPlansSorted"
      :key="learning_plan_item.id"
      :name="learning_plan_item.title"
      :learning_plan_item_id="learning_plan_item.id"
      :focusedLearningPlan="focusedLearningPlan"
      :learningPlanItemProgress="learning_plan_item.progress"
      :thumbnailUrls="{
        thumbnail1x: learning_plan_item.thumbnail_url,
        thumbnail2x: learning_plan_item.thumbnail_2x_url
      }"
    ></community-learning-plans-list-item>
  </div>
</template>

<script>
import axios from "axios";
import CommunityLearningPlansListItem from "./community-learning-plans-list-item";
import data_local from "../assets/data-local";
export default {
  data: function data() {
    return {
      learningPlans: [],
      focusedLearningPlan: null
    };
  },
  components: {
    "community-learning-plans-list-item": CommunityLearningPlansListItem
  },
  mounted() {
    // const apiHost = window.location.protocol + "//" + window.location.host;

    axios
      .get(
        "https://my-json-server.typicode.com/timothybk/apf-js-stash/community_learning_plans"
      )
      .then(() => {
        // temporary until api plugged in
        this.learningPlans = data_local.learning_plans;
        this.findFocusedLearningPlan();
      })
      .catch(err => {
        console.log(err);
      });
  },
  methods: {
    findFocusedLearningPlan() {
      for (var i = 0; i < this.learningPlansSorted.length; i++) {
        if (!this.focusedLearningPlan) {
          var currentLearningPlan = this.learningPlansSorted[i];

          if (currentLearningPlan.progress === 0) {
            this.focusedLearningPlan = currentLearningPlan.title;
            return;
          } else if (
            currentLearningPlan.progress > 0 &&
            currentLearningPlan.progress < 100
          ) {
            this.focusedLearningPlan = currentLearningPlan.title;
            return;
          }
        }
      }
    }
  },
  computed: {
    learningPlansSorted: function learningPlansSorted() {
      /**
       * identifies how to sort two learningPlans.
       * @param {object} a The first learningPlan.
       * @param {object} b The second learningPlan.
       * @return {int} The number for sort function.
       */
      function compare(a, b) {
        var aTitle = a.title.toLowerCase();
        var bTitle = b.title.toLowerCase();
        return aTitle < bTitle ? -1 : aTitle > bTitle ? 1 : 0;
      }

      return this.learningPlans.slice(0).sort(compare);
    }
  }
};
</script>

<style></style>
