// pages/practise/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    btnFlag: true,
    myQuestions: [{
        question: "对 document load 和 document ready 描述正确的是()。",
        answers: {
          A: "$(document).ready()是当页⾯所有资源全部加载完成后，执⾏⼀个函数",
          B: "如果图⽚资源较多加载时间较长，onload 后等待执⾏的函数需要等待较长时间，所以⼀些效果可能受到影",
          C: "onload 是当 DOM ⽂档树加载完成后执⾏⼀个函数",
          D: "⼀般来说 load 会比$(document).ready()较快执⾏"
        },
        correctAnswer: "B",
      },
      {
        question: "设置元素浮动后，该元素的 display 值是多少()。",
        answers: {
          A: "block",
          B: "不变",
          C: "inline",
          D: "inline-block"
        },
        correctAnswer: "A",
      },
      {
        question: "以下不是 canvas 的⽅方法是()。",
        answers: {
          A: "getContext()",
          B: "fill()",
          C: "stroke()",
          D: "controller"
        },
        correctAnswer: "D",
      },
      {
        question: "不是 input 在 html5 新的类型的是()。",
        answers: {
          A: "datetime",
          B: "file",
          C: "color",
          D: "range"
        },
        correctAnswer: "B",
      },
      {
        question: "以下对 Ajax 描述不正确的是()。",
        answers: {
          A: "readyState 属性请求的状态，当值为 3 时是正在加载",
          B: "使用 XML 和 XSLT 进⾏行数据交换及相关操作",
          C: "总共有 8 种 callback",
          D: "abort()⽅法，停⽌当前请求"
        },
        correctAnswer: "A",
      },
      {
        question: "var temp=null，alert(typeof temp)弹出的结果是()。",
        answers: {
          A: "null",
          B: "object",
          C: "undefined",
          D: "string"
        },
        correctAnswer: "B",
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change: function(e) {
      if (e.detail.value == '') {
        this.setData({
          btnFlag: false,
        })
      } else {
        this.setData({
          btnFlag: true,
        })
      }
    },
    buildQuiz: function() {
      const output = [];
      const quizContainer = document.getElementById("quiz");
      const resultsContainer = document.getElementById("results");
      const submitButton = document.getElementById("submit");
      this.data.myQuestions.forEach((currentQuestion, questionNumber) => {
        const answers = [];
        for (letter in currentQuestion.answers) {
          answers.push(
            `<label>
                     <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                   </label>`
          );
        }
        output.push(
          `<div class="slide">
                   <div class="question"> ${currentQuestion.question} </div>
                   <div class="answers"> ${answers.join("")} </div>
                 </div>`
        );
      });
      quizContainer.innerHTML = output.join("");
    },
    showResults:function() {
      const answerContainers = quizContainer.querySelectorAll(".answers");
      let numCorrect = 0;
      this.data.myQuestions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
        if (userAnswer === currentQuestion.correctAnswer) {
          numCorrect++;
          }else{
          answerContainers[questionNumber].style.color = "red";
          }
      });
      resultsContainer.innerHTML = `你答对了${myQuestions.length}道题中的${numCorrect}道`;
    },
    showSlide:function(n) {
      submitButton.addEventListener("click", showResults);
      previousButton.addEventListener("click", showPreviousSlide);
      nextButton.addEventListener("click", showNextSlide);
      const previousButton = document.getElementById("previous");
      const nextButton = document.getElementById("next");
      const slides = document.querySelectorAll(".slide");
      let currentSlide = 0;
      slides[currentSlide].classList.remove("active-slide");
      slides[n].classList.add("active-slide");
      currentSlide = n;
      if (currentSlide === 0) {
        previousButton.style.display = "none";
      } else {
        previousButton.style.display = "inline-block";
      }

      if (currentSlide === slides.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
      } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
      }
    },
    showNextSlide:function() {
      showSlide(currentSlide + 1);
    },
    showPreviousSlide:function() {
      showSlide(currentSlide - 1);
    },
  }
})