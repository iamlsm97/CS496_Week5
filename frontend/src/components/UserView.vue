<template>
  <div class="hello mdl-layout mdl-js-layout">
    <header class="app-header mdl-layout__header mdl-layout__header--scroll">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">SPARCS 2017 Summer 정기총회</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">유저 코드 복사</a>
          <a class="mdl-navigation__link" href="">관리자 모드로 전환</a>
          <a class="mdl-navigation__link" href="">투표 결과 보기</a>
          <a class="mdl-navigation__link" href="">Log Out - Mango</a>
        </nav>
      </div>
    </header>
    <!--
    <div class="mdl-layout__drawer">
      <span class="mdl-layout-title">Title</span>
      <nav class="mdl-navigation">
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
        <a class="mdl-navigation__link" href="">Link</a>
      </nav>
    </div>-->
    <main class="mdl-layout__content">
      <div class="grid-vertical mdl-grid">
        <div class="cell-blank mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
        <div class="cell-task mdl-cell mdl-cell--10-col mdl-cell--8-col-tablet mdl-cell--4-phone">
          <div class="header-wrapper">
            <div>
              <h3>What we are doing... <!-- 투표 진행 중! (참여 가능) --> <!--투표 진행 중! (참여 불가)--></h3>
            </div>
          </div>
          <object class="readable" data="http://jihoon.me/Introduction%20to%20ACM-ICPC.pdf"/>
          <!--
          <div class="readable">
            <h3> Question: 이승민 회원을 제명한다.</h3>
            <div class="button-between">
              <button class="button-between mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised mdl-button--colored">
                찬성
              </button>
            </div>
            <div class="button-between">
              <button class="button-between mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised">
                반대
              </button>
            </div>
            <div class="button-between">
              <button class="button-between mdl-button mdl-js-ripple-effect mdl-js-button mdl-button--raised">
                기권
              </button>
            </div>
            <div class="button-submit">
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--accent">
                결정
              </button>
            </div>
            <h4> 남은 시간: 3분 33초 </h4>
          </div>
          -->
        </div>
        <div class="cell-blank mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
      </div>
    </main>
  </div>
</template>

<script>
  export default {
    name: 'hello',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello {
    background: #757de8;
    color: white;
  }
  header {
    /* This background is dark, so we set text to white. Use 87% black instead if
       your background is light. */
    color: white;
  }
  .cell-task{
    box-sizing: border-box;
    color: #000000;
    background-color: #FFFFFF;
    padding: 20px;
    padding-top: 0px;
    text-align: left;
  }
  .mdl-data-table{
    width: 100%;
  }
  .header-wrapper{
    display: flex;
  }
  .button-user-add{
    margin-top: 25px;
    margin-left: 20px;    
  }
  .readable{
    background-color: #EEEEEE;
    width: 100%;
    height: calc(100vh - 210px);
  }
  div.readable{
    padding: 10px;
    width: calc(100% - 20px);
    text-align: center;
    height: calc(100vh - 230px);
  }
  div.button-between{
    margin-bottom: 10px;
  }
  div.button-submit{
    margin-top: 30px;
  }
  button.button-between{
    width: 200px;
  }
  @media (max-width: 1439px){
    .cell-blank{
      display: none;
    }
    .cell-userlist, .cell-task{
      width: calc(100% - 20px);
    }
  }
  /*
  @media (max-width: 1024px){
    .readable{
      height: calc(100vh - 150px);
    }
  }
  */
</style>
