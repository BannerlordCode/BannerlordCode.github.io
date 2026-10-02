---
title: "EditableTextWidget"
description: "Auto-generated class reference for EditableTextWidget."
---
# EditableTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditableTextWidget : BrushWidget `
**Base:** BrushWidget
**Source:** TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs

## Overview

Auto-generated stub for `EditableTextWidget`. Deep documentation is scheduled in a later pass.

## Mental Model

Auto-generated placeholder; to be replaced by the deep-documentation pass.

## Key Methods

### OnUpdate
`protected override void OnUpdate(float dt)`

### BlinkCursor
`protected void BlinkCursor()`

### ResetSelected
`protected void ResetSelected()`

### DeleteChar
`protected void DeleteChar(bool nextChar = false)`

### FindNextWordPosition
`protected int FindNextWordPosition(int direction)`

### MoveCursor
`protected void MoveCursor(int direction,bool withSelection = false)`

### GetAppendCharacterResult
`protected string GetAppendCharacterResult(int charCode)`

### AppendCharacter
`protected void AppendCharacter(int charCode)`

### AppendText
`protected void AppendText(string text)`

### DeleteText
`protected void DeleteText(int beginIndex,int endIndex)`

### CopyText
`protected void CopyText(int beginIndex,int endIndex)`

### PasteText
`protected void PasteText()`

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed)`

### OnGainFocus
`protected internal override void OnGainFocus()`

### OnLoseFocus
`protected internal override void OnLoseFocus()`

### OnLateUpdate
`protected override void OnLateUpdate(float dt)`

### OnRender
`protected override void OnRender(TwoDimensionContext twoDimensionContext,TwoDimensionDrawContext drawContext)`

### OnMousePressed
`protected internal override void OnMousePressed()`

### OnMouseReleased
`protected internal override void OnMouseReleased(bool isFromInput)`

### SetAllText
`public virtual void SetAllText(string text)`

## See Also

- [Section index](../)
