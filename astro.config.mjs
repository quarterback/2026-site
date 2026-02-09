import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

// Custom remark plugin to handle ::image and ::image-pair directives
function remarkImageDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        if (node.name === 'image') {
          const data = node.data || (node.data = {});
          const attributes = node.attributes || {};

          data.hName = 'astro-image';
          data.hProperties = {
            src: attributes.src,
            layout: attributes.layout || 'inline',
            caption: attributes.caption,
          };
        }

        if (node.name === 'image-pair') {
          const data = node.data || (node.data = {});
          const attributes = node.attributes || {};

          data.hName = 'astro-image-pair';
          data.hProperties = {
            src1: attributes.src1,
            src2: attributes.src2,
            caption: attributes.caption,
          };
        }
      }
    });
  };
}

export default defineConfig({
  site: 'https://ronbronson.dev',
  integrations: [
    mdx({
      remarkPlugins: [remarkDirective, remarkImageDirectives],
    }),
  ],
});
