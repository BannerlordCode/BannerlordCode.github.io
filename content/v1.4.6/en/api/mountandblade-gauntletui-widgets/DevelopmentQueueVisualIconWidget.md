---
title: "DevelopmentQueueVisualIconWidget"
description: "DevelopmentQueueVisualIconWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 7 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentQueueVisualIconWidget.cs."
---
# DevelopmentQueueVisualIconWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DevelopmentQueueVisualIconWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentQueueVisualIconWidget.cs`

## Overview

DevelopmentQueueVisualIconWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentQueueVisualIconWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is DevelopmentQueueVisualIconWidget → Widget. It exposes 7 public/protected members: 1 methods, 4 properties, 1 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DevelopmentQueueVisualIconWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Menu.TownManagement) the module directory; inheritance chain DevelopmentQueueVisualIconWidget → Widget. The surface is property-led (properties 4/7, methods 1/7), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Menu/TownManagement/DevelopmentQueueVisualIconWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `DevelopmentQueueVisualIconWidget` | `public DevelopmentQueueVisualIconWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `QueueIndex` | `public int QueueIndex` | property |
| `QueueIconWidget` | `public Widget QueueIconWidget` | property |
| `InProgressIconWidget` | `public BrushWidget InProgressIconWidget` | property |
| `AnimState` | `public enum AnimState` | property |
| `AnimState` | `public enum AnimState` | nested type |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AutoClosePopupClosingWidget](../AutoClosePopupClosingWidget)
- [same namespace AutoClosePopupWidget](../AutoClosePopupWidget)
- [same namespace DescriptionItemVisualBrushWidget](../DescriptionItemVisualBrushWidget)
- [same namespace DevelopmentItemButtonWidget](../DevelopmentItemButtonWidget)
