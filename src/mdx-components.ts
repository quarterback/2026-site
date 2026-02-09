import CaseStudyImage from './components/CaseStudyImage.astro';
import CaseStudyImagePair from './components/CaseStudyImagePair.astro';
import BeforeAfter from './components/BeforeAfter.astro';
import Callout from './components/Callout.astro';
import QuoteCard from './components/QuoteCard.astro';
import InsightsList from './components/InsightsList.astro';
import MetricsRow from './components/MetricsRow.astro';
import SectionDivider from './components/SectionDivider.astro';

export const components = {
  'astro-image': CaseStudyImage,
  'astro-image-pair': CaseStudyImagePair,
  'astro-before-after': BeforeAfter,
  'astro-callout': Callout,
  'astro-quote': QuoteCard,
  'astro-insights': InsightsList,
  'astro-metrics': MetricsRow,
  'astro-divider': SectionDivider,
};
