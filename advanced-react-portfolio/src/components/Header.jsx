import { faEnvelope} from "@fortawesome/free-solid-svg-icons"
import { faGithub , faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box, HStack } from "@chakra-ui/react"

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

    return(
        <Box 
            position={"sticky"}
            top={0}
            left={0}
            right={0}
            translateY={0}
            transitionProperty={"transform"}
            transitionDuration={".3s"}
            transitionTimingFunction="ease-in-out"
            bg={"#18181b"}
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