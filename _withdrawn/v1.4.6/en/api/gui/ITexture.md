---
title: "ITexture"
description: "ITexture: a public interface in TaleWorlds.TwoDimension; 6 exposed members (2 methods, 4 properties, 0 fields). Canonical bucket gui. Source: TaleWorlds.TwoDimension/ITexture.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# ITexture

**Namespace:** `TaleWorlds.TwoDimension`
**Module:** `TaleWorlds.TwoDimension`
**Type:** `public interface ITexture`
**File:** `TaleWorlds.TwoDimension/ITexture.cs`
**Bucket:** `gui` (rule:TaleWorlds.TwoDimension)

## Overview

ITexture lives in the TaleWorlds.TwoDimension module, source file TaleWorlds.TwoDimension/ITexture.cs. It is a public interface; the inheritance chain is ITexture. It exposes 6 public/protected members: 2 methods, 4 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ITexture lands in canonical bucket `gui` (matched rule `rule:TaleWorlds.TwoDimension`), namespace `TaleWorlds.TwoDimension`, inheritance chain ITexture. The surface is property-led (properties 4/6, methods 2/6), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.TwoDimension/ITexture.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `IsValid` | `bool IsValid` | property |
| `Width` | `int Width` | property |
| `Height` | `int Height` | property |
| `Name` | `string Name` | property |
| `Release` | `void Release();` | method |
| `IsLoaded` | `bool IsLoaded();` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace BitmapFontCharacter](../BitmapFontCharacter/)
- [same namespace EditableText](../EditableText/)
- [same namespace Font](../Font/)
- [same namespace FontStyle](../FontStyle/)
