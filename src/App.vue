<template>
  <v-app>
    <v-navigation-drawer
        v-model="drawer"
        app
        clipped
      >
        <v-list dense>
          <v-list-item link to="/">
            <v-list-item-action>
              <v-icon>mdi-view-dashboard</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Dashboard</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
          <v-list-item link to="/photos">
            <v-list-item-action>
              <v-icon>mdi-camera</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Photos</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
  
      <v-app-bar
        app
        clipped-left
      >
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Storage</v-toolbar-title>
        <v-spacer />
        <v-text-field
            label="Api Key"
            :placeholder="apiKey"
            outlined
            dense
            class="mt-6"
            v-model="apiKey"
        ></v-text-field>
        <v-spacer />
        <v-btn v-if="!token" color="primary" @click="getAccessToken">Please Login</v-btn>
      </v-app-bar>
  
      <v-main>
        <v-container
          class="fill-height"
          fluid
        >
          <v-row
            align="center"
            justify="center"
          >
            <v-col>
              <router-view />
            </v-col>
          </v-row>
        </v-container>
      </v-main>
  
      <v-footer app>
        <span>&copy; {{ new Date().getFullYear() }}</span>
      </v-footer>

      <v-snackbar
        v-model="snackbar"
      >
        Invalid Token

        <template v-slot:action="{ attrs }">
          <v-btn
            text
            v-bind="attrs"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
  </v-app>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'App',
  data: () => ({
    drawer: null,
    apiKey: '23567b218376f79d9415',
    snackbar: false
  }),
  methods: {
    ...mapActions('core', ['setToken']),
    async getAccessToken() {
      try {
        const response = await this.$http.post(process.env.VUE_APP_API_BASE_URL+'/auth', {
          apiKey: this.apiKey
        });
        this.setToken(response.data.token);
        this.snackbar = false;
      } catch(error) {
        this.snackbar = true;
        this.$router('/');
      }
    },
  },
  computed: {
    ...mapState('core', ['token'])
  },
};
</script>
