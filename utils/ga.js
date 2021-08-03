// log the pageview with their URL
const pageview = (url) => {
  window.gtag('config', process.env.NEXT_GOOGLE_ANALYTICS, {
    page_path: url,
  });
};

// log specific events happening.
const event = ({ action, params }) => {
  window.gtag('event', action, params);
};

export { pageview, event };
