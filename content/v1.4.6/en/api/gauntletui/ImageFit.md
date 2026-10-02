---
title: "ImageFit"
description: "ImageFit: a public class in TaleWorlds.GauntletUI; 13 exposed members (1 methods, 8 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs."
---
# ImageFit

**Namespace:** `TaleWorlds.GauntletUI`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ImageFit`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs`

## Overview

ImageFit lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs. It is a public class; the inheritance chain is ImageFit. It exposes 13 public/protected members: 1 methods, 8 properties, 1 constructors, 3 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ImageFit is a top-level type in TaleWorlds.GauntletUI, namespace matching the module directory; inheritance chain ImageFit. The surface is property-led (properties 8/13, methods 1/13), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/ImageFit.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Type` | `public ImageFit.ImageFitTypes Type` | property |
| `HorizontalAlignment` | `public ImageFit.ImageHorizontalAlignments HorizontalAlignment` | property |
| `VerticalAlignment` | `public ImageFit.ImageVerticalAlignments VerticalAlignment` | property |
| `OffsetX` | `public float OffsetX` | property |
| `OffsetY` | `public float OffsetY` | property |
| `ImageFit` | `public ImageFit()` | constructor |
| `GetFittedRectangle` | `public ImageFitResult GetFittedRectangle(in Vector2 containerSize, in Vector2 imageSize)` | method |
| `byte` | `public enum ImageFitTypes : byte` | property |
| `byte` | `public enum ImageHorizontalAlignments : byte` | property |
| `byte` | `public enum ImageVerticalAlignments : byte` | property |
| `byte` | `public enum ImageFitTypes : byte` | nested type |
| `byte` | `public enum ImageHorizontalAlignments : byte` | nested type |
| `byte` | `public enum ImageVerticalAlignments : byte` | nested type |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AlignmentAxis](../AlignmentAxis)
- [same namespace AnimatedDropdownWidget](../AnimatedDropdownWidget)
- [same namespace AnimationInterpolation](../AnimationInterpolation)
- [same namespace AudioProperty](../AudioProperty)
