---
title: "Passage"
description: "Passage: a public class in SandBox.Objects.Usables, inheriting UsableMachine; 4 exposed members (3 methods, 1 properties, 0 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/Passage.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# Passage

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class Passage : UsableMachine`
**File:** `SandBox/Objects/Usables/Passage.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

Passage lives in the SandBox module, source file SandBox/Objects/Usables/Passage.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is Passage → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 4 public/protected members: 3 methods, 1 properties.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: Passage lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain Passage → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 3/4, properties 1/4), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/Passage.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `ToLocation` | `public Location ToLocation` | property |
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
