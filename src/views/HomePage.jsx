import React from 'react'
import Card from '../components/Card/Card'

const cardTitle = [
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'News', link: '/news' },
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'News', link: '/news' },
  { title: 'Home', link: '/' },
  { title: 'About', link: '/about' },
  { title: 'News', link: '/news' },
]

const HomePage = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <h1 className="text-center">Домашняя страница</h1>
        </div>
        <div className="row">
          {cardTitle.map(({ title, link }, index) => (
            <Card key={title + index} title={title} link={link} />
          ))}
        </div>
      </div>
    </>
  )
}

export default HomePage
