
<?php

?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"http://www.w3.org/TR/html4/strict.dtd">
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <meta name="Description" content=<?=$sDescription;?>>
    <link rel="apple-touch-icon" sizes="180x180" href="../apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="../favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="../favicon-16x16.png">
    <link rel="manifest" href="../site.webmanifest">
    <link rel="mask-icon" href="../safari-pinned-tab.svg" color="#5bbad5">
    <!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KJH4RV7');</script>
<!-- End Google Tag Manager -->
<!-- Global site tag (gtag.js) - Google Ads: 728124564 --> <script async src="https://www.googletagmanager.com/gtag/js?id=AW-728124564"></script> <script> window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'AW-728124564'); </script>
    <link rel="stylesheet" href="../style.css">
    <title><?= $sTitle; ?> REBOZOLOGY </title>
</head>
<body>
    <header>
            <a href="index.php" class="logo">
            <img src="../images/logo.svg" class="imgLogo" alt="Rebozology logo">    </a>
    <nav class="deskmenu">
        <a href="index.php" class="<?php if ($sCurrentPage == 'frontpage') echo 'active'; ?>" >Hjem</a>
        <a href="aboutartisans.php" class="<?php if ($sCurrentPage == 'aboutartisans') echo 'active'; ?>" >Håndværkerne</a>
        <a href="stories.php" class="<?php if ($sCurrentPage == 'stories') echo 'active'; ?>" >Historie</a>
        <a href="about.php" class="<?php if ($sCurrentPage == 'about') echo 'active'; ?>" >Grundlæggeren</a>
        <a href="https://www.rebozology.com/shop" >Butik</a>
        <a href="howto.php" class="<?php if ($sCurrentPage == 'howTo') echo 'active'; ?>" >Bruge Hvordan</a>
        <a href="contact.php" class="<?php if ($sCurrentPage == 'contact') echo 'active'; ?>" >Kontakt Os</a>
        <a href="../<?= $sCurrentPage !== "frontpage" || $sCurrentPage !== ''?   $sCurrentPage :   "index" ?>">English</a>
        </nav>
        <svg class="menuIcon" viewBox="0 0 100 100">
            <rect class="myrect" x="10" y="10" width="80" height="10" />
            <rect class="myrect" x="10" y="30" width="80" height="10" />
            <rect class="myrect" x="10" y="50" width="80" height="10" />
        </svg>
</header>

<nav class="menu hiddenMenu"> 
        <a href="index.php" class="<?php if ($sCurrentPage == 'frontpage') echo 'active'; ?>" >Hjem</a>
        <a href="aboutartisans.php" class="<?php if ($sCurrentPage == 'aboutartisans') echo 'active'; ?>" >Håndværkerne</a>
        <a href="stories.php" class="<?php if ($sCurrentPage == 'stories') echo 'active'; ?>" >Historie</a>
        <a href="about.php" class="<?php if ($sCurrentPage == 'about') echo 'active'; ?>" >Grundlæggeren</a>
        <a href="https://www.rebozology.com/shop">Butik</a>
        <a href="howto.php" class="<?php if ($sCurrentPage == 'howTo') echo 'active'; ?>" >Bruge Hvordan</a>
        <a href="contact.php" class="<?php if ($sCurrentPage == 'contact') echo 'active'; ?>" >Kontakt Os</a> 
        <a href="../<?= $sCurrentPage !== "frontpage" || $sCurrentPage !== ''?   $sCurrentPage :   "index" ?>">English</a>
</nav> 