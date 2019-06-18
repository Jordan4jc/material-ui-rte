import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Button from "@material-ui/core/Button"
import ButtonGroup from "@material-ui/core/ButtonGroup"
import FormatAlignLeftIcon from "@material-ui/icons/FormatAlignLeft"
import FormatAlignCenterIcon from "@material-ui/icons/FormatAlignCenter"
import FormatAlignRightIcon from "@material-ui/icons/FormatAlignRight"
import clsx from "clsx"
import styles from "./styles"

const useStyles = makeStyles(styles, {
  name: "MuiRte-InlineAlignmentControls"
})

const INLINE_STYLES = [
  { icon: FormatAlignLeftIcon, style: "LEFT" },
  { icon: FormatAlignCenterIcon, style: "CENTER" },
  { icon: FormatAlignRightIcon, style: "RIGHT" }
]

const InlineAlignmentControls = props => {
  const classes = useStyles()
  const currentStyle = props.editorState.getCurrentInlineStyle()
  const renderIcon = type => {
    let IconName = type.icon
    return (
      <IconName
        className={clsx({
          [classes.activeIcon]: currentStyle.has(type.style)
        })}
      />
    )
  }
  return (
    <ButtonGroup size="small" variant="contained">
      {INLINE_STYLES.map(
        type => (
          <Button
            key={type.style}
            onClick={() =>
              props.onChange(
                type.style,
                INLINE_STYLES.filter(t => t.style !== type.style).map(
                  t => t.style
                )
              )
            }
          >
            {renderIcon(type)}
          </Button>
        )
        // <Button key={type.style} onClick={() => console.log(props.editorState.getBlockTree())}>{renderIcon(type)}</Button>
      )}
    </ButtonGroup>
  )
}

export default InlineAlignmentControls
