<template>
  <div class="hello mdl-layout mdl-js-layout">
    <header class="app-header mdl-layout__header mdl-layout__header--scroll">
      <div class="mdl-layout__header-row">
        <!-- Title -->
        <span class="mdl-layout-title">ADMIT.IO > SPARCS 2017 Summer 정기총회</span>
        <!-- Add spacer, to align navigation to the right -->
        <div class="mdl-layout-spacer"></div>
        <!-- Navigation -->
        <nav class="mdl-navigation">
          <a class="mdl-navigation__link" href="">방 코드 복사</a>
          <a class="mdl-navigation__link" href="">나가기</a>
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
              <!--"vote-result-no"-->
              <h4><b>이승민 회원을 제명한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-none"><b>???</b></h4>
            </div>
            <h5>(21명 중 17명 투표)</h5>
            <h5>left: rnango, null, rongrong, seol</h5>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <!--"vote-result-no"-->
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
              <!--"vote-result-no"-->
              <h4><b>이승민 회원을 제명한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-no"><b>반대&nbsp;</b></h4>
            </div>
            <h5>(21명 중 3명 찬성, 17명 반대, 1명 기권)</h5>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <!--"vote-result-no"-->
              <h4><b>고지훈 회원을 제명한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-yes"><b>찬성</b></h4>
            </div>
            <h5>(21명 중 21명 찬성, 0명 반대, 0명 기권)</h5>
          </div>
          <div class="add-vote">
            <div class="vote-result-header">
              <!--"vote-result-no"-->
              <h4><b>고심 끝에 스팍스를 해체한다&nbsp;&nbsp;</b></h4><h4 class="vote-result-none"><b>무효</b></h4>
            </div>
            <h5>(21명 중 0명 찬성, 0명 반대, 21명 기권)</h5>
          </div>
          <!--
          <table class="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
            <thead>
              <tr>
                <th class="mdl-data-table__cell--non-numeric">내용</th>
                <th class="mdl-data-table__cell--non-numeric">결과</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="mdl-data-table__cell--non-numeric"><a href="">이승민 회원 제명안</a></td>
                <td class="mdl-data-table__cell--non-numeric">찬성</td>
              </tr>
              <tr>
                <td class="mdl-data-table__cell--non-numeric"><a href="">이승민 회원 제명안</a></td>
                <td class="mdl-data-table__cell--non-numeric">찬성</td>
              </tr>
              <tr>
                <td class="mdl-data-table__cell--non-numeric"><a href="">이승민 회원 제명안</a></td>
                <td class="mdl-data-table__cell--non-numeric">찬성</td>
              </tr>
            </tbody>
          </table>
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
  /*
  .mdl-textfield{
    padding: 0px;
    margin-top: -5px;
    width: 100%;
  }
  */
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
</style>
