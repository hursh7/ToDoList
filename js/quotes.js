'use strict';

const quotes = [
    {
        quote: 'Lorem ipsum dolor1',
        author: 'Tony'
    },
    {
        quote: 'Lorem ipsum dolor2',
        author: 'Eden Hazard'
    },
    {
        quote: 'Lorem ipsum dolor3',
        author: 'Lionel Messi'
    },
    {
        quote: 'Lorem ipsum dolor4',
        author: 'Alexis Sanchez'
    },
    {
        quote: 'Lorem ipsum dolor5',
        author: 'Theo'
    },
]

const quote = document.querySelector('.quote span:first-child');
const author = document.querySelector('.quote span:last-child');
Math.floor(Math.random() * 10)

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
