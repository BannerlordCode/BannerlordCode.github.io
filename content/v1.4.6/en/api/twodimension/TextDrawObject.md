---
title: "TextDrawObject"
description: "TextDrawObject: a public struct in TaleWorlds.TwoDimension, inheriting IDrawObject; 3 exposed members (2 methods, 1 properties, 0 fields). Source: TaleWorlds.TwoDimension/TextDrawObject.cs."
---
# TextDrawObject

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct TextDrawObject : IDrawObject`
**File:** `TaleWorlds.TwoDimension/TextDrawObject.cs`

## Overview

TextDrawObject lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/TextDrawObject.cs. It is a public struct, implementing/inheriting IDrawObject; the inheritance chain is TextDrawObject → IDrawObject. It exposes 3 public/protected members: 2 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TextDrawObject is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain TextDrawObject → IDrawObject. The surface is method-led (methods 2/3, properties 1/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/TextDrawObject.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Invalid` | `public static TextDrawObject Invalid` | property |
| `Create` | `public static TextDrawObject Create(float[]vertices, float[]uvs, uint[]indices, float text_MeshWidth, float text_MeshHeight, in Rectangle2D rectangle)` | method |
| `ConvertToHashInPlace` | `public void ConvertToHashInPlace()` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface IDrawObject](../IDrawObject)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
