<template>
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
    <RouterLink class="navbar-brand" to="/">Gif Router</RouterLink>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink
            active-class="bg-info text-dark fw-bold"
            class="nav-link"
            to="/gifs"
            >Gifs</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink
            active-class="bg-info text-dark fw-bold"
            class="nav-link"
            to="/stikers"
            >Stikers</RouterLink
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  components: { RouterLink },
};
</script>

<style></style>
