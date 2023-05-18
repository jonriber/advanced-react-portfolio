import { Box, HStack } from "@chakra-ui/react"

const Footer = () => {
    return(
        <>
            <Box
                position={"sticky"}
                bottom={0}
                left={0}
                right={0}
                bg={"black"}
                color={"white"}
            >
                <HStack alignItems={"center"} justifyContent={"center"}>
                    <Box>Footer</Box>
                    
                </HStack>
            </Box>
        </>
    )
}

export default Footer