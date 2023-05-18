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
    return(
        <>
            <FullScreenSection
                isDarkBackground
                backgroundColor={"#512DA8"}
                py={16}
                spacing={8}
            >
            </FullScreenSection>
        </>
    )
}

export default ContactMeSection