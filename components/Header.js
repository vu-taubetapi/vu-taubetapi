import Head from 'next/head'

const Header = ({ title: title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="The official website for Vanderbilt Tau Beta Pi, Tennessee Beta Chapter." />
            <meta name="keywords" content="vanderbilt, vanderbilt university, tau beta pi, tbp, premier, engineering honor society" />
            <meta name="author" content="Vanderbilt Tau Beta Pi" />
        </Head>
    </div>
)

export default Header