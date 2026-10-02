---
title: "Font"
description: "Font: a public class in TaleWorlds.TwoDimension; 15 exposed members (4 methods, 10 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/Font.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Font

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class Font`
**File:** `TaleWorlds.TwoDimension/Font.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

Font lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/Font.cs. It is a public class; the inheritance chain is Font. It exposes 15 public/protected members: 4 methods, 10 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Font lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain Font. The surface is property-led (properties 10/15, methods 4/15), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/Font.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Name` | `public string Name` | property |
| `Size` | `public int Size` | property |
| `LineHeight` | `public int LineHeight` | property |
| `Base` | `public int Base` | property |
| `CharacterCount` | `public int CharacterCount` | property |
| `SmoothingConstant` | `public float SmoothingConstant` | property |
| `CustomScale` | `public float CustomScale` | property |
| `Smooth` | `public bool Smooth` | property |
| `FontSprite` | `public SpritePart FontSprite` | property |
| `BitmapFontCharacter>Characters` | `public Dictionary<int, BitmapFontCharacter>Characters` | property |
| `Font` | `public Font(string name)` | constructor |
| `TryLoadFontFromPath` | `public bool TryLoadFontFromPath(string path, SpriteData spriteData)` | method |
| `GetWordWidth` | `public float GetWordWidth(string word, float extraPadding)` | method |
| `GetCharacterWidth` | `public float GetCharacterWidth(char character, float extraPadding)` | method |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace FontStyle](../FontStyle/)
- [same namespace IDrawObject](../IDrawObject/)
