'use strict';

const quotes = [
  {
    quote: '서두르지 말되 멈추지 말라',
    author: '-괴테-',
  },
  {
    quote: '생각하고 살지 않으면 사는 대로 생각하게 된다.',
    author: '-르네 데카르트-',
  },
  {
    quote: '과거에서 교훈을 얻을 수는 있어도, 과거 속에서 살 수는 없다.',
    author: '-린든 B. 존슨-',
  },
  {
    quote: '길을 아는 것과 그 길을 걷는 것은 분명히 다르다.',
    author: '-모피어스-',
  },
  {
    quote: '처음에는 우리가 습관을 만들지만, 그 다음에는 습관이 우리를 만든다.',
    author: '-존 드라이든-',
  },
  {
    quote: '낭비한 시간에 대한 후회는 더 큰 시간 낭비이다.',
    author: '-메이슨 쿨리-',
  },
];

const quote = document.querySelector('.quote p:first-child');
const author = document.querySelector('.quote p:last-child');
Math.floor(Math.random() * 10);

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
