import { Logo } from '../Logo'
import { Flex, Icon } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      h='100'
      w='100%'
      as='header'
      pr={[5, 10, 120]}
      pl={[5, 10, 120]}
      alignItems='center'
    >
      <Icon as={RiArrowLeftSLine} fontSize='32' />

      <Logo />
    </Flex>
  )
}
