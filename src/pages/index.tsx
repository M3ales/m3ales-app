import Head from 'next/head'
import React from 'react'
import Footer from '../components/footer/footer'
import { Hero } from '../components/hero/hero'
import Navbar, { NavbarItem } from '../components/navbar/navbar'
import { Section } from '../components/section/section'
import { Timeline, TimelineEvents } from '../components/timeline/timeline'

export const getStaticProps : GetStaticProps = async (context) => {
  const heroRes = await fetch('https://m3ales-api.m3ales.repl.co/hero/')
  let hero: Hero = await heroRes.json()

  const eventsRes = await fetch('https://m3ales-api.m3ales.repl.co/timeline/')
  let events: TimelineEvents[] = await eventsRes.json()
  return {
    props: {
      hero: hero,
      events: events
    },
    revalidate: 10
  }
}

export const Home = ({ hero, events }): JSX.Element => {
    const navItems: NavbarItem[] = [
        {
            name: 'Home',
            onSamePage: true,
            target: 'top',
        },
        {
            name: 'Projects',
            onSamePage: true,
            target: 'Projects',
        },
        {
            name: 'Contact',
            onSamePage: true,
            target: 'Contact',
        },
    ]
    return (
        <div className="container">
            <Head>
                <title>M3ales - Portfolio</title>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>

            <main>
                <Navbar items={navItems} />
                <Hero
                    text={hero.text}
                    message={hero.message}
                    next="Projects"
                />
                <Section title="Projects" />
                <Timeline events={events}/>
                <Section title="Contact" />
                <Footer />
            </main>
        </div>
    )
}

export default Home
