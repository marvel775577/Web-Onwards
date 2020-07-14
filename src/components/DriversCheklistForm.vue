<template>
  <div class="drivers-checklist-form">
    <div class="header-content">
      <div class="icon">
        <i class="fas fa-wrench"></i>
      </div>
      <h1>Driver's Checklist</h1>
    </div>
    <form action="">
      <div v-if="article">
        <div class="top">
          <h1>Your Checklist</h1>
          <p>The following sections apply to you based on the answers you provided. </p>
          <ol>
            <li v-for="(item, i) in article" :key="i" @click="changeIndex(i)" :class="{'bold': index === i}">{{
              item.title }}
            </li>
          </ol>
        </div>
        <div class="dashed"></div>
        <div class="bottom" :class="{'bottom-auto': more}">
          <h3>{{ article[index].title }}</h3>
          <div v-if="more" v-html="article[index].full"></div>
          <div v-else v-html="article[index].overview"></div>
        </div>
        <div class="more" @click="changeResult">
          <span v-if="more">Show less information</span>
          <span v-else>Show more information</span>
        </div>
      </div>
      <div v-else>
        <h3>{{ questions[step].title }}</h3>
        <label class="container" v-for="answer in questions[step].answers" :key="answer.title">
          {{ answer.id }} ) {{ answer.answer }}
          <input type="radio" v-model="answers[step]" :value="answer.id">
          <span class="checkmark"></span>
        </label>
        <div class="control">
          <div class="banner-content">
            This from should only take <span class="bold">a few minutes</span> to complete
          </div>
          <button @click.prevent="changeStep()" :class="{'disabled': this.step + 1 !== this.answers.length}">
            <span v-if="button">Get my checklist</span>
            <span v-else>Next</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import * as _ from 'underscore'

export default {
  data () {
    return {
      step: 0,
      article: null,
      button: null,
      index: 0,
      more: false,
      answers: []
    }
  },
  watch: {
    step () {
      this.article = this.getArticle()
    },
    answers () {
      this.button = this.getArticle()
    }
  },
  computed: {
    ...mapGetters([
      'questions',
      'results',
      'rules'
    ])
  },
  methods: {
    changeStep () {
      if (this.step + 1 === this.answers.length) {
        this.step++
      }
    },
    getArticle () {
      let result
      _.each(this.rules, (value, key) => {
        if (this.answers.join('') === key) {
          result = value
        }
      })
      let temp = []
      _.each(result, (key) => {
        this.results.filter((e) => {
          if (e.id === key) temp.push(e)
        })
      })
      return temp.length > 0 ? temp : null
    },
    changeIndex (i) {
      this.index = i
    },
    changeResult () {
      this.more = !this.more
    }
  }
}
</script>

<style lang="scss">
  .drivers-checklist-form {
    color: #3c3c3a;
    background: #0eb75a;
    border: 10px solid #0eb75a;
    border-radius: 5px;
    .container {
      display: block;
      position: relative;
      padding-left: 35px;
      margin-bottom: 12px;
      cursor: pointer;
      font-size: 20px;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }
      .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        background-color: #ccc;
        &:after {
          content: "";
          position: absolute;
          display: none;
        }
      }
    }
    .container:hover input ~ .checkmark {
      background-color: #ccc;
    }
    .container input:checked ~ .checkmark {
      background-color: #ccc;
    }
    .container input:checked ~ .checkmark:after {
      display: block;
    }
    .container .checkmark:after {
      left: 9px;
      top: 5px;
      width: 5px;
      height: 10px;
      border: solid #0eb75a;
      border-width: 0 3px 3px 0;
      -webkit-transform: rotate(45deg);
      -ms-transform: rotate(45deg);
      transform: rotate(45deg);
    }
    .header-content {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      padding: 0;
      .icon {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #282425;
        position: relative;
        margin-top: -15px;
        margin-right: 20px;
        i {
          font-size: 20px;
          width: 20px;
          height: 20px;
          color: #0eb75a;
          transform: rotate(270deg);
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          margin: auto;
        }
      }
      h1 {
        color: #282425;
        width: 90%;
        margin-top: 5px;
      }
    }
    form {
      background: #fff;
      padding: 10px 20px;
      border-radius: 5px;
      h3 {
        font-size: 20px;
        color: #6f6f6d;
        margin: 10px 0 30px 0;
      }
      .group {
        margin-bottom: 15px;
        input {
          margin-right: 5px;
          cursor:pointer
        }
        input[type="radio"] {
          -webkit-appearance: checkbox;
          -moz-appearance: checkbox;
          -ms-appearance: checkbox;
          height: 25px;
          width: 25px;
          &:before {
            content: "";
            display: inline-block;
            width: 100%;
            height: 100%;
            background: #d9d9d9;
          }
        }
        input[type="radio"]:checked:before {
          content: "✔";
          display: inline-block;
          text-align: center;
          padding-top: 4px;
          color: #0eb75a;
          box-sizing: border-box;
        }
        label {
          display: block;
          font-size: 16px;
          margin-top: -25px;
          margin-left: 30px;
        }
      }
      .control {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 50px 0 0;
        .banner-content {
          display: block;
          width: 210px;
          height: 100px;
          border: 2px solid #0eb75a;
          padding: 10px;
          box-sizing: border-box;
          font-size: 20px;
        }
      }
      .control-large {
        margin-top: 40px;
        text-align: center;
        button {
          width: 500px;
          height: 50px;
          color: #fff;
          font-size: 30px;
        }
      }
      .control-final {
        margin: 60px 0 20px;
        button {
          width: 250px;
        }
      }
      button {
        background: #34b759;
        border: none;
        height: 35px;
        width: 135px;
        border-radius: 5px;
        margin-bottom: -50px;
        font-weight: 700;
      }
      .disabled {
        background-color: #ccc;
      }
      .right-button {
        justify-content: flex-end;
        button {
          margin: 0;
        }
      }
    }
    .top {
      border-bottom: 5px solid #0eb75a;
      margin: 0 -20px;
      padding: 0 20px;
      h1 {
        margin: 0;
      }
      p {
        margin: 10px 0 0 0;
      }
      ol {
        counter-reset: item;
        padding-left: 0;
        li {
          display: block;
          margin-bottom: 10px;
          cursor: pointer;
          &:before {
            content: counter(item) ". ";
            counter-increment: item;
            color: #0eb75a;
          }
        }
      }
    }
    .dashed {
      border-top: 5px dashed #0eb75a;
      margin: 0 -20px;
    }
    .bottom {
      border-top: 5px solid #0eb75a;
      margin: 0 -20px;
      padding: 20px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 5;
      margin-bottom: 20px;
      height: auto;
      h3 {
        margin: 0;
      }
    }
    .bottom-auto {
      height: auto;
      -webkit-line-clamp: inherit;
    }
    .more {
      border-top: 1px solid #0eb75a;
      padding-top: 10px;
      color: #0eb75a;
    }
  }

  @media all and (max-width: 678px) {
    .drivers-checklist-form {
      width: 320px;
      box-sizing: border-box;
      form {
        .control {
          .banner-content {
            padding: 5px;
            font-size: 18px;
            width: 150px;
          }
          button {
            width: 75px;
          }
        }
        .control-large {
          button {
            width: 100%;
            font-size: 24px;
          }
        }
      }
    }
  }
</style>
