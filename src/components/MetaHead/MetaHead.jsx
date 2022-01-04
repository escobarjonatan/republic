import Head from 'next/head';

const MetaHead = () => (
    <Head>
        <title>Republic Barbershop</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Republic Barbershop" key="title" />
        <meta property="og:site_name" content="Republic Barbershop" />
        <meta property="og:url" content="https://therepublicbarbershop.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Republic Barbershop in Dallas, TX" />
        {/* TODO: ONCE IMAGE IS UPLOADED WE CAN CHANGE THE HOST BELOW*/}
        <meta property="og:image" content="../public/republic.jpeg" />
        <meta property="og:image:width" content="720" />
        <meta property="og:image:height" content="519" />
        <meta itemprop="name" content="Republic Barbershop" />
        <meta itemprop="url" content="https://therepublicbarbershop.com/" />
        <meta itemprop="description" content="Republic Barbershop in Dallas, TX" />
        <meta itemprop="thumbnailUrl" content="../public/republic.jpeg" />
        <meta itemprop="image" content="../public/republic.jpeg" />
        <meta name="twitter:title" content="Republic Barbershop" />
        <meta name="twitter:image" content="../public/republic.jpeg" />
        <meta name="twitter:url" content="https://therepublicbarbershop.com/" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="Republic Barbershop in Dallas, TX" />
        <meta name="description" content="Republic Barbershop in Dallas, TX" />
    </Head>
);

export default MetaHead;