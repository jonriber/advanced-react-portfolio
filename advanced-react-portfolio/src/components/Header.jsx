import { faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack } from "@chakra-ui/react"
import {useEffect, useState} from "react"

const headerData = [
    {
        icon: faEnvelope,
        url: "mailto: jonatas@prottaribeiro.com",
    },
    {
        icon: faGithub,
        url: "https://github.com",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com",
    },
]
function Header(){

    const [y,setY] = useState(0)
    const [lastY,setLastY] = useState(0)
    const scrollDown = y>0;

    const handleScroll = () => {

        const scrollY = window.scrollY
        if(scrollY)
        setY(scrollY)
    }

    useEffect(() => {
        document.addEventListener("scroll",handleScroll)

        return(() => {
            document.removeEventListener("scroll",handleScroll)
        })
    },[y])


    function handleClick(anchor){
        const 
            id = `${anchor}-section`,
            element = document.getElementById(id);
        console.log("id and element:",id, element);
        if(element){
            element.scrollIntoView({
                behavior: "smooth",
                block:"start"
            });
        }
    }
    console.log("scrollDown:",scrollDown)
    return(
        <Box 
            position={"sticky"}
            top={0}
            left={0}
            right={0}
            transform={ scrollDown ?"translateY(-200px)":"translateY(0)"}
            transitionProperty="transform"
            transitionDuration={".3s"}
            transitionTimingFunction="ease-in-out"
            bg={"#18181b"}
            // zIndex={scrollDown ? -1:0}
        >
            <Box color="white" maxWidth="1280px" margin="0 auto">
                <HStack
                    px={16}
                    py={4}
                    justifyContent="space-between"
                    alignItems="center"
                >
                    <nav>
                        <HStack spacing={5}>
                            {headerData.map((item,index) => {
                                return(<Box key={index}><a href={item.url}><FontAwesomeIcon icon={item.icon} size="2x" /></a></Box>)
                            })}
                        </HStack>
                    </nav>
                    <nav>
                        <HStack spacing={8}>
                            <Box><a href="/#projects" onClick={() => handleClick("projects")}>Projects</a></Box>
                            <Box><a href="/#contact-me" onClick={() => handleClick("contact-me")}>Contact Me</a></Box>
                        </HStack>
                    </nav>
                </HStack>
            </Box>
        </Box>
    )
}

export default Header