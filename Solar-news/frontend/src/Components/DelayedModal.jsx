// DelayedModal.jsx
import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import dialoge_img from "../Images/galo-dialoge.jpg";
const DelayedModal = ({ isOpen, onClose }) => {
  return (
    <Modal size="xl"  isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent borderRadius="md" boxShadow="xl" bg="white">
        {/* Modal Header */}
        <ModalHeader
          textAlign="center"
          fontSize="2xl"
          fontWeight="bold"
          color="teal.500"
        >
          Special Offer!
        </ModalHeader>

        {/* Modal Close Button */}
        <ModalCloseButton color="teal.500" />

        {/* Modal Body */}
        <ModalBody bg='gray.100'>
          <Box textAlign="center">
            {/* Poster Image */}
            <Box mb={4}>
              <img
                src={dialoge_img}
                alt="Poster"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </Box>

            {/* Offer Details */}
            <Text fontSize="lg" as="" mb={4}>
              <span style={{fontWeight:"bold"}}>STRONG TECHNICAL BACKGROUND</span> <br/> Galo’s products are proudly
              manufactured in India thus giving service support to the
              customers.
            </Text>

            {/* Action Button (if needed) */}
            <Button colorScheme="teal" onClick={onClose}>
              Click me
            </Button>
          </Box>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default DelayedModal;
