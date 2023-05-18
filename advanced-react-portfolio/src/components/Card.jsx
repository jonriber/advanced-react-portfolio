/* eslint-disable react/prop-types */
import {Box} from "@chakra-ui/react"

function Card({children,...props}){

    console.log("props:",props);

    return(
        <>
            <Box>
                <h1>{props.title}</h1>
                {children}
            </Box>
            
        </>
    )
}

export default Card