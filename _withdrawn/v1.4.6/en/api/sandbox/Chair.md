---
title: "Chair"
description: "Chair: a public class in SandBox.Objects.Usables, inheriting UsableMachine; 9 exposed members (7 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/Chair.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Chair

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class Chair : UsableMachine`
**File:** `SandBox/Objects/Usables/Chair.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

Chair lives in the SandBox module, source file SandBox/Objects/Usables/Chair.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is Chair → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 9 public/protected members: 7 methods, 1 properties, 1 nested types.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Chair lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain Chair → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 7/9, properties 1/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/Chair.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `OnInit` | `protected override void OnInit()` | method |
| `IsAgentFullySitting` | `public bool IsAgentFullySitting(Agent usingAgent)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetBestPointAlternativeTo` | `public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)` | method |
| `GetOrder` | `public override OrderType GetOrder(BattleSideEnum side)` | method |
| `SittableType` | `public enum SittableType` | property |
| `SittableType` | `public enum SittableType` | nested type |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../../mission-ext/UsableMachine/)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint/)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [same namespace MusicianGroup](../MusicianGroup/)
- [same namespace Passage](../Passage/)
