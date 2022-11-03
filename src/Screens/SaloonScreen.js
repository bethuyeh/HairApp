import { Box, Text } from 'native-base'
import React from 'react'
import SaloonData from '../Data/SaloonData'
import SaloonCard from '../Components/SaloonCard'

const SaloonScreen = () => {
  return (
    <Box>
      {
        SaloonData.map((i) => {
            return (
                <Box>
                <SaloonCard 
                    key={i.id} 
                    image={i.image} 
                    name={i.name} 
                    location={i.location}
                    distance={i.distance}
                    rating={i.rating}
                    />
                </Box>
            )
        })
      }
    </Box>
  )
}

export default SaloonScreen