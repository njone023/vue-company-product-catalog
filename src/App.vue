<!-- 
  app root that contains Header and Footer, which appear on every page 
  as well as the router-view to navigate between Home, About, and 
  Contact Sales pages, with Home displaying as default. 
-->
<template>
  <div class="app-container">
    <Header :companyName="companyName" 
      :companyId="companyId"
      :itemsTotal="companyProducts.length" />
    <router-view :companyData="companyData"></router-view>
    <Footer />
  </div>
</template>

<script>

import { provide } from 'vue';
import jsonData from './assets/test.json'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  //Define/initialize main data required for app
  data() {
    return {
      companyData: jsonData,
      companyProducts: jsonData.items,
      companyName: String,
      companyId: String,
    }
  },

  //provide product data to be injected so it can be accessed by Products, 
  //which is not a child of this component
  provide() {
    return {
      productData: this.companyProducts
    }
  },
  //assign company name and company id to variables for readability 
  created() {
    this.companyName = this.companyData.CompanyName;
    this.companyId = this.companyData.ManufacturerID;
  },
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400&display=swap');

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: 'Poppins', sans-serif;
  }
  .app-container {
    max-width: 80vw;
    margin: 30px auto;
    overflow: auto;
    min-height: 300px;
    padding: 30px;
    border-radius: 5px;
    padding-top: 0;
    margin-top: 10px;
  }

  .btn {
    display: inline-block;
    background: black;
    color: white;
    border: none;
    padding: 10px 20px;
    margin: 5px;
    border-radius: 5px;
    cursor: pointer;
    text-decoration: none;
    font-size: 15px;
    font-family: inherit;
  }
  .btn:focus {
    outline: none;
  }
  .btn:active {
    transform: scale(0.98);
  }
  .btn-block {
    display: block;
    width: 100%;
  }

  .sales-btn {
      display: flex;
      margin-top: 10px;
      background: lightSteelBlue;
      border-radius: 35px;
      padding: 10px 20px;
      color: white;
      font-weight: 900;
      font-size: 15px;
      text-shadow: 1px 1px rgb(0 0 0 / 30%);
  }

  .sales-btn a {
      text-decoration: none;
      color: white;   
      padding-left: 10px;
  }

  .sales-btn-sml {
    width: fit-content;
    display: inline-flex
  }

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

@media(max-width: 375px) {
  .app-container {
    padding: 10px;
  };
}

</style>
