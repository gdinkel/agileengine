<template>
  <div>
    <v-pagination
      v-model="page"
      :length="pageCount"
    ></v-pagination>
    <v-row>
      <v-col
        v-for="photo in photos"
        :key="photo.id"
        class="d-flex"
        cols="12" sm="4" lg="3"
      >
        <v-card flat tile class="d-flex" @click="showDetail(photo)">
          <v-img
            :src="photo.cropped_picture"
            class="grey lighten-2"
            cover
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-row>
            </template>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
    <v-dialog
      v-model="dialog"
      max-width="400"
    >
      <v-card outlined>
        <photo :item="photo" />
        <v-card-actions>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>   
</template>

<script>
import { mapActions, mapState } from "vuex";
import Photo from '../components/Photo';
export default {
  name: 'Photos',
  components: {
    Photo
  },
  data() {
    return {
      page: 1,
      dialog: false,
      selectedItem: {}
    }
  },
  methods: {
    ...mapActions('photos', ['getPhotos', 'getPhoto']),
    showDetail(photo) {
      this.getPhoto(photo.id).then(() => {
        this.dialog = true;
      });
    }
  },
  computed: {
    ...mapState('photos', ['photos','photo','pageCount'])
  },
  watch: {
    page(value) {
      this.getPhotos(value);
    }
  },
  beforeMount() {
    this.getPhotos(this.page);
  }
}
</script>
