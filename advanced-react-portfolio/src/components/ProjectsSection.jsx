import { Box, Heading } from "@chakra-ui/react"
import FullScreenSection from "./FullScreenSection"
import Card from "./Card"
import image1 from "../images/photo1.jpg"
import image2 from "../images/photo2.jpg"
import image3 from "../images/photo3.jpg"
import image4 from "../images/photo4.jpg"


const projectData = [
    {
        title: "React Space",
        description:
          "Handy tool belt to create amazing AR components in a React app, with redux integration via middleware️",
        src:image1,
      },
      {
        title: "React Infinite Scroll",
        description:
          "A scrollable bottom sheet with virtualisation support, native animations at 60 FPS and fully implemented in JS land 🔥️",
          src:image2,

      },
      {
        title: "Photo Gallery",
        description:
          "A One-stop shop for photographers to share and monetize their photos, allowing them to have a second source of income",
          src:image3,
        },
      {
        title: "Event planner",
        description:
          "A mobile application for leisure seekers to discover unique events and activities in their city with a few taps",
          src:image4,
        },
]

function ProjectsSection(){
    return(
        <>
            <FullScreenSection
                backgroundColor={"#14532d"}
                isDarkBackground
                p={8}
                alignItems="flex-start"
                spacing={8}
                marginTop={"30px"}
            >   
                <Box marginBottom={"30px"}>
                    <Heading as="h1" id="projects-section" >Featured Projects</Heading>
                </Box>
                <Box>
                    <Box display={"grid"} gridTemplateColumns={"repeat(2,minmax(0,1fr))"} gridGap={8}>
                        {projectData.map((project) => (
                            <Card key={project.title} {...project}/>
                        ))}
                    </Box>
                </Box>
            </FullScreenSection>
        </>
    )
}

export default ProjectsSection