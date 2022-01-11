import Head from "next/head";
// TODO : Update with real information
const MetaHead = () => (
  <Head>
    <title>Republic Barbershop</title>
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:title" content="Republic Barbershop" key="title" />
    <meta property="og:site_name" content="Republic Barbershop" />
    <meta property="og:url" content="https://therepublicbarbershop.com/" />
    <meta property="og:type" content="website" />
    <meta
      property="og:description"
      content="Republic Barbershop in Dallas, TX"
    />
    {/* TODO: ONCE IMAGE IS UPLOADED WE CAN CHANGE THE HOST BELOW*/}
    <meta property="og:image" content="../public/republic.jpeg" />
    <meta property="og:image:width" content="720" />
    <meta property="og:image:height" content="519" />
    <meta itemProp="name" content="Republic Barbershop" />
    <meta itemProp="url" content="https://therepublicbarbershop.com/" />
    <meta itemProp="description" content="Republic Barbershop in Dallas, TX" />
    <meta itemProp="thumbnailUrl" content="../public/republic.jpeg" />
    <meta itemProp="image" content="../public/republic.jpeg" />
    <meta name="twitter:title" content="Republic Barbershop" />
    <meta name="twitter:image" content="../public/republic.jpeg" />
    <meta name="twitter:url" content="https://therepublicbarbershop.com/" />
    <meta name="twitter:card" content="summary" />
    <meta
      name="twitter:description"
      content="Republic Barbershop in Dallas, TX"
    />
    <meta name="description" content="Republic Barbershop in Dallas, TX" />
    <link rel="icon" href="https://i.ibb.co/ZVTd1ZF/logo.png"></link>
  </Head>
);

export default MetaHead;
