<?php
$sTitle = 'About the Artisans | ';
$sCurrentPage = 'aboutartisans';
$sDescription = "About the artsans responsible for making the Rebozo's.";
require_once(__DIR__ . '/components/header.php');
?>




<div class="about">
        <div class="backgroundLines"></div>
        <h1>Where do our rebozos come from?</h1>
<div class="first">
    
    <h3 >Our rebozos come from local indigenous communities in Mexico. </h3> 
    <p > The aim is to provide Mexican artisans with a fair way to export their products internationally.
        By doing so, we get in touch with the direct producers, get to know their family, home and years
        of experience and ensure that they get fairly compensated for their amazing creations. </p>
    </div>
     <div class="imgFrame">
            <img src="images/rebozo_many.jpg" alt="">
     </div>  
      <div class="aboutText">
         <p>Behind every rebozo that we sell there is a person, a pair of hands and a story to be told. 
        When we look at a rebozo, the procedures and techniques that were used are not usually observed,
         the cost of the materials, the time and energy invested, the maintenance of the entire workforce. </p>


         <p>There are many ways to weave a rebozo. The most common are pedal weaving (pedal loom)
              and waist weaving (waist loom). In a  pedal loom you can produce 21 rebozo in a week,
               while with a waist loom it takes a month to produce a rebozo.
                So there is a big difference in the work put into these two weaving methods. There are 17 steps to follow from the threads being stained to the ends being knotted. </p>
      
          <h3> When you buy products from Rebozology, you help all these communities to keep alive their
                traditions and to be able to support their families. </h3>
        </div>
        <video controls>
            <source src="images/video-1570523061.mp4" type="video/mp4">
          Your browser does not support the video tag.
          </video>
        <video  controls class="video-two">
            <source src="images/video-1570523231.mp4" type="video/mp4">
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