import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui'
import React from 'react'
import ServicesForm from '../components/pro/services-form'

const ProServicesStep = () => {
  return (
    <Card className='h-full rounded-2xl'>
      <CardHeader>
        <CardTitle>Services</CardTitle>
        <CardDescription>
          Vous êtes maintenant sur la page pour renseigner vos services. <br /> Vous pouvez modifier ces services à tout moment.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ServicesForm />
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  )
}

export default ProServicesStep