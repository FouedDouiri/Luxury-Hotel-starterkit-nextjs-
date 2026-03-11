"use client"

import type React from "react"

import { useState } from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"

export function ReservationForm() {
  const [checkIn, setCheckIn] = useState<Date>()
  const [checkOut, setCheckOut] = useState<Date>()
  const [adults, setAdults] = useState("2")
  const [children, setChildren] = useState("0")
  const [rooms, setRooms] = useState("1")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission - would connect to your booking system
    console.log({ checkIn, checkOut, adults, children, rooms })
    alert("Booking request submitted! We'll contact you shortly to confirm your reservation.")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="check-in">Check-in Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="check-in"
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !checkIn && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkIn ? format(checkIn, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} initialFocus />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="check-out">Check-out Date</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="check-out"
                variant={"outline"}
                className={cn("w-full justify-start text-left font-normal", !checkOut && "text-muted-foreground")}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {checkOut ? format(checkOut, "PPP") : <span>Select date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={checkOut}
                onSelect={setCheckOut}
                initialFocus
                disabled={(date) => (checkIn ? date < checkIn : false) || date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="space-y-2">
          <Label htmlFor="adults">Adults</Label>
          <Select value={adults} onValueChange={setAdults}>
            <SelectTrigger id="adults">
              <SelectValue placeholder="Adults" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5, 6].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="children">Children</Label>
          <Select value={children} onValueChange={setChildren}>
            <SelectTrigger id="children">
              <SelectValue placeholder="Children" />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="rooms">Rooms</Label>
          <Select value={rooms} onValueChange={setRooms}>
            <SelectTrigger id="rooms">
              <SelectValue placeholder="Rooms" />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4].map((num) => (
                <SelectItem key={num} value={num.toString()}>
                  {num}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="room-type">Room Type</Label>
        <Select defaultValue="standard">
          <SelectTrigger id="room-type">
            <SelectValue placeholder="Select room type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="standard">Standard Room</SelectItem>
            <SelectItem value="deluxe">Deluxe Room</SelectItem>
            <SelectItem value="suite">Executive Suite</SelectItem>
            <SelectItem value="presidential">Presidential Suite</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Button type="submit" className="w-full bg-hotel-primary text-white hover:bg-hotel-primary/90">
        Check Availability
      </Button>

      <p className="text-center text-xs text-gray-500">
        By clicking "Check Availability", you agree to our terms and conditions.
      </p>
    </form>
  )
}
