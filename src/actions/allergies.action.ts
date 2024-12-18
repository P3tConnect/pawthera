"use server";

import { CreateAllergySchema, allergies } from "../db";

import { ZSAError } from "zsa";
import { clientAction } from "../lib/action";
import { db } from "../lib";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const getAllergies = clientAction.handler(async () => {
  const data = await db.query.allergies.findMany();

  if (!data) {
    throw new ZSAError("NOT_FOUND", "Allergies not found");
  }

  return data;
});

export const createAllergy = clientAction
  .input(CreateAllergySchema)
  .handler(async ({ input }) => {
    const data = await db.insert(allergies).values(input).returning().execute();

    if (!data) {
      throw new ZSAError("ERROR", "Allergy not created");
    }

    return data;
  });

export const updateAllergy = clientAction
  .input(CreateAllergySchema)
  .handler(async ({ input }) => {
    const data = await db
      .update(allergies)
      .set(input)
      .where(eq(allergies.id, input.id as string))
      .returning()
      .execute();

    if (!data) {
      throw new ZSAError("ERROR", "Allergy not updated");
    }

    return data;
  });

export const deleteAllergy = clientAction
  .input(z.string())
  .handler(async ({ input }) => {
    const data = await db
      .delete(allergies)
      .where(eq(allergies.id, input))
      .execute();

    if (!data) {
      throw new ZSAError("ERROR", "Allergy not deleted");
    }
  });
