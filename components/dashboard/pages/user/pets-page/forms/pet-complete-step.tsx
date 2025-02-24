import React from 'react';

const PetCompleteStep = () => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center gap-2'>
      <p className='text-8xl'>🥳</p>
      <div className='flex flex-col text-center'>
        <h1 className='text-2xl font-bold'>
          Bravo ! Vous avez terminé le processus de création de votre animal !
        </h1>
        <p className='text-muted-foreground text-sm'>
          Vous pouvez maintenant prendre rendez-vous avec un professionnel
        </p>
        <p className='text-muted-foreground text-sm'>
          N&apos;hésitez pas à nous contacter si vous avez des questions
        </p>
      </div>
    </div>
  );
};

export default PetCompleteStep;
