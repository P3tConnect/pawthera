import {
  Card,
  CardContent,
  CardTitle,
  CardHeader,
  Badge,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import React from "react";

const MonthExpensesWidget = () => {
  return (
    <Dialog>
      <DialogTrigger asChild className="group hover:cursor-pointer">
        <Card className="w-full bg-background rounded-2xl font-bold hover:bg-[#EEEFF6] hover:dark:bg-[#313131] transition-all duration-400">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-2xl font-bold">Dépenses du mois</CardTitle>
            <ArrowUpRight className="h-4 w-4 group-hover:h-6 group-hover:w-6 transition-all duration-600" />
          </CardHeader>
          <CardContent className="flex justify-start items-center gap-5">
            <h3 className="font-bold text-4xl">2 500€</h3>
            <Badge variant="secondary">-10.5%</Badge>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dépenses du mois</DialogTitle>
          <DialogClose />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default MonthExpensesWidget;
