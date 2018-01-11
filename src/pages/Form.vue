<template>
  <div class="form">
    <h1>API implementation</h1>

    <div id="customer-form">
      <div class="field">
        <label class="label">Name</label>
        <div class="control">
          <input class="input" type="text" placeholder="name" v-model="name">
        </div>
      </div>
      <div class="field">
        <label class="label">City</label>
        <div class="control">
          <input class="input" type="text" placeholder="city" v-model="city">
        </div>
      </div>
      <div class="field">
        <label class="label">Country</label>
        <div class="control">
          <input class="input" type="text" placeholder="country" v-model="country">
        </div>
      </div>
      <div class="field">
        <label class="label">Province</label>
        <div class="control">
          <input class="input" type="text" placeholder="province" v-model="province">
        </div>
      </div>
      <div class="field">
        <label class="label">Street</label>
        <div class="control">
          <input class="input" type="text" placeholder="address" v-model="street">
        </div>
      </div>
      <a class="button is-success" @click="postApi">Submit</a>
      <a class="button is-primary" @click="updateApi()">Update</a>
      <a class="button is-danger" @click="clearForm">Clear</a>
    </div>

    <a class="button is-warning" @click="callApi">Call API</a>
    <table class="table" align="center">
      <thead>
        <tr>
          <td>Name</td>
          <td>Action</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(customer, index) in customers" :key="customer.id" v-model="address">
          <td>{{customer.name}}</td>
          <td>
              <span class="icon has-text-info" @click="updateForm(customer.name, customer.id)">
                <i class="fas fa-pencil-alt"></i>
              </span>
              <span class="icon has-text-danger" @click="deleteApi(customer.id)">
                <i class="fas fa-minus-square"></i>
              </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import axios from 'axios'
  const URL = '/api/customers'

  export default {
    name: 'Form',
    data () {
      return {
        id: undefined,
        name: undefined,
        city: undefined,
        country: undefined,
        province: undefined,
        street: undefined,
        customers: [],
        address: []
      }
    },
    methods: {
      callApi () {
        axios.get(URL)
          .then(response => {
            this.customers = response.data
          })
          .catch(error => {
            console.log(error)
          })
      },
      postApi () {
        const object = {
          name: this.name,
          address: {
            city: this.city,
            country: this.country,
            province: this.province,
            street: this.street
          }
        }
        console.log(object)
        axios.post(URL, object)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      },
      deleteApi (id) {
        axios.delete(URL + '/' + id)
          .then(response => {
            console.log(response)
          })
          .catch(error => {
            console.log(error)
          })
      },
      updateForm (name, id) {
        // customer id
        this.name = name
        this.id = id
        axios.get(URL + '/' + id + '/address')
          .then(response => {
            this.address = response.data
            this.id = this.address[0].id
            this.city = this.address[0].city
            this.country = this.address[0].country
            this.province = this.address[0].province
            this.street = this.address[0].street
          })
          .catch(error => {
            console.log(error)
          })
      },
      updateApi () {
        if (this.id === undefined) {
          alert('customer not picked')
          return
        }
        const object = {
          name: this.name,
          address: {
            city: this.city,
            country: this.country,
            province: this.province,
            street: this.street
          }
        }
        axios.put(URL + '/' + this.id, object)
          .then(response => {
            console.log(response)
            this.id = undefined
          })
          .catch(error => {
            console.log(error)
          })
      },
      clearForm () {
        this.id = undefined
        this.name = undefined
        this.city = undefined
        this.country = undefined
        this.province = undefined
        this.street = undefined
      }
    }
  }
</script>

<style lang="scss" scoped>
  #customer-form{
    margin: 10px auto;
    width: 300px;
  }
</style>
