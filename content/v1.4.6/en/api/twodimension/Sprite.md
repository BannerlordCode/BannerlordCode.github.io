---
title: "Sprite"
description: "Sprite: a public class in TaleWorlds.TwoDimension; 9 exposed members (3 methods, 5 properties, 0 fields). Source: TaleWorlds.TwoDimension/Sprite.cs."
---
# Sprite

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public abstract class Sprite`
**File:** `TaleWorlds.TwoDimension/Sprite.cs`

## Overview

Sprite lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/Sprite.cs. It is a public class (abstract); the inheritance chain is Sprite. It exposes 9 public/protected members: 3 methods, 5 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Sprite is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain Sprite. The surface is property-led (properties 5/9, methods 3/9), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/Sprite.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Texture` | `public abstract Texture Texture` | property |
| `Name` | `public string Name` | property |
| `Width` | `public int Width` | property |
| `Height` | `public int Height` | property |
| `GetMinUvs` | `public abstract Vec2 GetMinUvs();` | method |
| `GetMaxUvs` | `public abstract Vec2 GetMaxUvs();` | method |
| `NinePatchParameters` | `public SpriteNinePatchParameters NinePatchParameters` | property |
| `Sprite` | `protected Sprite(string name, int width, int height, SpriteNinePatchParameters ninePatchParameters)` | constructor |
| `ToString` | `public override string ToString()` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
