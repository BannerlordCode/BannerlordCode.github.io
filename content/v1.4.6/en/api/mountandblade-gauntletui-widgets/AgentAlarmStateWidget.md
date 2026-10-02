---
title: "AgentAlarmStateWidget"
description: "AgentAlarmStateWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 5 exposed members (1 methods, 3 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAlarmStateWidget.cs."
---
# AgentAlarmStateWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class AgentAlarmStateWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAlarmStateWidget.cs`

## Overview

AgentAlarmStateWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAlarmStateWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is AgentAlarmStateWidget → Widget. It exposes 5 public/protected members: 1 methods, 3 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: AgentAlarmStateWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain AgentAlarmStateWidget → Widget. The surface is property-led (properties 3/5, methods 1/5), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/AgentAlarmStateWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `AgentAlarmStateWidget` | `public AgentAlarmStateWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AlarmState` | `public string AlarmState` | property |
| `WSign` | `public int WSign` | property |
| `Position` | `public Vec2 Position` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
- [same namespace AgentWeaponPassiveUsageVisualBrushWidget](../AgentWeaponPassiveUsageVisualBrushWidget)
