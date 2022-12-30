<template>
  <div class="alert alert-danger" role="alert" v-bind:class="{ active: error == null }">
      Error: {{ error }}
  </div>
  <div class="intro">
    <div class="intro__inner">
      <h1 style="text-transform: uppercase">Exchange</h1>
      <div class="row g-2 m-4">
        <div class="col-md">
          <div class="form-floating">
            <select v-model="cur1" class="form-select" id="floatingSelectGrid">
              <option selected value="ERROR">Сurrency for transfer</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="LTC">LTC</option>
              <option value="USDT">USDT</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="KZT">KZT</option>
            </select>
            <label for="floatingSelectGrid">Give</label>
          </div>
        </div>
        <div class="col-md">
          <div class="form-floating">
            <select v-model="cur2" class="form-select" id="floatingSelectGrid">
              <option selected value="ERROR">Сurrency to receive</option>
              <option value="BTC">BTC</option>
              <option value="ETH">ETH</option>
              <option value="LTC">LTC</option>
              <option value="USDT">USDT</option>
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="KZT">KZT</option>
            </select>
            <label for="floatingSelectGrid">Get</label>
          </div>
        </div>
      </div>
      <button @click.prevent="submit" type="button" class="btn btn-success">Show offers</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MyMain',
  data () {
    return {
      cur1: '',
      cur2: '',
      error: null
    }
  },
  methods: {
    async submit () {
      this.cur1 === 'ERROR' || this.cur2 === 'ERROR' ? this.error = 'unmarked values' : console.log(this.cur1, this.cur2)
    }
  }
}
</script>

<style>
.active {
  display: none;
}
</style>
