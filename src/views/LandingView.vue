<template>
  <v-app>
    <navigation-bar />
    <v-container>
      <div class="content">
        <div class="landing-page-pitch">
          <h1>Recipes for any occasion right at your fingertips</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo,
            molestias deserunt. Ratione voluptate suscipit quia provident, qui
            aliquam unde repudiandae necessitatibus placeat quo alias harum
            consequuntur officia temporibus praesentium architecto ipsa animi?
            Veritatis odit sequi iusto illum, minus nihil corporis atque
            voluptatum unde neque tempore dolores placeat blanditiis incidunt
            animi.
          </p>
          <v-btn color="#ffc044" max-width="200">GET STARTED</v-btn>
        </div>
        <div class="landing-page-image">
          <v-img
            src="@/assets/images/landing-page-image.png"
            :aspect-ratio="16/16"
            class="landing-image"
          ></v-img>
        </div>
      </div>
    </v-container>
  </v-app>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
export default {
  name: "LandingView",
  components: {
    NavigationBar,
  },
};
</script>
<style>
@font-face {
  font-family: contentHeaderFont;
  src: url(@/assets/fonts/made_tommy/MADE\ TOMMY\ ExtraBold_PERSONAL\ USE.otf);
}
.content {
  height: 80vh;
  display: flex;
}
.landing-page-image {
  width: 50%;
  display: flex;
}
.landing-page-pitch {
  width: 50%;
  align-self: center;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 50%;
}
.landing-page-pitch > h1 {
  font-size: 3rem;
  font-family: contentHeaderFont;
}
.landing-page-pitch > p {
  text-align: justify;
}
.landing-image{
  align-self: flex-end;
}
</style>
