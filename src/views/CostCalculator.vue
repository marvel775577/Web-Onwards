<template>
  <div class="wrap">
    <div class="cost-calculator">
      <section>
        <div v-if="step === 0">
          <h2>Cost Calculator</h2>
          <p class="bold">
            If you own your own vehicle out Cost Calculator will show yoy how much
            you are spending and how ypu could use the money on alternative modes
            of transportation.
          </p>
          <p>
            The UK average cost of owning a vehicle is <span class="bold">£1628</span> That equates to <span class="bold">150</span> taxi trips from
            Haddington to Gullane and <span class="bold">75</span> train journeys from Edinburgh to Dunbar.
          </p>
          <p>
            In order to give you accurate, personal results, the tool will ask for some information. The
            information you supply here helps our tool accurately calculate how much you are spending
            on your vehicle.
          </p>
          <div class="control">
            <button @click="changeStep">Start Cost Calculator</button>
            <button>Go to a saved calculator</button>
          </div>
        </div>
        <div v-else>
          <div class="form">
            <div class="form-header">
              <img src="/icons/Asset_1.svg" alt="Config">
              <h2>Cost Calculator</h2>
            </div>
            <form>
              <div v-if="step === 1">
                <label> Do you receive Mutability or PIP ?
                  <div class="select">
                    <select v-model="form.mutability">
                      <option value="" disabled selected></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </label>
              </div>
              <div v-if="step === 2">
                <div class="info">
                  <i class="fas fa-info-circle"></i>
                  <h3>When answering the following questions, think about the one car that you mainly drive.</h3>
                </div>
                <hr>
                <label> What is your name ?
                  <input type="text" v-model="form.name" @keypress="isAlphaNumber($event)">
                </label>
                <label> What is your fuel consumption, in miles per gallon ?
                  <input type="text" v-model="form.consumption" @keypress="isNumber($event)">
                </label>
                <div class="with-info">
                  <label> What is your average annual mileage?
                    <input type="text" v-model="form.mileage" @keypress="isNumber($event)">
                  </label>
                  <div class="info">
                    <i class="fas fa-info-circle"></i>
                    <h3>The average annual mileage in the UK is 7,900 miles. </h3>
                  </div>
                </div>
                <div class="info">
                  <i class="fas fa-info-circle"></i>
                  <div>
                    <p>Average fuel consumption in 2016 was:</p>
                    <p>Diesel cars - 62.2miles per gallon</p>
                    <p>Petrol cars - 52.2 miles per gallon</p>
                  </div>
                </div>
                <label> What type of fuel do you normally fill up with ?
                  <div class="select">
                    <select v-model="form.fuel">
                      <option value="" disabled selected></option>
                      <option value="unleaded">Unleaded</option>
                      <option value="diesel">Diesel</option>
                      <option value="superUnleaded">Super Unleaded</option>
                      <option value="premiumDiesel">Premium Diesel</option>
                    </select>
                  </div>
                </label>
                <label> What is your annual road tax ?
                  <div class="select">
                    <select v-model="form.tax">
                      <option value="" disabled selected></option>
                      <option value="petrolOrDiesel">Petrol or diesel</option>
                      <option value="electric">Electric</option>
                      <option value="alternative">Alternative</option>
                    </select>
                  </div>
                </label>
              </div>
              <div v-if="step === 3">
                <div class="info">
                  <i class="fas fa-info-circle"></i>
                  <h3>When answering the following questions, think about the one car that you mainly drive.</h3>
                </div>
                <hr>
                <div class="with-info">
                  <label> What is the cost of your annual insurance?
                    <input type="text" v-model="form.cost"  @keypress="isNumber($event)">
                  </label>
                  <div class="info">
                    <i class="fas fa-info-circle"></i>
                    <h3>In the UK, the average cost of car insurance is about £368</h3>
                  </div>
                </div>
                <label> If you have breakdown cover, what is the annual cost?
                  <input type="text" v-model="form.annual"  @keypress="isNumber($event)">
                </label>
                <div class="with-info">
                  <label> How much do you spend on maintenance each year? This includes MOT, servicing, etc.
                    <input type="text" v-model="form.spend"  @keypress="isNumber($event)">
                  </label>
                  <div class="info">
                    <i class="fas fa-info-circle"></i>
                    <h3>The total servicing and maintenance billin the UK is around £700 a year.</h3>
                  </div>
                </div>
                <label> Are there any other associated vehicle costs? This could include parking or permit costs etc.
                  <input type="text" v-model="form.otherCost" @keypress="isNumber($event)">
                </label>
                <label> How do you finance your vehicle?
                  <div class="select">
                    <select v-model="form.finance">
                      <option value="" disabled selected></option>
                      <option value="Own">Own</option>
                      <option value="Monthly payments">Monthly payments</option>
                      <option value="Provided for me">Provided for me</option>
                    </select>
                  </div>
                </label>
              </div>
              <div v-if="step === 4">
                <div v-if="form.finance === 'Own'">
                  <div class="info">
                    <i class="fas fa-info-circle"></i>
                    <h3>When answering the following questions, think about the one car that you mainly drive.</h3>
                  </div>
                  <hr>
                  <label> How much did you originally buy your vehicle for?
                    <input type="text" v-model="form.origin" @keypress="isNumber($event)">
                  </label>
                  <div class="info">
                    <i class="fas fa-info-circle"></i>
                    <h3 style="width: 100%">The average cost of  an entry-level small car in the UK is £12,715</h3>
                  </div>
                  <label> How long have you owned the vehicle?
                    <input type="text" v-model="form.time" @keypress="isNumber($event)">
                  </label>
                </div>
                <div v-else>
                  <label> How much is the monthly payment?
                    <input type="text" v-model="form.monthly" @keypress="isNumber($event)">
                  </label>
                </div>
              </div>
              <div v-if="step === 5">
                <label> Do you have a National Entitlement card?
                  <div class="select">
                    <select v-model="form.card">
                      <option value="" disabled selected></option>
                      <option value="Yes">Yes</option>
                      <option value="No">No</option>
                    </select>
                  </div>
                </label>
              </div>
              <div v-if="step > 5" class="final">
                <h2>Your vehicle cost</h2>
                <p>
                  Our tool has calculated what you are currently spending on your vehicle annually.
                  This figure was calculated using the information you submitted.
                  Is your annual spend higher than you expected?
                </p>
                <div class="total">
                  <h3>Your current annual spend:</h3>
                  <p>£ {{ total }}</p>
                </div>
                <p>
                  Below, your current annual vehicle spend has been divided equally between a variety
                  of alternative forms of transport available in your area.
                  You can move the sliders to explore how might choose to reallocate the money.
                </p>
                <div class="inputs">
                  <div class="item" :class="{'item-disabled': bus === 0}">
                    <div class="icon">
                      <img src="/icons/Bus.svg" alt="Bus">
                      <p>Bus</p>
                    </div>
                    <div class="range">
                      <aside>
                        <input type="range" min="0" max="100" v-model="bus" @input="busChange" @change="busChange">
                      </aside>
                      <div>{{ bus }} %</div>
                    </div>
                    <div class="cost">£ {{ this.total * this.bus / 100 }}</div>
                  </div>
                  <div class="item" :class="{'item-disabled': carClub === 0}">
                    <div class="icon">
                      <img src="/icons/Car.svg" alt="Car">
                      <p>Car Club</p>
                    </div>
                    <div class="range">
                      <aside>
                        <input type="range" min="0" max="100" v-model="carClub" @input="carClubChange" @change="carClubChange">
                      </aside>
                      <div>{{ carClub }} %</div>
                    </div>
                    <div class="cost">£ {{ this.total * this.carClub / 100 }}</div>
                  </div>
                  <div class="item" :class="{'item-disabled': train === 0}">
                    <div class="icon">
                      <img src="/icons/Train.svg" alt="Train">
                      <p>Train</p>
                    </div>
                    <div class="range">
                      <aside>
                        <input type="range" min="0" max="100" v-model="train" @input="trainChange" @change="trainChange">
                      </aside>
                      <div>{{ train }} %</div>
                    </div>
                    <div class="cost">£ {{ this.total * this.train / 100 }}</div>
                  </div>
                  <div class="item" :class="{'item-disabled': taxi === 0}">
                    <div class="icon">
                      <img src="/icons/Taxi.svg" alt="Taxi">
                      <p>Taxi</p>
                    </div>
                    <div class="range">
                      <aside>
                        <input type="range" min="0" max="100" v-model="taxi" @input="taxiChange" @change="taxiChange">
                      </aside>
                      <div>{{ taxi }} %</div>
                    </div>
                    <div class="cost">£ {{ this.total * this.taxi / 100 }}</div>
                  </div>
                  <div class="item" :class="{'item-disabled': savings === 0}">
                    <div class="icon">
                      <img src="/icons/Pound.svg" alt="Savings">
                      <p>Savings</p>
                    </div>
                    <div class="range">
                      <aside>
                        <input type="range" min="0" max="100" v-model="savings" @change="savingsChange" disabled>
                      </aside>
                      <div>{{ savings }} %</div>
                    </div>
                    <div class="cost">£ {{ this.total * this.savings / 100 }}</div>
                  </div>
                </div>
                <div class="form-control form-control-alternative">
                  <button>Print</button>
                  <button>Save to Profile</button>
                </div>
              </div>
              <div class="form-control" v-if="step < 5">
                <div>
                  <span v-if="step < 3">
                    This form should only take <span class="bold">5 minutes</span> to complete
                  </span>
                  <span class="bold" v-else>
                    Page {{ step }} from 5
                  </span>
                </div>
                <button @click.prevent="changeStep">Next</button>
              </div>
              <div class="form-control form-control-large" v-else-if="step === 5">
                <button class="large" @click.prevent="changeStep">Show my spending</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <aside>
        <small-banner
          title="We can <span class='bold'>help you</span> when the DVLA tell you to stop driving."
        />
        <Card title="Journey Planner"
              body="Allows you to plan your journeys so that you can easily find your way without needing a car"
              v-if="step > 0"
              background="#ff8e33"/>
        <article-small-thumb
          :title="article.title"
          :body="article.short_text"
          color="#37A8F5"
        />
      </aside>
    </div>
  </div>
</template>

<script>
import SmallBanner from '@/components/SmallBanner'
import ArticleSmallThumb from '@/components/ArticleSmallThumb'
import Card from '@/components/Card.vue'

export default {
  name: 'CostCalculator',
  data () {
    return {
      form: {
        mutability: null,
        name: null,
        consumption: null,
        mileage: null,
        fuel: null,
        tax: null,
        cost: null,
        annual: 0,
        spend: null,
        otherCost: 0,
        finance: 'Own',
        origin: null,
        time: null,
        monthly: null,
        card: null
      },
      article: null,
      step: 0,
      total: 1628,
      bus: 0,
      busOld: 0,
      carClub: 0,
      carClubOld: 0,
      train: 0,
      trainOld: 0,
      taxi: 0,
      taxiOld: 0,
      savings: 0,
      savingsOld: 0,
      total: 0
    }
  },
  components: {
    SmallBanner,
    ArticleSmallThumb,
    Card
  },
  created () {
    let articles = this.$store.state.articles.filter((el) => {
      if (el.section === 'Costs of Transport' && !el.featured) return el
    })
    this.article = this.getRandom(articles, 1)[0]
  },
  methods: {
    getRandom: (arr, n) => {
      let result = new Array(n)

      let len = arr.length

      let taken = new Array(len)
      if (n > len) { throw new RangeError('getRandom: more elements taken than available') }
      while (n--) {
        let x = Math.floor(Math.random() * len)
        result[n] = arr[x in taken ? taken[x] : x]
        taken[x] = --len in taken ? taken[len] : len
      }
      return result
    },
    changeStep: function () {
      if (this.step === 1 &&
        this.form.mutability === null) {
        return false
      } else if (this.step === 2 &&
        (this.form.name === null ||
          this.form.mileage === null ||
          this.form.fuel === null ||
          this.form.tax === null)) {
        return false
      } else if (this.step === 3 &&
        (this.form.cost === null ||
          this.form.annual === null ||
          this.form.spend === null ||
          this.form.otherCost === null)) {
        return false
      } else if (this.step === 3 && this.form.finance === 'Provided for me') {
        this.step = 5
      } else if (this.step === 5 && this.form.card === null) {
        return false
      } else {
        if (this.step === 2) {
          const litresPerGallon = 4.456
          let fuel = Number(this.form.consumption)
          let fuelCons = fuel / litresPerGallon
          let pricePerMile = this.$store.state.costConfig.averageCosts[this.form.fuel] / fuelCons
          let annulMillage = this.form.mileage * pricePerMile
          this.total = annulMillage
        }
        if (this.step === 3) {
          let temp = +this.$store.state.costConfig.annualTax[this.form.tax]
          temp += +this.form.cost
          temp += +this.form.annual
          temp += +this.form.spend
          temp += +this.form.otherCost
          this.total += +temp
        }
        if (this.step === 4) {
          if (this.form.finance === 'Own') {
            this.total += +this.form.origin / +this.form.time
          } else {
            this.total += +this.form.monthly
          }
        }
        if (this.step > 4) {
          this.total = Math.round(this.total)
          let i = this.total / 4
          let percent = Math.round(i * 100 / this.total)
          this.bus = percent
          this.busOld = percent
          this.carClub = percent
          this.carClubOld = percent
          this.train = percent
          this.trainOld = percent
          this.taxi = percent
          this.taxiOld = percent
        }
        this.step++
      }
    },
    busChange: function () {
      this.bus = Number(this.bus)
      if (this.savings > 0 && this.bus > this.busOld) {
        this.savings -= (Number(this.bus) - Number(this.busOld))
        this.busOld = Number(this.bus)
      } else if (this.bus < this.busOld) {
        this.savings += (Number(this.busOld) - Number(this.bus))
        this.busOld = Number(this.bus)
      } else {
        this.bus = Number(this.busOld)
      }
    },
    isNumber: function (evt) {
      evt = evt || window.event
      let charCode = (evt.which) ? evt.which : evt.keyCode
      if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
        evt.preventDefault()
      } else {
        return true
      }
    },
    carClubChange: function () {
      this.carClub = Number(this.carClub)
      if (this.savings > 0 && this.carClub > this.carClubOld) {
        this.savings -= (Number(this.carClub) - Number(this.carClubOld))
        this.carClubOld = Number(this.carClub)
      } else if (this.carClub < this.carClubOld) {
        this.savings += (Number(this.carClubOld) - Number(this.carClub))
        this.carClubOld = Number(this.carClub)
      } else {
        this.carClub = Number(this.carClubOld)
      }
    },
    trainChange: function () {
      this.train = Number(this.train)
      if (this.savings > 0 && this.train > this.trainOld) {
        this.savings -= (Number(this.train) - Number(this.trainOld))
        this.trainOld = Number(this.train)
      } else if (this.train < this.trainOld) {
        this.savings += (Number(this.trainOld) - Number(this.train))
        this.trainOld = Number(this.train)
      } else {
        this.train = Number(this.trainOld)
      }
    },
    taxiChange: function () {
      this.taxi = Number(this.taxi)
      if (this.savings > 0 && this.taxi > this.taxiOld) {
        this.savings -= (Number(this.taxi) - Number(this.taxiOld))
        this.taxiOld = Number(this.taxi)
      } else if (this.taxi < this.taxiOld) {
        this.savings += (Number(this.taxiOld) - Number(this.taxi))
        this.taxiOld = Number(this.taxi)
      } else {
        this.taxi = Number(this.taxiOld)
      }
    },
    savingsChange: function () {
      this.savings = Number(this.savings)
      if (this.bus > 0) {
        if (this.savings > this.savingsOld) {
          this.bus -= (Number(this.savings) - Number(this.savingsOld))
        } else {
          this.bus += (Number(this.savingsOld) - Number(this.savings))
        }
        this.savingsOld = Number(this.savings)
      } else {
        this.savings = Number(this.savingsOld)
      }
    }
  }
}
</script>

<style lang="scss">
  .cost-calculator {
    display: flex;
    justify-content: space-between;
    width: 100%;
    section {
      width: 80%;
      padding-right: 180px;
      box-sizing: border-box;
      h2 {
        font-size: 35px;
        color: #282425;
        margin-top: 0;
      }
      p.bold {
        font-size: 26px;
      }
      p{
        font-size: 22px;
      }
      .control {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
        button {
          width: 47%;
          height: 60px;
          border: none;
          background-color: #37A8F5;
          border-radius: 5px;
          color: #fff;
          font-weight: 700;
          font-size: 23px;
        }
      }
      .form {
        padding: 20px;
        background-color: #37A8F5;
        border-radius: 5px;
        .form-header {
          display: flex;
          align-items: center;
          margin-bottom: 40px;
          img {
            height: 35px;
            margin-right: 10px;
          }
          h2 {
            margin: 0;
          }
        }
        form {
          background-color: #fff;
          border-radius: 5px;
          padding: 20px;
          .with-info {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            label {
              width: 65%;
            }
            .info {
              width: 30%;
              margin: 0 0 0 20px;
              h3 {
                width: 100%;
              }
            }
          }
          .info {
            display: flex;
            align-items: center;
            margin-bottom: 20px;
            i {
              font-size: 45px;
              color: #37A8F5;
            }
            h3, div {
              font-weight: 400;
              color: #424242;
              font-style: italic;
              margin: 0 0 0 20px;
            }
            div {
              p {
                margin: 0;
              }
            }
            h3 {
              width: 50%;
            }
          }
          hr {
            margin-bottom: 20px;
          }
          label {
            display: block;
            font-weight: 700;
            font-size: 25px;
            margin-bottom: 20px;
            input {
              background-color: #ddd;
              width: 100%;
              height: 70px;
              display: block;
              font-size: 20px;
              margin: 10px 0;
              border: none;
              border-radius: 5px;
              -webkit-appearance: none;
              -moz-appearance: none;
              appearance: none;
              padding: 0 20px;
              box-sizing: border-box;
            }
            .select {
              position: relative;
              &:after {
                content: '>';
                color: #37A8F5;
                -webkit-transform: rotate(90deg) scaleY(2);
                -moz-transform: rotate(90deg) scaleY(2);
                -ms-transform: rotate(90deg) scaleY(2);
                transform: rotate(90deg) scaleY(2);
                right: 25px;
                top: 18px;
                padding: 0 0 2px;
                position: absolute;
                pointer-events: none;
              }
              select {
                background-color: #ddd;
                width: 100%;
                height: 70px;
                display: block;
                font-size: 20px;
                margin: 10px 0;
                border: none;
                border-radius: 5px;
                -webkit-appearance: none;
                -moz-appearance: none;
                appearance: none;
                padding: 0 20px;
                box-sizing: border-box;
              }
            }
          }
          .form-control {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-top: 30px;
            div {
              width: 150px;
              border: 3px solid #37A8F5;
              padding: 20px;
              font-size: 17px;
            }
            button {
              width: 120px;
              height: 40px;
              background-color: #37A8F5;
              border: none;
              border-radius: 5px;
              font-weight: 700;
              font-size: 20px;
            }
          }
          .form-control-large {
            justify-content: center;
            margin: 50px 0 30px 0;
            button {
              width: 60%;
              height: 60px;
              font-size: 25px;
            }
          }
          .form-control-alternative {
            justify-content: flex-start;
            button {
              width: 180px;
              margin-right: 20px;
              font-size: 19px;
            }
          }
          .final {
            h2 {
              font-size: 25px;
            }
            p {
              font-size: 17px;
            }
            .total {
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 5%;
              box-sizing: border-box;
              border: 3px solid #37A8F5;
              border-radius: 7px;
              background-color: #ccc;
              h3 {
                width: 30%;
                font-size: 25px;
              }
              p {
                font-size: 35px;
                font-weight: 700;
              }
            }
            .inputs {
              .item {
                background-color: #37A8F5;
                display: flex;
                justify-content: space-between;
                height: 70px;
                align-items: center;
                padding: 0 10px;
                margin-bottom: 5px;
                .icon {
                  width: 120px;
                  display: flex;
                  align-items: center;
                  img {
                    width: 30px;
                  }
                  p {
                    text-align: left;
                    margin-left: 10px;
                  }
                }
                .range {
                  display: flex;
                  justify-content: space-between;
                  background-color: #e6e6e6;
                  border: 3px solid #fff;
                  border-radius: 50px;
                  padding: 10px;
                  width: 60%;
                  aside {
                    position: relative;
                    width: 100%;
                    border-radius: 50px;
                    overflow: hidden;
                    height: 22px;
                  }
                  input[type=range] {
                    -webkit-appearance: none;
                    width: 100%;
                    margin: 1px 0;
                    position: relative;
                  }
                  input[type=range]:focus {
                    outline: none;
                  }
                  input[type=range]::-webkit-slider-runnable-track {
                    width: 100%;
                    height: 20px;
                    cursor: pointer;
                    background: #ffffff;
                    border-radius: 1.3px;
                  }
                  input[type=range]:focus::-webkit-slider-runnable-track {
                    background: #ffffff;
                  }
                  input[type=range]::-moz-range-track {
                    width: 100%;
                    height: 20px;
                    cursor: pointer;
                    background: #ffffff;
                    border-radius: 1.3px;
                  }
                  input[type=range]::-ms-track {
                    width: 100%;
                    height: 20px;
                    cursor: pointer;
                    background: transparent;
                    border-color: transparent;
                    color: transparent;
                  }
                  input[type=range]::-webkit-slider-thumb {
                    height: 22px;
                    width: 30px;
                    border-radius: 10px;
                    cursor: pointer;
                    -webkit-appearance: none;
                    margin-top: -1.2px;
                    background: #393938 url('/icons/arrow.png') 20% no-repeat;
                    background-size: cover;
                  }
                  input[type=range]::-moz-range-thumb {
                    height: 22px;
                    width: 30px;
                    border-radius: 10px;
                    cursor: pointer;
                    background: #393938 url('/icons/arrow.png') 20% no-repeat;
                    background-size: cover;
                  }
                  input[type=range]::-ms-thumb {
                    height: 22px;
                    width: 30px;
                    border-radius: 10px;
                    cursor: pointer;
                    background: #393938 url('/icons/arrow.png') 20% no-repeat;
                    background-size: cover;
                  }
                  input[type=range]::-ms-fill-lower {
                    background: #f2f2f2;
                    border-radius: 2.6px;
                  }
                  input[type=range]::-ms-fill-upper {
                    background: #ffffff;
                    border-radius: 2.6px;
                  }
                  input[type=range]:focus::-ms-fill-lower {
                    background: #ffffff;
                  }
                  input[type=range]:focus::-ms-fill-upper {
                    background: #ffffff;
                  }
                  div {
                    border-left: 3px solid #fff;
                    padding-left: 5px;
                    margin: -10px 0 -10px 10px;
                    line-height: 40px;
                    width: 70px;
                    text-align: center;
                  }
                }
                .cost {
                  background-color: #fff;
                  width: 100px;
                  height: 40px;
                  line-height: 40px;
                  text-align: center;
                }
              }
              .item-disabled {
                background-color: #ccc;
              }
            }
          }
        }
      }
    }
    aside {
      margin: 0;
      .small-banner {
        width: 310px;
        margin-bottom: 20px;
      }
    }
  }
  @media all and (max-width: 891px){
    .cost-calculator {
      display: block;
      section {
        width: 100%;
        padding: 0 10px;
        .control {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          button {
            width: 80%;
            margin-bottom: 20px;
          }
        }
        .form {
          form {
            .info {
              h3 {
                width: auto;
              }
            }
            .with-info {
              display: block;
              label {
                width: auto;
              }
              .info {
                width: auto;
                margin: 20px 0;
              }
            }
            label {
              font-size: 20px;
            }
            .final {
              .inputs {
                .item {
                  padding-top: 50px;
                  position: relative;
                  font-weight: 700;
                }
                .icon {
                  position: absolute;
                  top: 0
                }
              }
            }
          }
        }
      }
      aside {
        .small-banner {
          width:100%;
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
