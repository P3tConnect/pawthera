import {
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui";
import {
  Plus,
  UserPlus,
  FileText,
  Stethoscope,
  MessageSquarePlus,
  Bell,
  Calendar,
} from "lucide-react";
import React from "react";

const NewShortcut = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="rounded-xl flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 text-white hover:opacity-90 transition-opacity shadow-sm"
          size="default"
        >
          <Plus className="h-4 w-4" />
          <p className="font-semibold">Nouveau</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56">
        <DropdownMenuLabel className="font-bold">
          Créer un nouveau...
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <UserPlus className="h-4 w-4" />
            <span>Client</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <Calendar className="h-4 w-4" />
            <span>Rendez-vous</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <Stethoscope className="h-4 w-4" />
            <span>Patient</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <FileText className="h-4 w-4" />
            <span>Rapport</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <MessageSquarePlus className="h-4 w-4" />
            <span>Observation</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="gap-2 cursor-pointer">
            <Bell className="h-4 w-4" />
            <span>Rappel</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default NewShortcut;
