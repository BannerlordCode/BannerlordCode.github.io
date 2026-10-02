---
title: "MissionSiegeEngineMarkerWidget"
description: "MissionSiegeEngineMarkerWidget: a public class in TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission, inheriting Widget; 11 exposed members (1 methods, 9 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MissionSiegeEngineMarkerWidget

**Namespace:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`
**Module:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets`
**Type:** `public class MissionSiegeEngineMarkerWidget : Widget`
**File:** `TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

MissionSiegeEngineMarkerWidget lives in the TaleWorlds.MountAndBlade.GauntletUI.Widgets module, source file TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs. It is a public class, implementing/inheriting Widget; the inheritance chain is MissionSiegeEngineMarkerWidget → Widget → PropertyOwnerObject. It exposes 11 public/protected members: 1 methods, 9 properties, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MissionSiegeEngineMarkerWidget lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade.GauntletUI.Widgets.Mission`, inheritance chain MissionSiegeEngineMarkerWidget → Widget → PropertyOwnerObject. The surface is property-led (properties 9/11, methods 1/11), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade.GauntletUI.Widgets/Mission/MissionSiegeEngineMarkerWidget.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
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

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [same namespace AgentAlarmStateWidget](../AgentAlarmStateWidget/)
- [same namespace AgentAmmoTextWidget](../AgentAmmoTextWidget/)
- [same namespace AgentHealthWidget](../AgentHealthWidget/)
- [same namespace AgentLockVisualBrushWidget](../AgentLockVisualBrushWidget/)
