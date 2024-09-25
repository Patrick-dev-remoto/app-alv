import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

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

const fetchVehicleDetails = async (
  plate: string
): Promise<VehicleDetails | null> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return vehicleDatabase[plate] || null;
};

interface FormVehicleProps {
  onVehicleDetailsChange: (details: VehicleDetails | null) => void;
}

export default function FormVehicle({
  onVehicleDetailsChange,
}: FormVehicleProps) {
  const [plate, setPlate] = useState<string>("");
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails>({
    name: "",
    modelYear: "",
    manufacturingYear: "",
    brand: "",
    type: "",
    price: "",
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isManualInput, setIsManualInput] = useState<boolean>(false);

  useEffect(() => {
    const getVehicleDetails = async () => {
      if (plate.length === 7 || plate.length === 8) {
        setIsLoading(true);
        const details = await fetchVehicleDetails(
          plate.toUpperCase().replace("-", "")
        );

        if (details) {
          setVehicleDetails(details);
        } else {
          setVehicleDetails({
            name: "",
            modelYear: "",
            manufacturingYear: "",
            brand: "",
            type: "",
            price: "",
          });
        }
        setIsLoading(false);
      } else {
        setVehicleDetails({
          name: "",
          modelYear: "",
          manufacturingYear: "",
          brand: "",
          type: "",
          price: "",
        });
      }
    };

    getVehicleDetails();
  }, [plate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setVehicleDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const toggleManualInput = () => {
    setIsManualInput((prev) => !prev);
  };

  return (
    <div className="p-4 border rounded-lg shadow-md bg-gray-50">
      <div className="space-y-2">
        <Label htmlFor="plate">Vehicle Plate</Label>
        <div className="flex items-center gap-2">
          <Input
            id="plate"
            name="plate"
            value={plate}
            onChange={(e) => setPlate(e.target.value)}
            placeholder="ABC1234"
            maxLength={8}
            className="shadow-sm focus:outline-none focus-visible:ring-0 rounded-lg"
          />
          <div className="flex items-center">
            <button
              type="button"
              onClick={toggleManualInput}
              className={`flex w-8 h-6 items-center cursor-pointer rounded-full transition-colors duration-200 ease-in-out ${
                isManualInput ? "bg-indigo-600" : "bg-gray-200"
              }`}
              role="switch"
              aria-checked={isManualInput}
              aria-labelledby="switch-1-label"
            >
              <span className="sr-only">Toggle Manual Input</span>
              <span
                aria-hidden="true"
                className={`absolute h-4 w-4 rounded-full bg-white shadow-sm transition duration-200 ease-in-out transform ${
                  isManualInput ? "-translate-x-[16px]" : "translate-x-0"
                }`}
              ></span>
            </button>
            <Label
              className="text-sm leading-6 text-gray-600 ml-2"
              id="switch-1-label"
            >
              Manual
            </Label>
          </div>
        </div>
      </div>
      {isManualInput && (
        <div className="mt-4">
          <div className="border p-4 rounded-lg bg-white shadow-sm">
            <Label>Vehicle Name</Label>
            <Input
              name="name"
              value={vehicleDetails.name}
              onChange={handleInputChange}
            />
            <Label>Model Year</Label>
            <Input
              name="modelYear"
              value={vehicleDetails.modelYear}
              onChange={handleInputChange}
            />
            <Label>Manufacturing Year</Label>
            <Input
              name="manufacturingYear"
              value={vehicleDetails.manufacturingYear}
              onChange={handleInputChange}
            />
            <Label>Brand</Label>
            <Input
              name="brand"
              value={vehicleDetails.brand}
              onChange={handleInputChange}
            />
            <Label>Type</Label>
            <Input
              name="type"
              value={vehicleDetails.type}
              onChange={handleInputChange}
            />
            <Label>Price</Label>
            <Input
              name="price"
              value={vehicleDetails.price}
              onChange={handleInputChange}
            />
          </div>
        </div>
      )}
    </div>
  );
}
