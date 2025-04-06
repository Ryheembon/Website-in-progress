# Project Rules & Guidelines

## Table of Contents
- [Coding Standards](#coding-standards)
  - [HTML](#html)
  - [CSS](#css)
  - [JavaScript](#javascript)
- [File Organization](#file-organization)
- [Best Practices](#best-practices)
- [Design Guidelines](#design-guidelines)
- [Accessibility](#accessibility)
- [Performance](#performance)
- [Version Control](#version-control)
- [Code Review Process](#code-review-process)

---

## Coding Standards

### HTML
- Use semantic HTML5 tags whenever possible (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Always include proper metadata in the `<head>` section (charset, viewport, description)
- Include alt attributes for all images for accessibility
- Validate HTML using [W3C validator](https://validator.w3.org/) periodically
- Keep indentation consistent (2 spaces recommended)
- Ensure proper document structure with DOCTYPE declaration

### CSS
- Use consistent naming conventions (kebab-case preferred: `top-container`, `profile-image`)
- Organize CSS by components/sections with clear comments
- Minimize use of `!important` declarations
- Use responsive design practices (media queries, flexible units like rem, em, %)
- Use CSS variables for colors and repeated values
- Keep selectors simple and avoid deep nesting (max 3 levels)
- Follow the mobile-first approach in media queries

### JavaScript
- Use ES6+ features when possible (arrow functions, template literals, destructuring)
- Keep functions small and focused (single responsibility principle)
- Add comments for complex logic and document function purposes
- Use consistent naming (camelCase for variables and functions)
- Avoid global variables when possible
- Implement error handling where appropriate
- Use modern event listeners instead of inline JavaScript

---

## File Organization
- Keep image files in an `images` or `assets` folder
- Separate CSS into component files if the project grows larger
- Use descriptive file names that reflect content purpose
- Maintain a logical folder structure as the project scales
- Keep third-party libraries separate from custom code

---

## Best Practices
- Test on multiple browsers (Chrome, Firefox, Safari, Edge) and devices
- Optimize images before uploading (compress when possible)
- Commit changes frequently with clear messages
- Back up your work regularly using version control
- Test all links and functionality before publishing
- Follow progressive enhancement principles
- Implement proper error handling

---

## Design Guidelines
- Maintain consistent color scheme as defined in the CSS
- Ensure text is readable (minimum contrast ratio of 4.5:1 for normal text)
- Maintain consistent spacing throughout the site
- Design with mobile-first approach
- Use a typography hierarchy that enhances readability
- Ensure UI elements are consistent in style and behavior
- Allow sufficient whitespace between elements

---

## Accessibility
- Ensure proper color contrast (WCAG AA standard minimum)
- Use proper heading hierarchy (h1-h6)
- Make sure the site is keyboard navigable
- Test with screen readers periodically
- Include appropriate ARIA attributes where necessary
- Ensure form elements have associated labels
- Provide text alternatives for non-text content

---

## Performance
- Minimize HTTP requests
- Optimize and compress images (use WebP format where supported)
- Minify CSS and JavaScript in production
- Use lazy loading for images when appropriate
- Implement efficient caching strategies
- Reduce render-blocking resources
- Consider using CDN for static assets

---

## Version Control
- Make small, focused commits
- Write descriptive commit messages following conventional commits format
- Use branches for new features
- Review changes before pushing to production
- Use pull/merge requests for significant changes
- Tag releases with version numbers
- Don't commit sensitive information or large binary files

---

## Code Review Process
- All code changes should be reviewed before merging to main
- Follow a checklist for code reviews (functionality, style, performance)
- Provide constructive feedback
- Test changes in a staging environment before production
- Document major architectural decisions

---

> **Note:** These rules are guidelines to help maintain quality and consistency. They should evolve as the project grows and your skills develop. Prioritize user experience and code maintainability in all decisions. 