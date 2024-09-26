import { useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import DateSelector from "../DataSelector";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ClientDetails {
  nome: string;
  diaNascimento: string;
  mesNascimento: string;
  anoNascimento: string;
  cpf: string;
  rg: string;
  orgaoEm: string;
  diaEmissao: string;
  mesEmissao: string;
  anoEmissao: string;
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

const fields = [
  { label: "Nome do Cliente", name: "nome" },
  { label: "CPF", name: "cpf", placeholder: "000.000.000-00" },
  { label: "RG", name: "rg" },
  { label: "Órgão Emissor", name: "orgaoEm" },
  { label: "Nome da Mãe", name: "nomeMae" },
  { label: "Nome do Pai", name: "nomePai" },
  { label: "Celular", name: "celular", placeholder: "(00) 00000-0000" },
  { label: "Telefone Fixo", name: "telefone", placeholder: "(00) 0000-0000" },
  { label: "E-mail", name: "email", type: "email" },
];

const addressFields = [
  { label: "CEP", name: "cep" },
  { label: "Rua", name: "rua" },
  { label: "Bairro", name: "bairro" },
  { label: "Complemento (opcional)", name: "complemento" },
  { label: "Número", name: "numero" },
  { label: "Cidade", name: "cidade" },
  { label: "Estado", name: "estado" },
];

export default function FormClient() {
  const [formClientData, setFormClientData] = useState<ClientDetails>({
    nome: "",
    diaNascimento: "",
    mesNascimento: "",
    anoNascimento: "",
    cpf: "",
    rg: "",
    orgaoEm: "",
    diaEmissao: "",
    mesEmissao: "",
    anoEmissao: "",
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

  const handleDateChange = (
    field: "dia" | "mes" | "ano",
    type: "nascimento" | "emissao",
    value: string
  ) => {
    setFormClientData((prev) => ({
      ...prev,
      [`${field}${type.charAt(0).toUpperCase() + type.slice(1)}`]: value,
    }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {fields.map(({ label, name, placeholder, type }) => (
        <div key={name} className="space-y-2">
          <Label htmlFor={name}>{label}</Label>
          <Input
            id={name}
            name={name}
            value={formClientData[name as keyof ClientDetails] as string}
            onChange={handleInputChange}
            placeholder={placeholder}
            type={type}
          />
        </div>
      ))}

      <div className="space-y-2">
        <Label htmlFor="dataNascimento">Data de Nascimento</Label>
        <DateSelector
          dia={formClientData.diaNascimento}
          mes={formClientData.mesNascimento}
          ano={formClientData.anoNascimento}
          onChange={(field, value) =>
            handleDateChange(field, "nascimento", value)
          }
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="dataEmissao">Data de Emissão</Label>
        <DateSelector
          dia={formClientData.diaEmissao}
          mes={formClientData.mesEmissao}
          ano={formClientData.anoEmissao}
          onChange={(field, value) => handleDateChange(field, "emissao", value)}
        />
      </div>

      {addressFields.map(({ label, name }) => (
        <div key={name} className="space-y-2">
          <Label htmlFor={name}>{label}</Label>
          <Input
            id={name}
            name={name}
            value={
              formClientData.endereco[
                name as keyof ClientDetails["endereco"]
              ] || ""
            }
            onChange={handleInputChange}
          />
        </div>
      ))}

      <div className="space-y-2">
        <Label htmlFor="tipoResidencia">Tipo de Residência</Label>
        <Select
          onValueChange={(value) =>
            setFormClientData((prev) => ({ ...prev, tipoResidencia: value }))
          }
        >
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
    </div>
  );
}
