import {
  Banner,
  Blog,
  Explore,
  ExploreSecond,
  ExploreThird,
  FeaturedCard,
  Features,
  Partner,
  Promo,
  Service,
  TopDes,
  Tutorial,
} from './components'

const Home = () => {
  return (
    <>
      <Banner />
      <Promo />
      <FeaturedCard />
      <TopDes />
      <Features />
      <Partner />
      <Service title="Dịch Vụ Của&nbsp;Mioto" />
      <Tutorial />
      <Explore />
      <ExploreSecond />
      <ExploreThird />
      <Blog />
    </>
  )
}

export default Home
