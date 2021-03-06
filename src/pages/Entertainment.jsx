import { ReactNode } from "react";
import {
  Stack,
  Container,
  Box,
  Flex,
  Text,
  Heading,
  SimpleGrid,
} from "@chakra-ui/react";
import { Layout } from "../components/Layout";
import { Link } from "react-router-dom";

export default function StatsGridWithImage() {
  return (
    <>
    <Layout/>
    <Box bg={"gray.800"} position={"relative"}>
      <Flex
        flex={1}
        zIndex={0}
        display={{ base: "none", lg: "flex" }}
        backgroundImage="url('/templates/stats-grid-with-image.png')"
        backgroundSize={"cover"}
        backgroundPosition="center"
        backgroundRepeat="no-repeat"
        position={"absolute"}
        width={"50%"}
        insetY={0}
        right={0}
      >
        <Flex
          bgGradient={"linear(to-r, gray.800 10%, transparent)"}
          w={"full"}
          h={"full"}
        />
      </Flex>
      <Container maxW={"7xl"} zIndex={10} position={"relative"}>
        <Stack direction={{ base: "column", lg: "row" }}>
          <Stack
            flex={1}
            color={"gray.400"}
            justify={{ lg: "center" }}
            py={{ base: 4, md: 20, xl: 60 }}
          >
            <Box mb={{ base: 8, md: 20 }}>
              <Text
                fontFamily={"heading"}
                fontWeight={700}
                textTransform={"uppercase"}
                mb={3}
                fontSize={"xl"}
                color={"gray.500"}
              >
                Entertainment
              </Text>
              <Heading
                color={"white"}
                mb={5}
                fontSize={{ base: "3xl", md: "5xl" }}
              >
                The best courses for budding Artists
              </Heading>
              <Text fontSize={"xl"} color={"gray.400"}>
                The best courses with India's leading teachers in the feilds of music, dance, theatre, film, cinema, and more.
                    </Text>
              <Text fontSize={"xl"} color={"gray.200"}>

                 </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              {stats.map((stat) => (
                <Box key={stat.title}>
                  <Text
                    fontFamily={"heading"}
                    fontSize={"3xl"}
                    color={"white"}
                    mb={3}
                  >
                    {stat.title}
                  </Text>
                  <Text fontSize={"xl"} color={"gray.400"}>
                    {stat.content}
                  </Text>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
                    
          <Flex flex={1} />
        </Stack>
        
      </Container>
    </Box>
    </>
  );
}

const StatsText = ({ children }: { children: ReactNode }) => (
  <Text as={"span"} fontWeight={700} color={"white"}>
    {children}
  </Text>
);

const stats = [
  {
    title: "Film",
    content: (
      <>
       <ul>
           <li>Acting</li>
           <li>Dancing</li>
           <li>Action</li>
       </ul>

      </>
    ),
  },
  {
    title: "Pre Production",
    content: (
      <>
        <ul>
           <li>Script</li>
           <li>Screenplay</li>
           <li>Dialogues</li>
            <li>Voiceover</li>
           <li>Dubbing</li>
           <li>Sound Recording</li>
       </ul>  
      </>
    ),
  },
  {
    title: "Production",
    content: (
      <>
        <ul>
           <li>Set Designing</li>
           <li>Set Lighting</li>
           <li>Camera</li>
            <li>Synk Sound</li>
           <li>Choreography</li>
           <li>Direction</li>
           <li>Make Up</li>
       </ul>  
      </>
    ),
  },

  {
    title: "Post Production",
    content: (
      <>
        <ul>
           <li>VFX</li>
           <li>Animation</li>
           <li>Editing</li>
            <li>DI / CC</li>
           <li>Music </li>
       </ul>  
      </>
    ),
  },
    {
    title: "Other Courses",
    content: (
      <>
        <ul>
           <li>Film Production</li>
           <li>Film Distribution</li>
           <li>Film Exhibition</li>
            <li>Media Planning</li>
           <li>Media Promotion</li>
           <li>OTT</li>
           <li>Film Economic</li>
           <li>Artist Management</li>
       </ul>  
      </>
    ),
  },
];
