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


            // transform-origin: bottom right;
            // transform: scale(0.1);
            // position:absolute;
            // width:500px;
            // height:500px;
            // bottom: 0px;
            // right:0px;
            // margin:0 auto;

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
            top:20%;
            width:44%;
            height:44%;
            border-radius: 55%;
        }
        .center {
            width:42%;
            height:42%;
            bottom:20%;
            left:29%;
            font-size:0;
            text-indent:-9999px;
        }
        .left {
            left:12.4%;
        }
        .right {
            right:12.4%;
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

window.customElements.define('chaturbate-heartbeat', ChaturbateInfo);

