import { Flex, Text } from "@chakra-ui/react";

export function InfoContinent() {
  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      w='100%'
      pt={[5, 10, 20]}
      pb={[5, 10, 20]}
    >
      <Text
        w={['100%', '100%', '50%']}
        fontSize={[14, 16, 24]}
        color='gray.700'
      >
        A Europa é, por convenção, um dos seis continentes do mundo.
        Compreendendo a península ocidental da Eurásia, a Europa geralmente
        divide-se da Ásia a leste pela divisória de águas dos montes Urais,
        o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
      </Text>

      <Flex
        w={['100%', '100%', '50%']}
        align='center'
        justifyContent='space-between'
        p={[5, 10, 6]}
      >
        <Flex flexDirection='column' align='center'>
          <Text
            color='yellow.500'
            fontSize={[20, 28, 48]}
            fontWeight='bold'
          >
            50
          </Text>

          <Text
            color='gray.700'
            fontSize={[14, 16, 24]}
            fontWeight='bold'
          >
            países
          </Text>
        </Flex>

        <Flex flexDirection='column' align='center'>
          <Text
            color='yellow.500'
            fontSize={[20, 28, 48]}
            fontWeight='bold'
          >
            60
          </Text>

          <Text
            color='gray.700'
            fontSize={[14, 16, 24]}
            fontWeight='bold'
          >
            línguas
          </Text>
        </Flex>

        <Flex flexDirection='column' align='center'>
          <Text
            color='yellow.500'
            fontSize={[20, 28, 48]}
            fontWeight='bold'
          >
            27
          </Text>

          <Text
            color='gray.700'
            fontSize={[14, 16, 24]}
            fontWeight='bold'
          >
            cidades +100
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
