<template>
  <div class="main">
    <md-toolbar class="md-transparent">
      <h1 class="md-title">ADMIT.IO</h1>
    </md-toolbar>
    <md-layout md-column-xsmall md-column-small md-row-medium md-row-large md-row-xlarge>
      <md-layout md-hide-xsmall md-hide-small md-flex-medium="15" md-flex-large="15" md-flex-xlarge="15"></md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="35" md-flex-large="35" md-flex-xlarge="35"
                 class="layout-create">
        <md-card md-with-hover class="card-create">
          <md-card-header>
            <div class="md-title">Create Room</div>
            <div class="md-subhead">Or Enter Room Code</div>
            <md-card-contents>
              <md-input-container md-clearable>
                <label>Existing Room Code</label>
                <md-input v-model="roomCode"></md-input>
              </md-input-container>
            </md-card-contents>
            <md-card-actions>
              <md-button @click="enterRoomCode">{{ createType }}</md-button>
            </md-card-actions>
          </md-card-header>
        </md-card>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="35" md-flex-large="35" md-flex-xlarge="35"
                 class="layout-create">
        <md-card md-with-hover class="card-join">
          <md-card-header>
            <div class="md-title">Join Room</div>
            <div class="md-subhead">Enter User Code</div>
            <md-card-contents>
              <md-input-container md-clearable>
                <label>User Code</label>
                <md-input v-model="userCode"></md-input>
              </md-input-container>
            </md-card-contents>
            <md-card-actions>
              <md-button class="btn" :class="{disabled: (userCode === '')}" @click="enterUserCode">Enter User Code
              </md-button>
            </md-card-actions>
          </md-card-header>
        </md-card>
      </md-layout>
      <md-layout md-hide-xsmall md-hide-small md-flex-medium="15" md-flex-large="15" md-flex-xlarge="15"></md-layout>
    </md-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        roomCode: '',
        userCode: '',
      };
    },
    sockets: {
      verifyRoomSuccess (data) {
        console.log(data);
        this.$router.push(`/room/${this.roomCode}`);
      },
      verifyRoomFailed () {
        this.$router.push('/');
      },
      verifyUserSuccess (data) {
        console.log(data);
        this.$router.push(`/user/${this.userCode}`);
      },
      verifyUserFailed () {
        this.$router.push('/');
      },
    },
    computed: {
      createType () {
        if (this.roomCode !== '') {
          return 'ENTER ROOM CODE';
        }
        return 'CREATE ROOM';
      },
    },
    methods: {
      enterRoomCode () {
        if (this.roomCode !== '') {
          // this.$router.push(`/room/${this.roomCode}`);
          this.$socket.emit('verifyRoom', this.roomCode);
        } else {
          this.$router.push('/create');
        }
      },
      enterUserCode () {
        if (this.userCode !== '') {
          this.$socket.emit('verifyUser', this.userCode);
          // this.$router.push(`/user/${this.userCode}`);
        }
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    background: #3F51b5;
    height: 100vh;
  }

  .md-toolbar {
    height: 64px;
  }

  h1.md-title {
    color: white;
  }

  div.md-title, div.md-subhead {
    text-align: left;
  }

  .layout-create, .layout-join {
    padding: 10px;
    height: 250px;
    margin-top: calc(50vh - 207px);
    margin-bottom: calc(50vh - 157px);
  }

  .card-create, .card-join {
    height: 100%;
    width: 100%;
    background-color: white;
  }

  @media (max-height: 400px) {
    .main {
      height: 410px;
    }

    .layout-create, .layout-join {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  @media (max-width: 944px) {
    .md-column-small {
      flex-direction: column;
    }

    @media (max-height: 660px) {
      .main {
        height: 660px;
      }
    }
    .layout-create, .layout-join {
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
</style>
