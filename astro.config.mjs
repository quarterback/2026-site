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
        const hast = h(node.name, attributes);

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
            beforeLabel: attributes.beforeLabel || 'Before',
            afterLabel: attributes.afterLabel || 'After',
            caption: attributes.caption,
          };
        }

        // Callout directive - container with children
        if (node.name === 'callout') {
          data.hName = 'astro-callout';
          data.hProperties = {};
        }

        // Quote directive - container with children
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
          // Parse insights from attributes
          let insights = [];
          if (attributes.insights) {
            try {
              insights = typeof attributes.insights === 'string'
                ? JSON.parse(attributes.insights)
                : attributes.insights;
            } catch (e) {
              console.error('Failed to parse insights:', e);
            }
          }
          data.hProperties = { insights: JSON.stringify(insights) };
        }

        // Metrics directive
        if (node.name === 'metrics') {
          data.hName = 'astro-metrics';
          // Parse metrics from attributes
          let metrics = [];
          if (attributes.metrics) {
            try {
              metrics = typeof attributes.metrics === 'string'
                ? JSON.parse(attributes.metrics)
                : attributes.metrics;
            } catch (e) {
              console.error('Failed to parse metrics:', e);
            }
          }
          data.hProperties = { metrics: JSON.stringify(metrics) };
        }

        // Divider directive
        if (node.name === 'divider') {
          data.hName = 'astro-divider';
          data.hProperties = {};
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
