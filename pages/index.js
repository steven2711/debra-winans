import Layout from '../components/Layout'
import Blockquote from '@/components/Blockquote'
import BookDisplay from '@/components/BookDisplay'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <Layout>
      <Blockquote quote={`"Purposely provoking confidence in your identity through wisdom and truth!"`} />
      <BookDisplay />
    </Layout>
   
  )
}
