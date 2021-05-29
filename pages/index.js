import Layout from '../components/Layout'
import Blockquote from '@/components/Blockquote'
import BookDisplay from '@/components/BookDisplay'
import InviteBanner from '@/components/InviteBanner'
import Subscribe from '@/components/Subscribe'
import SocialMedia from '@/components/SocialMedia'

export default function Home() {
  return (
    <Layout>
      <Blockquote quote={`"Purposely provoking confidence in your identity through wisdom and truth!"`} />
      <BookDisplay />
      <InviteBanner />
      <Subscribe />
      <SocialMedia />
    </Layout>
   
  )
}
