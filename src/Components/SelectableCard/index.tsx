import React from "react"
import styled from "styled-components"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardMedia from "@mui/material/CardMedia"
import Checkbox from "@mui/material/Checkbox"
import FormControlLabel from "@mui/material/FormControlLabel"

/**
 * A card component whihc can be selected
 * @param id, string id to supply a value for selection of card
 * @param label, string label of checkbox in CardActions
 * @param headerImageSrc srting value, source of CardMedia image
 * @param selected, boolean value to show selected/unselected styles and checkbox state
 * @param onClick, function, slect or unselect card upon cliking either card or checkbox
 */

export type SelectableCardProps = {
  id: string
  label: string
  headerImageSrc: string
  selected: boolean
  onClick: (key: string) => void
}

export const SelectableCard = ({ label, headerImageSrc, selected, onClick, id }: SelectableCardProps) => {
  return (
    <StyledCard variant="outlined" aria-selected={selected} selected={selected} onClick={() => onClick(id)} data-testid="selectable-card">
      <CardMedia component="img" height="100" image={headerImageSrc} alt={label} />

      <StyledCardActions>
        <FormControlLabel control={<Checkbox checked={selected} onClick={() => onClick(id)} />} label={label} />
      </StyledCardActions>
    </StyledCard>
  )
}

/**
 * Border color and box shaddow can be override in styleOverrides
 * as well as here in styled component
 * I've updated border-redius using MUI theme styleOverrides but overide
 * the border and box shadow specifically in this card not globally
 */
const StyledCard = styled(Card)<{ selected: boolean }>`
  max-width: 290px;
  border: 1px solid ${({ theme, selected }) => (selected ? theme.colors.primary : theme.colors.grey200)} !important;
  box-shadow: ${({ theme, selected }) => selected && theme.shadows.shadow1};
  transition: box-shadow 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, border 100ms cubic-bezier(0.4, 0, 0.2, 1) 0ms !important;
  cursor: pointer;

  &:hover {
    box-shadow: ${({ theme }) => theme.shadows.shadow1};
  }
`

const StyledCardActions = styled(CardActions)`
  padding: 6px 16px !important;
`
