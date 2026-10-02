---
title: "Texture"
description: "Texture: a public class in TaleWorlds.TwoDimension; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.TwoDimension/Texture.cs."
---
# Texture

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public class Texture`
**File:** `TaleWorlds.TwoDimension/Texture.cs`

## Overview

Texture lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/Texture.cs. It is a public class; the inheritance chain is Texture. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Texture is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain Texture. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/Texture.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `PlatformTexture` | `public ITexture PlatformTexture` | property |
| `IsValid` | `public bool IsValid` | property |
| `Width` | `public int Width` | property |
| `Height` | `public int Height` | property |
| `Texture` | `public Texture(ITexture platformTexture)` | constructor |
| `IsLoaded` | `public bool IsLoaded()` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
