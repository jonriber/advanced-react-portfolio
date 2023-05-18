import FullScreenSection from "./FullScreenSection"
import { Avatar, Heading, VStack } from "@chakra-ui/react";


const greeting = "Hello, I am Pete!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

function LandingSection(){
    return(
            <FullScreenSection
                justifyContent="center"
                alignItems="center"
                isDarkBackground
                backgroundColor="#2A4365"
                marginTop="20%"
            >
                <VStack>
                    <Avatar name="pete" src="https://i.pravatar.cc/150?img=7" size={"lg"}/>
                    <Heading as={"h5"} size={"sm"}>{greeting}</Heading>
                    <br/>
                    <Heading as={"h2"} size={"lg"}>{bio1}</Heading>
                    <Heading as={"h2"} size={"lg"}>{bio2}</Heading>

                </VStack>
            </FullScreenSection>
    )
}

export default LandingSection