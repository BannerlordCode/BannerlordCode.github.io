---
title: "TacticalRegion"
description: "TacticalRegion: a public class in TaleWorlds.MountAndBlade, inheriting MissionObject; 9 exposed members (4 methods, 3 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/TacticalRegion.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# TacticalRegion

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class TacticalRegion : MissionObject`
**File:** `TaleWorlds.MountAndBlade/TacticalRegion.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

TacticalRegion lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/TacticalRegion.cs. It is a public class, implementing/inheriting MissionObject; the inheritance chain is TacticalRegion → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 9 public/protected members: 4 methods, 3 properties, 1 fields, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: TacticalRegion lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain TacticalRegion → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 4/9, properties 3/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/TacticalRegion.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `Position` | `public WorldPosition Position` | property |
| `List` | `public List<TacticalPosition>LinkedTacticalPositions` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `AfterMissionStart` | `public override void AfterMissionStart()` | method |
| `OnEditorInit` | `protected internal override void OnEditorInit()` | method |
| `OnEditorTick` | `protected internal override void OnEditorTick(float dt)` | method |
| `radius` | `public float radius` | field |
| `TacticalRegionTypeEnum` | `public enum TacticalRegionTypeEnum` | property |
| `TacticalRegionTypeEnum` | `public enum TacticalRegionTypeEnum` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface MissionObject](../MissionObject/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
