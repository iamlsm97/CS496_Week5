<template>
  <div class="main">
    <md-toolbar class="md-transparent">
      <router-link tag="h1" to="/" class="md-title">ADMIT.IO</router-link>
    </md-toolbar>
    <md-layout md-column-xsmall md-row-small md-row-medium md-row-large md-row-xlarge>
      <md-layout md-hide-xsmall md-flex-small="15" md-flex-medium="25" md-flex-large="25"
                 md-flex-xlarge="25"></md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="70" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50"
                 class="layout-create">
        <md-card md-with-hover class="card-create">
          <md-card-header>
            <div class="md-title">Create New Room</div>
            <div class="md-subhead">방 이름을 정하세요</div>
            <md-card-contents>
              <md-input-container md-clearable>
                <label>Room Name</label>
                <md-input v-model="roomName"></md-input>
              </md-input-container>
            </md-card-contents>
            <md-card-actions>
              <md-button class="md-primary btn" :class="{disabled: (roomName === '')}" @click="createNewRoom">
                Create New Room
              </md-button>
            </md-card-actions>
          </md-card-header>
        </md-card>
      </md-layout>
      <md-layout md-hide-xsmall md-flex-small="15" md-flex-medium="25" md-flex-large="25"
                 md-flex-xlarge="25"></md-layout>
    </md-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        roomName: '',
      };
    },
    sockets: {
      creationSuccess (roomId) {
        this.$router.push(`/room/${roomId}`);
      },
      creationFailed () {
        this.$router.push('/');
      },
    },
    methods: {
      createNewRoom () {
        if (this.roomName !== '') {
          this.$socket.emit('createRoom', this.roomName);
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
</style>
