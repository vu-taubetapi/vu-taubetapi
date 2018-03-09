import Head from 'next/head'

const Header = ({ title: title }) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
            <meta name="description" content="The official website of Vanderbilt Tau Beta Pi, Tennessee Beta Chapter." />
            <meta name="keywords" content="vanderbilt, vanderbilt university, tau beta pi, tbp, premier, engineering honor society, tennessee, tnb, tennessee beta chapter" />
            <meta name="author" content="Vanderbilt Tau Beta Pi" />
            <meta name="google-site-verification" content="UNam-BSOjwdf_L0ybj_nJpPiqJCw-mvgkhX7jMku1B4" />
        </Head>
    </div>
)

export default Header