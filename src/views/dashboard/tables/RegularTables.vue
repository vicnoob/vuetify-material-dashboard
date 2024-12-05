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
            <th class="primary--text">Ảnh</th>
            <th class="primary--text">ID</th>
            <th class="primary--text">Địa chỉ</th>
            <th class="primary--text">Diện tích</th>
            <th class="primary--text">Mục đích sử dụng</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in dataTable" :key="item.id">
            <td>
              <v-img :width="30" :height="30" :src="item.img" />
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.id }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.area }}</td>
            <td>{{ item.purpose }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <div class="py-3" />

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
        {
          id: 4,
          name: 'TNH',
          age: 21,
          address: 'CT1-X2 Bac Linh Dam',
          nationality: 'Viet Nam',
          salary: '3000$',
        },
      ],
    }),

    computed: {},

    methods: {},
  };
</script>
