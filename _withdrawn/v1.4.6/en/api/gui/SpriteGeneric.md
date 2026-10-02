---
title: "SpriteGeneric"
description: "SpriteGeneric: a public class in TaleWorlds.TwoDimension, inheriting Sprite; 5 exposed members (2 methods, 2 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/SpriteGeneric.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpriteGeneric

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class SpriteGeneric : Sprite`
**File:** `TaleWorlds.TwoDimension/SpriteGeneric.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

SpriteGeneric lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/SpriteGeneric.cs. It is a public class, implementing/inheriting Sprite; the inheritance chain is SpriteGeneric → Sprite. It exposes 5 public/protected members: 2 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpriteGeneric lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain SpriteGeneric → Sprite. The surface is method-led (methods 2/5, properties 2/5), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/SpriteGeneric.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Texture` | `public override Texture Texture` | property |
| `SpritePart` | `public SpritePart SpritePart` | property |
| `GetMinUvs` | `public override Vec2 GetMinUvs()` | method |
| `GetMaxUvs` | `public override Vec2 GetMaxUvs()` | method |
| `SpriteGeneric` | `public SpriteGeneric(string name, SpritePart spritePart, in SpriteNinePatchParameters ninePatchParameters) : base(name, spritePart.Width, spritePart.Height, ninePatchParameters)` | constructor |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface Sprite](../Sprite/)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
