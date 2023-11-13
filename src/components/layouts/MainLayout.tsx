import Views from '@/views'
import { Footer, Header } from '../template'

const MainLayout = () => {
  return (
    <div className="mioto-layout">
      <Header />
      <section className="body">
        <Views />
      </section>
      <Footer />
    </div>
  )
}

export default MainLayout
