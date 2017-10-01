<template>
  <div>
    <v-tabs dark centered v-model="active">
      <v-tabs-bar class="cyan">
        <v-tabs-item
        v-for="tab in tabs"
        :key="tab"
        :href="'#' + tab"
        ripple
        >
        Problem {{ tab.slice(-1) }}
      </v-tabs-item>
      <v-tabs-slider class="yellow"></v-tabs-slider>
    </v-tabs-bar>
    <v-tabs-items>
      <v-tabs-content
      v-for="tab in tabs"
      :key="tab"
      :id="tab"
      >
      <v-card flat>
        <v-card-text>{{ text }}</v-card-text>
      </v-card>
    </v-tabs-content>
  </v-tabs-items>
</v-tabs>
<div class="text-xs-center mt-3">
  <v-btn @click.natve="previous">Previous</v-btn>
  <v-btn @click.native="next">Next</v-btn>
</div>
</div>
</template>

<script>
export default {
  name: 'assignment',
  data () {
    return {
      tabs: ['tab-1', 'tab-2', 'tab-3', 'tab-4', 'tab-5', 'tab-6'],
      active: null,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  methods: {
    previous () {
      this.active = this.tabs[(this.tabs.indexOf(this.active) - 1) % this.tabs.length]
    },
    next () {
      this.active = this.tabs[(this.tabs.indexOf(this.active) + 1) % this.tabs.length]
    }
  }
}
</script>

<style>

</style>
