    <nav class="black" role="navigation">
      <div class="nav-wrapper container">
        <a id="logo-container" href="/" class="brand-logo">
          <img src="/img/banner.png" alt="%($siteTitle%)" class="hide-on-med-and-down" />
          <img src="/img/logo.png" alt="%($siteTitle%)" class="hide-on-large-only" />
        </a>
        <ul class="right">
          <li><a class="dropdown-button gelato-text" href="/games" data-activates="games-dropdown" data-beloworigin="true" data-constrainwidth="false" data-hover="true">Games<i class="mdi-navigation-arrow-drop-down right"></i></a></li>
          <li><a href="/blog/" class="gelato-text">Blog</a></li>
          <li><a href="/contribute" class="gelato-text">Contribute</a></li>
        </ul>
        <ul id="games-dropdown" class="dropdown-content">
          <li><a href="/catachresis" class="black-text">Catachresis</a></li>
          <li><a href="/errorloggingco" class="black-text">Error Logging Co.</a></li>
          <li><a href="/slapmaster" class="black-text">Slap Master</a></li>
          <li><a href="/walkingsim" class="black-text">Walking Simulator 2016</a></li>
          <li><a href="/fami-kun" class="black-text">Asamade Fami-kun</a></li>
          <li><a href="/thisthemesucks" class="black-text">This Theme Sucks</a></li>
          <li><a href="/angstromsrampage" class="black-text">Ångst-RÖM's RAM Page</a></li>
          <li><a href="/tiyhsloaugs" class="black-text">TIYHSLOAUGS</a></li>
          <li><a href="/almostbejeweled" class="black-text">Almost Bejeweled</a></li>
          <li><a href="/explodingbob" class="black-text">Exploding Bob</a></li>
          <li><a href="/alberto" class="black-text">Mega Alberto Cousins</a></li>
        </ul>
      </div>
    </nav>

<div id="main-copy" %(`{if(! ~ $req_path / && ! ~ $req_path /newindex) echo 'class="container"'}%)>

% run_handlers $handlers_body_head

% run_handler $handler_body_main

% run_handlers $handlers_body_foot

</div>

<footer class="page-footer black" style="padding-top: 0">
  <div class="footer-copyright">
    <div class="container">
      <div class="left gelato-text">Powered by %(`{bullshit}%)</div>
      <div class="right gelato-text">
        <a href="https://git.gelatolabs.xyz/gelato/www" class="btn-flat waves-effect waves-gelato gelato-text" style="margin-right:0.5em;">source code</a>
        <a href="https://gelatolabs.xyz/tips" class="btn-flat waves-effect waves-gelato gelato-text" style="margin-right:0.5em;">tips</a>
        <a href="https://twitter.com/gelato_labs" class="gelato-text" style="margin-right:0.5em"><i class="mdi mdi-twitter"></i></a>
        <a href="https://facebook.com/gelatolabs" class="gelato-text" style="margin-right:0.5em"><i class="mdi mdi-facebook-box"></i></a>
        <a href="mailto:gelato@vfemail.net" class="gelato-text"><i class="mdi mdi-email"></i></a>
      </div>
    </div>
  </div>
</footer>

<script type="text/javascript" src="/_werc/pub/js/jquery-2.1.1.min.js"></script>
<script type="text/javascript" src="/_werc/pub/js/materialize.min.js"></script>

<script>
  $( document ).ready(function() {
    $(".button-collapse").sideNav();
    $('.parallax').parallax();
    $('.slider').slider({full_width: true, height: screen.width * 0.3125, interval: 8000});
    $('.slides').height($('.slides').height() + 40);
  });
</script>
