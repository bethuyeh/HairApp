import { Box, ScrollView } from 'native-base'
import React from 'react'
import OrderInfo from './OrderInfo'
import Colors from '../Color'
import { FontAwesome5, Ionicons} from '@expo/vector-icons'
import OrderItems from '../Components/OrderItems'
import OrderModel from '../Components/PlaceModel'

const OrderScreen = () => {
    return (
        <Box bg={Colors.subGreen} flex={1} safeArea pt={6}> 
            <Box>
                <ScrollView
                    horizontal={true}
                    showsHorizontalSrcollIndicator={false}
                >
                    
                    <OrderInfo 
                        title="SHIPPING INFO"
                        success
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
                        danger
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
                <OrderModel/>
            </Box>
        </Box>
  )
}

export default OrderScreen