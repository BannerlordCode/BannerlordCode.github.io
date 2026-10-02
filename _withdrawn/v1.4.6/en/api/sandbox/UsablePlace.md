---
title: "UsablePlace"
description: "UsablePlace: a public class in SandBox.Objects.Usables, inheriting UsableMachine; 3 exposed members (3 methods, 0 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/UsablePlace.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# UsablePlace

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class UsablePlace : UsableMachine`
**File:** `SandBox/Objects/Usables/UsablePlace.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

UsablePlace lives in the SandBox module, source file SandBox/Objects/Usables/UsablePlace.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is UsablePlace → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 3 public/protected members: 3 methods.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: UsablePlace lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain UsablePlace → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 3/3, properties 0/3), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/UsablePlace.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../../mission-ext/UsableMachine/)
- [same namespace Chair](../Chair/)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint/)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [same namespace MusicianGroup](../MusicianGroup/)
