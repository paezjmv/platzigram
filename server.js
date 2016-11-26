var express = require('express');

var app = express();

//Genera el motor de pug para visualizar el html mas rapidamente
app.set('view engine', 'pug');

//Permite generar los archivos staticos para el usurio
app.use(express.static('public'));

app.get('/', function (req, res){
   res.render('index', { title: 'Platzigram'});
})

app.get('/signup', function (req, res){
   res.render('index', {title: 'Platzigram - Signup'});
})

app.get('/signin', function (req, res){
   res.render('index', {title: 'Platzigram - Signin'});
})

app.get('/api/pictures', function (req, res) {
   var pictures = [
      {
         user: {
            username: 'paezjm86',
            avatar: 'https://pbs.twimg.com/profile_images/583707183180685313/z-K-gc3h.jpg'
         },
         url: 'office.jpg',
         likes: 0,
         liked: false,
         createdAt: new Date().getTime()
      },
      {
         user: {
            username: 'paezjm86',
            avatar: 'https://pbs.twimg.com/profile_images/583707183180685313/z-K-gc3h.jpg'
         },
         url: 'office.jpg',
         likes: 1,
         liked: true,
         createdAt: new Date().setDate(new Date().getDate() - 10)
      }
   ];

   setTimeout(function(){
      res.send(pictures);
   }, 2000)
})

app.listen(3000, function (err) {
   if (err) return console.log('Hubo un error'), process.exit(1);

   console.log('Platzigram escuchando en el puerto 3000');
})