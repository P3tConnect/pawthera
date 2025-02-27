'use client';

import { Pet } from '@/src/db';
import { ActionResult } from '@/src/lib';
import React, { use } from 'react';
import { PetCard } from './pet-card';

const PetsGrid = ({ pets }: { pets: Promise<ActionResult<Pet[]>> }) => {
  const petsResult = use(pets);

  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
      {petsResult.data?.length === 0 ? (
        <div className='flex flex-col items-center justify-center h-full w-full'>
          <p className='text-sm text-center text-muted-foreground'>
            Vous n&apos;avez pas d&apos;animaux enregistrés
          </p>
        </div>
      ) : (
        petsResult.data?.map((pet) => (
          <PetCard
            key={pet.id}
            pet={pet}
            onDelete={async () => {
              // await fetchPets();
            }}
          />
        ))
      )}
    </div>
  );
};

export default PetsGrid;
