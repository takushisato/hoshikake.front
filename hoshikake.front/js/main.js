// 音関連
const bakuhatu = document.getElementById('bakuhatu');
const warai = document.getElementById('warai');
const glass = document.getElementById('glass');

// 崩壊ギミック
(function() {
  'use strict';

    let houkai = new Vue({
      el: '#houkai',
      data: {
        animated: false,
        animate__hinge1: false,
        animate__hinge2: false
      },
      methods: {
        Click: function() {
            setTimeout(() => {bakuhatu.play()},100),
            setTimeout(() => {warai.play()},500),
            setTimeout(() => {glass.play()},1000),
            setTimeout(() => {this.animated = true},500),
            setTimeout(() => {this.animate__hinge1 = true},500),
            setTimeout(() => {this.animate__hinge2 = true},1000),
            setTimeout(() => {window.location.href = 'horror.html'},3500)
        }
      }
  })
})();

// ハンバーガー
(function() {
  'use strict';

    const {Slide} = window['vue-burger-menu'];
    
    Vue.component('slide', Slide);

    let app = new Vue({
      el: '#app',
      data: {
          id: 'slide'
        },
        methods: {
          onChange: function(id){
            this.id = id;
          }
        }
    });
})();

// スライドショー
(function() {
  'use strict';

    var slide_show = new Vue({
      el: '#slide_show',
      data: {
        current_img: 0,
        count: 0,
        images: [
          {img: 'img/yorunogakkou.jpg'},
          {img: 'img/yorunogakkounorouka.jpg'},
          {img: 'img/noroinoonnna.jpg'}
        ],
      },
      mounted() {
        setInterval(function () {
          if(this.current_img < 2) {
            this.count += 1,
            this.current_img = this.count
          } else {
            this.current_img = 0,
            this.count = 0
          }
        }.bind(this), 6000)

      }
    })
})();

// 上に戻るボタン
(function() {
  'use strict';

  window.onload=function(){
  var scroll = new Vue({
      el: '#introduction',
      methods: {
        scrollTop: function(){
          window.scrollTo({
            top: 0,
            behavior: "smooth"
          });
        }
      }
    })
  }
})();
