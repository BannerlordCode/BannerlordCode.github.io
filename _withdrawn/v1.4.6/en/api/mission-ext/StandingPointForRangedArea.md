---
title: "StandingPointForRangedArea"
description: "StandingPointForRangedArea: a public class in TaleWorlds.MountAndBlade, inheriting StandingPoint; 9 exposed members (6 methods, 1 properties, 2 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# StandingPointForRangedArea

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class StandingPointForRangedArea : StandingPoint`
**File:** `TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

StandingPointForRangedArea lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs. It is a public class, implementing/inheriting StandingPoint; the inheritance chain is StandingPointForRangedArea → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 9 public/protected members: 6 methods, 1 properties, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: StandingPointForRangedArea lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain StandingPointForRangedArea → StandingPoint → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/StandingPointForRangedArea.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `DisableScriptedFrameFlags` | `public override Agent.AIScriptedFrameFlags DisableScriptedFrameFlags` | property |
| `OnInit` | `protected internal override void OnInit()` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `GetUsageScoreForAgent` | `public override float GetUsageScoreForAgent(Agent agent)` | method |
| `HasAlternative` | `public override bool HasAlternative()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTickParallel2` | `protected internal override void OnTickParallel2(float dt)` | method |
| `ThrowingValueMultiplier` | `public float ThrowingValueMultiplier` | field |
| `RangedWeaponValueMultiplier` | `public float RangedWeaponValueMultiplier` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface StandingPoint](../StandingPoint/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
