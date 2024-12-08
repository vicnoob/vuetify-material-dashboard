<template>
  <v-container
    id="user-profile"
    fluid
    tag="section"
  >
    <v-row justify="center">
      <v-col
        cols="12"
        md="12"
      >
        <base-material-card>
          <template v-slot:heading>
            <div class="display-2 font-weight-light">
              Thông tin mảnh đất
            </div>
          </template>

          <v-form>
            <v-container class="py-0">
              <v-row>
                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="info.address"
                    label="Địa chỉ"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    v-model="info.area"
                    label="Diện tích"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                <v-select
                  label="Mục đích sử dụng"
                  v-model="info.purpose"
                  :items="purposeList"
                ></v-select>
                </v-col>

                <v-col cols="12">
                  <v-text-field
                    label="Link ảnh"
                    v-model="info.img"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="12"
                >
                  <v-text-field
                    v-model="info.complianceStatus"
                    label="Tình trạng pháp lý"
                    class="purple-input"
                  />
                </v-col>

                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Tên chủ sở hữu"
                    v-model="info.ownerName"
                    class="purple-input"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="CCCD"
                    v-model="info.ownerID"
                    class="purple-input"
                  />
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                <v-menu
                  ref="menu"
                  v-model="menu"
                  :close-on-content-click="false"
                  transition="scale-transition"
                  offset-y
                  min-width="auto"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="info.ownerDOB"
                      label="Ngày sinh"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="info.ownerDOB"
                    @input="menu = false"
                  ></v-date-picker>
                </v-menu>
                </v-col>
                <v-col
                  cols="12"
                  md="6"
                >
                  <v-text-field
                    label="Số điện thoại"
                    v-model="info.ownerPhone"
                    class="purple-input"
                  />
                </v-col>

                <v-col cols="12">
                  <v-textarea
                    class="purple-input"
                    v-model="info.description"
                    label="Mô tả"
                  />
                </v-col>

                <v-col
                  cols="12"
                  class="text-right"
                >
                  <v-btn
                    color="success"
                    @click="save()"
                    class="mr-0"
                  >
                    Lưu
                  </v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </base-material-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  import { mapState, mapMutations } from 'vuex'
  export default {
    computed: {
      ...mapState(['landList']),
      landId() {
        return this.$route.params.id;
      },
    },
    mounted() {
      if (this.landId) {
        const landInfo = this.landList.find(item => item.id == this.landId)
        this.info = {
          ...landInfo
        }
      }
    },
    methods: {
      ...mapMutations({
        addNewLand: 'ADD_NEW_LAND',
        editLand: 'EDIT_LAND_INFO',
      }),
      save() {
        if (!this.landId) {
          this.addNewLand({
            id: this.landList.length + 1,
            ...this.info
          })
          this.$toast.success('Bạn đã thêm mới thửa đất thành công')
        } else {
          this.editLand(
            this.info
          )
          this.$toast.success('Bạn đã cập nhật thông tin thành công')
        }
        this.$router.push('/tables/regular-tables');
      },
    },
    data: () => ({
      info: {
        address: '',
        area: '',
        purpose: '',
        img: '',
        complianceStatus: '',
        ownerName: '',
        ownerID: '',
        ownerDOB: '',
        ownerPhone: null,
        description: ''
      },
      menu: false,
      purposeList: [
        'residential',
        'public service',
        'commercial'
      ]
    })
  }
</script>
