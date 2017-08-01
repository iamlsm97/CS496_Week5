<template>
  <div class="hello">
    <md-toolbar>
      <h1 class="md-title header-title" style="flex: 1">{{ roomName }}</h1>
      <md-button>유저 코드 복사</md-button>
      <router-link tag="md-button" to="/">{{ userName }}&nbsp;-&nbsp;나가기</router-link>
    </md-toolbar>
    <md-layout md-flex-large="100" class="layout-userview">
      <md-card md-with-hover class="card-userview">
          <md-card-header>
            <div class="md-title"><!--지금 하고 있는 것--> 투표 진행중 (참여 가능/불가)</div>
          </md-card-header>
          <md-card-content>
            <embed :src="showUrl" :key="showUrl" class="readable" :class="{hideview: (roomState !== 0)}" type='application/pdf'/>
            <div class="readable" :class="{hideview: (roomState !== 1)}">
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
        roomName: this.roomName,
        userName: this.userName,
        roomState: this.roomState,
        showUrl: this.showUrl,
      };
    },
    beforeCreate () {
      this.roomState = 0;
      this.showUrl = 'about:blank;';
      this.$socket.emit('verifyUser', this.$route.params.userId);
    },
    sockets: {
      verifyUserSuccess (data) {
        console.log(data);
        this.roomName = data.room.name;
        this.userName = data.name;
        this.showUrl = data.room.showUrl;
        setTimeout(() => { this.$socket.emit('verifyUser', this.$route.params.userId); }, 100);
      },
      verifyUserFailed () {
        this.$router.push('/');
      },
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
  @media (max-width: 944px) {
    .header-title {
      visibility: hidden;
    }
  }
  .hideview{
    display: none;
  }

  /*
  @media (max-width: 1024px){
    .readable{
      height: calc(100vh - 150px);
    }
  }
  */
</style>
