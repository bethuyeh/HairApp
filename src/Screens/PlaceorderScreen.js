import { Box, ScrollView } from 'native-base'
import React from 'react'
import OrderInfo from './OrderInfo'
import Colors from '../Color'
import {FontAwesome, FontAwesome5} from '@expo/vector-icons'
import OrderItems from '../Components/OrderItems'
import PlaceModel from '../Components/PlaceModel'

const PlaceorderScreen = () => {
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}> 
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalSrcollIndicator={false}
                >
                    <OrderInfo 
                        title="CUSTOMER"
                        subTitle="Jane Doe"
                        text="user@gmail.com"
                        icon={
                            <FontAwesome 
                              name="user" 
                              size={30} 
                              color={Colors.white} 
                              />}
                    />
                    <OrderInfo 
                        title="SHIPPING INFO"
                        subTitle="Shipping: Nigeria"
                        text="Payment Method: Card"
                        icon={
                            <FontAwesome5 
                              name="shipping-fast" 
                              size={30} 
                              color={Colors.white} 
                              />}
                    />

`                   <OrderInfo 
                        title="DELIVERY INFO"
                        subTitle="Address: Nigeria"
                        text="Gudu Junction, Abuja"
                        icon={
                            <FontAwesome5 
                              name="location" 
                              size={30} 
                              color={Colors.white} 
                              />}
                    />
                    


                </ScrollView>
            </Box>
            {/* Order Item */}
            <Box px={6} flex={1} pb={3}>
                <Heading bold fontSize={15} isTruncated my={4}>
                    PRODUCTS
                </Heading>
                <OrderItems/>
                {/* Total */}
                <PlaceModel/>
            </Box>
        </Box>
  )
}

export default PlaceorderScreen