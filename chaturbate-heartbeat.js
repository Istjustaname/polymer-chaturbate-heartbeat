import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ChaturbateInfo extends PolymerElement {
  static get template() {
    return html `
    <style>
       @keyframes beat {
        0% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}
        50% {transform: scale(1.1) rotate(225deg); box-shadow:0 0 70px #d5093c;}
        100% {transform: scale(1) rotate(225deg); box-shadow:0 0 40px #d5093c;}
    }

    #chest {
        position:relative;
        width:500px;
        height:500px;
        margin:0 auto;
    }
    .heart {
        position:absolute;
        z-index:2;
        background: -moz-linear-gradient(-90deg, #F50A45 0%, #d5093c 40%);
        background: -webkit-gradient(linear, right 50%, left 50%, color-stop(0%,#F50A45), color-stop(40%,#d5093c));
        background: -webkit-linear-gradient(-90deg, #F50A45 0%,#d5093c 40%);
        background: linear-gradient(-90deg, #F50A45 0%,#d5093c 40%);
        -webkit-animation: beat 0.7s ease 0s infinite normal;
        -moz-animation: beat 0.7s ease 0s infinite normal;
        animation: beat 0.7s ease 0s infinite normal;
    }
    .heart.center {
        background: -moz-linear-gradient(-45deg, #B80734 0%, #d5093c 40%);
        background: -webkit-gradient(linear, left top, right bottom, color-stop(0%,#B80734), color-stop(40%,#d5093c));
        background: -webkit-linear-gradient(-45deg, #B80734 0%,#d5093c 40%);
        background: linear-gradient(-45deg, #B80734 0%,#d5093c 40%);
    }
    .heart.top {
        z-index:3;
    }
    .side {
        top:100px;
        width:220px;
        height:220px;
        border-radius: 220px;
    }
    .center {
        width:210px;
        height:210px;
        bottom:100px;
        left:145px;
        font-size:0;
        text-indent:-9999px;
    }
    .left {
        left:62px;
    }
    .right {
        right:62px;
    }
    </style>

    <div id="chest">
      <div class="heart left side top"></div>
      <div class="heart center">&hearts;</div>
      <div class="heart right side"></div>
    </div>`;
  }

  static get properties() {
    return {
  
    }
  }
}

window.customElements.define('chaturbate-hearts', ChaturbateInfo);

