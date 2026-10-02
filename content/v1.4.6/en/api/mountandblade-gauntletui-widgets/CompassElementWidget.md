---
title: "CompassElementWidget"
description: "CompassElementWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 6 exposed members (1 methods, 4 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassElementWidget.cs."
---
# CompassElementWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class CompassElementWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassElementWidget.cs`

## Overview

CompassElementWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassElementWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is CompassElementWidget → Widget. It exposes 6 public/protected members: 1 methods, 4 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: CompassElementWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain CompassElementWidget → Widget. The surface is property-led (properties 4/6, methods 1/6), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/CompassElementWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `CompassElementWidget` | `public CompassElementWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `Position` | `public float Position` | property |
| `Distance` | `public int Distance` | property |
| `BannerWidget` | `public Widget BannerWidget` | property |
| `FlagWidget` | `public Widget FlagWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
