import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import {Seo} from "../components/seo"

const AboutPage = () => (
  <Layout>
    <div className="container  my-5">

      <div className="container">
        <h1 >Iskcon</h1>
        <p>
            ISKCON, or the International Society for Krishna Consciousness, is a worldwide spiritual organization founded in 1966 by His Divine Grace A.C. Bhaktivedanta Swami Prabhupada, also known as Srila Prabhupada. The organization is based on the teachings of the Bhagavad Gita and the ancient Vedic scriptures of India.

            The mission of ISKCON is to spread the teachings of Lord Krishna, promote a spiritual way of life, and establish a society based on love and trust. ISKCON is known for its temples, devotees, and famous Hare Krishna mantra, which has become a cultural icon in many parts of the world.

            The philosophy of ISKCON is centered on the principles of bhakti yoga, which is the yoga of devotion. This involves cultivating a loving relationship with God through various spiritual practices such as chanting, meditation, and offering food to the deity. ISKCON teaches that every living being is part of the Supreme Spirit, and by connecting with God, one can attain inner peace and happiness.

            ISKCON has a strong presence in India, where it has many temples and devotees. It also has a significant presence in other parts of the world, including the United States, Europe, and Australia. ISKCON has been instrumental in spreading the message of Bhakti Yoga to people of all backgrounds, and it is known for its outreach programs and community service activities.

            ISKCON's most well-known practice is the chanting of the Hare Krishna mantra. The mantra, which consists of three names of God - Hare, Krishna, and Rama - is chanted repetitively to purify the mind and awaken the soul. The chanting of the Hare Krishna mantra has become a hallmark of ISKCON, and it is often heard at public gatherings, festivals, and other events.

            ISKCON is also known for its vegetarian food, which is offered to the deity and then distributed to devotees and visitors. The food is prepared with great care and attention to detail, and it is meant to nourish both the body and the soul. ISKCON's food distribution programs have been a lifeline for many people in need, especially during times of crisis.

            ISKCON's temples are not just places of worship; they are also centers of learning and community activity. Many temples offer classes on yoga, meditation, and Vedic philosophy, as well as workshops on art, music, and dance. ISKCON also runs schools and universities in India, which offer a holistic education based on spiritual values.

            In recent years, ISKCON has faced some criticism and controversy. Some former members have accused the organization of being too authoritarian and cult-like, while others have raised concerns about the treatment of women and children within the organization. ISKCON has acknowledged these issues and has taken steps to address them, such as implementing child protection policies and increasing transparency in its financial dealings.

            Despite these challenges, ISKCON continues to be a major force in the spiritual landscape of the world. Its message of love, devotion, and service resonates with people of all backgrounds, and its devotees continue to spread the teachings of Lord Krishna with great enthusiasm and dedication.
        </p>
        <p>Created by <a href="https://github.com/r-ichard" target="_blank" rel="noopener noreferrer">Richard Raduly</a></p>
      </div>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default AboutPage

export const Head = () => (
    <Seo title="About Iskcon" />
)