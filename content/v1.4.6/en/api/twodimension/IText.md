---
title: "IText"
description: "IText: a public interface in TaleWorlds.TwoDimension; 4 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.TwoDimension/IText.cs."
---
# IText

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public interface IText`
**File:** `TaleWorlds.TwoDimension/IText.cs`

## Overview

IText lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/IText.cs. It is a public interface; the inheritance chain is IText. It exposes 4 public/protected members: 1 methods, 3 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: IText is a top-level type in TaleWorlds.TwoDimension, namespace matching the module directory; inheritance chain IText. The surface is property-led (properties 3/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/IText.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Value` | `string Value` | property |
| `HorizontalAlignment` | `TextHorizontalAlignment HorizontalAlignment` | property |
| `VerticalAlignment` | `TextVerticalAlignment VerticalAlignment` | property |
| `GetPreferredSize` | `Vector2 GetPreferredSize(bool fixedWidth, float widthSize, bool fixedHeight, float heightSize, SpriteData spriteData, float renderScale);` | method |

## See Also

- [↑ twodimension module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter)
- [same namespace EditableText](../EditableText)
- [same namespace Font](../Font)
- [same namespace FontStyle](../FontStyle)
