import { Container, Text, VStack, Heading, Button, Box, Image, Flex } from "@chakra-ui/react";
import { FaRocket } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Welcome to MC2C</Heading>
        <Text fontSize="lg" textAlign="center">Your journey to mastering web development starts here.</Text>
        <Button colorScheme="teal" size="lg" rightIcon={<FaRocket />}>Get Started</Button>
      </VStack>
      <Box mt={10}>
        <Image src="/images/landing-page-image.jpg" alt="Landing Page Image" borderRadius="md" />
      </Box>
      <Flex mt={10} direction="column" align="center">
        <Heading as="h2" size="lg" mb={4}>Features</Heading>
        <VStack spacing={4}>
          <Text fontSize="md">🚀 Fast and Efficient</Text>
          <Text fontSize="md">💡 Innovative Solutions</Text>
          <Text fontSize="md">🔒 Secure and Reliable</Text>
        </VStack>
      </Flex>
    </Container>
  );
};

export default Index;