<template>
  <div>
    <v-card
      class="pa-5 mx-6"
      outlined
    >
      <v-row class="headline font-weight-bold mx-0 mb-2">
        Hello, Welcome to OCA!
      </v-row>
      <v-row class="mx-0">
        Let’s start make some noise and make your campaign great again!<span class="main-color">&nbsp;click here &nbsp;</span>to spread your messages.
      </v-row>
    </v-card>
    <div class="mx-6">
      <v-row class="mx-0">
        Remaining Quota
      </v-row>
      <v-row
        class="mx-0"
        justify="space-between"
      >
        <v-card
          outlined
          class="pa-3 mt-2"
          style="width: 220px"
        >
          <v-row
            class="ma-0 mx-0"
            justify="space-between"
          >
            <span>Call</span>
            <span class="call">4840 seconds</span>
          </v-row>
        </v-card>
        <v-card
          outlined
          class="pa-3 mt-2"
          style="width: 220px"
        >
          <v-row
            class="ma-0 mx-0"
            justify="space-between"
          >
            <span>SMS</span>
            <span class="sms">4840 messages</span>
          </v-row>
        </v-card>
        <v-card
          outlined
          class="pa-3 mt-2"
          style="width: 220px"
        >
          <v-row
            class="ma-0 mx-0"
            justify="space-between"
          >
            <span>Email</span>
            <span class="email">4840 mails</span>
          </v-row>
        </v-card>
        <v-card
          outlined
          class="pa-3 mt-2"
          style="width: 220px"
        >
          <v-row
            class="ma-0 mx-0"
            justify="space-between"
          >
            <span>Whatsapp</span>
            <span class="whatsapp">4840 messages</span>
          </v-row>
        </v-card>
      </v-row>
    </div>
    <v-card
      class="pa-4 mx-6 mt-2"
      outlined
    >
      <v-row
        class="ma-0"
        justify="space-between"
      >
        <span class="main-color">Recent BLAST</span>
        <div>
          <v-icon>
            mdi-sort
          </v-icon>
          Sort
          <v-icon class="ml-5">
            mdi-filter
          </v-icon>
          Filter
        </div>
      </v-row>
      <hr
        class="mt-2"
        style="color: rgba(221, 221, 228, 0.36);"
      >
      <v-data-table
        :headers="headers"
        :items="listTableItem"
      >
        <template v-slot:item="{ item }">
          <tr>
            <td>{{ item.idName }}</td>
            <td>{{ item.type }}</td>
            <td>{{ item.campaign }}</td>
            <td>{{ item.totalBlast }}</td>
            <td :class="statusColor(item.status)">
              {{ item.status }}
            </td>
            <td>{{ item.date }}</td>
          </tr>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'DashboardDashboard',

    data () {
      return {
        headers: [
          {
            sortable: false,
            text: 'Id Name',
            value: 'id',
          },
          {
            sortable: false,
            text: 'Name',
            value: 'name',
          },
          {
            sortable: false,
            text: 'Campaign',
            value: 'campaign',
          },
          {
            sortable: false,
            text: 'Total Blast',
            value: 'totalBlast',
          },
          {
            sortable: false,
            text: 'Status',
            value: 'status',
          },
          {
            sortable: false,
            text: 'Date',
            value: 'date',
          },
        ],
        listTableItem: [
          {
            idName: 'MTN_EGY-LIFE',
            type: 'Call',
            campaign: 'Reminding Billing 20 September',
            totalBlast: '1255',
            status: 'Success',
            date: 'July 15, 2018 4:47 AM',
          },
          {
            idName: 'MTN_EGY-LIFE',
            type: 'Call',
            campaign: 'Reminding Billing 20 September',
            totalBlast: '1255',
            status: 'Pending',
            date: 'July 15, 2018 4:47 AM',
          },
          {
            idName: 'MTN_EGY-LIFE',
            type: 'Call',
            campaign: 'Reminding Billing 20 September',
            totalBlast: '1255',
            status: 'Progress',
            date: 'July 15, 2018 4:47 AM',
          },
          {
            idName: 'MTN_EGY-LIFE',
            type: 'Call',
            campaign: 'Reminding Billing 20 September',
            totalBlast: '1255',
            status: 'Failed',
            date: 'July 15, 2018 4:47 AM',
          },
        ],
        tabs: 0,
        tasks: {
          0: [
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: true,
            },
            {
              text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
              value: false,
            },
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: false,
            },
            {
              text: 'Create 4 Invisible User Experiences you Never Knew About',
              value: true,
            },
          ],
          1: [
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: true,
            },
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: false,
            },
          ],
          2: [
            {
              text: 'Lines From Great Russian Literature? Or E-mails From My Boss?',
              value: false,
            },
            {
              text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit',
              value: true,
            },
            {
              text: 'Sign contract for "What are conference organizers afraid of?"',
              value: true,
            },
          ],
        },
        list: {
          0: false,
          1: false,
          2: false,
        },
      }
    },
    methods: {
      complete (index) {
        this.list[index] = !this.list[index]
      },
      statusColor (value) {
        if (value === 'Success') {
          return 'success-green'
        } else if (value === 'Progress') {
          return 'progress'
        } else if (value === 'Pending') {
          return 'pending'
        } else {
          return 'failed'
        }
      },
    },
  }
</script>
<style scoped>
.main-color {
  color: #ed1260 !important;
}
.success-green {
  color: #61C378 !important;
}
.progress {
  color: #41AFFF !important;
}
.pending {
  color: #F3A356 !important;
}
.failed {
  color: #DA5E5B !important;
}
.call {
  color: #22B9FF !important;
}
.sms {
  color: #FFB822 !important;
}
.email {
  color: #F554E9 !important;
}
.whatsapp {
  color: #1DC9B7 !important;
}
</style>
