<template>
  <v-container class="container-style">
    <v-row>
      <v-col>
        <span class="headline">SMS Scheduller</span>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <span><b>Broadcast Name</b></span>
        <v-text-field
          outlined
          placeholder="name of your broadcast"
        />
      </v-col>
    </v-row>
    <v-row style="margin-top: -30px">
      <v-col cols="3">
        <span><b>Phonebook</b></span>
        <v-select
          outlined
          placeholder="Select your Phonebook"
        />
      </v-col>
    </v-row>
    <v-row style="margin-top: -30px">
      <v-col cols="9">
        <span><b>Message</b></span>
        <v-text-field
          outlined
          height="191"
        />
      </v-col>
    </v-row>
    <hr>
    <br>
    <div>
      <span class="headline"><b>Schedule</b></span>
      <br>
      <span class="text-style-sub-title">When and how often do you want to broadcast this message?</span>
    </div>
    <v-row>
      <v-col
        cols="2"
        style="margin-top: 20px"
      >
        <span><b>Run on</b></span>
      </v-col>
      <v-col cols="1">
        <v-checkbox
          label="Mon"
          color="#ed1260"
        />
      </v-col>
      <v-col cols="1">
        <v-checkbox
          label="Tue"
          color="#ed1260"
        />
      </v-col>
      <v-col cols="1">
        <v-checkbox
          label="Wed"
          color="#ed1260"
        />
      </v-col>
      <v-col cols="1">
        <v-checkbox
          label="Thu"
          color="#ed1260"
        />
      </v-col>
      <v-col cols="1">
        <v-checkbox
          label="Fri"
          color="#ed1260"
        />
      </v-col>
      <v-col cols="1">
        <v-checkbox
          label="Sat"
          color="#ed1260"
        />
      </v-col>
      <v-col cols="1">
        <v-checkbox
          label="Sun"
          color="#ed1260"
        />
      </v-col>
    </v-row>
    <div>
      <v-row style="margin-top: -20px">
        <v-col
          cols="2"
          offset="2"
        >
          <v-radio-group
            v-model="radio"
            @change="setTime()"
          >
            <div>
              <v-radio
                label="Once a day"
                color="#ed1260"
                style="margin-top: -10px"
              />
            </div>
            <br>
            <div>
              <v-radio
                label="At intervals"
                color="#ed1260"
              />
            </div>
          </v-radio-group>
        </v-col>
        <v-col>
          <v-row>
            <v-col cols="1">
              <span>At</span>
            </v-col>
            <v-col cols="1">
              <input
                type="number"
                class="time-input"
                :disabled="!isOnceADay"
              >
            </v-col>
            <v-col cols="1">
              <span>WIB</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="1">
              <span>Every</span>
            </v-col>
            <v-col cols="1">
              <input
                type="number"
                class="time-input"
                :disabled="!isInterval"
              >
            </v-col>
            <v-col cols="2">
              <select
                class="select-input"
                :disabled="!isInterval"
              >
                <option>Minutes</option>
                <option>Hours</option>
              </select>
            </v-col>
            <v-col cols="1">
              <span>from</span>
            </v-col>
            <v-col cols="1">
              <input
                type="number"
                class="time-input"
                :disabled="!isInterval"
              >
            </v-col>
            <v-col cols="1">
              <span>WIB</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
    <v-col
      cols="2"
      offset="7"
    >
      <v-btn
        color="#ed1260"
      >
        Send Message
      </v-btn>
    </v-col>
    <br>
  </v-container>
</template>

<script>
  export default {
    name: 'SmsScheduller',
    data () {
      return {
        radio: null,
        isOnceADay: false,
        isInterval: false,
      }
    },
    methods: {
      setTime (value) {
        if (this.radio === 0) {
          this.isOnceADay = true
          this.isInterval = false
        } else if (this.radio === 1) {
          this.isOnceADay = false
          this.isInterval = true
        }
      },
    },
  }
</script>
<style scoped>
  .container-style {
    margin-left: 30px;
    margin-right: 30px;
  }
  .select-input {
    border: 1px solid black;
    width: 100px;
  }
  .time-input {
    border: 1px solid black;
    width: 50px;
  }
  .text-style-sub-title {
    font-style: italic;
    color: grey;
  }
</style>
