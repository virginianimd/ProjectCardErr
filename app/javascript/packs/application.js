// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
//= require bootstrap-modal

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

import "bootstrap"
import '../stylesheets/application'
import '../stylesheets/table'
import '../stylesheets/index'

import Vue from 'vue'
import App from '../app.vue'

document.addEventListener('turbolinks:load',function() {
    var element = document.querySelector("#boards")
    if(element != undefined){
      const app = new Vue({
       el: element,
       data: {
         lists: JSON.parse(element.dataset.lists)
       },
   
       template: "<App :original_lists='lists' />",
       components: { App }
   
      })
    }
   });
   
$(document).ready(function(){
    
    $( "#contain" ).animate({
        'margin-left': 0
    }, 400 );

    $('#sidebarCollapse').on('click',function(){
        $('#sidebar').toggleClass('active');
        
        
    });
}); 
function showing() {
    alert('you click this board');
}


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
