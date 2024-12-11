import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui";
import React from "react";

const PatientsPageComponent = () => {
  return (
    <Card className="w-full h-full rounded-2xl">
      <CardHeader>
        <CardTitle className="text-lg font-semibold dark:text-gray-200 text-gray-700">
          Mes Patients
        </CardTitle>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  );
};

export default PatientsPageComponent;