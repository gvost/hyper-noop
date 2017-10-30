'use strict';

module.exports.onWindow = browserWindow => browserWindow.setVibrancy("dark");

const foregroundColor = '#F4F2F2';
const backgroundColor = 'rgba(20, 27, 30, .65)';
const black = '#141B1E';
const red = '#FF7FEA';
const green = '#00BF94';
const yellow = '#FDED8D';
const blue = '#6A9FDE';
const magenta = '#D3A2FF';
const cyan = '#71FFDF';
const gray= '#3B484C';
const brightWhite = '#FFFFFF';
const brightBlack = '#000000';
const cursorColor = 'rgba(106, 159, 222, 0.5)';
const borderColor = 'rgba(20, 27, 30, 0)';

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    foregroundColor,
    borderColor,
    cursorColor,
    colors: {
      black: backgroundColor,
      red: red,
      green: green,
      yellow: yellow,
      blue: blue,
      magenta: magenta,
      cyan: cyan,
      white: foregroundColor,
      lightBlack: gray,
      lightRed: red,
      lightGreen: green,
      lightYellow: yellow,
      lightBlue: blue,
      lightMagenta: magenta,
      lightCyan: cyan,
      lightWhite: foregroundColor,
    },
    css: `
      ${config.css || ''}
      .tabs_nav .tabs_list .tab_text {
        color: ${foregroundColor};
      }
      .tabs_nav .tabs_title {
        color: ${foregroundColor};
      }
      .hyper_main {
        border: none !important;
      }
      .header_header {
        border: none !important;
        background-color: rgba(0, 0, 0, .25)!important;
        border-bottom: 1px solid rgb(20, 27, 30);
      }
      .tab_tab {
        border-right: 1px solid rgb(20, 27, 30);
      }
      .tab_textActive {
        color: #FDED8D;
      }
      .tab_textActive > .tab_textInner {
        text-decoration: underline;
        font-style: italic;
      }
    `
  });
};
