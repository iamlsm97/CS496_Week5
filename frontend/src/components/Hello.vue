<template>
  <div class="main">
    <md-toolbar class="md-transparent">
      <h1 class="md-title">ADMIT.IO</h1>
    </md-toolbar>
    <md-layout     md-column-xsmall     md-column-small     md-row-medium       md-row-large       md-row-xlarge >
      <md-layout md-hide-xsmall       md-hide-small       md-flex-medium="15" md-flex-large="15" md-flex-xlarge="15"></md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="35" md-flex-large="35" md-flex-xlarge="35" class="layout-create">
        <md-card md-with-hover class="card-create">
            <md-card-header>
              <router-link tag="div" to="/create" class="md-title">Create Room</a></router-link>
              <div class="md-subhead">Or Enter Room Code</div>
              <md-card-contents>
                <md-input-container md-clearable>
                  <label>Existing Room Code</label>
                  <md-input></md-input>
                </md-input-container>
              </md-card-contents>
              <md-card-actions>
                <md-button>Enter Room Code</md-button>
              </md-card-actions>
            </md-card-header>
        </md-card>
      </md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="35" md-flex-large="35" md-flex-xlarge="35" class="layout-create">
        <md-card md-with-hover class="card-join">
          <md-card-header>
            <div class="md-title">Join Room</div>
            <div class="md-subhead">Enter User Code</div>
            <md-card-contents>
              <md-input-container md-clearable>
                <label>User Code</label>
                <md-input></md-input>
              </md-input-container>
            </md-card-contents>
            <md-card-actions>
              <md-button>Enter User Code</md-button>
            </md-card-actions>
          </md-card-header>
        </md-card>
      </md-layout>
      <md-layout md-hide-xsmall       md-hide-small       md-flex-medium="15" md-flex-large="15" md-flex-xlarge="15"></md-layout>
    </md-layout>
  </div>
  <!--<div class="hello mdl-layout mdl-js-layout">
    <main class="mdl-layout__content">
      <div class="grid-vertical mdl-grid">
        <div class="mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--3-phone">
          <div class="card-makeroom mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand">
              <h2 class="mdl-card__title-text">Create Room</h2>
            </div>
            <div class="mdl-card__supporting-text">
              <div>You can create room or input code for existing room you created before.</div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="sample3">
                <label class="mdl-textfield__label" for="sample3">Code</label>
              </div> 
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect" href="/create">
                Create New Room
              </a>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Enter Input Code
              </a>
            </div>
          </div>
        </div>
        <div class="mdl-cell mdl-cell--4-col mdl-cell--3-col-tablet mdl-cell--3-phone">
          <div class="card-joinroom mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title mdl-card--expand">
              <h2 class="mdl-card__title-text">Join Room</h2>
            </div>
            <div class="mdl-card__supporting-text">
              <div>Input code for existing room you wanna join.</div>
              <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
                <input class="mdl-textfield__input" type="text" id="sample3">
                <label class="mdl-textfield__label" for="sample3">Code</label>
              </div>  
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Join Room
              </a>
            </div>
          </div>
        </div>
        <div class="mdl-cell--2-col mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      </div>
    </main>
  </div>-->
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
  .main {
    background: #3F51b5;
    height: 100vh;
  }
  .md-toolbar{
    height: 64px;
  }
  h1.md-title{
    color: white;
  }
  div.md-title, div.md-subhead{
    text-align: left;
  }
  .layout-create, .layout-join{
    padding: 10px;
    height: 250px;
    margin-top: calc(50vh - 207px);
    margin-bottom: calc(50vh - 157px);
  }
  .card-create, .card-join{
    height: 100%;
    width: 100%;
    background-color: white;
  }
  @media (max-height: 400px){
    .main{
      height: 410px;
    }
    .layout-create, .layout-join{
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
  @media (max-width: 944px){
    .md-column-small {
      flex-direction: column;
    }
    @media (max-height: 660px){
      .main{
        height: 660px;
      }
    }
    .layout-create, .layout-join{
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }
</style>
