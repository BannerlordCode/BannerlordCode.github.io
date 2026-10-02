---
title: "MusicianGroup"
description: "MusicianGroup: a public class in SandBox.Objects.Usables, inheriting UsableMachine; 9 exposed members (7 methods, 0 properties, 2 fields). Canonical bucket sandbox. Source: SandBox/Objects/Usables/MusicianGroup.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# MusicianGroup

**Namespace:** `SandBox.Objects.Usables`
**Module:** `SandBox`
**Type:** `public class MusicianGroup : UsableMachine`
**File:** `SandBox/Objects/Usables/MusicianGroup.cs`
**Bucket:** `sandbox` (rule:SandBox)

## Overview

MusicianGroup lives in the SandBox module, source file SandBox/Objects/Usables/MusicianGroup.cs. It is a public class, implementing/inheriting UsableMachine; the inheritance chain is MusicianGroup → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 9 public/protected members: 7 methods, 2 fields.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: MusicianGroup lands in canonical bucket `sandbox` (matched rule `rule:SandBox`), namespace `SandBox.Objects.Usables`, inheritance chain MusicianGroup → UsableMachine → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 7/9, properties 0/9), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from SandBox/Objects/Usables/MusicianGroup.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `GetActionTextForStandingPoint` | `public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `CreateAIBehaviorObject` | `public override UsableMachineAIBase CreateAIBehaviorObject()` | method |
| `SetPlayList` | `public void SetPlayList(List<SettlementMusicData>playList)` | method |
| `OnInit` | `protected override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected override void OnTick(float dt)` | method |
| `GapBetweenTracks` | `public const int GapBetweenTracks` | field |
| `DisableAmbientMusic` | `public const bool DisableAmbientMusic` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMachine](../../mission-ext/UsableMachine/)
- [same namespace Chair](../Chair/)
- [same namespace CheckpointUsePoint](../CheckpointUsePoint/)
- [same namespace DisguiseMissionUsePoint](../DisguiseMissionUsePoint/)
- [same namespace Passage](../Passage/)
