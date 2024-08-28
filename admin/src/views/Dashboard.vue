<template>
  <div class="pt-8 pl-2 pr-2 pb-2">
    <b-btn @click="logoutUser">
      <img src="@/assets/img5.svg" alt="info">
      </b-btn>
    <h2>Buradan Əsas Səhifəni istədiyiniz şəkildə düzəldə bilırsiniz</h2>

    <b-row>
      <b-col xl="3" md="6" v-for="(image, index) in images" :key="'image-' + image.id">
        <stats-card :title="`Image ${index + 1}`" sub-title="350,897" class="mb-4">
          <b-row class="container_card">
            <div v-if="image">
              <img :src="image.base64" alt="Image" width="100" />
            </div>
            <div class="file-uploader">
              <label :for="`file-upload-${index}`" class="file-label">Select your file</label>
              <input :id="`file-upload-${index}`" type="file" @change="handleFileUpload($event, index)" class="file-input">
              <button @click="updateImage(image.id, index)" class="upload-btn">Update Image</button>
            </div>
          </b-row>
        </stats-card>
      </b-col>
      <b-col xl="3" md="6" v-for="(text, index) in texts" :key="'text-' + index">
        <stats-card :title="`Text ${index + 1}`" sub-title="350,897" class="mb-4">
          <b-row class="container_card">
            <div v-if="text">
              <h2>{{ text.title }}</h2>
            </div>
            <div v-if="text">
              <h2>{{ text.description }}</h2>
            </div>
          </b-row>
        </stats-card>
      </b-col>
    </b-row>
  </div>
</template>



<script>
import * as chartConfigs from '@/components/Charts/config';
import LineChart from '@/components/Charts/LineChart';
import BarChart from '@/components/Charts/BarChart';
import axios from 'axios';

import BaseProgress from '@/components/BaseProgress';
import StatsCard from '@/components/Cards/StatsCard';
import SocialTrafficTable from './Dashboard/SocialTrafficTable';
import PageVisitsTable from './Dashboard/PageVisitsTable';

export default {
  components: {
    LineChart,
    BarChart,
    BaseProgress,
    StatsCard,
    PageVisitsTable,
    SocialTrafficTable
  },
  data() {
    return {
      data: null,
      file: null, 
      imageBase64: '',
      images: null,
      newImages:null,
      texts:'',
      fileData: { logo: '', bgImage: '' },  
      bigLineChart: {
        allData: [
          [0, 20, 10, 30, 15, 40, 20, 60, 60],
          [0, 20, 5, 25, 10, 30, 15, 40, 40]
        ],
        activeIndex: 0,
        chartData: {
          datasets: [
            {
              label: 'Performance',
              data: [0, 20, 10, 30, 15, 40, 20, 60, 60],
            }
          ],
          labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        },
        extraOptions: chartConfigs.blueChartOptions,
      },
      redBarChart: {
        chartData: {
          labels: ['Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
          datasets: [{
            label: 'Sales',
            data: [25, 20, 30, 22, 17, 29]
          }]
        },
        extraOptions: chartConfigs.blueChartOptions
      }
    };
  },
  methods: {
          logoutUser() {
          this.clearCookie('authToken');
          this.clearCookie('tokenExpire');
          this.$router.push('/asanlogin');
          console.log('User logged out, cookies cleared.');
        },

        clearCookie(name) {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
          console.log(`Cookie ${name} cleared.`);
        },
      fetchImages() {
        axios.get('http://localhost:5000/images')
          .then(response => {
            this.images = response.data.filter(obj => obj.type === 'LOGO_IMAGE' || obj.type === 'BG_IMAGE');
            console.log('Fetched Images:', this.images);
          })
          .catch(error => {
            console.error('Error fetching images:', error);
            this.images = [];
          });
      },
      fetchTexts() {
        axios.get('http://localhost:5000/api/texts')
          .then(response => {
           this.texts = response.data
            console.log(response);
          })
          .catch(error => {
            console.error('Error fetching images:', error);
            this.texts = [];
          });
      },

      handleFileUpload(event, index) {
        const file = event.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            this.newImages[index].base64 = e.target.result;
            console.log(`Image ${index} base64 updated`);
          };
          reader.readAsDataURL(file);
        }
      },

      updateImage(id, index) {
        const body = { base64: this.newImages[index].base64 };
        axios.put(`http://localhost:5000/images/update/${id}`, body, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(response => {
          console.log(`Image ${index} updated successfully:`, response.data);
          this.fetchImages(); // Optionally re-fetch all images
        })
        .catch(error => {
          console.error(`Error updating image ${index}:`, error);
        });
      }

  },
  mounted() {
    this.fetchImages();
    this.fetchTexts()
  }
};
</script>
<style scoped>
.container_card{
  display: flex;
  flex-direction: column;
  align-items: center;
}
.file-uploader {
  display: flex;
  align-items: center;
  background-color: #d7d2dc; 
  border-radius: 4px;
  margin-top:20px ;
  

}

.file-label, .browse-btn {
  color: white;
  cursor: pointer;
  background-color: #07b664; 
  padding: 2px 10px;
  border-radius: 4px;
  margin: 0 auto;
  transition: background-color 0.3s ease;
}
.upload-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  cursor: pointer;
  background-color: #07b664;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.file-label {
  background-color: transparent;
}

.browse-btn:hover, .upload-btn:hover {
  background-color: #9B30FF;
}

.file-input {
  display: none; 
}

.upload-btn {
  border: none;
}
</style>

