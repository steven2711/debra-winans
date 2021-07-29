import Layout from "../components/Layout";
import Blockquote from "@/components/Blockquote";
import BookDisplay from "@/components/BookDisplay";
import InviteBanner from "@/components/InviteBanner";
import Subscribe from "@/components/Subscribe";
import SocialMedia from "@/components/SocialMedia";
import EventBanner from "@/components/EventBanner";

import { events } from "../data/events";

export default function Home() {
  return (
    <Layout>
      <Blockquote
        quote={`"Purposely provoking confidence in your identity through wisdom and truth!"`}
      />
      <BookDisplay />
      {events.length !== 0 ? <EventBanner /> : null}
      <InviteBanner />
      {/* <Subscribe />
      <SocialMedia /> */}
    </Layout>
  );
}
