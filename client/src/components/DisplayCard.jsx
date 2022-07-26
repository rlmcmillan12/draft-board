import React from 'react'
import styled from 'styled-components'
import { srmToHex } from 'beer-color'

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  padding-left: 50px;
  border: 2px solid black;
  margin: 4px;
  background-image: linear-gradient(to bottom right, #1d1d1d9f, #00000013);
`
const Labels = styled.div`
  display: flex;
  flex-direction: column;
`
const Name = styled.span`
  font-weight: bold;
  font-size: 1.2em;
`
const Style = styled.span`
  font-size: 0.8em;
  font-style: oblique;
  padding-left: 12px;
`
const Stats = styled.div`
  display: flex;
  width: 75%;
  justify-content: space-around;
  padding-bottom: 8px;
  font-size: 0.8em;
`
const ABV = styled.div``
const IBU = styled.div``
const Color = styled.div`
  display: flex;
`
const ColorBox = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${(props) => props.srmHex};
  opacity: 0.7;
  width: 70px;
  color: ${(props) => props.fontColor};
  margin-left: 5px;
  align-items: center;
  font-size: 0.8em;
  border-radius: 2px;
`
function fontColorPicker(srm) {
  if (srm > 18.5) return 'white'
  return 'black'
}

function DisplayCard(props) {
  const draft = props.draft
  const srmHex = srmToHex(draft.color)
  const fontColor = fontColorPicker(draft.color)

  return (
    <CardContainer>
      <Labels>
        <Name>{draft.name}</Name>
        <Style>{draft.style}</Style>
      </Labels>
      <Stats>
        <ABV>ABV: {draft.abv}</ABV>
        <IBU>IBU: {draft.ibu}</IBU>
        <Color>
          Color:
          <ColorBox fontColor={fontColor} srmHex={srmHex}>
            {draft.color}srm
          </ColorBox>
        </Color>
      </Stats>
    </CardContainer>
  )
}

export default DisplayCard
