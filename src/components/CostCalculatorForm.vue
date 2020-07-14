<template>
  <div class="cost-calculator-form">
    <div class="header-content">
      <div class="icon">
        <i class="fas fa-wrench"></i>
      </div>
      <h1>Cost Calculator</h1>
    </div>
    <form action="">
      <div>
        <label for="name">What is your name ?</label>
        <input type="text" id="name">
      </div>
      <div class="millage">
        <label for="mileage">What is your average annual mileage ?</label>
        <div>
          <input type="text" id="mileage">
          <p>
            <i class="fas fa-info-circle"></i>
            The average annual mileage in the UK is 7,900 miles.
          </p>
        </div>
      </div>
      <div>
        <label for="">What is your fuel consumption, in miles per gallon ?</label>
        <input type="text">
      </div>
      <div>
        <label for="">What type of fuel do you normally fill up with?</label>
        <select>
          <option value="1">1</option>
        </select>
      </div>
      <div>
        <label for="">What is your annual road tax?</label>
        <select>
          <option value="1">1</option>
        </select>
      </div>
      <div class="control">
        <div class="banner-content">
          This from should only take <span class="bold">5 minutes</span> to complete
        </div>
        <button>Next</button>
      </div>
    </form>
  </div>
</template>

<style lang="scss">
  .cost-calculator-form {
    color: #3c3c3a;
    background: #47a6f8;
    border: 10px solid #47a6f8;
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
      .icon {
        width: 40px;
        height: 40px;
        border-radius: 40px;
        background: #282425;
        position: relative;
        margin-top: -10px;
        i {
          font-size: 20px;
          width: 20px;
          height: 20px;
          color: #47a6f8;
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
      background-color: #fff;
      div {
        label {
          display: block;
          width: 90%;
          margin: auto;
          font-size: 16px;
          font-weight: 700;
          height: 45px;
          padding-top: 15px;
          box-sizing: border-box;
        }
        input, select {
          display: block;
          background-color: #e4e4e4;
          width: 90%;
          height: 65px;
          margin: auto;
          border: none;
          border-radius: 10px;
        }
      }
      .millage{
        div {
          display: flex;
          input {
            margin: auto;
            width: 60%;
          }
          p {
            width: 30%;
          }
        }
      }
      .control {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: auto;
        padding: 20px 0;
        .banner-content {
          display: block;
          width: 210px;
          height: 100px;
          border: 2px solid #3ca4f4;
          padding: 10px;
          box-sizing: border-box;
          font-size: 20px;
        }
      }
      button {
        background: #3ca4f4;
        border: none;
        height: 35px;
        width: 135px;
        border-radius: 5px;
        margin-bottom: -50px;
        font-weight: 700;
      }
    }
  }
</style>
