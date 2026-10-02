---
title: "Text"
description: "Text: a public class in TaleWorlds.TwoDimension, inheriting IText; 18 exposed members (4 methods, 13 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/Text.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Text

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class Text : IText`
**File:** `TaleWorlds.TwoDimension/Text.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

Text lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/Text.cs. It is a public class, implementing/inheriting IText; the inheritance chain is Text → IText. It exposes 18 public/protected members: 4 methods, 13 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Text lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain Text → IText. The surface is property-led (properties 13/18, methods 4/18), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/Text.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `CurrentLanguage` | `public ILanguage CurrentLanguage` | property |
| `ScaleToFitTextInLayout` | `public float ScaleToFitTextInLayout` | property |
| `LineCount` | `public int LineCount` | property |
| `Width` | `public int Width` | property |
| `Height` | `public int Height` | property |
| `Font` | `public Font Font` | property |
| `HorizontalAlignment` | `public TextHorizontalAlignment HorizontalAlignment` | property |
| `VerticalAlignment` | `public TextVerticalAlignment VerticalAlignment` | property |
| `FontSize` | `public float FontSize` | property |
| `Value` | `public string Value` | property |
| `SkipLineOnContainerExceeded` | `public bool SkipLineOnContainerExceeded` | property |
| `CanBreakWords` | `public bool CanBreakWords` | property |
| `ResizeTextOnOverflow` | `public bool ResizeTextOnOverflow` | property |
| `Text` | `public Text(int width, int height, Font bitmapFont, Func<int, Font>getUsableFontForCharacter)` | constructor |
| `GetPreferredSize` | `public Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale)` | method |
| `UpdateSize` | `public void UpdateSize(int width, int height)` | method |
| `SetAllDirty` | `public void SetAllDirty()` | method |
| `List` | `public List<TextPart>GetParts()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface IText](../IText/)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
