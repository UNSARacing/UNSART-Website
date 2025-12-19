// Utility to load markdown files
// Import all markdown files dynamically from the posts directory
const modules = import.meta.glob('../posts/*.md', { query: '?raw', eager: true });

// Map the modules to a cleaner object keyed by filename (slug)
const markdownFiles = Object.keys(modules).reduce((acc, path) => {
  // Extract filename from path (e.g., "../posts/my-post.md" -> "my-post")
  const slug = path.split('/').pop().replace('.md', '');
  acc[slug] = modules[path].default || modules[path];
  return acc;
}, {});

export const getMarkdownContent = (slug) => {
  return markdownFiles[slug] || null;
};

