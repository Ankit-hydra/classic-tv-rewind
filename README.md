# Classic TV Rewind

Static editorial site: plain HTML, CSS and JavaScript. No build step. Works on GitHub Pages.

## Deploy on GitHub Pages (beginner steps)
1. Create a free account at github.com.
2. Click **New repository**. Name it `classic-tv-rewind`, set it to **Public**, and create it.
3. Click **uploading an existing file**. Unzip this project and drag in the CONTENTS (index.html, the folders, etc.), not the outer folder. Click **Commit changes**.
4. Go to **Settings > Pages**. Under **Build and deployment**, choose **Deploy from a branch**, branch `main`, folder `/ (root)`, then **Save**.
5. Wait a minute or two. Your site will be at `https://ankit-hydra.github.io/classic-tv-rewind/`.
6. Canonical URLs, Open Graph URLs, JSON-LD, `sitemap.xml` and `robots.txt` are configured for this published site URL. The Contact and Copyright Policy pages direct messages through the site's Ko-fi page; add a dedicated public contact email if you create one.
7. Submit `sitemap.xml` in Google Search Console.

All links are relative, so the project subpath works.

## Editorial review
Before applying for AdSense, review article facts against reliable sources, add citations where appropriate, and replace generic editor attribution with the real author/editor identity. Hidden HTML comments are editorial reminders, not proof that claims have been verified.

## Images
No copyrighted images are included. Add only original or licensed images to `assets/images/` and record each license.

## AdSense (after approval only)
Ad containers exist in articles and the homepage, marked `ADSENSE` in comments and set to `hidden`. After Google approves your site, add the AdSense script from your account to the `<head>` and paste unit code inside a container, removing `hidden`. Update the Privacy Policy for ads and cookies. Approval is never guaranteed, and it depends on Google's program policies, content quality and original value.

## Test checklist
- [ ] Every nav link and footer link opens a real page (home, category, article, policy pages).
- [ ] Open from the project subpath URL, not just locally.
- [ ] Phone width (about 375px): menu opens and closes, no sideways scrolling.
- [ ] Tab through a page: focus is visible; Escape closes the menu.
- [ ] Share button works (or Copy link shows "Link copied").
- [ ] Each page has a unique title and description; canonical URLs updated.
- [ ] Test JSON-LD in Google's Rich Results Test.
- [ ] `/sitemap.xml` and `/robots.txt` load with your real URL.
- [x] No leftover `example.com` or `YOUR-USERNAME` in the published site files.
