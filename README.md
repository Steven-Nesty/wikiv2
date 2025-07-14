# WikiV2

**WikiV2** is a web application that serves as a functional clone and reimagining of the Wikipedia platform. It enables users to browse, search, and interact with encyclopedia-style content, closely mirroring the features and user experience of the original Wikipedia site.
https://wikipediav2.uk/
## Features

- **Wikipedia-like Interface**  
  The UI and navigation closely resemble the classic Wikipedia layout, including sidebar navigation, content organization, and familiar sections such as Contents, Current Events, Random Article, and more.

- **Dynamic Article Retrieval**  
  Uses the Wikipedia public API to fetch and display summaries, featured articles, images, and news. This includes logic to gracefully handle missing images or metadata.

- **Search Functionality**  
  Users can search for articles. The application fetches and displays article titles, summaries, images, and links to the full Wikipedia pages.

- **Featured Content**  
  Displays the Wikipedia "Today's Featured Article," "Featured Picture," and "In the News" sections, including images and credits, dynamically loaded from Wikipedia APIs.

- **Supporting Tools and Links**  
  Includes information and navigation for Wikipedia's sister projects (Wikibooks, Wikisource, Wiktionary, etc.), as well as user tools like "Download as PDF," "Printable version," "Recent changes," and "Upload file."

- **Responsive Design**  
  Built with Bootstrap for modern, responsive layouts.

- **Dark Mode Support**  
  Includes a dark mode toggle for user preference.

## Technology Stack

- **Frontend:** HTML, CSS, JavaScript (jQuery, Bootstrap)
- **APIs:** Wikipedia REST API for fetching articles and content

## Project Structure

- `index.html`, `contents.html`, `about.html`, etc.: Main HTML pages
- `JS/wikiPull.js`: Handles data fetching for featured articles, images, and news
- `JS/wikiSearch.js`: Implements search logic and populates search results
- `JS/wikiPost.js`, `JS/darkmodeToggle.js`, `JS/statsCounter.js`, `JS/date.js`, `JS/Lightbox.js`: Additional UI features and utilities
- `assets/`, `img/`: Static resources

## How It Works

1. **Homepage**: Displays main Wikipedia-style landing, featured content, and navigation links.
2. **Search**: Enter a term to fetch and display a summary and image from Wikipedia.
3. **Featured Sections**: Automatically populated with the latest featured article, news, and picture from Wikipedia.
4. **Navigation**: Sidebar and header links provide fast access to all core sections, mimicking Wikipedia’s organization.

## Getting Started

1. Clone or download the repository.
2. Open `index.html` in your browser.
3. Ensure internet connectivity to allow API calls to Wikipedia and loading of Bootstrap.

## Credits

- Inspired by [Wikipedia](https://wikipedia.org)
- Uses Wikipedia's public REST API for dynamic content

## License

*No license specified. Please consult the repository owner before use in production.*

---

> This project is for educational and demonstrative purposes and is not affiliated with the Wikimedia Foundation.
