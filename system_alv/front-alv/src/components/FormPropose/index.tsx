import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { SwitchButton } from "../ui/switchButton";

interface ProposeDetails {
  rendaMensal: number;
  emprego: string;
  valorFinanciado: number;
  entrada: number;
  prazo: number;
  qtdSeguro: number;
  valorParcela: number;
  semEntrada: boolean;
}

export default function FormPropose() {
  const [proposeFormData, setProposeFormData] = useState<ProposeDetails>({
    rendaMensal: 0.0,
    emprego: "",
    valorFinanciado: 0.0,
    entrada: 0.0,
    prazo: 0,
    qtdSeguro: 0,
    valorParcela: 0.0,
    semEntrada: false,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const numericValue =
      name === "rendaMensal" ||
      name === "valorFinanciado" ||
      name === "entrada" ||
      name === "valorParcela"
        ? parseFloat(value) || 0
        : value;

    setProposeFormData((prev) => ({ ...prev, [name]: numericValue }));
  };

  const handleSelectChange = (name: string) => (value: string) => {
    setProposeFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleSemEntrada = () => {
    setProposeFormData((prev) => ({ ...prev, semEntrada: !prev.semEntrada }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="rendaMensal">Renda Mensal</Label>
        <Input
          id="rendaMensal"
          name="rendaMensal"
          type="number"
          value={proposeFormData.rendaMensal}
          onChange={handleInputChange}
          placeholder="R$"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="emprego">Situação Empregatícia</Label>
        <Select onValueChange={handleSelectChange("emprego")}>
          <SelectTrigger>
            <SelectValue placeholder="Selecione a situação" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="empregado">Empregado</SelectItem>
            <SelectItem value="autonomo">Autônomo</SelectItem>
            <SelectItem value="desempregado">Desempregado</SelectItem>
            <SelectItem value="aposentado">Aposentado</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <Label htmlFor="valorFinanciado">Valor do Financiamento</Label>
        <Input
          id="valorFinanciado"
          name="valorFinanciado"
          type="number"
          value={proposeFormData.valorFinanciado}
          onChange={handleInputChange}
          placeholder="R$"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="prazo">Prazo do Financiamento (meses)</Label>
        <Input
          id="prazo"
          name="prazo"
          type="number"
          value={proposeFormData.prazo}
          onChange={handleInputChange}
          placeholder="24"
        />
      </div>
      <div className="flex items-center space-x-2">
        <SwitchButton
          isActive={proposeFormData.semEntrada}
          onToggle={toggleSemEntrada}
        />
        <Label className="text-sm leading-6 text-gray-600 ml-2">
          Sem entrada
        </Label>
      </div>
    </div>
  );
}
