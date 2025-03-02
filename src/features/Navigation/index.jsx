import { memo } from "react";
import { Link } from "react-router-dom";

import {
  Sticky,
  useDisclosure,
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@chakra-ui/react";
import IconButton from "../../components/Buttons/IconButton";
import { RxHamburgerMenu } from "react-icons/rx";
import { Row } from "../../components/Common";
import "./styles.css";
import NavigationPaths from "./NavigationPaths";

function Navigation() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Row style={{ position: "fixed", marginTop: "20px", zIndex: "99999" }}>
      <DrawerRoot
        placement={"start"}
        isOpen={isOpen}
        onClose={onClose}
        sx={{ display: "flex" }}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton icon={RxHamburgerMenu} onClick={onOpen} size="1.5em" />
        </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>For Glory and Fame!</DrawerTitle>
          </DrawerHeader>

          <DrawerBody>
            {NavigationPaths.map((path, index) => {
              return (
                <DrawerActionTrigger key={index} asChild>
                  <Link to={path.suffix} onClick={onClose}>
                    {path.text}
                  </Link>
                </DrawerActionTrigger>
              );
            })}
          </DrawerBody>

          <DrawerCloseTrigger onClick={onClose} />
        </DrawerContent>
      </DrawerRoot>
    </Row>
  );
}

export default memo(Navigation);
