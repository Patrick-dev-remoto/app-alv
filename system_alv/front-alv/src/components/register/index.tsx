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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import FormVehicle from "../FormVeic";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export default function Register() {
  const [vehicleDetails, setVehicleDetails] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string) => (date: Date | undefined) => {
    setFormData((prev) => ({
      ...prev,
      [name]: date ? format(date, "yyyy-MM-dd") : "",
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1939 }, (_, i) =>
    (currentYear - i).toString()
  );
  const months = Array.from({ length: 12 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );
  const days = Array.from({ length: 31 }, (_, i) =>
    (i + 1).toString().padStart(2, "0")
  );

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
              <AccordionTrigger className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-semibold">
                    Informações do Cliente
                  </span>
                  <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-200" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="clientName">Nome do Cliente</Label>
                    <Input
                      id="clientName"
                      name="clientName"
                      value={formData.clientName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Data de Nascimento</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Select onValueChange={handleSelectChange("birthDay")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Dia" />
                        </SelectTrigger>
                        <SelectContent>
                          {days.map((day) => (
                            <SelectItem key={day} value={day}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select onValueChange={handleSelectChange("birthMonth")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Mês" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select onValueChange={handleSelectChange("birthYear")}>
                        <SelectTrigger>
                          <SelectValue placeholder="Ano" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cpf">CPF</Label>
                    <Input
                      id="cpf"
                      name="cpf"
                      value={formData.cpf}
                      onChange={handleInputChange}
                      placeholder="000.000.000-00"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="rg">RG</Label>
                    <Input
                      id="rg"
                      name="rg"
                      value={formData.rg}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="issuingAgency">Órgão Emissor</Label>
                    <Input
                      id="issuingAgency"
                      name="issuingAgency"
                      value={formData.issuingAgency}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Data de Emissão</Label>
                    <div className="grid grid-cols-3 gap-2">
                      <Select
                        onValueChange={handleSelectChange("issueDayDate")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Dia" />
                        </SelectTrigger>
                        <SelectContent>
                          {days.map((day) => (
                            <SelectItem key={day} value={day}>
                              {day}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select
                        onValueChange={handleSelectChange("issueMonthDate")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Mês" />
                        </SelectTrigger>
                        <SelectContent>
                          {months.map((month) => (
                            <SelectItem key={month} value={month}>
                              {month}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <Select
                        onValueChange={handleSelectChange("issueYearDate")}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Ano" />
                        </SelectTrigger>
                        <SelectContent>
                          {years.map((year) => (
                            <SelectItem key={year} value={year}>
                              {year}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="motherName">Nome da Mãe</Label>
                    <Input
                      id="motherName"
                      name="motherName"
                      value={formData.motherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fatherName">Nome do Pai</Label>
                    <Input
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cellPhone">Celular</Label>
                    <Input
                      id="cellPhone"
                      name="cellPhone"
                      value={formData.cellPhone}
                      onChange={handleInputChange}
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telephone">Telefone Fixo</Label>
                    <Input
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleInputChange}
                      placeholder="(00) 0000-0000"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="address">Endereço</Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="proposal"
              className="border rounded-lg overflow-hidden"
            >
              <AccordionTrigger className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="flex items-center justify-between w-full">
                  <span className="text-lg font-semibold">Proposta</span>
                  <ChevronDown className="h-4 w-4 text-gray-500 transition-transform duration-200" />
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-4 py-2 bg-white">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="income">Renda Mensal</Label>
                    <Input
                      id="income"
                      name="income"
                      type="number"
                      value={formData.income}
                      onChange={handleInputChange}
                      placeholder="R$"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employmentStatus">
                      Situação Empregatícia
                    </Label>
                    <Select
                      onValueChange={handleSelectChange("employmentStatus")}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Selecione a situação" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="employed">Empregado</SelectItem>
                        <SelectItem value="self-employed">Autônomo</SelectItem>
                        <SelectItem value="unemployed">Desempregado</SelectItem>
                        <SelectItem value="retired">Aposentado</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="financingAmount">
                      Valor do Financiamento
                    </Label>
                    <Input
                      id="financingAmount"
                      name="financingAmount"
                      type="number"
                      value={formData.financingAmount}
                      onChange={handleInputChange}
                      placeholder="R$"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="financingTerm">
                      Prazo do Financiamento (meses)
                    </Label>
                    <Input
                      id="financingTerm"
                      name="financingTerm"
                      type="number"
                      value={formData.financingTerm}
                      onChange={handleInputChange}
                      placeholder="24"
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="hasInsurance"
                      checked={formData.hasInsurance}
                      onCheckedChange={(checked) =>
                        setFormData((prev) => ({
                          ...prev,
                          hasInsurance: checked as boolean,
                        }))
                      }
                    />
                    <Label htmlFor="hasInsurance">
                      Incluir Seguro do Veículo
                    </Label>
                  </div>
                </div>
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
