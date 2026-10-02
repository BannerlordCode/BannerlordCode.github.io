---
title: "EditableTextWidget"
description: "EditableTextWidget 的自动生成类参考。"
---
# EditableTextWidget

**Namespace:** TaleWorlds.GauntletUI.BaseTypes
**Module:** TaleWorlds.GauntletUI
**Type:** `public class EditableTextWidget : BrushWidget `
**Base:** BrushWidget
**Source:** TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs

## 概述

`EditableTextWidget` 的自动生成类参考页面。声明来自 `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs`（ILSpy 反编译产物，已剥离 Token/RVA 注释）。

## 心智模型

自动生成的初始占位段落，后续由深写波次替换。

## 主要方法

### OnUpdate
`protected override void OnUpdate(float dt) `

### BlinkCursor
`protected void BlinkCursor() `

### ResetSelected
`protected void ResetSelected() `

### DeleteChar
`protected void DeleteChar(bool nextChar = false) `

### FindNextWordPosition
`protected int FindNextWordPosition(int direction) `

### MoveCursor
`protected void MoveCursor(int direction,bool withSelection = false) `

### GetAppendCharacterResult
`protected string GetAppendCharacterResult(int charCode) `

### AppendCharacter
`protected void AppendCharacter(int charCode) `

### AppendText
`protected void AppendText(string text) `

### DeleteText
`protected void DeleteText(int beginIndex,int endIndex) `

### CopyText
`protected void CopyText(int beginIndex,int endIndex) `

### PasteText
`protected void PasteText() `

### HandleInput
`public override void HandleInput(IReadOnlyList<int> lastKeysPressed) `

### OnGainFocus
`protected internal override void OnGainFocus() `

### OnLoseFocus
`protected internal override void OnLoseFocus() `

### OnLateUpdate
`protected override void OnLateUpdate(float dt) `

### OnRender
`protected override void OnRender(TwoDimensionContext twoDimensionContext,TwoDimensionDrawContext drawContext) `

### OnMousePressed
`protected internal override void OnMousePressed() `

### OnMouseReleased
`protected internal override void OnMouseReleased(bool isFromInput) `

### SetAllText
`public virtual void SetAllText(string text) `

## 参见

- [本区域目录](../)
- [API 参考](../../)
