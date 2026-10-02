---
title: "TacticalPosition"
description: "TacticalPosition: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 19 exposed members (5 methods, 11 properties, 0 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TacticalPosition.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticalPosition

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticalPosition : MissionObject`
**File:** `TaleWorlds.MountAndBlade/TacticalPosition.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TacticalPosition lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticalPosition.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is TacticalPosition → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 19 public/protected members: 5 methods, 11 properties, 2 constructors, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticalPosition lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TacticalPosition → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is property-led (properties 11/19, methods 5/19), so it mostly exposes state for reading. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticalPosition.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Position` | `public WorldPosition Position` | property |
| `Direction` | `public Vec2 Direction` | property |
| `Width` | `public float Width` | property |
| `Slope` | `public float Slope` | property |
| `IsInsurmountable` | `public bool IsInsurmountable` | property |
| `IsOuterEdge` | `public bool IsOuterEdge` | property |
| `List` | `public List<TacticalPosition>LinkedTacticalPositions` | property |
| `TacticalPositionType` | `public TacticalPosition.TacticalPositionTypeEnum TacticalPositionType` | property |
| `TacticalRegionMembership` | `public TacticalRegion.TacticalRegionTypeEnum TacticalRegionMembership` | property |
| `TacticalPositionSide` | `public FormationAI.BehaviorSide TacticalPositionSide` | property |
| `TacticalPosition` | `public TacticalPosition()` | constructor |
| `TacticalPosition` | `public TacticalPosition(WorldPosition position, Vec2 direction, float width, float slope = 0f, bool isInsurmountable = false, TacticalPosition.TacticalPositionTypeEnum tacticalPositionType = TacticalPosition.TacticalPositionTypeEnum.Regional, TacticalRegion.TacticalRegionTypeEnum tacticalRegionMembership = TacticalRegion.TacticalRegionTypeEnum.Opening)` | constructor |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `SetWidth` | `public void SetWidth(float width)` | method |
| `TacticalPositionTypeEnum` | `public enum TacticalPositionTypeEnum` | property |
| `TacticalPositionTypeEnum` | `public enum TacticalPositionTypeEnum` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionObject](../MissionObject/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
