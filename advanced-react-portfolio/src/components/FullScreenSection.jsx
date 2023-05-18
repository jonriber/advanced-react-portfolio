/* eslint-disable react/prop-types */
import { VStack } from "@chakra-ui/react"

//component composition and spreading props 
const FullScreenSection = ({children,isDarkBackground,...boxProps}) => {
    return(
        <VStack
            backgroundColor={boxProps.backgroundColor}
            color={isDarkBackground? "white":"black"}
            
        >
            <VStack 
                alignItems={boxProps.alignItems}
                maxWidth={"1280px"} 
                minHeight={"100vh"} 
                marginTop={boxProps.marginTop}
            >
                {children}
            </VStack>

        </VStack>
    )
}

export default FullScreenSection