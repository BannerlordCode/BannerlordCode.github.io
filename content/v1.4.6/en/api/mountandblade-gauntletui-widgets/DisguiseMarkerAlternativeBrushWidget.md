---
title: "DisguiseMarkerAlternativeBrushWidget"
description: "DisguiseMarkerAlternativeBrushWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting BrushWidget; 11 exposed members (1 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs."
---
# DisguiseMarkerAlternativeBrushWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class DisguiseMarkerAlternativeBrushWidget : BrushWidget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs`

## Overview

DisguiseMarkerAlternativeBrushWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs. It is a public class, implementing/inheriting BrushWidget; the inheritance chain is DisguiseMarkerAlternativeBrushWidget → BrushWidget. It exposes 11 public/protected members: 1 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: DisguiseMarkerAlternativeBrushWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain DisguiseMarkerAlternativeBrushWidget → BrushWidget. The surface is property-led (properties 9/11, methods 1/11), so it mostly exposes state for reading. BrushWidget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/DisguiseMarkerAlternativeBrushWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `BackgroundGlowWidget` | `public Widget BackgroundGlowWidget` | property |
| `FrameWidget` | `public Widget FrameWidget` | property |
| `FillBarWidget` | `public Widget FillBarWidget` | property |
| `AlarmedHeight` | `public float AlarmedHeight` | property |
| `DefaultHeight` | `public float DefaultHeight` | property |
| `Position` | `public Vec2 Position` | property |
| `DisguiseMarkerAlternativeBrushWidget` | `public DisguiseMarkerAlternativeBrushWidget(UIContext context) : base(context)` | constructor |
| `OnLateUpdate` | `protected override void OnLateUpdate(float dt)` | method |
| `AlarmProgress` | `public int AlarmProgress` | property |
| `AlarmState` | `public string AlarmState` | property |
| `OffenseTypeIdentifier` | `public string OffenseTypeIdentifier` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
