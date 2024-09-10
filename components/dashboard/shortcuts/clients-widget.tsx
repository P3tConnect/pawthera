"use client";

import {
  Badge,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import { ArrowUpRight } from "lucide-react";
import React, { useState } from "react";

const ClientsProWidget = () => {
  const [viewMode, setViewMode] = useState("week");

  return (
    <Dialog>
      <DialogTrigger asChild className="group">
        <Card className="w-full bg-background rounded-2xl hover:bg-[#EEEFF6] hover:dark:bg-[#313131] transition-all duration-400">
          <CardHeader className="flex flex-row justify-between items-center">
            <CardTitle className="text-2xl font-bold">
              Total des clients ce mois
            </CardTitle>
            <ArrowUpRight className="h-4 w-4 group-hover:h-6 group-hover:w-6 transition-all duration-600" />
          </CardHeader>
          <CardContent className="flex justify-start items-center gap-5">
            <h3 className="font-bold text-4xl text-secondary">450</h3>
            <Badge>+ 130%</Badge>
          </CardContent>
        </Card>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Total des clients ce mois</DialogTitle>
          <DialogClose />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ClientsProWidget;
