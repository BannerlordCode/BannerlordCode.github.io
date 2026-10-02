---
title: "PatrolArea"
description: "PatrolArea: a public class in SandBox.Objects.Usables, inheriting UsableMachine; 6 exposed members (6 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/PatrolArea.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# PatrolArea

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class PatrolArea : UsableMachine`
**File:** `SandBox/Objects/Usables/PatrolArea.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

PatrolArea lives in the SandBox module, source file SandBox/Objects/Usables/PatrolArea.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is PatrolArea → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 6 public/protected members: 6 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: PatrolArea lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain PatrolArea → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 6/6, properties 0/6), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/PatrolArea.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../../mission-ext/UsableMachine/)
- [same namespace Chair](../Chair/)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint/)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [same namespace MusicianGroup](../MusicianGroup/)
