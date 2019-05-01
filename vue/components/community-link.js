export default {
  name: 'CommunityLink',
  template: `
    <div id="community-link">
        <a href="#"
        title="How To community — find your support here"
        target="_parent"
        >
            <span class="inner">
                <span class="community-type">How To Community</span>
            </span>
        </a>
    </div>
  `,
  data() {
    return {
      communityLinkTestData: 'this is a community test!',
    };
  },
};
