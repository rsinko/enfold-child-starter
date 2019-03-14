<?php

/*
* Add your own functions here. You can also copy some of the theme functions into this file.
* Wordpress will use those functions instead of the original functions then.
*/


wp_register_script( 'app-js', get_stylesheet_directory_uri().'/js/app.js', array( 'jquery' ), "1", false);
wp_enqueue_script( 'app-js' );


