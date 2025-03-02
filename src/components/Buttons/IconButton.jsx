import { Button, Icon } from '@chakra-ui/react'

const IconButton = ({ icon, onClick, size }) => {
  return (
    <Button variant='outline' boxSize={size} onClick={onClick}>
      <Icon as={icon} />
    </Button>
  )
}

export default IconButton
