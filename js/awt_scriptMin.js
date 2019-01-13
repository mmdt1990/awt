function myFunction(){var x=document.getElementById("myTopnav");if(x.className==="topnav"){x.className+=" responsive"}else{x.className="topnav"}}
function openCity(evt,cityName){var i,tabcontent,tablinks;tabcontent=document.getElementsByClassName("tabcontent");for(i=0;i<tabcontent.length;i++){tabcontent[i].style.display="none"}
tablinks=document.getElementsByClassName("tablinks");for(i=0;i<tablinks.length;i++){tablinks[i].className=tablinks[i].className.replace(" active","")}
document.getElementById(cityName).style.display="block";evt.currentTarget.className+=" active"}
document.addEventListener("DOMContentLoaded",()=>{let feed=new Instafeed({accessToken:'7485933198.1677ed0.e0d3a2b470ad430da9ddf276ab53c396',userId:'7485933198',get:'user',limit:6,mock:!0,success:(response)=>{console.log(response);appendImages(response.data)}});feed.run();let appendImages=(images)=>{for(var i=0;i<images.length;i++){let image=images[i];console.log(image);document.querySelector('#myInstagramFeed').innerHTML+=`
                <article><img src="${image.images.standard_resolution.url}"></article>
            `}}})