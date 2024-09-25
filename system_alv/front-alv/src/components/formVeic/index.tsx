import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface VehicleDetails {
  name: string;
  modelYear: string; // Ano do modelo
  manufacturingYear: string; // Ano de fabricação
  brand: string;
  type: string;
  price: string; // Preço do carro
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
  // Simulate API delay
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
  const [vehicleDetails, setVehicleDetails] = useState<VehicleDetails | null>(
    null
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isManualInput, setIsManualInput] = useState<boolean>(false);
  const [manualDetails, setManualDetails] = useState<VehicleDetails>({
    name: "",
    modelYear: "",
    manufacturingYear: "",
    brand: "",
    type: "",
    price: "",
  });

  useEffect(() => {
    const getVehicleDetails = async () => {
      if (plate.length === 7 || plate.length === 8) {
        setIsLoading(true);
        const details = await fetchVehicleDetails(
          plate.toUpperCase().replace("-", "")
        );
        setVehicleDetails(details);
        onVehicleDetailsChange(details);
        setIsLoading(false);
        setIsManualInput(!details); // Enable manual input if not found
      } else {
        setVehicleDetails(null);
        onVehicleDetailsChange(null);
        setIsManualInput(false); // Reset manual input if plate is invalid
      }
    };

    getVehicleDetails();
  }, [plate]);

  const handleManualInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setManualDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleManualSubmit = () => {
    setVehicleDetails(manualDetails);
    onVehicleDetailsChange(manualDetails);
  };

  return (
    <>
      <div className="space-y-2">
        <Label htmlFor="plate">Vehicle Plate</Label>
        <Input
          id="plate"
          name="plate"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
          placeholder="ABC1234"
          maxLength={8}
        />
      </div>
      {!isLoading && (
        <>
          {vehicleDetails ? (
            <>
              <div className="space-y-2">
                <Label>Vehicle Name</Label>
                <Input value={vehicleDetails.name} readOnly />
              </div>
              <div className="space-y-2">
                <Label>Model Year</Label>
                <Input value={vehicleDetails.modelYear} readOnly />
              </div>
              <div className="space-y-2">
                <Label>Manufacturing Year</Label>
                <Input value={vehicleDetails.manufacturingYear} readOnly />
              </div>
              <div className="space-y-2">
                <Label>Brand</Label>
                <Input value={vehicleDetails.brand} readOnly />
              </div>
              <div className="space-y-2">
                <Label>Type</Label>
                <Input value={vehicleDetails.type} readOnly />
              </div>
              <div className="space-y-2">
                <Label>Price</Label>
                <Input value={vehicleDetails.price} readOnly />
              </div>
            </>
          ) : isManualInput ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Vehicle Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={manualDetails.name}
                  onChange={handleManualInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="modelYear">Model Year</Label>
                <Input
                  id="modelYear"
                  name="modelYear"
                  value={manualDetails.modelYear}
                  onChange={handleManualInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="manufacturingYear">Manufacturing Year</Label>
                <Input
                  id="manufacturingYear"
                  name="manufacturingYear"
                  value={manualDetails.manufacturingYear}
                  onChange={handleManualInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="brand">Brand</Label>
                <Input
                  id="brand"
                  name="brand"
                  value={manualDetails.brand}
                  onChange={handleManualInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="type">Type</Label>
                <Input
                  id="type"
                  name="type"
                  value={manualDetails.type}
                  onChange={handleManualInputChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="price">Price</Label>
                <Input
                  id="price"
                  name="price"
                  value={manualDetails.price}
                  onChange={handleManualInputChange}
                />
              </div>
              <Button onClick={handleManualSubmit}>
                Submit Manual Details
              </Button>
            </div>
          ) : null}
        </>
      )}
    </>
  );
}
