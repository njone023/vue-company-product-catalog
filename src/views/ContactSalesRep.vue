<!-- 
    Contact Sales Rep page that displays Sales Rep data when "Contact Sales Rep" 
    button in header is clicked or user navigates to /contactsales
-->
<template>
    <div class="contact-sales-ctr">
        <div class="sales-rep-details">
            <h2>Contact Your Sales Rep</h2>
            <h3>{{salesRep.FirstName}} {{salesRep.LastName}}, {{salesRep.CompanyName}}</h3>
            <h3>{{salesRep.Phone}}, {{salesRep.EmailAddress}}</h3>
            <h3>{{salesRep.City}}, {{salesRep.State}} {{salesRep.PostalCode}}</h3>
        </div>
        <div class="sales-btn sales-btn-sml">
            <router-link to="/">Back to Products List</router-link>
        </div>   
    </div>
</template>

<script>
    export default {
        name: 'ContactSalesRep',
        props: {
            companyData: {}
        },
        data() {
            return {
                salesRep: this.companyData.SalesRep
            }
        }
    }
</script>

<style scoped>
    .contact-sales-ctr {
        display: inline-table;
    }

    .sales-rep-details, h2 {
        margin-bottom: 20px;
    }

    .sales-rep-details {
        width: fit-content;
        border-radius: 12px;
        display: flex;
        flex-direction: column;
        padding: 60px 44px;
        box-shadow: 0 0px 30px rgb(0 0 0 / 15%);
    }
</style>