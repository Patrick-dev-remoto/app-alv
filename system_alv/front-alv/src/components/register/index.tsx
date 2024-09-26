"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FormVehicle from "../FormVeic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import FormClient from "../FormClient";
import FormPropose from "../FormPropose";

export default function Register() {
  const [vehicleDetails, setVehicleDetails] = useState<any>(null);
  const [formData, setFormData] = useState({
    plate: "",
    clientName: "",
    birthDate: "",
    cpf: "",
    rg: "",
    issuingAgency: "",
    issueDate: "",
    motherName: "",
    fatherName: "",
    cellPhone: "",
    telephone: "",
    email: "",
    address: "",
    income: "",
    employmentStatus: "",
    financingAmount: "",
    financingTerm: "",
    hasInsurance: false,
  });

  const handleVehicleDetailsChange = (details: any) => {
    setVehicleDetails(details);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <Card className="w-full mx-auto">
      <CardHeader>
        <CardTitle>Formulário F&I</CardTitle>
        <CardDescription>
          Preencha as informações do veículo, cliente e proposta
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem
              value="vehicle"
              className="border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-2 rounded-lg bg-gray-50 hover:border-bluec transition-colors focus-visible:border-bluec focus:border-bluec focus:outline-none decoration-transparent">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-semibold">
                    Informações do Veículo
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-white">
                <FormVehicle
                  onVehicleDetailsChange={handleVehicleDetailsChange}
                />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="customer"
              className="border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-2 rounded-lg bg-gray-50 hover:border-bluec transition-colors focus-visible:border-bluec focus:border-bluec focus:outline-none decoration-transparent">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-semibold">
                    Informações do Cliente
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-white">
              <FormClient />
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="proposal"
              className="border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-2 rounded-lg bg-gray-50 hover:border-bluec transition-colors focus-visible:border-bluec focus:border-bluec focus:outline-none decoration-transparent">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-semibold">Proposta</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-white">
                <FormPropose />
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </form>
      </CardContent>
      <CardFooter>
        <Button type="submit" className="w-full" onClick={handleSubmit}>
          Enviar Formulário
        </Button>
      </CardFooter>
    </Card>
  );
}
