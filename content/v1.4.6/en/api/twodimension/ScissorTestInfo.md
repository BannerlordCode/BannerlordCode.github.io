---
title: "ScissorTestInfo"
description: "ScissorTestInfo: a public struct in TaleWorlds.TwoDimension; 8 exposed members (3 methods, 4 properties, 0 fields). Source: TaleWorlds.TwoDimension/ScissorTestInfo.cs."
---
# ScissorTestInfo

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public struct ScissorTestInfo`
**File:** `TaleWorlds.TwoDimension/ScissorTestInfo.cs`

## Overview

ScissorTestInfo lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/ScissorTestInfo.cs. It is a public struct; the inheritance chain is ScissorTestInfo. It exposes 8 public/protected members: 3 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ScissorTestInfo is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain ScissorTestInfo. The surface is property-led (properties 4/8, methods 3/8), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/ScissorTestInfo.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `X` | `public float X` | property |
| `X2` | `public float X2` | property |
| `Y` | `public float Y` | property |
| `Y2` | `public float Y2` | property |
| `ScissorTestInfo` | `public ScissorTestInfo(float x, float y, float x2, float y2)` | constructor |
| `ReduceToIntersection` | `public void ReduceToIntersection(ScissorTestInfo other)` | method |
| `GetSimpleRectangle` | `public SimpleRectangle GetSimpleRectangle()` | method |
| `IsCollide` | `public bool IsCollide(in Rectangle2D other)` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
