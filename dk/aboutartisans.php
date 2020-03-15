<?php
$sTitle = 'About the Artisans | ';
$sCurrentPage = 'aboutartisans';
$sDescription = "About the artsans responsible for making the Rebozo's";
require_once(__DIR__ . '/components/header.php');
?>




<div class="about">
        <div class="backgroundLines"></div>
        <h1>Hvor kommer rebozoerne fra?</h1>
<div class="first">
    
    <h3>Vores rebozoer kommer fra lokale oprindelig samfund i Mexico.</h3> 
    <p>Målet er at give de mexicanske håndværkere mulighed for at eksportere deres
         produkter på en Fairtrade måde. Vi gør dette ved at være i direkte kontakt 
         med producenterne, ved at kende deres familier, hjem og årelange erfaring og 
         sikre at de får en god betaling for deres fantastiske rebozoer.</p>
    </div>
     <div class="imgFrame">
            <img src="../images/rebozo_many.jpg" alt="">
     </div>  
      <div class="aboutText">
         <p>Bag hver rebozo som vi sælger, er der en person, et par hænder og en historie der skal fortælles.
              Når man ser en rebozo skal man tænke på producenterne, teknikkerne der er blevet brugt,
               omkostningerne til materialer, tiden og den energi der er investeret og vedligeholdelsen 
               af hele arbejdsstyrken.</p>

        <p>Der er forskellige måder at væve en rebozo på. De mest almindelige er vævning med pedalvæv og vævning 
          med taljevæv. Med pedalvæv kan man producere 21 rebozoer på en uge, mens det med en taljevæv tager en måned 
          at producere en rebozo. Så der er et stor forskel i det arbejde der lægges i disse to vævemetoder. 
          Der er 17 trin der skal følges fra trådene er blevet farvede og til enderne bliver knyttede.</p>
      
  
          <h3> Når du køber produkter fra rebozology hjælper du alle disse samfund med at holde liv i
             deres traditioner og være i stand til at støtte deres familier.  </h3>
        </div>
        <video controls>
            <source src="../images/video-1570523061.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        <video  controls class="video-two">
            <source src="../images/video-1570523231.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
</div>
<div class="line"></div>

       
                <script>
               let videos = document.querySelectorAll("video");
                videos.forEach(vid=>{
                    vid.volume = 0.1;
                })
</script>
<?php
    require_once(__DIR__ . '/components/footer.php');
    ?>