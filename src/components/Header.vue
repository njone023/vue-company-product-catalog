<!-- 
    Header Component that is always displayed, contains Company Logo, 
    app title, product count, and Contact Sales Rep button
-->
<template>
    <header :class="[homePage ? '' : 'contact-page-header']">
        <div class="header-main">           
            <h1>{{companyName}} Products Catalog</h1>
            <span v-show="homePage">Displaying <strong>{{itemsTotal}}</strong> products</span>
        </div>
        
        <div class="header-right">
            <CompanyLogo :companyId="companyId" :maxWidth="175" /> 
            <div class="sales-btn" v-show="homePage">
                <i class="fa fa-phone fa-rotate-90" aria-hidden="true"></i>
                <router-link to="/contactsales">Click Here to Contact Sales</router-link>  
            </div>    
        </div>
        
    </header>
</template>

<script>
    import CompanyLogo from './CompanyLogo';

    export default {
        name: 'Header',
        components: {
            CompanyLogo,
        },
        props: {
            itemsTotal: Number,
            companyName: String,
            salesRepName: String,
            companyId: String
        },
        //determines whether or not we are on the homepage of the app
        computed: {
            homePage() {
                return this.$route.path === "/" ? true : false;
            }
        }
    }
</script>

<style scoped>
    header {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-end;
        margin-bottom: 40px;
    }

    .header-main {
        text-align: left;
    }

    .header-right {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
    }
    
    .contact-page-header {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
    }

    .contact-sales {
        margin-top: 20px;
        background: lightsteelblue;
        border-radius: 35px;
        padding: 10px 20px;
        color: white;
        font-weight: 900;
        font-size: 18px;
        text-shadow: 1px 1px rgb(0 0 0 / 30%);
    }

    .contact-sales a {
        text-decoration: none;
        color: white;   
        padding-left: 10px;
    }

    @media(max-width: 768px) {
        header {
            flex-direction: column-reverse;
            align-items: center;
        }

        .header-main {
            text-align: center;
        }

        .header-main h1 {
            margin-bottom: 10px;
        }

        .header-right {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-bottom: 20px;
        }

        .contact-page-header {
            margin-bottom: 20px;
        }
    }
</style>
