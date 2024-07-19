<?php 

/* 
  Plugin Name: Tabs WP Plugin
  Description: This plugin allows users to create multiple tabs, each tab has content area. Additionally, users can customize the text color and background color for each tab.
  Version: 1.0
  Author: Mostafa Abdelbari
  Author URI: https://www.linkedin.com/in/mostafa-abdelbari/
*/

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

function create_tabs_block() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'create_tabs_block' );
