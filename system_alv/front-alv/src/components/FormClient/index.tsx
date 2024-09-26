import { useState } from "react";
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
  endereco: {
    cep: string;
    rua: string;
    bairro: string;
    complemento?: string;
    numero: string;
    cidade: string;
    estado: string;
  };
  tipoResidencia: string;
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
    endereco: {
      cep: "",
      rua: "",
      bairro: "",
      complemento: "",
      numero: "",
      cidade: "",
      estado: "",
    },
    tipoResidencia: "",
  });

  const handleSelectChange = (name: string) => (value: string) => {
    setFormClientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in formClientData.endereco) {
      setFormClientData((prev) => ({
        ...prev,
        endereco: { ...prev.endereco, [name]: value },
      }));
    } else {
      setFormClientData((prev) => ({ ...prev, [name]: value }));
    }
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
          name="nome"
          value={formClientData.nome}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Data de Nascimento</Label>
        <div className="grid grid-cols-3 gap-2">
          <Select onValueChange={handleSelectChange("dataBirth")}>
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
          <Select onValueChange={handleSelectChange("dataBirth")}>
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
          <Select onValueChange={handleSelectChange("dataBirth")}>
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
          name="orgaoEm"
          value={formClientData.orgaoEm}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label>Data de Emissão</Label>
        <div className="grid grid-cols-3 gap-2">
          <Select onValueChange={handleSelectChange("dataEm")}>
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
          <Select onValueChange={handleSelectChange("dataEm")}>
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
          <Select onValueChange={handleSelectChange("dataEm")}>
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
          name="nomeMae"
          value={formClientData.nomeMae}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="fatherName">Nome do Pai</Label>
        <Input
          id="fatherName"
          name="nomePai"
          value={formClientData.nomePai}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cellPhone">Celular</Label>
        <Input
          id="cellPhone"
          name="celular"
          value={formClientData.celular}
          onChange={handleInputChange}
          placeholder="(00) 00000-0000"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telephone">Telefone Fixo</Label>
        <Input
          id="telephone"
          name="telefone"
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
        <Label htmlFor="tipoResidencia">Tipo de Residência</Label>
        <Select onValueChange={handleSelectChange("tipoResidencia")}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="própria">Própria</SelectItem>
            <SelectItem value="alugada">Alugada</SelectItem>
            <SelectItem value="financiada">Financiada</SelectItem>
            <SelectItem value="outro">Outro</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="cep">CEP</Label>
        <Input
          id="cep"
          name="cep"
          value={formClientData.endereco.cep}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="rua">Rua</Label>
        <Input
          id="rua"
          name="rua"
          value={formClientData.endereco.rua}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="bairro">Bairro</Label>
        <Input
          id="bairro"
          name="bairro"
          value={formClientData.endereco.bairro}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="complemento">Complemento (opcional)</Label>
        <Input
          id="complemento"
          name="complemento"
          value={formClientData.endereco.complemento}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="numero">Número</Label>
        <Input
          id="numero"
          name="numero"
          value={formClientData.endereco.numero}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="cidade">Cidade</Label>
        <Input
          id="cidade"
          name="cidade"
          value={formClientData.endereco.cidade}
          onChange={handleInputChange}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="estado">Estado</Label>
        <Input
          id="estado"
          name="estado"
          value={formClientData.endereco.estado}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
}
