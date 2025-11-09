import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function CheckoutCard() {
  const services = {
    "Web Design": [
      { tier: "Basic", price: 199 },
      { tier: "Pro", price: 499 },
      { tier: "Enterprise", price: 999 },
    ],
    "Data Science": [
      { tier: "Starter", price: 299 },
      { tier: "Advanced", price: 699 },
      { tier: "Full Suite", price: 1299 },
    ],
    "Tutoring": [
      { tier: "Hourly", price: 50 },
      { tier: "Weekly", price: 180 },
      { tier: "Monthly", price: 600 },
    ],
  };

  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState("Web Design");
  const [selectedTier, setSelectedTier] = useState(services["Web Design"][0]);
  const [contact, setContact] = useState({ name: "", email: "" });
  const [cardInfo, setCardInfo] = useState({ number: "", expiry: "", cvc: "" });

  const handleServiceChange = (service) => {
    setSelectedService(service);
    setSelectedTier(services[service][0]);
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleContactChange = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };
  const handleCardInfoChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    console.log({
      selectedService,
      selectedTier,
      contact,
      cardInfo
    });
    // here you’d trigger your email + Stripe charge logic
    // then redirect or show success
  };

  return (
    <div className="flex justify-end p-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold">
            Checkout
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6">
          {step === 1 && (
            <>
              {/* Service & Tier */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Select Service</Label>
                  <Select value={selectedService} onValueChange={handleServiceChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {Object.keys(services).map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Select Tier</Label>
                  <Select
                    value={selectedTier.tier}
                    onValueChange={(tierValue) => {
                      const tier = services[selectedService].find((t) => t.tier === tierValue);
                      if (tier) setSelectedTier(tier);
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a tier" />
                    </SelectTrigger>
                    <SelectContent>
                      {services[selectedService].map((t) => (
                        <SelectItem key={t.tier} value={t.tier}>
                          {t.tier} – ${t.price}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="text-center text-lg font-semibold">
                  Total: <span className="text-primary">${selectedTier.price}</span>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              {/* Contact Info */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Name</Label>
                  <Input
                    name="name"
                    value={contact.name}
                    onChange={handleContactChange}
                    placeholder="Your full name"
                  />
                </div>
                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    name="email"
                    value={contact.email}
                    onChange={handleContactChange}
                    placeholder="you@example.com"
                  />
                </div>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              {/* Card Information */}
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Card Number</Label>
                  <Input
                    name="number"
                    value={cardInfo.number}
                    onChange={handleCardInfoChange}
                    placeholder="1234 1234 1234 1234"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Expiry (MM/YY)</Label>
                    <Input
                      name="expiry"
                      value={cardInfo.expiry}
                      onChange={handleCardInfoChange}
                      placeholder="MM/YY"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>CVC</Label>
                    <Input
                      name="cvc"
                      value={cardInfo.cvc}
                      onChange={handleCardInfoChange}
                      placeholder="CVC"
                    />
                  </div>
                </div>
              </div>
            </>
          )}

          {step === 4 && (
            <>
              {/* Confirmation */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Confirm Your Order</h3>
                <p>Service: {selectedService}</p>
                <p>Tier: {selectedTier.tier}</p>
                <p>Total: ${selectedTier.price}</p>
                <p>Name: {contact.name}</p>
                <p>Email: {contact.email}</p>
              </div>
            </>
          )}
        </CardContent>

        <CardFooter className="flex justify-between">
          {step > 1 && <Button variant="secondary" onClick={prevStep}>Back</Button>}
          {step < 4 && <Button onClick={nextStep}>Next</Button>}
          {step === 4 && <Button onClick={handleConfirm}>Confirm & Pay</Button>}
        </CardFooter>
      </Card>
    </div>
  );
}
