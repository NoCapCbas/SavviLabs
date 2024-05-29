import React, { forwardRef } from 'react';

import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "../../ui/card"
import { Label } from "../../ui/label"
import { Input } from "../../ui/input"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "../../ui/select"
import { Textarea } from "../../ui/textarea"
import { Button } from "../../ui/button"
import background from "../../../assets/blob-scene-haikei.svg"

const QuoteForm = forwardRef((props, ref) => {
  const backgroundStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    // color: 'white' // Optional: Change text color for better contrast
  };
  return (
    <section ref={ref} style={backgroundStyle} className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 box-border">    
    <Card className="flex flex-col max-w-2xl px-4 md:px-6 ">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full">
        <form className="flex flex-col space-y-2 h-full w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Acme Inc." />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 (555) 555-5555" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" type="email" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Approximate Budget</Label>
              <Select id="budget">
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-5000">$0 - $5,000</SelectItem>
                  <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
                  <SelectItem value="10000-20000">$10,000 - $20,000</SelectItem>
                  <SelectItem value="20000-50000">$20,000 - $50,000</SelectItem>
                  <SelectItem value="50000-100000">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100000-plus">$100,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeframe">Time Frame</Label>
              <Select id="timeframe">
                <SelectTrigger>
                  <SelectValue placeholder="Select time frame" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1-2-weeks">1-2 Weeks</SelectItem>
                  <SelectItem value="1-month">1 Month</SelectItem>
                  <SelectItem value="2-3-months">2-3 Months</SelectItem>
                  <SelectItem value="3-6-months">3-6 Months</SelectItem>
                  <SelectItem value="6-months-plus">6 Months+</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="urls">URLs to Scrape</Label>
            <Textarea className="min-h-[100px]" id="urls" placeholder="Enter URLs separated by commas" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Comments/Questions</Label>
            <Textarea className="min-h-[100px]" id="comments" placeholder="Enter your comments or questions" />
          </div>
          <Button className="bg-[#715df2] w-full hover:bg-[#8B7AF4]" type="submit">
            Submit
          </Button>
        </form>
      </CardContent>
    </Card>
    </section>

  )
});

export default QuoteForm;
