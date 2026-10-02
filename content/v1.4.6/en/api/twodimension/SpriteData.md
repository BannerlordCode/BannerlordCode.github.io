---
title: "SpriteData"
description: "SpriteData: a public class in TaleWorlds.TwoDimension; 9 exposed members (4 methods, 4 properties, 0 fields). Source: TaleWorlds.TwoDimension/SpriteData.cs."
---
# SpriteData

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class SpriteData`
**File:** `TaleWorlds.TwoDimension/SpriteData.cs`

## Overview

SpriteData lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/SpriteData.cs. It is a public class; the inheritance chain is SpriteData. It exposes 9 public/protected members: 4 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpriteData is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain SpriteData. The surface is method-led (methods 4/9, properties 4/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/SpriteData.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `SpritePart>SpriteParts` | `public Dictionary<string, SpritePart>SpriteParts` | property |
| `Sprite>Sprites` | `public Dictionary<string, Sprite>Sprites` | property |
| `SpriteCategory>SpriteCategories` | `public Dictionary<string, SpriteCategory>SpriteCategories` | property |
| `Name` | `public string Name` | property |
| `SpriteData` | `public SpriteData(string name)` | constructor |
| `GetSprite` | `public Sprite GetSprite(string name)` | method |
| `SpriteExists` | `public bool SpriteExists(string spriteName)` | method |
| `Load` | `public void Load(ResourceDepot resourceDepot)` | method |
| `Reload` | `public void Reload(ResourceDepot resourceDepot, ITwoDimensionResourceContext resourceContext)` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
