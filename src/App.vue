<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import Header from "./views/Header.vue";
import HomeView from "./views/HomeView.vue";
import Footer from "./views/Footer.vue";
import '../src/assets/css/main.css';

// import "./assets/css/main.css";
// import "./assets/css/plugins/animate.min.css";
import './assets/css/plugins/animate.css';
import './assets/css/plugins/animate.min.css';

    import '../src/assets/js/vendor/modernizr-3.6.0.min.js';
    import '../src/assets/js/vendor/jquery-3.6.0.min.js';
    import '../src/assets/js/vendor/jquery-migrate-3.3.0.min.js';
    import '../src/assets/js/vendor/bootstrap.bundle.min.js';
    import '../src/assets/js/plugins/slick.js';
    import '../src/assets/js/plugins/jquery.syotimer.min.js';
    import '../src/assets/js/plugins/waypoints.js';
    // import '../src/assets/js/plugins/wow.js';
    import '../src/assets/js/plugins/perfect-scrollbar.js';
    import '../src/assets/js/plugins/magnific-popup.js';
    import '../src/assets/js/plugins/select2.min.js';
    import '../src/assets/js/plugins/counterup.js';
    import '../src/assets/js/plugins/jquery.countdown.min.js';
    import '../src/assets/js/plugins/images-loaded.js';
    import '../src/assets/js/plugins/isotope.js';
    import '../src/assets/js/plugins/scrollup.js';
    import '../src/assets/js/plugins/jquery.vticker-min.js';
    import '../src/assets/js/plugins/jquery.theia.sticky.js';
    import '../src/assets/js/plugins/jquery.elevatezoom.js';

    // import './assets/js/main.js';
    // import '../src/assets/js/shop.js';
</script>

<template>
   
 <head>
    <meta charset="utf-8" />
    <title>Nest - Multipurpose eCommerce HTML Template</title>
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="description" content="" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="" />
    <meta property="og:type" content="" />
    <meta property="og:url" content="" />
    <meta property="og:image" content="" />
    <!-- Favicon -->
    <link rel="shortcut icon" type="image/x-icon" href="..src/assets/imgs/theme/favicon.svg" />
    <!-- Template CSS -->
    <link type = "model" rel="stylesheet" href="../src/assets/css/plugins/animate.min.css" />
    <link type = "model" rel="stylesheet" href="../src/assets/css/main.css" />
    <!-- <link type = "model" rel="stylesheet" href="../src/assets/css/main.css.map"> -->

  </head>

  <Header />
  <slot> <HomeView /></slot>
  <Footer />
</template>
