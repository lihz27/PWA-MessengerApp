import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.css';

export default class MyDocument extends Document {
  render() {
    return (
      <html style={{ background: '#EEE', color: '#444' }}>
        <Head>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=no,minimal-ui"
          />
          <meta name="theme-color" content="#673ab7" />
          <link rel="manifest" href="static/manifest.json" />
          <link rel="icon" href="static/img/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://code.getmdl.io/1.3.0/material.deep_purple-blue.min.css"
          />
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css">

          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js">

        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer src="https://code.getmdl.io/1.3.0/material.min.js" />
        </body>
      </html>
    )
  }
}
