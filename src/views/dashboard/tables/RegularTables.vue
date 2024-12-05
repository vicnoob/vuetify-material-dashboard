<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->
    <v-col
      cols="12"
      offset="6"
      md="6"
    >
      <v-text-field
        label="First Name"
        class="purple-input"
      />
    </v-col>
    <base-material-card
      icon="mdi-clipboard-text"
      title="Simple Table"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>Image</th>
            <th class="primary--text">ID</th>
            <th class="primary--text">Name</th>
            <th class="primary--text">Country</th>
            <th class="primary--text">City</th>
            <th class="text-right primary--text">Salary</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in dataTable" :key="item.id">
            <td>
              <v-img :width="30" :height="30" :src="item.img" />
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.nationality }}</td>
            <td class="text-right">{{ item.salary }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

    <base-material-card
      color="success"
      dark
      icon="mdi-clipboard-plus"
      title="Table on Dark Background"
      class="px-5 py-3"
    >
      <v-simple-table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Country</th>
            <th>City</th>
            <th class="text-right">Salary</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in dataTable" :key="item.id">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.nationality }}</td>
            <td class="text-right">{{ item.salary }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>
  </v-container>
</template>

<script>
  export default {
    // name: 'DashboardCoreAppBar',

    components: {},

    props: {},

    data: () => ({
      dataTable: [
        {
          id: 1,
          img: 'https://media.istockphoto.com/id/1973365581/vector/sample-ink-rubber-stamp.jpg?s=612x612&w=0&k=20&c=_m6hNbFtLdulg3LK5LRjJiH6boCb_gcxPvRLytIz0Ws=',
          name: 'TQG',
          age: 21,
          address: 'CT1-X2 Bac Linh Dam',
          nationality: 'Viet Nam',
          salary: '2000$',
        },
        {
          id: 2,
          name: 'Truong Nguyen Ha',
          age: 27,
          address: 'CT1-X2 Bac Linh Dam',
          nationality: 'Viet Nam',
          salary: '3000$',
        },
        {
          id: 3,
          name: 'PTT',
          age: 30,
          address: 'Tam Trinh',
          nationality: 'Viet Nam',
          salary: '1000$',
        },
      ],
    }),

    computed: {},

    methods: {},
  };
</script>
