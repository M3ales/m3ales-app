import Head from 'next/head'
import React from 'react'
import { Timeline, TimelineEvents } from '../components/timeline/timeline'

export const Home = (): JSX.Element => {
  const timeline : TimelineEvents[] = [
        {
            "title" : "Relationship Tooltips",
            "shortDescription": "A Short Description",
            "longDescription": "A Long Description",
            "date" : "2019",
            "technologies": [
                {
                    "name": "C#",
                    "tooltip" : "Strongly typed 3rd generation language",
                    "colour" : "green"
                },
                {
                  "name": "Stardew Valley",
                  "tooltip" : "Farm video game released on multiple platforms on Microsoft XNA Framework. Community mod support.",
                  "colour" : "white"
              },
            ]
        },
        {
          "title" : "Relationship Tooltips",
          "shortDescription": "A Short Description",
          "longDescription": "A Long Description",
          "date" : "2020",
          "technologies": [
              {
                  "name": "C#",
                  "tooltip" : "Strongly typed 3rd generation language",
                  "colour" : "blue"
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
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>

    <main>
      <Timeline events={timeline}/>
    </main>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        background-color: #1e1e1e;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>);
}

export default Home
