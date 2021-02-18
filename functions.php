<?php
/**
 * Starting Line functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Starting_Line
 */

// This theme requires WordPress 5.3 or later.
if ( version_compare( $GLOBALS['wp_version'], '5.3', '<' ) ) {
  require get_template_directory() . '/inc/back-compat.php';
}

if ( ! function_exists( 'starting_line_setup' ) ) :
  /**
   * Sets up theme defaults and registers support for various WordPress features.
   *
   * Note that this function is hooked into the after_setup_theme hook, which
   * runs before the init hook. The init hook is too late for some features, such
   * as indicating support for post thumbnails.
   */
  function starting_line_setup() {
    /*
    * Make theme available for translation.
    * Translations can be filed in the /languages/ directory.
    * If you're building a theme based on Starting Line, use a find and replace
    * to change 'starting-line' to the name of your theme in all the template files.
    */
    load_theme_textdomain( 'starting-line', get_template_directory() . '/languages' );

    // Add default posts and comments RSS feed links to head.
    add_theme_support( 'automatic-feed-links' );

    /*
    * Let WordPress manage the document title.
    * By adding theme support, we declare that this theme does not use a
    * hard-coded <title> tag in the document head, and expect WordPress to
    * provide it for us.
    */
    add_theme_support( 'title-tag' );

    /*
    * Enable support for Post Thumbnails on posts and pages.
    *
    * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
    */
    add_theme_support( 'post-thumbnails' );
    set_post_thumbnail_size( 1568, 9999 );

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(
      array(
        'primary' => esc_html__( 'Primary', 'starting-line' ),
        'social'  => esc_html__( 'Social Links', 'starting-line' ),
      )
    );

    /*
    * Switch default core markup for search form, comment form, and comments
    * to output valid HTML5.
    */
    add_theme_support(
      'html5',
      array(
        'search-form',
        'comment-form',
        'comment-list',
        'gallery',
        'caption',
        'style',
        'script',
      )
    );

    // Set up the WordPress core custom background feature.
    add_theme_support(
      'custom-background',
      apply_filters(
        'starting_line_custom_background_args',
        array(
          'default-color' => 'ffffff',
          'default-image' => '',
        )
      )
    );

    // Add theme support for selective refresh for widgets.
    add_theme_support( 'customize-selective-refresh-widgets' );

    /**
     * Add support for core custom logo.
     *
     * @link https://codex.wordpress.org/Theme_Logo
     */
    add_theme_support(
      'custom-logo',
      array(
        'height'      => 250,
        'width'       => 250,
        'flex-width'  => true,
        'flex-height' => true,
      )
    );

    // Define and register starter content to showcase the theme on new sites.
    $starter_content = array(
      // Specify the core-defined pages to create and add custom thumbnails to some of them.
      'posts'       => array(
        'home',
        'about'   => array(
          'thumbnail'    => '{{image-sandwich}}',
          'post_content' => file_get_contents( get_template_directory_uri() . '/inc/content/about.html' ),
        ),
        'contact' => array(
          'thumbnail' => '{{image-espresso}}',
        ),
        'blog'    => array(
          'thumbnail' => '{{image-coffee}}',
        ),
      ),

      // Create the custom image attachments used as post thumbnails for pages.
      'attachments' => array(
        'image-mountains' => array(
          'post_title' => _x( 'Mountains', 'Theme starter content', 'starting-line' ),
          'file'       => 'assets/img/mountains.jpg', // URL relative to the template directory.
        ),
        'image-espresso'  => array(
          'post_title' => _x( 'Espresso', 'Theme starter content', 'starting-line' ),
          'file'       => 'assets/img/espresso.jpg', // URL relative to the template directory.
        ),
        'image-sandwich'  => array(
          'post_title' => _x( 'Sandwich', 'Theme starter content', 'starting-line' ),
          'file'       => 'assets/img/sandwich.jpg',
        ),
        'image-coffee'    => array(
          'post_title' => _x( 'Coffee', 'Theme starter content', 'starting-line' ),
          'file'       => 'assets/img/coffee.jpg',
        ),
      ),

      // Default to a static front page and assign the front and posts pages.
      'options'     => array(
        'show_on_front'  => 'page',
        'page_on_front'  => '{{home}}',
        'page_for_posts' => '{{blog}}',
      ),

      // Set up nav menus for each of the two areas registered in the theme.
      'nav_menus'   => array(
        // Assign a menu to the "primary" location.
        'primary' => array(
          'name'  => __( 'Primary Menu', 'starting-line' ),
          'items' => array(
            'link_home',
            // Note that the core "home" page is actually a link in case a static front page is not used.
            'page_about',
            'page_blog',
            'page_contact',
          ),
        ),

        // Assign a menu to the "social" location.
        'social'  => array(
          'name'  => __( 'Social Links Menu', 'starting-line' ),
          'items' => array(
            'link_facebook',
            'link_twitter',
            'link_instagram',
            'link_linkedin',
            'link_youtube',
            'link_email',
          ),
        ),
      ),
    );

    /**
     * Filters Luci array of starter content.
     *
     * @param array $starter_content Array of starter content.
     */
    $starter_content = apply_filters( 'starting_line_starter_content', $starter_content );

    add_theme_support( 'starter-content', $starter_content );
  }
endif;

add_action( 'after_setup_theme', 'starting_line_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function starting_line_content_width() {
  $GLOBALS['content_width'] = apply_filters( 'starting_line_content_width', 640 );
}

add_action( 'after_setup_theme', 'starting_line_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function starting_line_widgets_init() {
  register_sidebar(
    array(
      'name'          => esc_html__( 'Sidebar', 'starting-line' ),
      'id'            => 'sidebar-1',
      'description'   => esc_html__( 'Add widgets here.', 'starting-line' ),
      'before_widget' => '<section id="%1$s" class="widget %2$s">',
      'after_widget'  => '</section>',
      'before_title'  => '<h2 class="widget-title">',
      'after_title'   => '</h2>',
    )
  );
}

add_action( 'widgets_init', 'starting_line_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function starting_line_scripts() {

  wp_enqueue_style( 'starting-line-font-awesome', get_theme_file_uri( 'assets/css/fontawesome.css' ), array(), wp_get_theme()->get( 'Version' ) );
  wp_style_add_data( 'starting-line-font-awesome', 'rtl', 'replace' );

  wp_enqueue_style( 'starting-line-style', get_stylesheet_uri(), array(), wp_get_theme()->get( 'Version' ) );
  wp_style_add_data( 'starting-line-style', 'rtl', 'replace' );

  wp_enqueue_script( 'starting-line-what-input', get_template_directory_uri() . '/assets/js/what-input.js', array(), wp_get_theme()->get( 'Version' ), true );
  wp_enqueue_script( 'starting-line-foundation', get_template_directory_uri() . '/assets/js/foundation.js', array(), wp_get_theme()->get( 'Version' ), true );
  wp_enqueue_script( 'starting-line-scripts', get_template_directory_uri() . '/assets/js/scripts.js', array( 'jquery' ), wp_get_theme()->get( 'Version' ), true );

  if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
    wp_enqueue_script( 'comment-reply' );
  }
}

add_action( 'wp_enqueue_scripts', 'starting_line_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Custom menu walker.
 */
require get_template_directory() . '/inc/class-dropdown-walker.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
  require get_template_directory() . '/inc/jetpack.php';
}

