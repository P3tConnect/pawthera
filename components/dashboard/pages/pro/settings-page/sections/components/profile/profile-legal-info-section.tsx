"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { updateOrganization } from "@/src/actions/organization.action";
import { useFormChangeToast } from "@/src/hooks/useFormChangeToast";
import { Organization } from "@/src/db/organization";
import { organizationFormSchema } from "../../profile-section";

interface ProfileLegalInfoSectionProps {
  org: Organization;
}

export const ProfileLegalInfoSection = ({ org }: ProfileLegalInfoSectionProps) => {
  const form = useForm<z.infer<typeof organizationFormSchema>>({
    resolver: zodResolver(organizationFormSchema),
    values: {
      name: org?.name || "",
      email: org?.email || "",
      website: "",
      address: org?.addressId || "",
      description: org?.description || "",
      openAt: org?.openAt || "09:00",
      closeAt: org?.closeAt || "18:00",
      atHome: org?.atHome || false,
      nac: org?.nac || "",
      siren: org?.siren || "",
      siret: org?.siret || "",
    },
  });

  const { handleSubmit } = form;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await updateOrganization(data);
      toast.success("Modifications enregistrées avec succès !");
    } catch (error) {
      toast.error("Erreur lors de l'enregistrement des modifications");
    }
  });

  useFormChangeToast({
    form,
    onSubmit,
    message: "Modifications en attente",
    description: "Pensez à sauvegarder vos changements",
    position: "bottom-center",
  });

  return (
    <Form {...form}>
      <form onSubmit={onSubmit}>
        <Card>
          <CardHeader>
            <CardTitle>Informations légales</CardTitle>
            <CardDescription>
              Numéros d&apos;identification de votre organisation
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="siren"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numéro SIREN</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="123456789"
                        maxLength={9}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="siret"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Numéro SIRET</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="12345678900000"
                        maxLength={14}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </CardContent>
        </Card>
      </form>
    </Form>
  );
}; 