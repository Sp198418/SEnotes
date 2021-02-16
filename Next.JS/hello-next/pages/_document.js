import { Html, Head, Main, NextScript } from "next/document"

export default class CustomDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <meta property= "custom" content="King"/>
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />

            </Html>
        )

    }
}