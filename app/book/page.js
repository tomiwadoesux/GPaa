import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BackToTop } from "@/components/back-to-top";
import {
  BookIcon,
  ExternalLinkIcon,
  HeartIcon,
  QuoteIcon,
} from "@/components/icons";
import Link from "next/link";

export const metadata = {
  title: "Whispers of a Lifetime |Timothy Adebayo Adeku Memorial",
  description:
    "Explore Timothy Adebayo Adeku's bestselling memoir 'Whispers of a Lifetime' - a touching journey through love, loss, and the lessons that shape us.",
};

const purchaseLinks = [
  {
    name: "Amazon",
    url: "https://www.amazon.com/-/es/Legacy-Timothy-Adebayo-Adeku/dp/1945693916",
  },
];

const reviews = [
  {
    quote: "A masterpiece of memoir writing that will touch your soul.",
    source: "The New York Times",
  },
  {
    quote:
      "Timothy Adebayo Adekuwrites with the wisdom of a sage and the heart of a poet.",
    source: "Publishers Weekly",
  },
  {
    quote: "An unforgettable journey through a life well-lived.",
    source: "Kirkus Reviews",
  },
];

export default function BookPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Banner */}
        <section className="relative pt-32 pb-20 bg-primary overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: "url('/thebook.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                filter: "blur(20px)",
              }}
            />
          </div>
          <div className="container mx-auto px-6 relative">
            <div className="flex items-center gap-2 text-secondary mb-4">
              <BookIcon className="w-5 h-5" />
              <span className="text-sm uppercase tracking-wider">
                Pastor Bayo's Published Book
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl text-primary-foreground mb-4">
              Legacy
            </h1>
            <p className="text-primary-foreground/70 text-xl max-w-2xl">
              A Living Legacy of Encouraging Words
            </p>
          </div>
        </section>

        {/* Book Details */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Book Cover */}
              <div className="flex justify-center lg:sticky lg:top-32">
                <div className="relative">
                  {/* 3D Book Effect */}
                  <div className="relative w-72 md:w-96 aspect-[2/3] shadow-2xl">
                    {/* Book Spine */}
                    <div className="absolute left-0 top-0 bottom-0 w-6 bg-secondary/80 rounded-l-sm transform -skew-y-3 origin-left" />
                    {/* Book Cover */}
                    <div className="absolute inset-0 rounded-r-lg overflow-hidden bg-card">
                      <img
                        src="/thebook.jpg"
                        alt="Whispers of a Lifetime book cover"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  {/* Shadow */}
                  <div className="absolute -bottom-6 left-8 right-8 h-12 bg-primary/20 blur-2xl rounded-full" />
                </div>
              </div>

              {/* Book Info */}
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  About the Book
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  From “Word of Pastor,” then to “Word of the Day,” now “to Word
                  of Encouragement,’ Pastor Bayo has been faithfully committed
                  to inserting encouraging words and advice in his church's
                  Sunday bulletin for many years.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  LEGACY is a true reflection of Pastor Bayo's heart ... to
                  encourage and inspire the body of Christ to receive all the
                  great gifts and promises God has provided through His Word.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  As you read this book, you will feel faith arise, and you will
                  experience the joy that belongs to all of us as God's child.
                  And even though your faith will be strengthened, and you will
                  gain a greater knowledge of the Word for everyday practical
                  matters, it will draw you into a closer relationship with God
                  your Father, Jesus your Savior, and the power and authority in
                  the Holy Spirit.
                </p>

                {/* Publication Details */}
                <div className="bg-muted rounded-lg p-6 mb-8">
                  <h3 className="font-medium text-foreground mb-4">
                    Publication Details
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-muted-foreground">Genre</p>
                      <p className="text-foreground">
                        Christian Inspirational / Faith-Based Encouragement
                      </p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Publisher</p>
                      <p className="text-foreground">R. H. Publishing</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Publication Year</p>
                      <p className="text-foreground">2023</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">ISBN</p>
                      <p className="text-foreground"> 978-1945693915</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Pages</p>
                      <p className="text-foreground">208</p>
                    </div>
                    <div>
                      <p className="text-muted-foreground">Format</p>
                      <p className="text-foreground">
                        Hardcover, Paperback, eBook
                      </p>
                    </div>
                  </div>
                </div>

                {/* Purchase Buttons */}
                <div className="mb-8">
                  <h3 className="font-medium text-foreground mb-4">
                    Purchase the Book
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {purchaseLinks.map((link) => (
                      <a
                        key={link.name}
                        href={link.url}
                        className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-sm text-sm hover:bg-primary/90 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.name}
                        <ExternalLinkIcon className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Signed Copies */}
                <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
                  <p className="text-muted-foreground text-sm mb-4">
                    All proceeds from sales will go to Pastor Bayo Adeku Legacy
                    Foundation.
                  </p>
                  <Link
                    href="/donate"
                    className="inline-flex items-center gap-2 text-secondary hover:text-secondary/80 transition-colors text-sm font-medium"
                  >
                    About the Foundation
                    <ExternalLinkIcon className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Excerpt Section */}
        <section className="py-24 bg-muted">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <QuoteIcon className="w-12 h-12 text-secondary/30 mx-auto mb-8" />
              <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8 italic">
                "It is becoming increasingly easy for Christians to fall into
                the trap of listening to, or even studying the Bible, but not
                acting on its instructions. We think we are spiritual by reading
                and studying the Word of God. It is good to read, study, hear,
                and meditate on the Word of God. But the ultimate source of
                blessing is to act on the Word of God."
              </blockquote>
              <p className="text-muted-foreground">
                — Excerpt from Chapter One, "God's Word"
              </p>
            </div>
          </div>
        </section>

        {/* Author's Story */}
        <section className="py-24 bg-background">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="/story.webp"
                  alt="Timothy Adebayo Adeku, author"
                  className="w-full rounded-lg shadow-xl"
                />
              </div>
              <div>
                <p className="text-secondary text-sm uppercase tracking-[0.2em] mb-4">
                  Behind the Book
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                  The Story Behind the Story
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The foundation of this book lies in Pastor Bayo Adekus’
                  enduring passion for mentorship and spiritual guidance. Driven
                  by a deep desire to help people "figure things out" and ensure
                  they have control over their paths in life, he dedicated years
                  to crafting weekly words of encouragement and biblical
                  insights. These writings were originally created as tools for
                  ministry, shared during classes, one-on-one counseling
                  sessions, and weekly dispatches to offer practical advice and
                  spiritual direction to his congregation.
                </p>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  Although Pastor Bayo had long intended to put these teachings
                  into print, the book itself was brought to life through the
                  initiative of those around him. He did not sit down to compile
                  this specific volume; instead, a dedicated team secretly put
                  together by his loving wife, Pastor Joan Adeku accessed the
                  archives of his work, gathering years' worth of his scattered
                  notes and weekly messages. They meticulously organized his
                  vast collection of spiritual insights, transforming his
                  consistent efforts to encourage others into a cohesive
                  manuscript without his knowledge.
                </p>

                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  The project culminated as a surprise gift presented to Pastor
                  Bayo on his 70th birthday. While he is the author of every
                  word within its pages, he was unaware that his life's work was
                  being memorialized in this format until the moment he received
                  it. The book stands as a testament to his legacy, funded and
                  supported by the community he served, ensuring that his
                  teachings and words of encouragement continue to guide readers
                  well beyond his immediate reach.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Press Reviews */}

        {/* Donate CTA */}
        <section className="py-24  bg-primary text-primary-foreground">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <HeartIcon className="w-12 h-12 text-secondary mx-auto mb-6" />
              <h2 className="font-serif text-white text-3xl md:text-4xl  mb-6">
                Support His Legacy
              </h2>
              <p className=" text-white text-lg mb-8">
                All donations and proceeds from sales will go to Pastor Bayo Adeku Legacy
                Foundation.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-sm text-sm uppercase tracking-wider hover:bg-secondary/90 transition-colors"
              >
                Make a Donation
                <HeartIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
