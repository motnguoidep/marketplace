<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

import HomeView from "./views/HomeView.vue";
import Header from "./views/Header.vue";
import Footer from "./views/Footer.vue";
import '../src/assets/css/main.css';

import './assets/css/plugins/animate.css';
import './assets/css/plugins/animate.min.css';

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
  <RouterView></RouterView>
  <Footer />
</template>
