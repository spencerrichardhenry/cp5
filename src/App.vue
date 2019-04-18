<template>
<div id="app">
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <router-link to="/" class="navbar-brand" href="/index.html">Savvy</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <router-link to="/" class="nav-link" href="/index.html">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item active">
          <router-link to="/Advisors" class="nav-link" href="/Pages/advisors.html">Advisors</router-link>
        </li>
      </ul>
    </div>
  </nav>


<div class="content">
  <router-view />
</div>

  <footer>
    <div class="container">
      <div class="footerlink">
        <a href="https://github.com/spencerrichardhenry/cp5"> GitHub Repository</a>
      </div>
      <p>Data provided for free by IEX. View IEXs Terms of Use.</p>
    </div>
  </footer>
</div>
</template>


<style>
.pure-menu {
  /* To limit the menu width to the content of the menu: */
  /* display: inline-block; */
  /* Or set the width explicitly: */
  text-align: left;
  background: #000;
}

.pure-menu-heading {
  color: #fff;
  font-size: 1.2em;
  padding: 20px 20px;
  background-color: #F2385A;
  margin-bottom: 10px;
}

.pure-menu-link {
  color: #fff;
  padding: 10px 20px;
  font-weight: 800;
}

.pure-menu-link:hover {
  background: #333;
}

.pure-menu-link.router-link-exact-active {
  background: #fff;
  color: #F2385A;
}

.content {
  margin: 50px 100px;
}

html {
  height: 100%;
  box-sizing: border-box;
}

body {
  height: 100%;
}

*,
*:before,
*:after {
  box-sizing: inherit;
  /* https://css-tricks.com/box-sizing/ */
}

.error {
  color: #F2385A;
}

.pure-button-primary {
  background-color: #36B1BF;
}

/* Modals */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 500px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h1 {
  margin-bottom: 30px;
  font-size: 1.5em;
}

.modal-body {
  margin: 0;
}

.modal-body input {
  margin-bottom: 20px;
  height: 30px;
}

.modal-footer {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}

.modal-default-button {
  float: right;
}

/*
  * The following styles are auto-applied to elements with
  * transition="modal" when their visibility is toggled
  * by Vue.js.
  *
  * You can easily play with the modal transition by editing
  * these styles.
  */
.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.bg-dark {
  background-color: #393E46 !important;
}

.col-lg {}

html {
  position: relative;
  min-height: 100%;
  box-sizing: border-box;
}

p {
  font-size: 1em;
  text-align: center;
}

h2 {
  text-align: center;
  margin-top: 4vw;
  margin-bottom: 4vw;
  font-size: 1.7em;
}

h3 {
  margin-top: 15%;
  margin-left: 10%;
  font-size: 1.3em;
  line-height: 5vw;
}

img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

table {
  border: 0;
}

th {
  width: 5%
}

.nav-item a {
  font-size: .7em;
  color: #FFF !important;
}

.nav-item :hover {
  color: #CF9100 !important;
}

.navbar-brand {
  font-size: 30px;
  color: #FFF !important;
}

body {
  font-family: sans-serif;
  font-size: 1.9vw;
  color: #393E46;
}

.container {
  max-width: 80%;
}

.picContainer {
  position: relative;
  text-align: center;
  color: #393E46;
}

.picContainer img {
  margin-top: 10%;
  margin-bottom: 10%;
  opacity: .6;
  filter: blur(3px) brightness(110%);
}

#app p {
  color: black;
}

#Welcome {
  left: 25%;
}

.advisorSearch div {
  margin-top: 5%;
  margin-bottom: 3%;
}

.advisorSearch {
  float: right;
}

.advisorSearch button {
  margin-left: 4px;
  margin-top: 5px;
  margin-bottom: 5px;
}

.centered {
  position: absolute;
  top: 40%;
  left: 3%;
  transform: translate(-2%, -50%);
  transform: scale();
  margin-left: 0%;
  margin-right: 0%;
  padding-left: 0;
  padding-right: 0;
  font-size: 1.7em;
  font-weight: bold;
}

a {
  font-size: 2em;
  color: black;
}

ul {
  padding-inline-start: 0px;
}

footer {
  margin-top: auto !important;
  background-color: #393E46;
  font-size: .8em;
  color: #FFF;
  padding-bottom: 0rem !important;
  padding-top: 0rem !important;
  width: 100%;
  bottom: 0;
  position: absolute;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.container a {
  font-size: .8em;
  text-decoration: none;
  color: #FFF;
}

.footerlink :hover {
  color: #CF9100 !important;
}

.container p {
  font-size: .8em;
  text-decoration: none;
  text-align: left;
}

#admin input {
  margin-right: 50px;
  margin-top: 20px;
}

#admin button {
  margin-top: 20px;
}

#admin p {
  font-size: .7em;
  text-align: left;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

.heading h2 {
  margin: 0px;
  margin-left: 8vw;
}

.add, .edit {
  display: flex;
}

.form .suggestions {
  width: 200px;
  border: 1px solid #ccc;
  display: none;
}

.form:hover .suggestions {
  display: inherit;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

.content {
  padding: 20px 100px 0px 100px;
}

section {
  display: flex;
  flex-direction: row-reverse;
  padding: 0px 30px;
}

aside {
  margin-right: 2%;
  flex: 1;
}

article {
  flex: 3;
}

#indexsug .suggestion {
  width: 160px;
}

#indexsug .suggestions {
  width: 160px;
}

.CompareList {
  margin-top: 0;
  margin-bottom: 0;
}

#OurMission {
  font-size: 2em;
  font-weight: bold;
}

.percent {
  font-size: .7em;
}

#stocks li {
  font-weight: bold;
  font-size: .9em;
  display: inline;
  padding-left: 3vw;
  align: center;
}

#refine {
  display: flex;
  max-width: 70%;
}

#refine .col-sm {
  max-width: 70%;
}

#refine input {
  width: 20px;
}

#table {
  margin: auto;
  align: center;
  display: table;
}

hr {
  margin-top: 0;
}
</style>
