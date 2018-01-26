// ./pages/_document.js
import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'

export default class MyDocument extends Document {
    static getInitialProps({ renderPage }) {
        const { html, head, errorHtml, chunks } = renderPage()
        const styles = flush()
        return { html, head, errorHtml, chunks, styles }
    }

    render() {
        return (
            <html lang="en-US">
                <Head>
                    <link rel="shortcut icon" href="/static/img/favicon.ico" />
                    <link href="/static/css/bootstrap.min.css" rel="stylesheet" />
                    <link href="/static/css/font-awesome.min.css" rel="stylesheet" />
                    <link href="/static/css/custom.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Kaushan+Script" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Droid+Serif:400,700,400italic,700italic" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto+Slab:400,100,300,700" rel="stylesheet" />
                    <script src="/static/js/jquery.min.js" />
                    <script src="/static/js/bootstrap.min.js" />
                    <script src="/static/js/custom.min.js" />
                </Head>
                <body>
                    {this.props.customValue}
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}