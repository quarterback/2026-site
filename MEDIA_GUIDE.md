# Media Embed Guide

This guide shows you how to add different types of media to your portfolio.

## Homepage Media Section

Edit the `media` array in `src/pages/index.astro` to add talks, podcasts, articles, and other media.

### Podcast Episode (Spotify)

```javascript
{
  title: "Your Episode Title",
  source: "Podcast Name",
  mediaType: "podcast",
  embedUrl: "https://open.spotify.com/episode/YOUR_EPISODE_ID",
  date: "2024",
}
```

To get the Spotify embed URL:
1. Go to your episode on Spotify
2. Click Share → Copy Episode Link
3. Use that URL as `embedUrl`

### Conference Talk (YouTube)

```javascript
{
  title: "Your Talk Title",
  source: "Conference Name",
  mediaType: "talk",
  embedUrl: "https://youtube.com/watch?v=YOUR_VIDEO_ID",
  date: "2024",
}
```

### Vimeo Video

```javascript
{
  title: "Video Title",
  source: "Event Name",
  mediaType: "video",
  embedUrl: "https://vimeo.com/VIDEO_ID",
  date: "2024",
}
```

### Article/Written Feature

```javascript
{
  title: "Article Title",
  source: "Publication Name",
  mediaType: "article",
  url: "https://publication.com/your-article",
  date: "2024",
}
```

### Custom Embed Code

If you have custom embed code from a platform:

```javascript
{
  title: "Custom Media",
  source: "Platform Name",
  mediaType: "video", // or "podcast"
  embedCode: `<iframe src="..." ...></iframe>`,
  date: "2024",
}
```

## Case Study Media

In your case study markdown files (e.g., `src/content/work/your-project.md`), add media in the frontmatter:

```yaml
---
title: "Your Project"
summary: "Project description"
systemType: "System type"

media:
  - type: video
    url: https://youtube.com/watch?v=VIDEO_ID
    caption: "Conference talk about this project"

  - type: podcast
    url: https://open.spotify.com/episode/EPISODE_ID
    title: "Podcast discussion"
    caption: "Deep dive into the approach"

  - type: image
    url: /images/workshop-photo.jpg
    caption: "Workshop session with stakeholders"

  - type: article
    url: https://publication.com/article
    title: "Featured in Publication Name"

artifacts:
  - title: "Workshop Canvas"
    description: "Framework we used for mapping"
    image: /artifacts/canvas.png
    link: /files/canvas-template.pdf

  - title: "Process Diagram"
    description: "Visual of the decision flow"
    image: /artifacts/diagram.png
---
```

## Supported Platforms

### Auto-detected Embeds
- **YouTube**: Any youtube.com or youtu.be URL
- **Vimeo**: Any vimeo.com URL
- **Spotify**: Podcast episodes and shows

### Direct URLs
- **Images**: .jpg, .png, .gif, .webp
- **Audio**: .mp3, .wav files
- **Video**: .mp4, .webm files

### Custom Embeds
Use the `embedCode` field for platforms not auto-detected.

## Tips

1. **Test embeds**: Preview URLs work in the actual platforms before adding
2. **Dates**: Optional but recommended for chronology
3. **Captions**: Add context for case study media
4. **File hosting**: For images/artifacts, use `/public` folder or external hosting
5. **Privacy**: Make sure you have permission to embed external content
