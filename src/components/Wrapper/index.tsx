import { FC, ReactNode } from 'react'
import { Flex } from '@chakra-ui/react'

interface IWrapperProps {
  children: ReactNode;
}

export function Wrapper({ children }: IWrapperProps) {
  return (
    <Flex
      h='100%'
      as='section'
      pr={[5, 10, 120]}
      pl={[5, 10, 120]}
      alignItems='center'
      flexDirection='column'
    >
      {children}
    </Flex>
  )
}

export default Wrapper
