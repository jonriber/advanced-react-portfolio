/* eslint-disable react/prop-types */
import { Box,Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({title,description,src}){
    
    return(
        <>
            <VStack bg={"white"} color={"black"}  borderRadius={"15px"} spacing={9}>
                <Box >
                    <Image src={src} borderRadius={"15px"}/>
                </Box>
                <Box paddingLeft={"15px"} paddingBottom={"15px"}>
                    <Heading as={"h2"} size={"md"}>{title}</Heading>
                    <Text marginTop={"10px"} marginBottom={"10px"}>{description}</Text>
                    <HStack alignItems={"baseline"} spacing={4}>
                        <Heading as={"h4"} size={"sm"}>See more</Heading>
                        <FontAwesomeIcon icon={faArrowRight} size="1x" />
                    </HStack>
                </Box>
            </VStack>
        </>
    )
}

export default Card