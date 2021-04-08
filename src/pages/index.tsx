import Head from 'next/head'
import React from 'react'
import { Hero } from '../components/hero/hero';
import { Section } from '../components/section/section';
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
        },        {
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
        },        {
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
        },        {
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
      <Hero text="M3ales" message="Software, Photography, Music, stuff" next="Projects"/>
      <Section title="Projects"/>
      <Timeline events={timeline}/>
      <Section title="Technology"/>
      <Section title="Experience"/>
      <Section title="Contact"/>
    </main>
  </div>);
}

export default Home
