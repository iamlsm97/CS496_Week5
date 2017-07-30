<template>
  <div class="hello mdl-layout mdl-js-layout">
    <header class="mdl-layout__header mdl-layout__header--transparent">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">ADMIT.IO</span>
      </div>
    </header>
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
    background: #000000;
    color: white;
  }
  header {
    /* This background is dark, so we set text to white. Use 87% black instead if
       your background is light. */
    color: white;
  }
  .card-joinroom, .card-makeroom{
    width: 100%;
  }
  @media (min-width: 840px){
    .grid-vertical{
      margin-top: 10%;
    }
  }
</style>
