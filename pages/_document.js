import Document, {Html, Head, Main, NextScript} from 'next/document'

export default  class MyDocument extends Document {
    render(){
    return(
        <Html lang='en' >
            <Head>
                {/* meta important pour le seo */}
                <meta name="description" content="l'art du kintsugi" />
                <meta charSet="utf8"/>
                <meta name="robots" />
                
                <link 
                    rel="stylesheet" 
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                />

                <link
                    href="https://api.mapbox.com/mapbox-gl-js/v0.51.0/mapbox-gl.css"
                    rel="stylesheet"
                />
                <link rel="manifest" href="/manifest.json" />

            </Head>
            <body>
                <Main />
                <NextScript/>
                <script src="https://unpkg.com/typewriter-effect@latest/dist/core.js"></script>


            </body>

        </Html>
    )}
}
