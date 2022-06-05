import { Logo } from '../Logo'
import { Flex, Icon } from '@chakra-ui/react'
import { RiArrowLeftSLine } from 'react-icons/ri'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  console.log('router: ', router)

  return (
    <Flex
      h={[50, 100]}
      w='100%'
      as='header'
      pr={[5, 10, 120]}
      pl={[5, 10, 120]}
      alignItems='center'
    >
      {router.pathname !== '/' && (
        <Icon
          onClick={() => router.back()}
          as={RiArrowLeftSLine}
          fontSize='32'
          cursor='pointer'
        />
      )}

      <Logo />
    </Flex>
  )
}
