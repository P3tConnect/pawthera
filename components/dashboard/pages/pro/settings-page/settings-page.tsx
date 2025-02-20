import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Building2,
  CreditCard,
  Users,
  FileText,
  Briefcase,
  Settings,
  Image,
  Clock,
} from "lucide-react";
import { ProfileSection } from "./sections/profile-section";
import { BillingSection } from "./sections/billing-section";
import { TeamSection } from "./sections/team-section";
import { DocumentsSection } from "./sections/documents-section";
import { ServicesSection } from "./sections/services-section";
import { OptionsSection } from "./sections/options-section";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import ImagesSection from "./sections/images-section";
import SlotsSection from "./sections/slotsSection";

const SettingsPageComponent = () => {
  return (
    <div>
      <Card className="overflow-hidden rounded-2xl mb-4">
        <CardHeader className="border-b border-gray-100 dark:border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div>
              <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                Paramètres de l&apos;organisation
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Gérez les paramètres et les préférences de votre organisation
              </p>
            </div>
          </div>
        </CardHeader>
      </Card>

      <div className="px-1">
        <Tabs defaultValue="profile" className="space-y-4">
          <TabsList>
            <TabsTrigger value="profile" className="flex items-center gap-2">
              <Building2 className="h-4 w-4" />
              Profil
            </TabsTrigger>
            <TabsTrigger value="images" className="flex items-center gap-2">
              <Image className="h-4 w-4" />
              Images
            </TabsTrigger>
            <TabsTrigger value="services" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Services
            </TabsTrigger>
            <TabsTrigger value="options" className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Options
            </TabsTrigger>
            <TabsTrigger value="slots" className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              Slots
            </TabsTrigger>
            <TabsTrigger value="documents" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Documents
            </TabsTrigger>
            <TabsTrigger value="billing" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Facturation
            </TabsTrigger>
            <TabsTrigger value="team" className="flex items-center gap-2">
              <Users className="h-4 w-4" />
              Équipe
            </TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <ProfileSection />
          </TabsContent>

          <TabsContent value="images">
            <ImagesSection />
          </TabsContent>

          <TabsContent value="services">
            <ServicesSection />
          </TabsContent>

          <TabsContent value="options">
            <OptionsSection />
          </TabsContent>

          <TabsContent value="slots">
            <SlotsSection />
          </TabsContent>

          <TabsContent value="documents">
            <DocumentsSection />
          </TabsContent>

          <TabsContent value="billing">
            <BillingSection />
          </TabsContent>

          <TabsContent value="team">
            <TeamSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SettingsPageComponent;
