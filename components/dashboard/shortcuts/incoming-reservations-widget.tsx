import { Button, Card, CardContent, CardHeader, CardTitle } from '@/components/ui'
import { MoreVertical } from 'lucide-react'
import React from 'react'

const IncomingReservationsWidget = () => {
  return (
    <Card className='w-full h-full bg-background rounded-2xl'>
      <CardHeader className='flex flex-row justify-between items-center'>
        <CardTitle className='text-xl font-bold'>Réservations a traiter</CardTitle>
        <Button variant="outline" className='rounded-full h-7 w-7 p-0'>
          <MoreVertical size={18} />
        </Button>
      </CardHeader>
      <CardContent></CardContent>
    </Card>
  )
}

export default IncomingReservationsWidget