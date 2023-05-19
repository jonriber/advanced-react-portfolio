import {useEffect} from "react";
import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";
import FullScreenSection from "./FullScreenSection"


function ContactMeSection(){
    const {isLoading, response, submit} = useSubmit();
    const { onOpen } = useAlertContext();

    const formik = useFormik({
        initialValues: {
            firstName:"",
            email:"",
            type:"",
            comment:""
        },
        onSubmit: (values) => {
            console.log("values:",values)
            submit("",values.firstName)
        },
        validationSchema: Yup.object({
            firstName:Yup.string().label("full name").required(),
            email: Yup.string().email().required(),
            type: Yup.string().oneOf(["hireMe","openSource","other"]),
            comment: Yup.string().required()
        }),
      });

      useEffect(() =>{
        if(response){
            console.log("tenho response!",response)
            onOpen(response.type,response.message)
            
        }
        return(() => {
            if(response && response.type ==="success") formik.resetForm()
        })
      },[response])

    //   console.log("response",response)
    return(
        <>
            <FullScreenSection
                isDarkBackground
                backgroundColor={"#512DA8"}
                py={16}
                spacing={8}
            >
                <VStack w="1024px" p={32} alignItems="flex-start">
                    <Heading as="h1" id="contact-me-section">
                    Contact me
                    </Heading>
                    <Box p={6} rounded="md" w="100%">
                    <form onSubmit={(e) => formik.handleSubmit(e)}>
                        <VStack spacing={4}>
                        <FormControl isInvalid={formik.errors.firstName && formik.touched.firstName}>
                            <FormLabel htmlFor="firstName">Name</FormLabel>
                            <Input
                            id="firstName"
                            name="firstName"
                            value={formik.getFieldProps("firstName").value}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.email && formik.touched.email}>
                            <FormLabel htmlFor="email">Email Address</FormLabel>
                            <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formik.getFieldProps("email").value}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>
                        <FormControl>
                            <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                            <Select id="type" name="type" value={formik.getFieldProps("type").value}
                            onChange={formik.handleChange}>
                            <option value="hireMe">Freelance project proposal</option>
                            <option value="openSource">
                                Open source consultancy session
                            </option>
                            <option value="other">Other</option>
                            </Select>
                        </FormControl>
                        <FormControl isInvalid={formik.errors.comment && formik.touched.comment}>
                            <FormLabel htmlFor="comment">Your message</FormLabel>
                            <Textarea
                            id="comment"
                            name="comment"
                            placeholder='Your message'
                            height={250}
                            value={formik.getFieldProps("comment").value}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}

                            />
                            <FormErrorMessage>Required</FormErrorMessage>
                        </FormControl>
                        <Button type="submit" colorScheme="purple" width="full" isLoading={isLoading} loadingText="Submitting">
                            Submit
                        </Button>
                        </VStack>
                    </form>
                    </Box>
                </VStack>
            </FullScreenSection>
        </>
    )
}

export default ContactMeSection