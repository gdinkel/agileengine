<template>
  <v-card>
    <v-img
        :src="item.full_picture"
    >
    <v-card-title class="white--text">{{ item.camera }}</v-card-title>
    </v-img>
    <v-card-subtitle>{{ item.author }}</v-card-subtitle>
    <v-card-text>
      {{ item.tags }}
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'Photo',
    props: { item: Object },
    data() { 
      return {

      }
    }
  }
</script>
