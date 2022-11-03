import { Text, View } from 'native-base'
import React from 'react'
import {useraccount} from "../../assets/useraccount.png"
import Tabs from './Profile/Tabs'

const ProfileScreen = () => {
    return (
        <>
            <Center bg={Colors.main} pt={10} pb={6}>
                <Image 
                    source={{
                        uri:{useraccount}
                    }}
                    alt="profile"
                    w={24}
                    h={24}
                    resizeMode="cover"
                />
                <Heading bold fontSize={15} isTruncated my={2} color={Colors.white}>
                    Jane Doe
                </Heading>
                <Text italic fontSize={10} color={Coloros.white}>
                    Joined Dec 12 2022
                </Text>
            </Center>
            
            {/* TABS */}
            <Tabs/>
        </>
  )
}

export default ProfileScreen