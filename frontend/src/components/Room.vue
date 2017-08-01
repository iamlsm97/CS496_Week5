<template>
  <div class="main">
    <md-toolbar>
      <h1 class="md-title header-title" style="flex: 1;">SPARCS 정기총회</h1>
      <md-button>유저 코드 복사</md-button>
      <router-link tag="md-button" to="/">나가기</router-link>
    </md-toolbar>
    <md-layout md-row class="layout-room">
      <md-layout md-hide-xsmall md-hide-small md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="70" md-flex-xlarge="70"
                 class="layout-task">
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
                  <h2>오늘은 야식을 먹어야 한다!&nbsp;&nbsp;</h2>
                  <h2 class="vote-result-none"><b>진행 중</b></h2>
                </div>
                <h3 class="gap-closer">현재 21명 중 17명 투표</h3>
              </md-card-header>
            </md-card>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                  <h2>오늘은 치킨을 먹어야 한다!&nbsp;&nbsp;</h2>
                  <h2 class="vote-result-no"><b>반대</b></h2>
                </div>
                <h3 class="gap-closer">총 21명 중 찬성 3, 반대 17, 기권 1</h3>
              </md-card-header>
            </md-card>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                  <h2>오늘은 피자를 먹어야 한다!&nbsp;&nbsp;</h2>
                  <h2 class="vote-result-none"><b>기권</b></h2>
                </div>
                <h3 class="gap-closer">총 21명 중 찬성 10, 반대 0, 기권 11</h3>
              </md-card-header>
            </md-card>
            <md-card md-with-hover class="card-inner">
              <md-card-header>
                <div class="card-header-flex">
                  <h2>오늘은 보쌈을 먹어야 한다!&nbsp;&nbsp;</h2>
                  <h2 class="vote-result-yes"><b>찬성</b></h2>
                </div>
                <h3 class="gap-closer">총 21명 중 찬성 13, 반대 8, 기권 0</h3>
              </md-card-header>
            </md-card>
          </md-card-content>
        </md-card>
      </md-layout>
      <md-layout md-hide-xsmall md-hide-small md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
    </md-layout>
    <md-layout md-row class="layout-room">
      <md-layout md-hide-xsmall md-hide-small md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
      <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="80" md-flex-large="70" md-flex-xlarge="70">
        <md-layout md-column-xsmall md-column-small md-row-medium md-row-large md-row-xlarge>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50"
                     class="layout-user">
            <md-card md-with-hover class="card-userview">
              <md-card-header>
                <div class="card-header-flex">
                  <h1>유저 목록</h1>
                  <div class="button-with-h1">
                    <md-button class="md-raised md-primary" @click="onClickAddUser">
                      <md-icon class="button-icon">add</md-icon>&nbsp;유저 추가
                    </md-button>
                  </div>
                </div>
              </md-card-header>
              <md-card-content>
                <md-card md-with-hover class="card-inner" v-if="extendAddUser">
                  <md-card-header>
                    <md-input-container md-clearable>
                      <label>이름 입력...</label>
                      <md-input v-model="newUserName"></md-input>
                    </md-input-container>
                  </md-card-header>
                  <md-card-content>
                    <div class="card-header-flex">
                      <div style="flex: 1;"></div>
                      <md-button class="md-raised md-primary btn" :class="{disabled: (newUserName === '')}"
                                 @click="onClickAddUserConfirm">추가
                      </md-button>
                      <md-button class="md-raised md-accent" @click="onClickAddUserCancel">취소</md-button>
                    </div>
                  </md-card-content>
                </md-card>

                <div class="card-header-flex">
                  <h2>{{userCount}}명 중 {{activeUserCount}}명 활성화</h2>
                </div>
                <md-table md-sort="name" md-sort-type="asc" @select="onSelectRow">
                  <md-table-header>
                    <md-table-row md-selection="true">
                      <md-table-head md-sort-by="name">User</md-table-head>
                      <md-table-head md-sort-by="code">UniqueCode</md-table-head>
                      <md-table-head>delete?</md-table-head>
                    </md-table-row>
                  </md-table-header>
                  <md-table-body>
                    <md-table-row v-for="(row, rowIndex) in userList" :key="rowIndex" :md-item="{ key: rowIndex, info: row }" md-selection>
                      <md-table-cell v-for="(column, columnIndex) in row" :key="columnIndex">
                        {{column}}
                      </md-table-cell>
                      <md-table-cell>
                        <md-button class="md-icon-button md-accent" @click="() =>{ onDeleteUser(rowIndex); }">
                          <md-icon>clear</md-icon>
                        </md-button>
                      </md-table-cell>
                    </md-table-row>
                  </md-table-body>
                </md-table>
              </md-card-content>
            </md-card>
          </md-layout>
          <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="50" md-flex-large="50" md-flex-xlarge="50"
                     class="layout-result">
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
                      <h2>오늘은 치킨을 먹어야 한다!&nbsp;&nbsp;</h2>
                      <h2 class="vote-result-no"><b>반대</b></h2>
                    </div>
                    <h3 class="gap-closer">총 21명 중 찬성 3, 반대 17, 기권 1</h3>
                  </md-card-header>
                </md-card>
                <md-card md-with-hover class="card-inner">
                  <md-card-header>
                    <div class="card-header-flex">
                      <h2>오늘은 피자를 먹어야 한다!&nbsp;&nbsp;</h2>
                      <h2 class="vote-result-none"><b>기권</b></h2>
                    </div>
                    <h3 class="gap-closer">총 21명 중 찬성 10, 반대 0, 기권 11</h3>
                  </md-card-header>
                </md-card>
                <md-card md-with-hover class="card-inner">
                  <md-card-header>
                    <div class="card-header-flex">
                      <h2>오늘은 보쌈을 먹어야 한다!&nbsp;&nbsp;</h2>
                      <h2 class="vote-result-yes"><b>찬성</b></h2>
                    </div>
                    <h3 class="gap-closer">총 21명 중 찬성 13, 반대 8, 기권 0</h3>
                  </md-card-header>
                </md-card>
              </md-card-content>
            </md-card>
          </md-layout>
        </md-layout>
      </md-layout>
      <md-layout md-hide-xsmall md-hide-small md-flex-medium="10" md-flex-large="15" md-flex-xlarge="15"></md-layout>
    </md-layout>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        extendAddUser: false,
        newUserName: '',
        roomInfo: this.roomInfo,
        userList: this.userList,
        userStatus: this.userStatus,
        userCountText: this.userCountText,
      };
    },
    beforeCreate () {
      console.log('Welcome!');
      this.roomInfo = undefined;
      this.userList = [];
      this.userStatus = [];
      this.activeUserCount = 0;
      this.userCount = 0;
      this.$socket.emit('verifyRoom', this.$route.params.roomId);
    },
    sockets: {
      verifyRoomSuccess (data) {
        this.roomInfo = data.room;
        this.userList = [];
        this.userStatus = [];
        this.activeUserCount = 0;
        this.userCount = this.roomInfo.user.length;
        for (let i = 0; i < this.roomInfo.user.length; i += 1) {
          this.userList.push({ name: this.roomInfo.user[i].name, code: this.roomInfo.user[i].code });
          this.userStatus.push(this.roomInfo.user[i].vote_status);
          if (this.roomInfo.user[i].vote_status > 0) this.activeUserCount += 1;
        }
        setTimeout(() => { this.$socket.emit('verifyRoom', this.$route.params.roomId); }, 1000);
      },
      verifyRoomFailed () {
        this.$router.push('/');
      },
      userAddSuccess (newCode) {
        this.$message({
          showClose: true,
          message: 'Successfully added user',
          type: 'success',
        });
        this.newUserName = '';
        this.extendAddUser = !this.extendAddUser;
        console.log(`newCode is ${newCode}`);
      },
      userAddFailed () {
        this.$message({
          showClose: true,
          message: 'Failed to add user',
          type: 'error',
        });
      },
    },
    methods: {
      onClickAddUser () {
        console.log(this.$route.params.roomId);
        this.extendAddUser = !this.extendAddUser;
      },
      onClickAddUserConfirm () {
        if (this.newUserName !== '') {
          console.log(this.$route.params.roomId);
          this.$socket.emit('createUser', {
            roomId: this.$route.params.roomId,
            userName: this.newUserName,
          });
        }
      },
      onClickAddUserCancel () {
        this.newUserName = '';
        this.extendAddUser = !this.extendAddUser;
      },
      onSelectRow (data) {
        console.log(data);
      },
      onDeleteUser (idx) {
        this.$socket.emit('deleteUser', this.$route.params.roomId, this.userList[idx].code);
      },
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main {
    text-align: left;
    min-height: 100vh;
    background-color: #757de8;
  }

  .layout-task, .layout-user, .layout-result {
    padding: 10px;
    margin-top: 20px;
  }

  .md-card {
    width: 100%;
  }

  @media (max-width: 944px) {
    .md-flex-small-100 {
      min-width: 100%;
    }

    .header-title {
      visibility: hidden;
    }
  }

  @media (max-width: 600px) {
    .md-column-xsmall {
      flex-direction: row;
    }

    .header-title {
      visibility: hidden;
    }
  }

  .card-header-flex {
    display: flex;
    align-items: center;
  }

  .button-with-h1 {
    margin-left: 10px;
  }

  .button-icon {
    margin-top: -2px;
    margin-left: -5px;
  }

  .card-inner {
    background-color: #DDDDDD !important;
    margin-bottom: 10px;
  }

  .vote-result-yes {
    color: #00AA00;
    min-width: 60px;
  }

  .vote-result-no {
    color: #FF0000;
    min-width: 60px;
  }

  .vote-result-none {
    color: #777777;
    min-width: 60px;
  }

  .gap-closer {
    margin-top: -10px;
  }
</style>
