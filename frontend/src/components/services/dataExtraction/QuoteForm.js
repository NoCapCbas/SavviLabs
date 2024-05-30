import React, { useState, forwardRef } from 'react';

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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    phone: '',
    email: '',
    budget: '',
    timeframe: '',
    urls: '',
    comments: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSelectChange = (id, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Send form data to backend API
    try {
      const response = await fetch('http://localhost:8080/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Handle successful response
        console.log('Form submitted successfully!');
      } else {
        // Handle error response
        console.error('Form submission failed!');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <section ref={ref} style={backgroundStyle} className="flex items-center justify-center w-full py-12 md:py-24 lg:py-32 box-border">    
    <Card className="flex flex-col max-w-2xl px-4 md:px-6 ">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
      </CardHeader>
      <CardContent className="flex h-full">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2 h-full w-full">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="first-name">First Name</Label>
              <Input id="first-name" placeholder="John" value={formData.firstName} onChange={handleChange}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="last-name">Last Name</Label>
              <Input id="last-name" placeholder="Doe" value={formData.lastName} onChange={handleChange}/>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="company">Company Name</Label>
            <Input id="company" placeholder="Acme Inc." value={formData.company} onChange={handleChange}/>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" placeholder="+1 (555) 555-5555" value={formData.phone} onChange={handleChange}/>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="john@example.com" type="email" value={formData.email} onChange={handleChange}/>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="budget">Approximate Budget</Label>
              <Select id="budget" value={formData.budget} onValueChange={(value) => handleSelectChange('budget', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select budget" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-50">$0 - $50</SelectItem>
                  <SelectItem value="50-250">$50 - $250</SelectItem>
                  <SelectItem value="250-500">$250 - $500</SelectItem>
                  <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                  <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
                  <SelectItem value="5000-plus">$5,000+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="timeframe">Time Frame</Label>
              <Select id="timeframe" value={formData.timeframe} onValueChange={(value) => handleSelectChange('timeframe', value)}>
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
            <Textarea className="min-h-[100px]" id="urls" placeholder="Enter URLs separated by commas" value={formData.urls} onChange={onChange} style={{ resize: 'none' }} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="comments">Comments/Questions</Label>
            <Textarea className="min-h-[100px]" id="comments" placeholder="Enter your comments or questions" value={formData.urls} onChange={onChange} style={{ resize: 'none' }} />
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
