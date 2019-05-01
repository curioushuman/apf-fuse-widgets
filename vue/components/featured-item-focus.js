export default {
  name: 'FeaturedItemFocus',
  template: `<div class="featured-item featured-learning_plan">
        <a :href="href" :title="learning_plan.title" target="_parent">
          <span class="inner">
            <span class="featured-type">Learning Plan</span>
            <span class="featured-title">{{
              learning_plan.title
            }}</span>
            <span class="featured-progress">
              <div v-if="learning_plan.progress > 85" class="percent"
              :style="{ left: 86 + '%' }">
              {{learning_plan.progress}}%
              </div>
              <div v-else-if="learning_plan.progress > 15" class="percent"
              :style="{ left: learning_plan.progress - 12 + '%' }">
              {{learning_plan.progress}}%
              </div>
              <div v-else class="percent">{{learning_plan.progress}}%</div>
              <div class="percent-complete"
              :style="{ width: learning_plan.progress + '%' }">
              &nbsp;
              </div>
            </span>
            <span class="featured-thumbnail"
            :style="{ background: background_image_url }">
            &nbsp;
            </span>
          </span>
        </a>
      </div>`,
  data() {
    return {
      learning_plan: {
        title: 'loading...',
        progress: 0,
      },
      href: '#',
      background_image_url: '',
    };
  },
  created() {
    // fake api call
    const apiHost = window.location.protocol + '//' + window.location.host;
    const thumbnailUrl = data_local.learning_plan.thumbnail_2x_url.replace(
        'http://',
        'https://'
    );
    this.learning_plan = data_local.learning_plan;
    this.href = apiHost + '/learning/plans/' + data_local.learning_plan.id;
    this.background_image_url = 'url("' + thumbnailUrl + '")';
    this.$emit('update-progress', this.learning_plan.progress > 0);
  },
};
