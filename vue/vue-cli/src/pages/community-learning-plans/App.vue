<template>
<body class="local">
  <div class="l-container">
    <div id="community-learning-plans" class="widget-container">
      <community-learning-plans-list></community-learning-plans-list>
    </div>
  </div>
</body>
</template>

<script>
import CommunityLearningPlansList from "./components/community-learning-plans-list";
export default {
  name: "App",
  components: {
    "community-learning-plans-list": CommunityLearningPlansList
  }
};
</script>

<style>
</style>