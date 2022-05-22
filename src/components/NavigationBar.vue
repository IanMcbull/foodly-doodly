<template>
  <nav>
    <div class="nav-bar-div">
      <v-img src="@/assets/logo.png" max-width="150"></v-img>
      <ul>
        <li>RECIPES</li>
        <li>SUBMIT RECIPE</li>
        <li>ABOUT</li>
      </ul>
    </div>
    <div class="nav-actions">
      <router-link to="/" class="links">LOGIN</router-link>
      <router-link to="/signup" class="links signup">SIGN UP</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavigationBar",

  data: () => ({}),
};
</script>

<style lang="css">
@font-face {
  font-family: navigation-font;
  src: url(@/assets/fonts/doodle_cartoon/DoodleCartoon\ 1.ttf);
}
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px 0 10px;
  font-family: navigation-font;
  font-size: 1.7rem;
}
.nav-bar-div {
  display: flex;
  width: 50%;
  align-items: center;
}
.nav-bar-div > ul {
  display: flex;
  list-style: none;
  justify-content: space-around;
  width: 100%;
}
.nav-actions {
  display: flex;
  justify-content: space-around;
  width: 15%;
}
.nav-actions > .links {
  text-decoration: none;
  color: black;
}
.signup {
  border: 3px solid;
  width: 150px;
  text-align: center;
}
</style>
