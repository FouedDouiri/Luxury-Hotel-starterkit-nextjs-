import Image from "next/image"
import { CheckIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ReservationForm } from "./components/reservation-form"
import { PromoCard } from "./components/promo-card"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section with CTA */}
      <section className="relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1080&width=1920"
            alt="Luxury hotel view"
            fill
            className="object-cover brightness-[0.7]"
            priority
          />
        </div>
        <div className="relative z-10 flex min-h-[70vh] flex-col items-center justify-center px-4 text-center text-white">
          <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Luxury Awaits at Our Hotel
          </h1>
          <p className="mb-8 max-w-2xl text-lg sm:text-xl">Experience world-class amenities and unforgettable stays</p>
          <Button size="lg" className="bg-hotel-secondary text-white hover:bg-hotel-secondary/90">
            Explore Our Rooms
          </Button>
        </div>
      </section>

      {/* Reservation Section - Moved to be first after hero */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Book Your Stay</h2>
            <p className="max-w-[700px] text-gray-600">
              Reserve your room directly with us for the best rates and exclusive perks
            </p>
          </div>

          <Card className="mx-auto overflow-hidden shadow-lg lg:max-w-5xl">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2">
                <div className="relative hidden h-full lg:block">
                  <Image
                    src="/placeholder.svg?height=600&width=600"
                    alt="Luxury hotel room"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                    <div className="mb-2 text-2xl font-bold">Best Rate Guarantee</div>
                    <p>Book directly for exclusive member benefits</p>
                  </div>
                </div>
                <div className="p-6 lg:p-8">
                  <div className="mb-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900">Reserve Your Room</h3>
                    <p className="text-gray-600">Find your perfect accommodation</p>
                  </div>
                  <ReservationForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Latest Promotions Section */}
      <section className="bg-hotel-primary-light py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Latest Promotions</h2>
            <p className="max-w-[700px] text-gray-600">Take advantage of our exclusive offers and special packages</p>
          </div>

          <Carousel className="mx-auto max-w-5xl">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2">
                <PromoCard
                  title="Summer Escape"
                  description="Enjoy 20% off on stays of 3 nights or more. Includes breakfast and spa access."
                  imageSrc="/placeholder.svg?height=400&width=600"
                  price="$199"
                  originalPrice="$249"
                  validUntil="August 31, 2025"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <PromoCard
                  title="Romantic Getaway"
                  description="Champagne, chocolate-covered strawberries, and late checkout included."
                  imageSrc="/placeholder.svg?height=400&width=600"
                  price="$299"
                  originalPrice="$399"
                  validUntil="December 31, 2025"
                />
              </CarouselItem>
              <CarouselItem className="md:basis-1/2">
                <PromoCard
                  title="Family Package"
                  description="Kids stay and eat free. Includes access to children's activities and pool."
                  imageSrc="/placeholder.svg?height=400&width=600"
                  price="$349"
                  originalPrice="$449"
                  validUntil="September 30, 2025"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container px-4 md:px-6">
          <div className="mb-10 flex flex-col items-center text-center">
            <h2 className="mb-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Hotel Amenities</h2>
            <p className="max-w-[700px] text-gray-600">Discover the exceptional services and facilities we offer</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Luxury Spa",
                description: "Relax and rejuvenate with our premium spa treatments and facilities.",
                icon: "🧖‍♀️",
              },
              {
                title: "Fine Dining",
                description: "Experience exquisite cuisine prepared by our award-winning chefs.",
                icon: "🍽️",
              },
              {
                title: "Infinity Pool",
                description: "Enjoy our stunning infinity pool with panoramic views of the surroundings.",
                icon: "🏊‍♂️",
              },
              {
                title: "Fitness Center",
                description: "Stay fit with state-of-the-art equipment and personal trainers.",
                icon: "💪",
              },
              {
                title: "Concierge Service",
                description: "Our dedicated concierge team is available 24/7 to assist with any requests.",
                icon: "👨‍💼",
              },
              {
                title: "Business Center",
                description: "Fully equipped business center for all your professional needs.",
                icon: "💼",
              },
            ].map((feature, index) => (
              <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4 text-4xl">{feature.icon}</div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional CTA Section */}
      <section className="bg-hotel-secondary-light py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="flex flex-col justify-center">
              <div className="mb-4 inline-block rounded-lg bg-hotel-secondary/20 px-3 py-1 text-sm text-hotel-secondary">
                Limited Time Offer
              </div>
              <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Join Our Loyalty Program
              </h2>
              <p className="mb-6 max-w-[600px] text-gray-600">
                Sign up today and get 10% off your first booking, plus exclusive access to member-only deals and
                promotions.
              </p>
              <ul className="mb-6 space-y-3">
                <li className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-hotel-primary text-white">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">Earn points with every stay</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-hotel-primary text-white">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">Exclusive member rates</span>
                </li>
                <li className="flex items-center">
                  <div className="mr-2 flex h-6 w-6 items-center justify-center rounded-full bg-hotel-primary text-white">
                    <CheckIcon className="h-4 w-4" />
                  </div>
                  <span className="text-gray-700">Free room upgrades when available</span>
                </li>
              </ul>
              <Button className="w-fit bg-hotel-primary text-white hover:bg-hotel-primary/90">Sign Up Now</Button>
            </div>
            <div className="relative hidden h-[400px] overflow-hidden rounded-xl lg:block">
              <Image
                src="/placeholder.svg?height=800&width=600"
                alt="Luxury hotel lounge"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
