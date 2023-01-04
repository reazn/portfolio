import Head from "next/head";
import config from "config";

export default function Meta() {

    return (
        <Head>
            <title>{config.seo.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charSet="UTF-8"/>
            <meta name="robots" content="index, follow"/>

            <meta name="author" content={config.seo.title}/>
            <meta name="description" content={config.seo.description}/>
            <meta name="keywords" content="HTML, CSS, SCSS, JavaScript, React, React.js, Node, Node.js, Next, Next.js, Portfolio, UK, Software Engineer, Web Developer, UI, UX, Designer, front-end"/>

            <meta property="og:title" content={config.seo.title}/>
            <meta property="og:creator" content="REAZN"/>
            <meta property="og:description" content={config.seo.description}/>
            <meta property="og:image" content={`/images/${config.seo.image}`}/>

            <meta name="twitter:title" content={config.seo.title}/>
            <meta name="twitter:creator" content={config.social.twitter}/>
            <meta name="twitter:description" content={config.seo.description}/>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:image" content={`/images/${config.seo.image}`}/>

            <link rel="icon" href="/favicons/favicon.png"/>
        </Head>
    )
}
