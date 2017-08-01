<template>
  <div class="hello">
    <md-toolbar>
      <h1 class="md-title header-title" style="flex: 1">{{ roomName }}</h1>
      <md-button>{{ userName }}</md-button>
      <router-link tag="md-button" to="/">나가기</router-link>
    </md-toolbar>
    <md-layout md-flex-large="100" class="layout-userview">
      <md-card md-with-hover class="card-userview">
          <md-card-header>
            <div class="md-title" v-if="onVote === 0">지금 하고 있는 것</div>
            <div class="md-title" v-else-if="onVote === 1 && isActive">투표 진행중 (참여 가능)</div>
            <div class="md-title" v-else-if="onVote === 1 && !isActive">투표 진행중 (참여 불가)</div>
            <div class="md-title" v-if="onVote === 2">투표 결과 공개!</div>
          </md-card-header>
          <md-card-content>
            <embed :src="showUrl" :key="showUrl" class="readable" :class="{hideview: (onVote !== 0)}" type='application/pdf'/>
            <div class="readable" :class="{hideview: (onVote !== 1)}">
              <center>
                <h1>{{ question }}</h1>
                <!-- <h3>남은 시간: 1분 00초</h3> -->
                <br>
                <div>
                  <md-button class="md-raised"
                             :class= "{'md-primary': userChoice === 1}"
                             @click="() => { chooseChange(1) }">
                    찬성
                  </md-button>
                  <md-button class="md-raised"
                             :class= "{'md-primary': userChoice === 2}"
                             @click="() => { chooseChange(2) }">
                    반대
                  </md-button>
                  <md-button class="md-raised"
                             :class= "{'md-primary': userChoice === 0}"
                             @click="() => { chooseChange(0) }">
                    기권
                  </md-button>
                </div>
                <br>
                <md-button class="btn md-raised md-accent button-send-vote"
                           :class="{disabled: !isActive}"
                           @click="submitAnswer">
                  결정!
                </md-button>
              </center>
            </div>
            <div class="readable" :class="{hideview: (onVote !== 2)}">
              <center>
                <h1>{{ question }}</h1>
                <h3 v-if="pastResult.result==='agree'" class="vote-result-yes"><b>찬성</b></h3>
                <h3 v-else-if="pastResult.result==='none'" class="vote-result-none"><b>무효</b></h3>
                <h3 v-else class="vote-result-no"><b>반대</b></h3>
                <br>
                <div class="vote-information-h3">
                  <div class="h3-to-middle"></div>
                  <h3 class="gap-closer">총 {{pastResult.total}}명 중&nbsp;</h3>
                  <h3 class="gap-closer">찬성 {{pastResult.agree}}, 반대 {{pastResult.disagree}}, 기권 {{pastResult.none}}</h3>
                  <div class="h3-to-middle"></div>
                </div>
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
        showUrl: this.showUrl,
        onVote: this.onVote,
        question: this.question,
        userChoice: this.userChoice,
        isActive: this.isActive,
        pastResult: this.pastResult,
      };
    },
    beforeCreate () {
      this.onVote = 0;
      this.userChoice = 0;
      this.isActive = false;
      this.showUrl = 'about:blank;';
      this.pastResult = {
        voteQuestion: '',
        total: 0,
        agree: 0,
        disagree: 0,
        none: 0,
        result: 'none',
      };
      this.$socket.emit('verifyUser', this.$route.params.userId);
    },
    sockets: {
      verifyUserSuccess (data) {
        // console.log(data);
        this.roomName = data.room.name;
        this.userName = data.name;
        this.showUrl = data.room.showUrl;
        this.onVote = data.room.voting;
        this.question = data.room.voteQuestion;
        this.isActive = data.isActive;
        if (this.onVote < 2) {
          this.pastResult = {
            voteQuestion: '',
            total: 0,
            agree: 0,
            disagree: 0,
            none: 0,
            result: 'none',
          };
        }
        // console.log(this.onVote);
        setTimeout(() => { this.$socket.emit('verifyUser', this.$route.params.userId); }, 100);
      },
      verifyUserFailed () {
        this.$router.push('/');
      },
      resultVote (data) {
        this.pastResult = data.pastResult[0];
      },
    },
    methods: {
      chooseChange (idx) {
        this.userChoice = idx;
      },
      submitAnswer () {
        console.log(this.isActive);
        if (this.isActive) {
          this.$socket.emit('userVote', this.$route.params.userId, this.userChoice);
        }
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
  .vote-result-yes {
    color: #00AA00;
  }

  .vote-result-no {
    color: #FF0000;
  }

  .vote-result-none {
    color: #777777;
  }
  .gap-closer {
    margin-top: -5px;
    text-align: center;
  }
  .vote-information-h3 {
    display: flex;
  }
  .h3-to-middle{
    flex: 1;
  }
  @media (max-width: 600px) {
    .vote-information-h3 {
      display: block;
    }
    .h3-to-middle{
      display: none;
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
