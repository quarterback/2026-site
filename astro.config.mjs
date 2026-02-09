import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import remarkDirective from 'remark-directive';
import { visit } from 'unist-util-visit';
import { h } from 'hastscript';

// Custom remark plugin to handle all custom directives
function remarkCustomDirectives() {
  return (tree) => {
    visit(tree, (node) => {
      if (
        node.type === 'textDirective' ||
        node.type === 'leafDirective' ||
        node.type === 'containerDirective'
      ) {
        const data = node.data || (node.data = {});
        const attributes = node.attributes || {};

        // Image directives
        if (node.name === 'image') {
          data.hName = 'astro-image';
          data.hProperties = {
            src: attributes.src,
            layout: attributes.layout || 'inline',
            caption: attributes.caption,
            height: attributes.height,
          };
        }

        if (node.name === 'image-pair') {
          data.hName = 'astro-image-pair';
          data.hProperties = {
            src1: attributes.src1,
            src2: attributes.src2,
            caption: attributes.caption,
          };
        }

        if (node.name === 'image-before-after') {
          data.hName = 'astro-before-after';
          data.hProperties = {
            before: attributes.before,
            after: attributes.after,
            beforeLabel: attributes.beforeLabel,
            afterLabel: attributes.afterLabel,
            caption: attributes.caption,
          };
        }

        // Callout directive
        if (node.name === 'callout') {
          data.hName = 'astro-callout';
        }

        // Quote directive
        if (node.name === 'quote') {
          data.hName = 'astro-quote';
          data.hProperties = {
            attribution: attributes.attribution,
            image: attributes.image,
          };
        }

        // Insights directive
        if (node.name === 'insights') {
          data.hName = 'astro-insights';
          // Parse children as YAML-like structure
          const insights = [];
          if (node.children) {
            node.children.forEach(child => {
              if (child.type === 'listItem' || child.type === 'paragraph') {
                // Extract icon and text from markdown list items
                // This is a simplified parser - adjust as needed
                insights.push({
                  icon: child.data?.icon || '',
                  text: child.children?.[0]?.value || ''
                });
              }
            });
          }
          data.hProperties = { insights: JSON.stringify(insights) };
        }

        // Metrics directive
        if (node.name === 'metrics') {
          data.hName = 'astro-metrics';
          // Similar parsing for metrics
        }

        // Divider directive
        if (node.name === 'divider') {
          data.hName = 'astro-divider';
        }
      }
    });
  };
}

export default defineConfig({
  site: 'https://ronbronson.dev',
  integrations: [
    mdx({
      remarkPlugins: [remarkDirective, remarkCustomDirectives],
    }),
  ],
});
