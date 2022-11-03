import {  VStack, Heading, MaterialIcons, Input, Icon} from 'native-base'
import React from 'react'
import {FontAwesome} from '@expo/vector-icons'

const Search = () => {

  return (
    <VStack>
    <Input 
    placeholder="Search Saloons, Stylists..etc" 
    width="100%" 
    borderRadius="4"
    borderWidth="3" 
    mt="1"
    py="3"
    borderColor="cyan.200"
    placeholderTextColor="muted.400"
    fontSize="16" 
    InputLeftElement={
        <Icon 
        m="2" 
        ml="3" 
        size="6" 
        color="muted.400" 
        as={<FontAwesome name="search" />} />}
     />
     </VStack>
  )
  }
export default Search;
