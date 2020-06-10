const app = getApp()

const maxScore = 999;

Page({
  data: {
    score: 0,
    scoreInput: "",
    hiddenScoreInput: true,
  },

  setScore: function(score) {
    if (score < 0) {
      this.setData({
        score: 0,
      });
    } else {
      this.setData({
        score: score > maxScore ? maxScore : score,
      });
    }
  },

  onScoreInput: function(event) {
    this.setData({scoreInput: event.detail.value});
  },

  onScoreInputConfirm: function() {
    this.setData({hiddenScoreInput: true});
    const score = parseInt(this.data.scoreInput, 10)
    if (!isNaN(score)) {
      this.setScore(score)
    }
  },

  onScoreInputCancel: function() {
    this.setData({
      scoreInput: "",
      hiddenScoreInput: true,
    });
  },

  onScoreLongTap: function(event) {
    this.setData({hiddenScoreInput: false});
  },

  onScoreAdd10Tap: function() {this.setScore(this.data.score + 10);},
  onScoreSub10Tap: function() {this.setScore(this.data.score - 10);},
  onScoreAddQTap: function() {this.setScore(this.data.score + 20);},
  onScoreSubQTap: function() {this.setScore(this.data.score - 20);},
  onScoreKTap: function() {this.setScore(99);},
  onScore3Tap: function() {this.setScore(this.data.score + 3);},
  onScore4Tap: function() {this.setScore(this.data.score + 4);},
  onScore5Tap: function() {this.setScore(this.data.score + 5);},
  onScore6Tap: function() {this.setScore(this.data.score + 6);},
  onScore9Tap: function() {this.setScore(this.data.score + 9);},

  onLoad: function () {
  },
})
