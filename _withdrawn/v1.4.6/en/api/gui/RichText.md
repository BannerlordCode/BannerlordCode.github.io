---
title: "RichText"
description: "RichText: a public class in TaleWorlds.TwoDimension, inheriting IText; 18 exposed members (6 methods, 9 properties, 2 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/RichText.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# RichText

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class RichText : IText`
**File:** `TaleWorlds.TwoDimension/RichText.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

RichText lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/RichText.cs. It is a public class, implementing/inheriting IText; the inheritance chain is RichText → IText. It exposes 18 public/protected members: 6 methods, 9 properties, 2 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: RichText lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain RichText → IText. The surface is property-led (properties 9/18, methods 6/18), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/RichText.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentStyle` | `public string CurrentStyle` | property |
| `TextHeight` | `public int TextHeight` | property |
| `StyleFontContainer` | `public StyleFontContainer StyleFontContainer` | property |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment` | property |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment` | property |
| `Value` | `public string Value` | property |
| `FocusedLinkGroup` | `public RichTextLinkGroup FocusedLinkGroup` | property |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded` | property |
| `CanBreakWords` | `public bool CanBreakWords` | property |
| `RichText` | `public RichText(int width, int height, Font font, Func<int, Font>getUsableFontForCharacter)` | constructor |
| `Update` | `public virtual void Update(float dt, SpriteData spriteData, Vector2 focusPosition, bool focus, bool isFixedWidth, bool isFixedHeight, float renderScale)` | method |
| `SetAllDirty` | `public void SetAllDirty()` | method |
| `GetPreferredSize` | `public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)` | method |
| `CalculateTextOutput` | `public void CalculateTextOutput(float width, float height, SpriteData spriteData, float renderScale)` | method |
| `UpdateSize` | `public void UpdateSize(int width, int height)` | method |
| `List` | `public List<RichTextPart>GetParts()` | method |
| `ExtraLetterPaddingHorizontal` | `protected const float ExtraLetterPaddingHorizontal` | field |
| `ExtraLetterPaddingVertical` | `protected const float ExtraLetterPaddingVertical` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IText](../IText/)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
