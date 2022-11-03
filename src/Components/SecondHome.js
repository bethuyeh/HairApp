import { HStack } from 'native-base'
import React from 'react'
import Second from '../Data/Second'
import SecondCard from './SecondCard'


const SecondHome = () => {
  return (
    <HStack>
      {
        Second.map((i) => {
            return (
                <SecondCard key={i.id} image={i.image} Text={i.Text}/>
            )
        })
      }

    </HStack>
  )
}

export default SecondHome;