import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface DateSelectorProps {
  dia: string;
  mes: string;
  ano: string;
  onChange: (field: "dia" | "mes" | "ano", value: string) => void;
}

const days = Array.from({ length: 31 }, (_, i) => (i + 1).toString());
const months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
const years = Array.from({ length: 83 }, (_, i) => (1940 + i).toString());

const DateSelector: React.FC<DateSelectorProps> = ({
  dia,
  mes,
  ano,
  onChange,
}) => {
  return (
    <div className="grid grid-cols-3 gap-2">
      <Select onValueChange={(value) => onChange("dia", value)}>
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

      <Select onValueChange={(value) => onChange("mes", value)}>
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

      <Select onValueChange={(value) => onChange("ano", value)}>
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
  );
};

export default DateSelector;
