---
title: "ImageWidget"
description: "ImageWidget: a public class in TaleWorlds.GauntletUI, inheriting BrushWidget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs."
---
# ImageWidget

**Namespace:** `TaleWorlds.GauntletUI.BaseTypes`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class ImageWidget : BrushWidget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs`

## Overview

ImageWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is ImageWidget → BrushWidget → Widget → PropertyOwnerObject. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: ImageWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.GauntletUI.BaseTypes) the module directory; inheritance chain ImageWidget → BrushWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/GauntletUI/BaseTypes/ImageWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `OverrideDefaultStateSwitchingEnabled` | `public bool OverrideDefaultStateSwitchingEnabled` | property |
| `OverrideDefaultStateSwitchingDisabled` | `public bool OverrideDefaultStateSwitchingDisabled` | property |
| `ImageWidget` | `public ImageWidget(UIContext context) : base(context)` | constructor |
| `RefreshState` | `protected override void RefreshState()` | method |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [base / interface BrushWidget](../BrushWidget)
- [same namespace BasicContainer](../BasicContainer)
- [same namespace BrushWidget](../BrushWidget)
- [same namespace ButtonType](../ButtonType)
- [same namespace ButtonWidget](../ButtonWidget)
