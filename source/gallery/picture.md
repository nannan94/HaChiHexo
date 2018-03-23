---
title: Gallery
---

{% script %}

         var setPicture = function(img,text){
                     var content = '';
                     var img = img;
                     var text = text;
                     content += '<div class="col-md-4 gallery">';
                     content += '<div class="hovereffect">';
                     content += '<a>';
                     content += '<img class="img-fluid portfoliogallery-img" src="/images/'+ img +'" alt="">';
                     content += '<div class="overlay galleryoverlay">';
                     content += ' <span class="overlay-text">' + text + '</span>';
                     content += ' </div>';
                     content += '</a>';
                     content += '</div>';
                     content += '</div>';
                     return content;
                 }  
               function render(obj,htmllist){
                   var row = document.querySelector(obj);
                   row.innerHTML = htmllist.join('');//appendChild()需要传入的是一个的对象,而content是字符串
               }
                 var html = []
                 html.push(setPicture("1.png","你觉得我是第一个？"),
                             setPicture("2.png","臭不要脸的"),
                             setPicture("3.png","我才不是第一个"),
                             setPicture("4.png","我在教你"),
                             setPicture("5.png","你看你傻了吧"),
                             setPicture("6.png","哈哈哈哈哈，you are NO1"),
                              setPicture("agency.jpg","vvv1")
                             );//添加图
                 render(".row",html);
              
{% endscript %}