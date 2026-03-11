import Image from "next/image"
import { CalendarIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface PromoCardProps {
  title: string
  description: string
  imageSrc: string
  price: string
  originalPrice?: string
  validUntil: string
}

export function PromoCard({ title, description, imageSrc, price, originalPrice, validUntil }: PromoCardProps) {
  const discount = originalPrice
    ? Math.round(
        (1 - Number.parseInt(price.replace(/\D/g, "")) / Number.parseInt(originalPrice.replace(/\D/g, ""))) * 100,
      )
    : 0

  return (
    <Card className="h-full overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        {discount > 0 && (
          <Badge className="absolute right-2 top-2 bg-hotel-secondary hover:bg-hotel-secondary/90">
            Save {discount}%
          </Badge>
        )}
      </div>
      <CardContent className="p-4">
        <h3 className="mb-2 text-xl font-bold text-gray-900">{title}</h3>
        <p className="mb-4 text-sm text-gray-600">{description}</p>
        <div className="mb-2 flex items-center text-sm text-gray-500">
          <CalendarIcon className="mr-1 h-4 w-4" />
          <span>Valid until {validUntil}</span>
        </div>
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-hotel-primary">{price}</span>
          {originalPrice && <span className="text-sm text-gray-500 line-through">{originalPrice}</span>}
          <span className="text-sm text-gray-500">/night</span>
        </div>
      </CardContent>
      <CardFooter className="border-t bg-hotel-primary-light p-4">
        <div className="flex w-full gap-2">
          <Button className="w-full" variant="outline" size="sm">
            View Details
          </Button>
          <Button className="w-full bg-hotel-primary text-white hover:bg-hotel-primary/90" size="sm">
            Book Now
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
}
