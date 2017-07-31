<template>
  <div class="main">
    <md-toolbar>
      <h1 class="md-title header-title" style="flex: 1;">SPARCS 정기총회</h1>
      <md-button>유저 코드 복사</md-button>
      <router-link tag="md-button" to="/">나가기</router-link>
    </md-toolbar>
    <md-layout md-row class="layout-room">
      <md-layout md-hide-xsmall       md-hide-small       md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="70" md-flex-xlarge="70" class="layout-task">
        <md-card md-with-hover class="card-userview">
          <md-card-header>
            <div class="card-header-flex">
                <h1>현재 작업</h1>
                <div class="button-with-h1">
                  <md-button class="md-raised md-primary">
                    <md-icon class="button-icon">done</md-icon>&nbsp;링크 변경
                  </md-button>
                </div>
                <div class="button-with-h1">
                  <md-button class="md-raised md-primary">
                    <md-icon class="button-icon">add</md-icon>&nbsp;질문 추가
                  </md-button>
                </div>
            </div>
          </md-card-header>
          <md-card-content>
            <div class="card-header-flex">
              <h2 style="min-width: 100px">현재 링크</h2>
              <md-input-container md-clearable>
                <label>PDF URL...</label>
                <md-input v-model="initialValue"></md-input>
              </md-input-container>
            </div>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                    <h2>질문 추가 (찬성/반대)</h2>
                </div>
              </md-card-header>
              <md-card-content>
                <div class="card-header-flex">
                  <h2 style="min-width: 100px">질문</h2>
                  <md-input-container md-clearable>
                    <label>질문</label>
                    <md-input></md-input>
                  </md-input-container>
                </div>
                <div class="card-header-flex">
                  <div style="flex: 1;"></div>
                  <md-button class="md-raised md-primary">등록</md-button>
                  <md-button class="md-raised md-accent">취소</md-button>
                </div>
              </md-card-content>
            </md-card>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                    <h2>오늘은 야식을 먹어야 한다!&nbsp;&nbsp;</h2><h2 class="vote-result-none"><b>진행 중</b></h2>
                </div>
                <h3 class="gap-closer">현재 21명 중 17명 투표</h3>
              </md-card-header>
            </md-card>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                    <h2>오늘은 치킨을 먹어야 한다!&nbsp;&nbsp;</h2><h2 class="vote-result-no"><b>반대</b></h2>
                </div>
                <h3 class="gap-closer">총 21명 중 찬성 3, 반대 17, 기권 1</h3>
              </md-card-header>
            </md-card>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                    <h2>오늘은 피자를 먹어야 한다!&nbsp;&nbsp;</h2><h2 class="vote-result-none"><b>기권</b></h2>
                </div>
                <h3 class="gap-closer">총 21명 중 찬성 10, 반대 0, 기권 11</h3>
              </md-card-header>
            </md-card>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                    <h2>오늘은 보쌈을 먹어야 한다!&nbsp;&nbsp;</h2><h2 class="vote-result-yes"><b>찬성</b></h2>
                </div>
                <h3 class="gap-closer">총 21명 중 찬성 13, 반대 8, 기권 0</h3>
              </md-card-header>
            </md-card>
          </md-card-content>
        </md-card>
      </md-layout>
      <md-layout md-hide-xsmall       md-hide-small       md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
    </md-layout>
    <md-layout md-row class="layout-room">
      <md-layout md-hide-xsmall       md-hide-small       md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="70" md-flex-xlarge="70">
        <md-layout md-column-xsmall md-column-small md-row-medium md-row-large md-row-xlarge>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50" class="layout-user">
          <md-card md-with-hover class="card-userview">
            <md-card-header>
              <div class="card-header-flex">
                  <h1>유저 목록</h1>
                  <div class="button-with-h1">
                    <md-button class="md-raised md-primary">
                      <md-icon class="button-icon">add</md-icon>&nbsp;유저 추가
                    </md-button>
                  </div>
              </div>
            </md-card-header>
            <md-card-content>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <md-input-container md-clearable>
                  <label>이름 입력...</label>
                  <md-input></md-input>
                </md-input-container>
              </md-card-header>
            </md-card>
            
              <div class="card-header-flex">
                <h2>21명 중 15명 활성화</h2>
              </div>
              <md-table md-sort="name" md-sort-type="asc" @select="onSelect" @sort="onSort">
                <md-table-header>
                  <md-table-row md-selection="true">
                    <md-table-head md-sort-by="name">User</md-table-head>
                    <md-table-head md-sort-by="code">UniqueCode</md-table-head>
                    <md-table-head>delete?</md-table-head>
                  </md-table-row>
                </md-table-header>
                <md-table-body>
                  <md-table-row md-selection="true">
                    <md-table-cell>mango</md-table-cell>
                    <md-table-cell>bntjdkgm</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-icon-button md-accent"><md-icon>clear</md-icon></md-button>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row md-selection="true">
                    <md-table-cell>rnango</md-table-cell>
                    <md-table-cell>bntjdkgm</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-icon-button md-accent"><md-icon>clear</md-icon></md-button>
                    </md-table-cell>
                  </md-table-row>
                  <md-table-row md-selection="true">
                    <md-table-cell>mango</md-table-cell>
                    <md-table-cell>bntjdkgm</md-table-cell>
                    <md-table-cell>
                      <md-button class="md-icon-button md-accent"><md-icon>clear</md-icon></md-button>
                    </md-table-cell>
                  </md-table-row>
                </md-table-body>
              </md-table>
              <!--<md-table-pagination
                md-size="5"
                md-total="10"
                md-page="1"
                md-label="Rows"
                md-separator="of"
                :md-page-options="[5, 10, 25, 50]"
                @pagination="onPagination"></md-table-pagination>-->
            </md-card-content>
          </md-card>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50" class="layout-result">
            <md-card md-with-hover class="card-userview">
              <md-card-header>
                <div class="card-header-flex">
                    <h1>이전 결과</h1>
                </div>
              </md-card-header>
              <md-card-content>
                <md-card md-with-hover class="card-inner">
                  <md-card-header>
                    <div class="card-header-flex">
                        <h2>오늘은 치킨을 먹어야 한다!&nbsp;&nbsp;</h2><h2 class="vote-result-no"><b>반대</b></h2>
                    </div>
                    <h3 class="gap-closer">총 21명 중 찬성 3, 반대 17, 기권 1</h3>
                  </md-card-header>
                </md-card>
                <md-card md-with-hover class="card-inner">
                  <md-card-header>
                    <div class="card-header-flex">
                        <h2>오늘은 피자를 먹어야 한다!&nbsp;&nbsp;</h2><h2 class="vote-result-none"><b>기권</b></h2>
                    </div>
                    <h3 class="gap-closer">총 21명 중 찬성 10, 반대 0, 기권 11</h3>
                  </md-card-header>
                </md-card>
                <md-card md-with-hover class="card-inner">
                  <md-card-header>
                    <div class="card-header-flex">
                        <h2>오늘은 보쌈을 먹어야 한다!&nbsp;&nbsp;</h2><h2 class="vote-result-yes"><b>찬성</b></h2>
                    </div>
                    <h3 class="gap-closer">총 21명 중 찬성 13, 반대 8, 기권 0</h3>
                  </md-card-header>
                </md-card>
              </md-card-content>
            </md-card>
          </md-layout>
        </md-layout>    
      </md-layout>
      <md-layout md-hide-xsmall       md-hide-small       md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
    </md-layout>
  </div>
  <!--
  <div class="hello mdl-layout mdl-js-layout">
    <header class="app-header mdl-layout__header mdl-layout__header--scroll">
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">ADMIT.IO > SPARCS 2017 Summer 정기총회</span>
        <div class="mdl-layout-spacer"></div>
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">방 코드 복사</a>
          <a class="mdl-navigation__link" href="">나가기</a>
        </nav>
      </div>
    </header>
    <main class="mdl-layout__content">
      <div class="grid-vertical mdl-grid">
        <div class="cell-blank mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
        <div class="cell-showing mdl-cell mdl-cell--10-col mdl-cell--8-col-tablet mdl-cell--4-phone">
          <div class="header-wrapper">
            <div>
              <h3>Showing</h3>
            </div>
            <div class="button-user-add">
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                <i class="material-icons">input</i>
                 파일 변경
              </button>
            </div>
            <div class="button-user-add">
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                <i class="material-icons">help</i>
                 질문 추가
              </button>
            </div>
          </div>
          <div>
            현재 파일: <a href="http://jihoon.me/Introduction%20to%20ACM-ICPC.pdf">http://jihoon.me/Introduction to ACM-ICPC.pdf</a>
          </div>
          <div class="add-vote">
            <h4>질문 추가</h4>
            <div class="grid-vertical mdl-grid">
              <div class="mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone label-attributes label-attributes-q">Question</div>
              <div class="mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                <div class="mdl-textfield mdl-js-textfield">
                  <input class="mdl-textfield__input" type="text" id="sample1">
                  <label class="mdl-textfield__label" for="sample1">Question</label>
                </div>
              </div>
            </div>
            <div class="grid-vertical mdl-grid">
              <div class="mdl-cell--3-col mdl-cell--2-col-tablet mdl-cell--1-col-phone label-attributes">Method</div>
              <div class="mdl-cell--9-col mdl-cell--6-col-tablet mdl-cell--3-col-phone">
                <label class="mdl-radio mdl-js-radio mdl-js-ripple-effect" for="option-1">
                  <input type="radio" id="option-1" class="mdl-radio__button" name="options" value="1" checked>
                  <span class="mdl-radio__label">찬성/반대</span>
                </label>
              </div>
            </div>
            <div class="button-question-add">
              <div class="blank"></div>
              <div>
                <button class="mdl-button mdl-js-button mdl-button--accent">등록</button>
              </div>
              <div>
                <button class="mdl-button mdl-js-button">취소</button>
              </div>
            </div>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <h4><b>이승민 회원을 제명한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-none"><b>???</b></h4>
            </div>
            <h5>(21명 중 17명 투표)</h5>
            <h5>left: rnango, null, rongrong, seol</h5>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <h4><b>이승민 회원을 제명한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-yes"><b>찬성</b></h4>
            </div>
            <h5>(21명 중 17명 찬성, 3명 반대, 1명 기권)</h5>
          </div>
        </div>
        <div class="cell-blank mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
      </div>
      <div class="grid-vertical mdl-grid">
        <div class="cell-blank mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
        <div class="cell-userlist mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-phone">
          <div class="header-wrapper">
            <div>
              <h3>User List</h3>
            </div>
            <div class="button-user-add">
              <button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                <i class="material-icons">add</i>
                 Add User(s)
              </button>
            </div>
          </div>
          <div class="add-user">
            <h4>유저 추가</h4>
            <div class="mdl-textfield mdl-js-textfield mdl-textfield--floating-label">
              <input class="mdl-textfield__input" type="text" id="sample3">
              <label class="mdl-textfield__label" for="sample3">Text...</label>
            </div>
          </div>
          <table class="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
            <thead>
              <tr>
                <th class="mdl-data-table__cell--non-numeric">User</th>
                <th class="mdl-data-table__cell--non-numeric">UniqueCode</th>
                <th class="mdl-data-table__cell--non-numeric">delete?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="mdl-data-table__cell--non-numeric">mango</td>
                <td class="mdl-data-table__cell--non-numeric">bntjdkgm</td>
                <td class="mdl-data-table__cell--non-numeric">
                  <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    DELETE
                  </button>
                </td>
              </tr>
              <tr>
                <td class="mdl-data-table__cell--non-numeric">rongrong</td>
                <td class="mdl-data-table__cell--non-numeric">bntjdkgm</td>
                <td class="mdl-data-table__cell--non-numeric">
                  <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    DELETE
                  </button>
                </td>
              </tr>
              <tr>
                <td class="mdl-data-table__cell--non-numeric">null</td>
                <td class="mdl-data-table__cell--non-numeric">bntjdkgm</td>
                <td class="mdl-data-table__cell--non-numeric">
                  <button class="mdl-button mdl-js-button mdl-js-ripple-effect">
                    DELETE
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="cell-task mdl-cell mdl-cell--5-col mdl-cell--8-col-tablet mdl-cell--4-phone">
          <div>
            <h3>Past Results</h3>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <h4><b>이승민 회원을 제명한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-no"><b>반대&nbsp;</b></h4>
            </div>
            <h5>(21명 중 3명 찬성, 17명 반대, 1명 기권)</h5>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <h4><b>고지훈 회원을 제명한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-yes"><b>찬성</b></h4>
            </div>
            <h5>(21명 중 21명 찬성, 0명 반대, 0명 기권)</h5>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <h4><b>고심 끝에 스팍스를 해체한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-none"><b>무효</b></h4>
            </div>
            <h5>(21명 중 0명 찬성, 0명 반대, 21명 기권)</h5>
          </div>
        </div>
        <div class="cell-blank mdl-cell--1-col mdl-cell--hide-tablet mdl-cell--hide-phone"></div>
      </div>
    </main>
  </div>
  -->
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
  .main{
    text-align: left;
    min-height: 100vh;
    background-color: #757de8;
  }
  .layout-task, .layout-user, .layout-result{
    padding: 10px;
    margin-top: 20px;
  }
  .md-card{
    width: 100%;
  }
  @media (max-width: 944px){
    .md-flex-small-100 {
      min-width: 100%;
    }
    .header-title{
      visibility: hidden;
    }
  }
  @media (max-width: 600px){
    .md-column-xsmall {
      flex-direction: row;
    }
    .header-title{
      visibility: hidden;
    }
  }
  .card-header-flex{
    display: flex;
    align-items: center;
  }
  .button-with-h1{
    margin-left: 10px;
  }
  .button-icon{
    margin-top: -2px;
    margin-left: -5px;
  }
  .card-inner{
    background-color: #DDDDDD!important;
    margin-bottom: 10px;
  }
  .vote-result-yes{
    color: #00AA00;
    min-width: 60px;
  }
  .vote-result-no{
    color: #FF0000;
    min-width: 60px;
  }
  .vote-result-none{
    color: #777777;
    min-width: 60px;
  }
  .gap-closer{
    margin-top: -10px;
  }
  /*
  .hello {
    background: #757de8;
    color: white;
  }
  header {
    color: white;
  }
  .cell-userlist, .cell-task, .cell-showing{
    box-sizing: border-box;
    color: #000000;
    background-color: #FFFFFF;
    padding: 20px;
    padding-top: 0px;
    text-align: left;
    align-items: left;
  }
  .add-vote, .add-user{
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
    box-sizing: border-box;
    background-color: #DDDDDD;
    margin-top: 5px;
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 1px;
    padding-bottom: 10px;
  }
  .add-user{
    margin-bottom: 15px;
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
  .label-attributes{
    text-align: right;
    padding-right: 10px;
  }
  .label-attributes-q{
      margin-top: 4px;
  }
  .mdl-radio{
    margin-top: -2px;
  }
  .button-question-add{
    display: flex!important;
    align-items: center!important;
  }
  .blank{
    flex: 1;
  }
  .vote-result-header{
    display: flex;
    margin-bottom: -30px;
  }
  .vote-result-yes{
    color: #00AA00;
    min-width: 60px;
  }
  .vote-result-no{
    color: #FF0000;
    min-width: 60px;
  }
  .vote-result-none{
    color: #777777;
    min-width: 60px;
  }
  .mdl-textfield{
    margin-top: -20px;
    width: 100%;
  }
  .mdl-textfield__label{
    top: 20px;
  }
  @media (max-width: 1439px){
    .cell-blank{
      display: none;
    }
    .cell-userlist, .cell-task{
      width: calc(50% - 20px);
    }
    .cell-showing{
      width: calc(100% - 20px);
    }
  }
  @media (max-width: 800px){
    .cell-blank{
      display: none;
    }
    .cell-userlist, .cell-task{
      width: calc(100% - 20px);
    }
    .cell-showing{
      width: calc(100% - 20px);
    }
  }
  */
</style>
