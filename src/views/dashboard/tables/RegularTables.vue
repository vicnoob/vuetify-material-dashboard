<template>
  <v-container id="regular-tables" fluid tag="section" class="pt-12">
    <!-- <base-v-component heading="Simple Tables" link="components/simple-tables" /> -->
    <v-row class="text-right">
      <v-col cols="12" lg="4">
        <v-text-field
          :label="$t('Tìm kiếm bằng địa chỉ hoặc ID')"
          v-model="filter.keyword"
          color="secondary"
          hide-details
        >
        </v-text-field>
      </v-col>
      <v-col cols="12" lg="4">
        <v-select
          label="Mục đích sử dụng"
          v-model="filter.purpose"
          :items="purposeList"
          clearable
        ></v-select>
      </v-col>
      <v-col cols="12" lg="4">
        <v-btn color="success" class="mr-0" @click="goToAddPage">
          <v-icon small class="ml-2 text-right"> mdi-plus </v-icon>
          Thêm mới
        </v-btn>
      </v-col>
    </v-row>

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
            <th class="primary--text">Diện tích (m2)</th>
            <th class="primary--text">Mục đích sử dụng</th>
            <th class="primary--text">Hành động</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="item in filteredLandList" :key="item.id">
            <td>
              <v-img
                v-preview-image="item.img"
                :width="30"
                :height="30"
                :src="item.img"
              />
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
              <v-icon small color="error" @click="showDeleteDialog(item)">
                mdi-delete
              </v-icon>
              <v-icon small color="info" class="ml-2" @click="viewDetail(item)">
                mdi-eye
              </v-icon>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </base-material-card>

    <v-dialog v-model="deleteDialog.visible" max-width="400">
      <v-card>
        <v-card-title class="headline"> Xóa miếng đất </v-card-title>
        <v-card-text> Bạn chắc chắn muốn xóa miếng đất này? </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" text @click="deleteDialog.visible = false">
            Hủy
          </v-btn>
          <v-btn color="error" text @click="deleteItem(deleteDialog.item)">
            Xóa
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  // name: 'DashboardCoreAppBar',

  components: {},

  props: {},
  computed: {
    ...mapState(["landList"]),
    filteredLandList() {
      return this.landList.filter((land) => {
        // Filter by keyword
        const keywordMatch =
          !this.filter.keyword ||
          land.address
            .toLowerCase()
            .includes(this.filter.keyword.toLowerCase()) ||
          land.id.toString()
            .toLowerCase()
            .includes(this.filter.keyword.toLowerCase());

        // Filter by purpose
        const purposeMatch =
          !this.filter.purpose || land.purpose === this.filter.purpose;

        // Return true if both conditions are met
        return keywordMatch && purposeMatch;
      });
    },
  },
  data: () => ({
    deleteDialog: {
      visible: false,
      item: null,
    },
    filter: {
      keyword: "",
      purpose: "",
    },
    purposeList: [
      "Đất ở",
      "Đất công cộng",
      "Thương mại",
      "Nông nghiệp",
      "Đất hoang",
    ],
  }),

  methods: {
    ...mapMutations({
      deleteLand: "DELETE_LAND",
    }),
    editItem(item) {
      console.log("Editing item:", item);
      this.$router.push({ name: "Edit land info", params: { id: item.id } });
    },
    viewDetail(item) {
      this.$router.push({ name: "Land detail info", params: { id: item.id } });
    },
    showDeleteDialog(item) {
      this.deleteDialog.visible = true;
      this.deleteDialog.item = item;
    },
    deleteItem(item) {
      // Xóa item khỏi danh sách
      this.deleteLand(item);
      this.deleteDialog.visible = false;
    },
    goToAddPage() {
      // Sử dụng $router của Vue Router để chuyển hướng
      this.$router.push("/pages/add-new");
    },
  },
};
</script>

<style lang="scss">
.clickable {
  cursor: pointer;
}
</style>
