<template>
  <div class="hello">
    <md-toolbar>
      <h1 class="md-title" style="flex: 1"></h1>
      <md-button>유저 코드 복사</md-button>
      <router-link tag="md-button" to="/">나가기</router-link>
    </md-toolbar>
    <md-layout md-flex-large="100" class="layout-userview">
      <md-card md-with-hover class="card-userview">
          <md-card-header>
            <div class="md-title"><!--지금 하고 있는 것--> 투표 진행중 (참여 가능/불가)</div>
          </md-card-header>
          <md-card-content>
            <!--<embed src="http://jihoon.me/Introduction%20to%20ACM-ICPC.pdf" class="readable" type='application/pdf'>-->
            <div class="readable">
              <center>
                <h1>난 오늘 치킨을 먹는다.</h1>
                <h3>남은 시간: 1분 00초</h3>
                <br>
                <div>
                  <md-button class="md-raised md-primary">찬성</md-button>
                  <md-button class="md-raised">반대</md-button>
                  <md-button class="md-raised">기권</md-button>
                </div>
                <br>
                <md-button class="md-raised md-accent button-send-vote">결정! <!--수정!--></md-button>
              </center>
            </div>
          </md-card-content>
      </md-card>
    </md-layout>
  </div>
</template>

<script>
  export default {
    name: 'userview',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      };
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .hello{
    text-align: left;
    height: 100vh;
    background-color: #757de8;
  }
  .layout-userview{
    padding: 10px;
  }
  .card-userview{
    width: 100%;
    height: calc(100vh - 100px);
  }
  .readable{
    width: 100%;
    height: calc(100vh - 200px);
  }
  div.readable{
    padding: 15px;
    background-color: #EEEEEE;
    height: calc(100vh - 200px);
  }
  .button-send-vote{
    width: 200px;
  }
  /*
  @media (max-width: 1024px){
    .readable{
      height: calc(100vh - 150px);
    }
  }
  */
</style>
