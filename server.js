var express = require('express');
var multer = require('multer');
var ext = require('file-extension');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, +Date.now() + '.' + ext(file.originalname))
  }
})
 
var upload = multer({ storage: storage }).single('picture');

var app = express();

//Genera el motor de pug para visualizar el html mas rapidamente
app.set('view engine', 'pug');

//Permite generar los archivos staticos para el usurio
app.use(express.static('public'));

app.get('/', function (req, res){
   res.render('index', { title: 'Platzigram'});
})

app.get('/:username', function (req, res, next) {

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

   res.send(pictures);
});

app.post('/api/pictures', function (req, res) {
   upload(req, res, function (err) {
      if (err) {
         return res.send(500, "Error uploading file");
      }
      res.send('File uploaded');
   })
})

app.get('/api/user/:username', function (req, res) {
  const user = {
    username: 'paezjm86',
    avatar: 'https://pbs.twimg.com/profile_images/583707183180685313/z-K-gc3h.jpg',
    pictures: [
      {
        id: 1,
        src: 'https://carlosazaustre.es/blog/content/images/2015/02/B9wLPUEIUAAnC-1.jpg',
        likes: 3
      },
      {
        id: 2,
        src: 'http://www.centrodeinnovacionbbva.com/sites/default/files/freddy_and_christian.jpg',
        likes: 10
      },
      {
        id: 3,
        src: 'https://filisantillan.com/content/images/2015/09/2015-05-02-07-39-02-compressor.jpg',
        likes: 23
      },
      {
        id: 4,
        src: 'http://mountain.partners/wp-content/uploads/news/2016-01-11-platzi-founder-590px.jpg',
        likes: 0
      },
      {
        id: 5,
        src: 'https://pbs.twimg.com/media/CYd31XTWEAAiV4O.png',
        likes: 1
      },
      {
        id: 6,
        src: 'http://pulsosocial.com/wp-content/uploads/2016/01/freddier-cvander-studio-e1452623660723.jpg',
        likes: 99
      }
    ]
  }

  res.send(user);
})

app.get('/:username', function (req, res) {
  res.render('index', { title: `Platzigram - ${req.params.username}` })
})

app.listen(3000, function (err) {
   if (err) return console.log('Hubo un error'), process.exit(1);

   console.log('Platzigram escuchando en el puerto 3000');
})