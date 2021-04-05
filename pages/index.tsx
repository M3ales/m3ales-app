import Head from 'next/head'
import React from 'react'
import { Timeline } from '../components/timeline/timeline'

export const Home = (): JSX.Element => {
  const timeline = [
        {
            "title" : "Relationship Tooltips",
            "shortDescription": "A Short Description",
            "longDescription": "A Long Description",
            "technologies": [
                {
                    "name": "C#",
                    "tooltip" : "Strongly typed 3rd generation language",
                    "colour" : "white"
                },
                {
                  "name": "Stardew Valley",
                  "tooltip" : "Farm video game released on multiple platforms on Microsoft XNA Framework. Community mod support.",
                  "colour" : "white"
              },
            ]
        }
    ];

  return (<div className="container">
    <Head>
      <title>M3ales - Portfolio</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <Timeline items={timeline}/>
    </main>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: black;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>);
}

export default Home
