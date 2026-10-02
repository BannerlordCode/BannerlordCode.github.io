---
title: "EditableText"
description: "EditableText: a public class in TaleWorlds.TwoDimension, inheriting RichText; 19 exposed members (11 methods, 7 properties, 0 fields). Source: TaleWorlds.TwoDimension/EditableText.cs."
---
# EditableText

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class EditableText : RichText`
**File:** `TaleWorlds.TwoDimension/EditableText.cs`

## Overview

EditableText lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/EditableText.cs. It is a public class, implementing/inheriting RichText; the inheritance chain is EditableText → RichText → IText. It exposes 19 public/protected members: 11 methods, 7 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: EditableText is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain EditableText → RichText → IText. The surface is method-led (methods 11/19, properties 7/19), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/EditableText.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CursorPosition` | `public int CursorPosition` | property |
| `HighlightStart` | `public bool HighlightStart` | property |
| `HighlightEnd` | `public bool HighlightEnd` | property |
| `SelectedTextBegin` | `public int SelectedTextBegin` | property |
| `SelectedTextEnd` | `public int SelectedTextEnd` | property |
| `BlinkTimer` | `public float BlinkTimer` | property |
| `VisibleText` | `public string VisibleText` | property |
| `EditableText` | `public EditableText(int width, int height, Font font, Func<int, Font>getUsableFontForCharacter) : base(width, height, font, getUsableFontForCharacter)` | constructor |
| `SetCursorPosition` | `public void SetCursorPosition(int position, bool visible)` | method |
| `BlinkCursor` | `public void BlinkCursor()` | method |
| `IsCursorVisible` | `public bool IsCursorVisible()` | method |
| `ResetSelected` | `public void ResetSelected()` | method |
| `BeginSelection` | `public void BeginSelection()` | method |
| `IsAnySelected` | `public bool IsAnySelected()` | method |
| `GetCursorPosition` | `public Vector2 GetCursorPosition()` | method |
| `Update` | `public override void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)` | method |
| `SelectAll` | `public void SelectAll()` | method |
| `FindNextWordPosition` | `public int FindNextWordPosition(int direction)` | method |
| `SetCursor` | `public void SetCursor(int position, bool visible = true, bool withSelection = false)` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface RichText](../RichText)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
- [same namespace IDrawObject](../IDrawObject)
