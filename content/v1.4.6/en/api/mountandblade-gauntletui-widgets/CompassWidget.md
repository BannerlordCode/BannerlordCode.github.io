---
title: "CompassWidget"
description: "CompassWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 4 exposed members (1 methods, 2 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassWidget.cs."
---
# CompassWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CompassWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassWidget.cs`

## Overview

CompassWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CompassWidget → Widget. It exposes 4 public/protected members: 1 methods, 2 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CompassWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain CompassWidget → Widget. The surface is property-led (properties 2/4, methods 1/4), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CompassWidget` | `public CompassWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `ItemContainerPanel` | `public Widget ItemContainerPanel` | property |
| `MarkerContainerPanel` | `public Widget MarkerContainerPanel` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
