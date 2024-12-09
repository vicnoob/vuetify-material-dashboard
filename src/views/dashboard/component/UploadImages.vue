<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="12">
        <div
          class="upload-box"
          @click="triggerFileInput"
          @dragover.prevent
          @drop.prevent="handleDrop"
        >
          <p v-if="!uploadedImage">Tải ảnh lên</p>
          <v-img
            v-else
            class="m-2"
            :src="uploadedImage"
            max-height="300"
            max-width="300"
          ></v-img>
        </div>
        <input
          type="file"
          ref="fileInput"
          class="d-none"
          @change="handleFileInput"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    isReadonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      uploadedImage: null, // To store the uploaded image preview URL
    };
  },
  watch: {
    // Sync with the parent when the prop value changes
    value(newValue) {
      this.uploadedImage = newValue;
    },
  },
  methods: {
    triggerFileInput() {
      if (this.isReadonly) {
        return
      }
      this.$refs.fileInput.click();
    },
    handleFileInput(event) {
      const file = event.target.files[0];
      if (file) {
        this.previewImage(file);
      }
    },
    handleDrop(event) {
      const file = event.dataTransfer.files[0];
      if (file) {
        this.previewImage(file);
      }
    },
    previewImage(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        this.uploadedImage = e.target.result; // Store image URL for preview
        this.$emit('input', this.uploadedImage); 
      };
      reader.readAsDataURL(file);
    },
  },
};
</script>

<style scoped>
.upload-box {
  width: 100%;
  border: 2px dashed #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #999;
  cursor: pointer;
  border-radius: 8px;
  transition: border-color 0.2s;
  padding: 20px;
}
.upload-box:hover {
  border-color: #1976d2;
}
.upload-box p {
  margin: 0;
}
</style>