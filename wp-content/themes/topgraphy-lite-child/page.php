<?php get_header(); ?>
  
  <?php get_template_part( "/templates/beforeloop", "page" ) ?> 
  <h1><a href="https://squareup.com/store/gradum-ante">Test test</a></h1>
    <?php if (have_posts()) : while (have_posts()) : the_post(); ?>

            <?php get_template_part( "/templates/content", "page" ) ?> 

        <?php endwhile; else: ?>

            <?php get_template_part( "/templates/content", "none" ) ?> 

    <?php endif; ?>

    <div class="clearfix"></div>

<?php get_template_part( "/templates/afterloop", "page" ) ?> 

<?php get_footer(); ?>