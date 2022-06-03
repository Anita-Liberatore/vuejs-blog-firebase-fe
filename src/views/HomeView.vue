<template>
  <div class="home">
    <BlogPost :post="welcomeScreen"/>
    <BlogPost :post="post" v-for="(post,index) in sampleBlogPost" :key="index"/>
  </div>
</template>

<script scoped>
import BlogPost from '../components/BlogPost.vue';

export default {
  components: {
    BlogPost
},
  data() {
    return {
      welcomeScreen: {
        title: "Welcome",
        blogPost:
          "Weekly blog articles with all things programming including HTML, CSS, JavaScript and more. Register today to never miss a post!",
        welcomeScreen: true,
        photo: "coding",
      },
      sampleBlogPost: [{
        title: "This is a Filler Title",
        blogHTML: "This is a filler blog post title!",
        blogCoverPhoto: "beautiful-sotires",
      },
      {
        title: "This is a Filler Title",
        blogHTML: "This is a filler blog post title!",
        blogCoverPhoto: "designed-for-everyone",
      }
      ]
    }
  }
};
</script>

<style lang="scss" scoped>

.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}
.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
   
    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      
    }
    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
     
    }
  }
}

</style>