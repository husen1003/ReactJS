import NextHead from 'next/head';
const defaultTitle = 'Material Design Color, Flat Colors, Icons, Color Palette | Material UI';
const defaultDescription = 'Material Design Color, Flat Colors, Icons, Color Palette | Material UI';
const defaultOGURL = 'https://materialui.co';

const Head = (props) => {
  return (
    <NextHead>
      <meta charSet="utf-8" />
      <title>{props.title || defaultTitle}</title>
      <meta
        name="desctiption"
        content={props.description || defaultDescription}
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:url" content={props.url || defaultOGURL} />
      <meta property="og:title" content={props.OGtitle || ''} />
      <link rel="icon" href="/favicon.gif" type="image/gif"></link>
      {/* <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" /> */}
    </NextHead>
  );
};

export default Head;
