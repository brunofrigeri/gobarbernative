import React, { useMemo } from 'react';
import { format } from 'date-fns'
import { Container, Left, Info, Name } from './styles';

export default function Schedule({ data }) {

  // const dateFormatted = useMemo(() => format(data.date, "HH:mm"), [data.date])

  return (
    <Container past={data.past}>
     <Left>
        <Info>
          <Name>{data.date}</Name>
        </Info>
      </Left>
    </Container>
  )
}
