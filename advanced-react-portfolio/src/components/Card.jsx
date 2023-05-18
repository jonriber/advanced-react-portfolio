/* eslint-disable react/prop-types */
import { Box,Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Card({title,description,src}){
    console.log("title:",title)

    return(
        <>
            <VStack bg={"white"} color={"black"}  borderRadius={"15px"} spacing={6} >
                <Box>
                    <Image src={src} borderRadius={"15px"}/>
                </Box>
                <Box justifyContent={"flex-start"}>
                    <Heading as={"h2"} size={"md"}>{title}</Heading>
                    <Text>{description}</Text>
                    <HStack alignItems={"baseline"}>
                        <Heading>See more</Heading>
                        <FontAwesomeIcon icon={faArrowRight} size="1x" />
                    </HStack>
                </Box>
                
            </VStack>
            
        </>
    )
}

export default Card