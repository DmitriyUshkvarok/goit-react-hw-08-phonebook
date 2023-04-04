import React from 'react';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

const slides = [
  {
    id: 1,
    heading: 'Step 1',
    text: 'Register or login',
    imageUrl: 'https://www.pexels.com/ru-ru/photo/699459/',
  },
  {
    id: 2,
    heading: 'Step 2',
    text: 'Add contacts to your phonebook',
    imageUrl: 'https://example.com/step2.png',
  },
  {
    id: 3,
    heading: 'Step 3',
    text: 'Manage your contacts',
    imageUrl: 'https://example.com/step3.png',
  },
];

const Slider = () => {
  const bgColor = useColorModeValue('gray.50', 'gray.900');

  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((currentSlide + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <Box bg={bgColor} py="12" px="4">
      <Box maxW="container.lg" mx="auto">
        <Heading as="h2" size="xl" mb="8" textAlign="center">
          Welcome to Phonebook App
        </Heading>
        <Box position="relative" h="60">
          <Box
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <img
              src={slides[currentSlide].imageUrl}
              alt={slides[currentSlide].heading}
            />
          </Box>
          <Flex
            position="absolute"
            top="0"
            bottom="0"
            left="0"
            right="0"
            align="center"
            justify="space-between"
            pointerEvents="none"
            zIndex="1"
          >
            <Button
              variant="ghost"
              colorScheme="blue"
              size="lg"
              leftIcon={<ChevronLeftIcon />}
              onClick={handlePrevSlide}
            />
            <Button
              variant="ghost"
              colorScheme="blue"
              size="lg"
              rightIcon={<ChevronRightIcon />}
              onClick={handleNextSlide}
            />
          </Flex>
        </Box>
        <Box textAlign="center" mt="8">
          <Heading as="h3" size="lg" mb="4">
            {slides[currentSlide].heading}
          </Heading>
          <Text fontSize="xl">{slides[currentSlide].text}</Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Slider;
