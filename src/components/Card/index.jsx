import { Button, Card, Stack, Input } from '@chakra-ui/react'
import { Field } from '/src/components/ChackraUI/field.jsx'
import { memo } from 'react'
import { Column, Row } from '../Common'

const StyledCard = ({
  variant = 'elevated',
  title = 'Title',
  buttonLable1 = 'b1Label',
  buttonLabel2 = 'b2Label',
  handleButton1Click = () => {},
  handleButton2Click = () => {},
  description,
  prefix = null,
}) => {
  return (
    <Stack gap='4' direction='row' wrap='wrap'>
      <Card.Root width='320px' variant={variant} key={variant}>
        {prefix}
        <Column style={{ alignItems: 'center', padding: '4px 4px' }}>
          <Card.Title mb='2'>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </Column>
        <Card.Body gap='2'>
          <Field label='First Name'>
            <Input />
          </Field>
          <Field label='Last Name'>
            <Input />
          </Field>
        </Card.Body>
        <Card.Footer justifyContent='flex-end'>
          <Button variant='outline' onClick={handleButton1Click}>
            {buttonLable1}
          </Button>
          <Button onClick={handleButton2Click}>{buttonLabel2}</Button>
        </Card.Footer>
      </Card.Root>
    </Stack>
  )
}

export default memo(StyledCard)
