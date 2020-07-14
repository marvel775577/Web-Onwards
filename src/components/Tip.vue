<template>
  <div class="tip" :class="{'tip-large': large}">
    <div class="info">
      <p><span class="bold">Tip:</span>
        Before you get started, it is helpful to be aware that the toll will ask you some questions about your diagnosis
        and who you have informed.</p>
      <div>
        <i class="fas fa-lightbulb"></i>
      </div>
    </div>
    <div class="tips">
      <div>
        <aside>1</aside>
        <p>Answer five questions that will allow the tool to create a personal checklist</p>
      </div>
      <div>
        <aside>2</aside>
        <p>What while our tool creates your checklist. This could take up to 2 minutes.</p>
      </div>
      <div>
        <aside>3</aside>
        <p>Your checklist display information that will help you understand the next steps.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['large']
}
</script>

<style lang="scss">
  .tip {
    max-width: 530px;
    height: 320px;
    background: #f9c536;
    padding: 0 20px;
    margin: 0;
    box-sizing: border-box;
    .info {
      display: flex;
      justify-content: space-between;
      align-items: center;
      p {
        width: 80%;
        padding: 10px 0;
        font-size: 20px;
      }
      div {
        text-align: center;
        width: 20%;
        i {
          font-size: 70px;
          color: #fff;
        }
      }
    }
    .tips {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding-bottom: 10px;
      div {
        width: 155px;
        height: auto;
        background: #fff;
        font-size: 15px;
        padding: 20px 10px 0;
        box-sizing: border-box;
        position: relative;
        aside {
          text-align: center;
          vertical-align: middle;
          line-height: 60px;
          width: 60px;
          height: 60px;
          border-radius: 60px;
          color: #fff;
          background-color: #3c3c3c;
          font-size: 55px;
          font-weight: 700;
          position: absolute;
          top: -35px;
        }
      }
    }
  }
  .tip-large {
    max-width: 985px;
    height: 280px;
    margin-right: 13px;
    .tips {
      div {
        width: 30%;
      }
    }
  }
  @media all and (max-width: 1330px) {
    .tip {
      height: auto;
      .tips {
        align-items: flex-start;
        margin-right: 10px;
        div {
          margin-right: 10px;
        }
      }
    }
  }
  @media all and (max-width: 891px) {
    .tip{
      width: auto;
      height: auto;
      padding: 1px 10px;
      margin: 0 0 10px 0;
      .info {
        p{
          width: 70%;
        }
      }
      .tips {
        display: block;
        width: 100%;
        div {
          margin-bottom: 45px;
          width: 100%;
          padding-bottom: 5px;
        }
      }
    }
  }
</style>
