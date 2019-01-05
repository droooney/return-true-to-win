// droooney + IWantImbago

verifyInput = JSON.parse;

// sha1 implementation taken from https://github.com/emn178/js-sha1
/*s*/!function(){"use strict";var root="object"==typeof window?window:{},NODE_JS=!root.JS_SHA1_NO_NODE_JS&&"object"==typeof process&&process.versions&&process.versions.node;NODE_JS&&(root=global);var COMMON_JS=!root.JS_SHA1_NO_COMMON_JS&&"object"==typeof module&&module.exports,AMD="function"==typeof define&&define.amd,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[-2147483648,8388608,32768,128],SHIFT=[24,16,8,0],OUTPUT_TYPES=["hex","array","digest","arrayBuffer"],blocks=[],createOutputMethod=function(t){return function(h){return new Sha1(!0).update(h)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Sha1},t.update=function(h){return t.create().update(h)};for(var h=0;h<OUTPUT_TYPES.length;++h){var s=OUTPUT_TYPES[h];t[s]=createOutputMethod(s)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"==typeof t)return crypto.createHash("sha1").update(t,"utf8").digest("hex");if(t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(void 0===t.length)return method(t);return crypto.createHash("sha1").update(new Buffer(t)).digest("hex")};return nodeMethod};function Sha1(t){t?(blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks):this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.h0=1732584193,this.h1=4023233417,this.h2=2562383102,this.h3=271733878,this.h4=3285377520,this.block=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Sha1.prototype.update=function(t){if(!this.finalized){var h="string"!=typeof t;h&&t.constructor===root.ArrayBuffer&&(t=new Uint8Array(t));for(var s,e,i=0,r=t.length||0,o=this.blocks;i<r;){if(this.hashed&&(this.hashed=!1,o[0]=this.block,o[16]=o[1]=o[2]=o[3]=o[4]=o[5]=o[6]=o[7]=o[8]=o[9]=o[10]=o[11]=o[12]=o[13]=o[14]=o[15]=0),h)for(e=this.start;i<r&&e<64;++i)o[e>>2]|=t[i]<<SHIFT[3&e++];else for(e=this.start;i<r&&e<64;++i)(s=t.charCodeAt(i))<128?o[e>>2]|=s<<SHIFT[3&e++]:s<2048?(o[e>>2]|=(192|s>>6)<<SHIFT[3&e++],o[e>>2]|=(128|63&s)<<SHIFT[3&e++]):s<55296||s>=57344?(o[e>>2]|=(224|s>>12)<<SHIFT[3&e++],o[e>>2]|=(128|s>>6&63)<<SHIFT[3&e++],o[e>>2]|=(128|63&s)<<SHIFT[3&e++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++i)),o[e>>2]|=(240|s>>18)<<SHIFT[3&e++],o[e>>2]|=(128|s>>12&63)<<SHIFT[3&e++],o[e>>2]|=(128|s>>6&63)<<SHIFT[3&e++],o[e>>2]|=(128|63&s)<<SHIFT[3&e++]);this.lastByteIndex=e,this.bytes+=e-this.start,e>=64?(this.block=o[16],this.start=e-64,this.hash(),this.hashed=!0):this.start=e}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Sha1.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,h=this.lastByteIndex;t[16]=this.block,t[h>>2]|=EXTRA[3&h],this.block=t[16],h>=56&&(this.hashed||this.hash(),t[0]=this.block,t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.hBytes<<3|this.bytes>>>29,t[15]=this.bytes<<3,this.hash()}},Sha1.prototype.hash=function(){var t,h,s=this.h0,e=this.h1,i=this.h2,r=this.h3,o=this.h4,H=this.blocks;for(t=16;t<80;++t)h=H[t-3]^H[t-8]^H[t-14]^H[t-16],H[t]=h<<1|h>>>31;for(t=0;t<20;t+=5)s=(h=(e=(h=(i=(h=(r=(h=(o=(h=s<<5|s>>>27)+(e&i|~e&r)+o+1518500249+H[t]<<0)<<5|o>>>27)+(s&(e=e<<30|e>>>2)|~s&i)+r+1518500249+H[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|~o&e)+i+1518500249+H[t+2]<<0)<<5|i>>>27)+(r&(o=o<<30|o>>>2)|~r&s)+e+1518500249+H[t+3]<<0)<<5|e>>>27)+(i&(r=r<<30|r>>>2)|~i&o)+s+1518500249+H[t+4]<<0,i=i<<30|i>>>2;for(;t<40;t+=5)s=(h=(e=(h=(i=(h=(r=(h=(o=(h=s<<5|s>>>27)+(e^i^r)+o+1859775393+H[t]<<0)<<5|o>>>27)+(s^(e=e<<30|e>>>2)^i)+r+1859775393+H[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^e)+i+1859775393+H[t+2]<<0)<<5|i>>>27)+(r^(o=o<<30|o>>>2)^s)+e+1859775393+H[t+3]<<0)<<5|e>>>27)+(i^(r=r<<30|r>>>2)^o)+s+1859775393+H[t+4]<<0,i=i<<30|i>>>2;for(;t<60;t+=5)s=(h=(e=(h=(i=(h=(r=(h=(o=(h=s<<5|s>>>27)+(e&i|e&r|i&r)+o-1894007588+H[t]<<0)<<5|o>>>27)+(s&(e=e<<30|e>>>2)|s&i|e&i)+r-1894007588+H[t+1]<<0)<<5|r>>>27)+(o&(s=s<<30|s>>>2)|o&e|s&e)+i-1894007588+H[t+2]<<0)<<5|i>>>27)+(r&(o=o<<30|o>>>2)|r&s|o&s)+e-1894007588+H[t+3]<<0)<<5|e>>>27)+(i&(r=r<<30|r>>>2)|i&o|r&o)+s-1894007588+H[t+4]<<0,i=i<<30|i>>>2;for(;t<80;t+=5)s=(h=(e=(h=(i=(h=(r=(h=(o=(h=s<<5|s>>>27)+(e^i^r)+o-899497514+H[t]<<0)<<5|o>>>27)+(s^(e=e<<30|e>>>2)^i)+r-899497514+H[t+1]<<0)<<5|r>>>27)+(o^(s=s<<30|s>>>2)^e)+i-899497514+H[t+2]<<0)<<5|i>>>27)+(r^(o=o<<30|o>>>2)^s)+e-899497514+H[t+3]<<0)<<5|e>>>27)+(i^(r=r<<30|r>>>2)^o)+s-899497514+H[t+4]<<0,i=i<<30|i>>>2;this.h0=this.h0+s<<0,this.h1=this.h1+e<<0,this.h2=this.h2+i<<0,this.h3=this.h3+r<<0,this.h4=this.h4+o<<0},Sha1.prototype.hex=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,e=this.h3,i=this.h4;return HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[h>>28&15]+HEX_CHARS[h>>24&15]+HEX_CHARS[h>>20&15]+HEX_CHARS[h>>16&15]+HEX_CHARS[h>>12&15]+HEX_CHARS[h>>8&15]+HEX_CHARS[h>>4&15]+HEX_CHARS[15&h]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[i>>28&15]+HEX_CHARS[i>>24&15]+HEX_CHARS[i>>20&15]+HEX_CHARS[i>>16&15]+HEX_CHARS[i>>12&15]+HEX_CHARS[i>>8&15]+HEX_CHARS[i>>4&15]+HEX_CHARS[15&i]},Sha1.prototype.toString=Sha1.prototype.hex,Sha1.prototype.digest=function(){this.finalize();var t=this.h0,h=this.h1,s=this.h2,e=this.h3,i=this.h4;return[t>>24&255,t>>16&255,t>>8&255,255&t,h>>24&255,h>>16&255,h>>8&255,255&h,s>>24&255,s>>16&255,s>>8&255,255&s,e>>24&255,e>>16&255,e>>8&255,255&e,i>>24&255,i>>16&255,i>>8&255,255&i]},Sha1.prototype.array=Sha1.prototype.digest,Sha1.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(20),h=new DataView(t);return h.setUint32(0,this.h0),h.setUint32(4,this.h1),h.setUint32(8,this.h2),h.setUint32(12,this.h3),h.setUint32(16,this.h4),t};var exports=createMethod();COMMON_JS?module.exports=exports:(root.sha1=exports,AMD&&define(function(){return exports}))}();/*s*/

const generateQuiz = () => {/*s*/
  const questions = [[
    'Is JavaScript fun?',
    [
      ['Yes!', 'f'],
      ['From time to time', 'e'],
      ['Not really', '2'],
      ['Not at all', 'A'],
      ['Don\'t know JavaScript', 'R'],
      ['Next question', '8']
    ]
  ], [
    'How many kinds of string literals are there in JS?',
    [
      ['0', 'g'],
      ['1', '8'],
      ['2', 'V'],
      ['3', 's'],
      ['4', 'J'],
      ['∞ - you can create custom string literals', 'p']
    ]
  ], [
    'How to center an element vertically using CSS?',
    [
      ['Use vertical-align', 'B'],
      ['Use flex', 'o'],
      ['Use grid', 'C'],
      ['Use position + top + transform', '7'],
      ['Use line-height', '3'],
      ['No one knows', 'p']
    ]
  ], [
    'How can you shut down the computer from browser?',
    [
      ['Call the corresponding function in window', 'i'],
      ['Request permission using window.navigator', '3'],
      ['Only possible in newest Chrome using the Chrome API', 'C'],
      ['Use a library called "js-shutdown"', 'V'],
      ['It\'s not possible yet, but there is a proposal', 'x'],
      ['Are you crazy? Shut down the computer from JS?', 'U']
    ]
  ], [
    'How many bits of data does each base64 digit represent?',
    [
      ['2', 'N'],
      ['4', 'o'],
      ['6', '6'],
      ['8', 'S'],
      ['64', 'r'],
      ['There is no such thing as base64', 'q']
    ]
  ], [
    'How to make an object callable in JS?',
    [
      ['Call Function(object)', 'S'],
      ['Add "call" method', '0'],
      ['Add Symbol.call method', '5'],
      ['Use Proxy with "apply" handler', 'L'],
      ['All objects are callable in JS', 'g'],
      ['It\'s not possible', 'b']
    ]
  ], [
    'What is the answer to life, the universe and everything?',
    [
      ['0b101100', 't'],
      ['0o50', 'F'],
      ['0x2e', '6'],
      ['NDI=', '5'],
      ['-~42', 'G'],
      ['102 & 166', '1']
    ]
  ], [
    'What is the output of the following code: for (let i = 0; i < 5; i++) setTimeout(() => console.log(i), 0)? (no peeking!)',
    [
      ['0 1 2 3 4', 'n'],
      ['0 0 0 0 0', '9'],
      ['5 5 5 5 5', 'r'],
      ['Random order of 0 1 2 3 4 because setTimeout calls do not get sorted', 'F'],
      ['An error because the delay parameter of setTimeout must be positive', 'G'],
      ['Syntax error - the curly braces are missing', 'U']
    ]
  ], [
    'How many operators always return a boolean?',
    [
      ['10', 'd'],
      ['11', 'm'],
      ['12', 'P'],
      ['13', '2'],
      ['14', 'Y'],
      ['15', 'L']
    ]
  ], [
    'Did you enjoy the quiz?',
    [
      ['Yes, want more of these!', '9'],
      ['So-so, could have been better', '6'],
      ['No, too easy', 'D'],
      ['No, too hard', 'z'],
      ['No, don\'t see how this is related to the game', 'L'],
      ['Didn\'t take the quiz, bruteforced the whole thing', 'l']
    ]
  ]];
  const create = (type) => document.createElement(type);
  const createBtn = (text, onClick) => {
    const btn = create('button');

    btn.textContent = text;
    btn.addEventListener('click', onClick);

    return btn;
  };
  const append = (elem, container = document.body) => container.appendChild(elem);
  const startQuiz = () => {
    const container = create('main');
    const question = create('h3');
    const buttonsContainer = create('section');
    const buttons = [...Array(6)].map((_, index) => {
      const btn = createBtn('', () => answer(index));

      append(btn, buttonsContainer);

      return btn;
    });
    let questionIndex = 0;
    let password = '';
    const answer = (index) => {
      password += questions[questionIndex++][1][index][1];

      if (questionIndex === questions.length) {
        container.remove();

        const passwordInfo = create('p');
        const startAgainBtn = createBtn('Start again', () => {
          passwordInfo.remove();
          startAgainBtn.remove();

          startQuiz();
        });

        passwordInfo.textContent = `Congratulations, you've finished the quiz. Your password is: ${JSON.stringify(password)}. Feel free to paste it in the input and see if you've passed the quiz successfully :)`;

        append(passwordInfo);
        append(startAgainBtn);
      } else {
        showNextQuestion();
      }
    };
    const showNextQuestion = () => {
      const questionInfo = questions[questionIndex];

      question.textContent = `#${questionIndex + 1}: ${questionInfo[0]}`;

      buttons.forEach((btn, index) => {
        const btnInfo = questionInfo[1][index];

        btn.textContent = `${btnInfo[0]} (${JSON.stringify(btnInfo[1])})`;
      });
    };

    append(container);
    append(question, container);
    append(buttonsContainer, container);

    showNextQuestion();
  };
  const startBtn = createBtn('Start quiz', () => {
    quizInfo.remove();
    startBtn.remove();

    startQuiz();
  });
  const quizInfo = create('p');
  const styles = create('style');

  quizInfo.textContent = `You will be given ${questions.length} questions. Each answer will give you a character for the password. Finish all ${questions.length} questions and the password will be generated automatically. Good luck!`;
  styles.textContent = `
    * {
      text-align: center;
    }

    body, main {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }

    section {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-gap: 10px;
    }
  `;

  append(styles);
  append(quizInfo);
  append(startBtn);
  /*s*/};
const sha1 = window.sha1;
const passwordHash = '0a1677bbc23f84efd42f23b77448855cbb8b4bd5';

generateQuiz();

function quiz(password) {
  return sha1(password) === passwordHash;
}
