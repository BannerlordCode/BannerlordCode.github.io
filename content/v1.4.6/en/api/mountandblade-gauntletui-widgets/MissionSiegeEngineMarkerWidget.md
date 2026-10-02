---
title: "MissionSiegeEngineMarkerWidget"
description: "MissionSiegeEngineMarkerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets, inheriting Widget; 11 exposed members (1 methods, 9 properties, 0 fields). Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs."
---
# MissionSiegeEngineMarkerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MissionSiegeEngineMarkerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs`

## Overview

MissionSiegeEngineMarkerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MissionSiegeEngineMarkerWidget → Widget. It exposes 11 public/protected members: 1 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeEngineMarkerWidget is a top-level type in TaleWorlds.MountAndBlade.GauntletUI.Widgets, namespace differing from (TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission) the module directory; inheritance chain MissionSiegeEngineMarkerWidget → Widget. The surface is property-led (properties 9/11, methods 1/11), so it mostly exposes state for reading. Widget on the chain live outside this module, so part of the behaviour is delegated to a cross-module base type. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs or the deep page for this type.

## Key Members

| 成员 | 签名 | 种类 |
| --- | --- | --- |
| `Slider` | `public SliderWidget Slider` | property |
| `MachineIconParent` | `public BrushWidget MachineIconParent` | property |
| `EnemyBrush` | `public Brush EnemyBrush` | property |
| `AllyBrush` | `public Brush AllyBrush` | property |
| `ScreenPosition` | `public Vec2 ScreenPosition` | property |
| `MissionSiegeEngineMarkerWidget` | `public MissionSiegeEngineMarkerWidget(UIContext context) : base(context)` | constructor |
| `OnUpdate` | `protected override void OnUpdate(float dt)` | method |
| `IsEnemy` | `public bool IsEnemy` | property |
| `IsActive` | `public bool IsActive` | property |
| `EngineType` | `public string EngineType` | property |
| `MachineTypeIconWidget` | `public Widget MachineTypeIconWidget` | property |

## See Also

- [↑ mountandblade-gauntletui-widgets module index](../)
- [↑ API reference](../../)
- [↑ Version home](../../../)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget)
- [same namespace AgentHealthWidget](../AgentHealthWidget)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget)
