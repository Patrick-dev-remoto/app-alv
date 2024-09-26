import { useState } from "react";
import { format } from "date-fns";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ClientDetails {
  nome: string;
  dataBirth: string;
  cpf: string;
  rg: string;
  orgaoEm: string;
  dataEm: string;
  nomeMae: string;
  nomePai: string;
  celular: string;
  telefone: string;
  email: string;
  endereco: string;
}

export default function FormClient() {
  const [formClientData, setFormClientData] = useState<ClientDetails>({
    nome: "",
    dataBirth: "",
    cpf: "",
    rg: "",
    orgaoEm: "",
    dataEm: "",
    nomeMae: "",
    nomePai: "",
    celular: "",
    telefone: "",
    email: "",
    endereco: "",
  });

  const handleSelectChange = (name: string) => (value: string) => {
    setFormClientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormClientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (name: string) => (date: Date | undefined) => {
    setFormClientData((prev) => ({
      ...prev,
      [name]: date ? format(date, "yyyy-MM-dd") : "",
    }));
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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="clientName">Nome do Cliente</Label>
        <Input
          id="clientName"
          name="clientName"
          value={formClientData.nome}
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
          value={formClientData.cpf}
          onChange={handleInputChange}
          placeholder="000.000.000-00"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rg">RG</Label>
        <Input
          id="rg"
          name="rg"
          value={formClientData.rg}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="issuingAgency">Órgão Emissor</Label>
        <Input
          id="issuingAgency"
          name="issuingAgency"
          value={formClientData.orgaoEm}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Data de Emissão</Label>
        <div className="grid grid-cols-3 gap-2">
          <Select onValueChange={handleSelectChange("issueDayDate")}>
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
          <Select onValueChange={handleSelectChange("issueMonthDate")}>
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
          <Select onValueChange={handleSelectChange("issueYearDate")}>
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
          value={formClientData.nomeMae}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fatherName">Nome do Pai</Label>
        <Input
          id="fatherName"
          name="fatherName"
          value={formClientData.nomePai}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cellPhone">Celular</Label>
        <Input
          id="cellPhone"
          name="cellPhone"
          value={formClientData.celular}
          onChange={handleInputChange}
          placeholder="(00) 00000-0000"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telephone">Telefone Fixo</Label>
        <Input
          id="telephone"
          name="telephone"
          value={formClientData.telefone}
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
          value={formClientData.email}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Endereço</Label>
        <Input
          id="address"
          name="address"
          value={formClientData.endereco}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
