var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');

page('/', function (ctx, next){
   title('Platzigram');
   var main = document.getElementById('main-container');

   var pictures = [
      {
         user: {
            username: 'paezjm86',
            avatar: 'https://pbs.twimg.com/profile_images/583707183180685313/z-K-gc3h.jpg'
         },
         url: 'office.jpg',
         likes: 10,
         liked: false,
         createdAt: new Date()
      },
      {
         user: {
            username: 'paezjm86',
            avatar: 'https://pbs.twimg.com/profile_images/583707183180685313/z-K-gc3h.jpg'
         },
         url: 'office.jpg',
         likes: 2,
         liked: true,
         createdAt: new Date().setDate(new Date().getDate() - 10)
      }
   ];

   empty(main).appendChild(template(pictures));   
}) 

