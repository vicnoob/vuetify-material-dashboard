<template>
  <v-container id="regular-tables" fluid tag="section">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->

    <div class="text-right">
      <v-btn color="success" class="mr-0" @click="goToAddPage">
        <v-icon
          small
          class="ml-2 text-right"
        >
          mdi-plus
        </v-icon>
        Thêm mới
      </v-btn>
    </div>
    <base-material-card
      icon="mdi-clipboard-text"
      title="Danh sách các mảnh đất"
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
            <th class="primary--text">Hành động

            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in landList" :key="item.id">
            <td>
              <v-img :width="30" :height="30" :src="item.img" />
            </td>
            <td>{{ item.id }}</td>
            <td>{{ item.address }}</td>
            <td>{{ item.area }}</td>
            <td>{{ item.purpose }}</td>
            <td>
              <v-icon
                small
                color="primary"
                class="mr-2"
                @click="editItem(item)"
              >
              mdi-pencil
              </v-icon>
              <v-icon
                small
                color="error"
                @click="showDeleteDialog(item)"
              >
                mdi-delete
              </v-icon>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <v-dialog v-model="deleteDialog.visible" max-width="400">
      <v-card>
        <v-card-title class="headline">
          Xóa miếng đất
        </v-card-title>
        <v-card-text>
          Bạn chắc chắn muốn xóa miếng đất này?
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="deleteDialog.visible = false"
          >
            Hủy
          </v-btn>
          <v-btn
            color="error"
            text
            @click="deleteItem(deleteDialog.item)"
          >
            Xóa
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    // name: 'DashboardCoreAppBar',

    components: {},

    props: {},
    computed: {
    ...mapState(['landList']),
    },
    data: () => ({
      deleteDialog: {
        visible: false,
        item: null
      }
    }),

    methods: {
      ...mapMutations({
        deleteLand: 'DELETE_LAND',
      }),
      editItem(item) {
        console.log('Editing item:', item);
      },
      showDeleteDialog(item) {
        this.deleteDialog.visible = true;
        this.deleteDialog.item = item;
      },
      deleteItem(item) {
        // Xóa item khỏi danh sách
        this.deleteLand(item)
        this.deleteDialog.visible = false;
      },
      goToAddPage() {
        // Sử dụng $router của Vue Router để chuyển hướng
        this.$router.push('/pages/add-new');
      }


    },
  };
</script>

<style lang="scss">
.clickable {
  cursor: pointer;
}

</style>