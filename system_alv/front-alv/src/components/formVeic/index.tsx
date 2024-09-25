import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

interface VehicleDetails {
  name: string;
  model: string;
  brand: string;
  type: string;
}

const vehicleDatabase: Record<string, VehicleDetails> = {
  ABC1234: { name: "Honda Civic", model: "2022", brand: "Honda", type: "Car" },
  XYZ5678: {
    name: "Toyota Corolla",
    model: "2021",
    brand: "Toyota",
    type: "Car",
  },
  DEF9012: { name: "Ford F-150", model: "2023", brand: "Ford", type: "Truck" },
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

  useEffect(() => {
    const getVehicleDetails = async () => {
      if (plate.length === 8 || plate.length === 7) {
        setIsLoading(true);
        const details = await fetchVehicleDetails(plate.toUpperCase().replace("-",""));
        setVehicleDetails(details);
        onVehicleDetailsChange(details);
        setIsLoading(false);
      } else {
        setVehicleDetails(null);
        onVehicleDetailsChange(null);
      }
    };

    getVehicleDetails();
  }, [plate]);

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
      {isLoading && <div>Loading vehicle details...</div>}
      {vehicleDetails && (
        <>
          <div className="space-y-2">
            <Label>Vehicle Name</Label>
            <Input value={vehicleDetails.name} readOnly />
          </div>
          <div className="space-y-2">
            <Label>Model</Label>
            <Input value={vehicleDetails.model} readOnly />
          </div>
          <div className="space-y-2">
            <Label>Brand</Label>
            <Input value={vehicleDetails.brand} readOnly />
          </div>
          <div className="space-y-2">
            <Label>Type</Label>
            <Input value={vehicleDetails.type} readOnly />
          </div>
        </>
      )}
    </>
  );
}
