---
title: "EditableTextWidget"
description: "EditableTextWidget: a public class in TaleWorlds.GauntletUI, inheriting BrushWidget; 35 exposed members (20 methods, 9 properties, 2 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs."
---
# EditableTextWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class EditableTextWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs`

## Overview

EditableTextWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 35 public/protected members: 20 methods, 9 properties, 2 fields, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EditableTextWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain EditableTextWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is method-led (methods 20/35, properties 9/35), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/EditableTextWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `MaxLength` | `public int MaxLength` | property |
| `IsObfuscationEnabled` | `public bool IsObfuscationEnabled` | property |
| `DefaultSearchText` | `public string DefaultSearchText` | property |
| `RealText` | `public string RealText` | property |
| `KeyboardInfoText` | `public string KeyboardInfoText` | property |
| `Text` | `public string Text` | property |
| `EditableTextWidget` | `public EditableTextWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `BlinkCursor` | `protected void BlinkCursor()` | method |
| `ResetSelected` | `protected void ResetSelected()` | method |
| `DeleteChar` | `protected void DeleteChar(bool nextChar = false)` | method |
| `FindNextWordPosition` | `protected int FindNextWordPosition(int direction)` | method |
| `MoveCursor` | `protected void MoveCursor(int direction, bool withSelection = false)` | method |
| `GetAppendCharacterResult` | `protected string GetAppendCharacterResult(int charCode)` | method |
| `AppendCharacter` | `protected void AppendCharacter(int charCode)` | method |
| `AppendText` | `protected void AppendText(string text)` | method |
| `DeleteText` | `protected void DeleteText(int beginIndex, int endIndex)` | method |
| `CopyText` | `protected void CopyText(int beginIndex, int endIndex)` | method |
| `PasteText` | `protected void PasteText()` | method |
| `HandleInput` | `public override void HandleInput(IReadOnlyList<int>lastKeysPressed)` | method |
| `OnGainFocus` | `protected internal override void OnGainFocus()` | method |
| `OnLoseFocus` | `protected internal override void OnLoseFocus()` | method |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `OnRender` | `protected override void OnRender(TwoDimensionContext twoDimensionContext, TwoDimensionDrawContext drawContext)` | method |
| `OnMousePressed` | `protected internal override void OnMousePressed()` | method |
| `OnMouseReleased` | `protected internal override void OnMouseReleased(bool isFromInput)` | method |
| `SetAllText` | `public virtual void SetAllText(string text)` | method |
| `_obfuscationChar` | `protected readonly char _obfuscationChar` | field |
| `_lastScale` | `protected float _lastScale` | field |
| `MouseState` | `protected enum MouseState` | property |
| `CursorMovementDirection` | `protected enum CursorMovementDirection` | property |
| `KeyboardAction` | `protected enum KeyboardAction` | property |
| `MouseState` | `protected enum MouseState` | nested type |
| `CursorMovementDirection` | `protected enum CursorMovementDirection` | nested type |
| `KeyboardAction` | `protected enum KeyboardAction` | nested type |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BrushWidget](../BrushWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
