<template>
  <v-app-bar
    id="app-bar"
    absolute
    app
    color="transparent"
    flat
    height="75"
  >
    <v-text-field
      solo
      flat
      outlined
      dense
      placeholder="Any help?"
      prepend-inner-icon="mdi-search"
      class="mt-5"
      style="max-width: 250px;"
    />

    <v-spacer />

    <div class="mx-3" />

    <div class="text-align-right">
      <v-row justify="end">
        Hi, Adjie!
      </v-row>
      <v-row justify="end">
        Adjie_g4ant3ng@banget.com
      </v-row>
    </div>

    <v-btn
      class="ml-2"
      min-width="0"
      text
      to="/pages/user"
    >
      <v-icon
        large
        color="#C6CCD1"
      >
        mdi-account-circle
      </v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>

  // Utilities
  import { mapState, mapMutations } from 'vuex'

  export default {
    name: 'DashboardCoreAppBar',
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      notifications: [
        'Mike John Responded to your email',
        'You have 5 new tasks',
        'You\'re now friends with Andrew',
        'Another Notification',
        'Another one',
      ],
    }),

    computed: {
      ...mapState(['drawer']),
    },

    methods: {
      ...mapMutations({
        setDrawer: 'SET_DRAWER',
      }),
    },
  }
</script>
