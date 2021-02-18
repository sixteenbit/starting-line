<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Starting_Line
 */

?>
<!doctype html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="profile" href="https://gmpg.org/xfn/11">

  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<div id="page" class="site">
  <a class="skip-link screen-reader-text" href="#primary"><?php esc_html_e( 'Skip to content', 'starting-line' ); ?></a>

  <header id="masthead" class="site-header">
    <div class="container">
      <div class="site-branding">
        <?php
        the_custom_logo();
        if ( is_front_page() && is_home() ) :
          ?>
          <h1 class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                                    rel="home"><?php bloginfo( 'name' ); ?></a></h1>
        <?php
        else :
          ?>
          <p class="site-title"><a href="<?php echo esc_url( home_url( '/' ) ); ?>"
                                   rel="home"><?php bloginfo( 'name' ); ?></a></p>
        <?php
        endif;
        $starting_line_description = get_bloginfo( 'description', 'display' );
        if ( $starting_line_description || is_customize_preview() ) :
          ?>
          <p
            class="site-description"><?php echo $starting_line_description; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped
            ?></p>
        <?php endif; ?>
      </div><!-- .site-branding -->

      <?php if ( has_nav_menu( 'primary' ) ) : ?>
        <nav id="site-navigation" class="main-navigation">
          <?php
          wp_nav_menu(
            array(
              'container'      => false,
              'menu_id'        => 'primary',
              'menu_class'     => 'dropdown horizontal menu',
              'theme_location' => 'primary',
              'items_wrap'     => '<ul id="%1$s" class="%2$s" data-dropdown-menu>%3$s</ul>',
              'walker'         => new SL_Dropdown_Walker(),
              'fallback_cb'    => false,
            )
          );
          ?>
        </nav><!-- #site-navigation -->
      <?php endif; ?>

      <?php if ( has_nav_menu( 'social' ) ) : ?>
        <nav class="social-navigation show-for-medium" aria-label="<?php esc_html_e( 'Social Links Menu', 'starting-line' ); ?>">
          <?php
          wp_nav_menu(
            array(
              'container'      => false,
              'theme_location' => 'social',
              'menu_class'     => 'social-links-menu menu',
              'depth'          => 1,
              'link_before'    => '<span class="screen-reader-text">',
              'link_after'     => '</span>',
            )
          );
          ?>
        </nav><!-- .social-navigation -->
      <?php endif; ?>
    </div>
  </header><!-- #masthead -->

  <div class="container">
    <div class="inner-container">
