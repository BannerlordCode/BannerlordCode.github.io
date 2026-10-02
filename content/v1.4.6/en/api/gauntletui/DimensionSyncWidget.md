---
title: "DimensionSyncWidget"
description: "DimensionSyncWidget: a public class in TaleWorlds.GauntletUI, inheriting Widget; 7 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs."
---
# DimensionSyncWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Module:** `TaleWorlds.GauntletUI`
**Type:** `public class DimensionSyncWidget : Widget`
**File:** `TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs`

## Overview

DimensionSyncWidget lives in the TaleWorlds.GauntletUI module, source file TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is DimensionSyncWidget → Widget → PropertyOwnerObject. It exposes 7 public/protected members: 1 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DimensionSyncWidget is a top-level type in TaleWorlds.GauntletUI, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets) the module directory; inheritance chain DimensionSyncWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 4/7, methods 1/7), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.GauntletUI/TaleWorlds/MountAndBlade/GauntletUI/Widgets/DimensionSyncWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DimensionSyncWidget` | `public DimensionSyncWidget(UIContext context) : base(context)` | constructor |
| `OnLayoutUpdated` | `protected override void OnLayoutUpdated()` | method |
| `WidgetToCopyHeightFrom` | `public Widget WidgetToCopyHeightFrom` | property |
| `PaddingAmount` | `public int PaddingAmount` | property |
| `DimensionToSync` | `public DimensionSyncWidget.Dimensions DimensionToSync` | property |
| `Dimensions` | `public enum Dimensions` | property |
| `Dimensions` | `public enum Dimensions` | nested type |

## See Also

- [↑ gauntletui module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
