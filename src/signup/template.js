var yo = require('yo-yo');

module.exports = yo`<div class="container">
         <div class="row">
            <div class="col s10 pus-s1">
               <div class="row">
                  <div class="col m5 hide-on-small-only">
                     <img class="iphone" src="iphone.png">
                  </div>
                  <div class="col s12 m7">
                     <div class="row">
                        <div class="signup-box">
                           <h1 class="platzigram">Platzigram</h1>
                           <form class="signup-form">
                              <h2>Registrate para ver fotos de tus amigos en Platzi</h2>
                              <div class="section">
                                 <a class="btn btn-fb hide-on-small-only">Iniciar sesion con Facebook</a>
                                 <a class="btn btn-fb hide-on-med-and-up">Iniciar secion</a>
                              </div>
                              <div class="divider"></div>
                              <div class="section">
                                 <input type="email" name="email" placeholder="Correo electronico"/>
                                 <input type="text" name="name" placeholder="Nombre completo"/>
                                 <input type="text" name="username" placeholder="Nombre de usuario"/>
                                 <input type="password" name="password" placeholder="Contraseña"/>
                                 <button class="btn waves-effect wabes-light btn-signup" type="submit">Registrate</button>
                              </div>
                           </form>
                        </div>
                     </div>
                     <div class="row">
                        <div class>
                           <div class="login-box">
                              ¿Tienes una cuenta? <a href="signin">Entrar</a>
                           </div>
                        </div>
                     </div>   
                  </div>
               </div>
            </div>
         </div>
      </div>`