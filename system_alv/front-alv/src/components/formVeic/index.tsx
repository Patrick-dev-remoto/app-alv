import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { SwitchButton } from "../ui/switchButton";

interface VehicleDetails {
  name: string;
  modelYear: string;
  manufacturingYear: string;
  brand: string;
  type: string;
  price: string;
}

const vehicleDatabase: Record<string, VehicleDetails> = {
  ABC1234: {
    name: "Honda Civic",
    modelYear: "2022",
    manufacturingYear: "2021",
    brand: "Honda",
    type: "Car",
    price: "R$ 100.000",
  },
  XYZ5678: {
    name: "Toyota Corolla",
    modelYear: "2021",
    manufacturingYear: "2020",
    brand: "Toyota",
    type: "Car",
    price: "R$ 90.000",
  },
  DEF9012: {
    name: "Ford F-150",
    modelYear: "2023",
    manufacturingYear: "2022",
    brand: "Ford",
    type: "Truck",
    price: "R$ 200.000",
  },
};

const fields = [
  { label: "Nomde do Veículo", name: "name" },
  { label: "Modelo Ano", name: "modelYear" },
  { label: "Fabricação Ano", name: "manufacturingYear" },
  { label: "Marca", name: "brand" },
  { label: "Tipo", name: "type" },
  { label: "Preço", name: "price" },
];

const fetchVehicleDetails = async (
  plate: string
): Promise<VehicleDetails | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return vehicleDatabase[plate] || null;
};

const initialVehicleDetails: VehicleDetails = {
  name: "",
  modelYear: "",
  manufacturingYear: "",
  brand: "",
  type: "",
  price: "",
};

interface FormVehicleProps {
  onVehicleDetailsChange: (details: VehicleDetails | null) => void;
}

export default function FormVehicle({
  onVehicleDetailsChange,
}: FormVehicleProps) {
  const [plate, setPlate] = useState<string>("");
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails>(
    initialVehicleDetails
  );
  const [isManualInput, setIsManualInput] = useState<boolean>(false);

  useEffect(() => {
    const getVehicleDetails = async () => {
      if (plate.length === 7 || plate.length === 8) {
        const details = await fetchVehicleDetails(
          plate.toUpperCase().replace("-", "")
        );
        setVehicleDetails(details || initialVehicleDetails);
      } else {
        setVehicleDetails(initialVehicleDetails);
      }
    };
    getVehicleDetails();
  }, [plate]);

  const handleInputChange = ({
    target: { name, value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setVehicleDetails((prev) => ({
      ...prev,
      [name as keyof VehicleDetails]: value,
    }));
  };

  return (
    <div className="p-0 ">
      <div className="space-y-2">
        <Label htmlFor="plate">Placa do veículo</Label>
        <div className="flex items-center gap-2">
          <Input
            className="duration-200 ease-in-out focus:outline-none focus:border-bluec focus-visible:ring-0 hover:border-bluec"
            id="plate"
            name="plate"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            placeholder="ABC1234"
            maxLength={8}
          />
          <div className="flex items-center">
            <SwitchButton
              isActive={isManualInput}
              onToggle={() => setIsManualInput((prev) => !prev)}
            />
            <Label className="text-sm leading-6 text-gray-600 ml-2">
              Manual
            </Label>
          </div>
        </div>
      </div>
      {isManualInput && (
        <div className="mt-4">
          <div>
            {fields.map(({ label, name }) => (
              <div key={name} className="flex flex-col gap-2 mb-2">
                <Label>{label}</Label>
                <Input
                className="duration-200 ease-in-out focus:outline-none focus:border-bluec focus-visible:ring-0 hover:border-bluec"
                  name={name}
                  value={vehicleDetails[name as keyof VehicleDetails]}
                  onChange={handleInputChange}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
