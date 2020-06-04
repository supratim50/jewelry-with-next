/*
 *** Tutorial: https://reacttricks.com/nested-dynamic-layouts-in-next-apps/
 */

// import React from 'react';
import App from "next/app";
import Head from "next/head";
import DefaultLayout from "../components/layouts/defaultLayout";
// swiper js css
import "swiper/css/swiper.css";

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    const Layout = Component.Layout || DefaultLayout;

    return (
      <>
        <Head>
          {/* font */}
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat&display=swap"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="assets/font/flaticon.css" />
          {/* bootstrap */}
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
            integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
            crossOrigin="anonymous"
          ></link>
          {/* custom css */}
          <link rel="stylesheet" href="/assets/css/global.css" />
          {/* js */}
          <script src="/assets/js/swiper.js"></script>
          <script src="/assets/js/swiper-custom.js"></script>
        </Head>
        {/* <SnackbarProvider> */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </SnackbarProvider> */}
      </>
    );
  }
}

export default MyApp;
