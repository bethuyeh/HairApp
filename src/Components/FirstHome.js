import {HStack} from 'native-base'
import React from 'react'
import FirstData from '../Data/FirstData'
import FirstCard from './FirstCard'


const FirstHome = () => {
  return (
    <HStack>
      {
        FirstData.map((i) => {
            return (
                <FirstCard key={i.id} image={i.image} Text={i.Text}/>
            )
        })
      }

    </HStack>
  )
}

export default FirstHome;