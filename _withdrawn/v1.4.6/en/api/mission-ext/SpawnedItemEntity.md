---
title: "SpawnedItemEntity"
description: "SpawnedItemEntity: a public class in TaleWorlds.MountAndBlade, inheriting UsableMissionObject; 33 exposed members (25 methods, 6 properties, 1 fields). Canonical bucket mission-ext. Source: TaleWorlds.MountAndBlade/SpawnedItemEntity.cs."
---

<!-- generated-by: tools/_v146_stubs.mjs -->
# SpawnedItemEntity

**Namespace:** `TaleWorlds.MountAndBlade`
**Module:** `TaleWorlds.MountAndBlade`
**Type:** `public class SpawnedItemEntity : UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/SpawnedItemEntity.cs`
**Bucket:** `mission-ext` (rule:TaleWorlds.MountAndBlade)

## Overview

SpawnedItemEntity lives in the TaleWorlds.MountAndBlade module, source file TaleWorlds.MountAndBlade/SpawnedItemEntity.cs. It is a public class, implementing/inheriting UsableMissionObject; the inheritance chain is SpawnedItemEntity → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. It exposes 33 public/protected members: 25 methods, 6 properties, 1 fields, 1 constructors.

> Batch first draft: every signature is taken verbatim from the decompiled bannerlord-1.4.6 source. The bucket is resolved live from `tools/_dir-map-canonical.json`. What each method actually does, when to call it and where it breaks must be read from the method body in the source file.

## Mental Model

Structural facts: SpawnedItemEntity lands in canonical bucket `mission-ext` (matched rule `rule:TaleWorlds.MountAndBlade`), namespace `TaleWorlds.MountAndBlade`, inheritance chain SpawnedItemEntity → UsableMissionObject → SynchedMissionObject → MissionObject → ScriptComponentBehavior → DotNetObject. The surface is method-led (methods 25/33, properties 6/33), so it mostly exposes operations. This page lists real signatures only: what each method does, when to call it and where it breaks must be read from TaleWorlds.MountAndBlade/SpawnedItemEntity.cs or the deep page for this type.

## Key Members

| Member | Signature | Kind |
| --- | --- | --- |
| `WeaponCopy` | `public MissionWeapon WeaponCopy` | property |
| `HasLifeTime` | `public bool HasLifeTime` | property |
| `IsRemoved` | `public bool IsRemoved` | property |
| `SpawnedOnACorpse` | `public bool SpawnedOnACorpse` | property |
| `GetActionMessage` | `public TextObject GetActionMessage(ItemObject weaponToReplaceWith, bool fillUp)` | method |
| `GetDescriptionMessage` | `public TextObject GetDescriptionMessage(bool fillUp)` | method |
| `LockUserFrames` | `public override bool LockUserFrames` | property |
| `SpawnFlags` | `public Mission.WeaponSpawnFlags SpawnFlags` | property |
| `Initialize` | `public void Initialize(MissionWeapon weapon, bool hasLifeTime, Mission.WeaponSpawnFlags spawnFlags, in Vec3 fakeSimulationVelocity, bool spawnedOnACorpse = false)` | method |
| `OnInit` | `protected internal override void OnInit()` | method |
| `GetTickRequirement` | `public override ScriptComponentBehavior.TickRequirement GetTickRequirement()` | method |
| `OnTick` | `protected internal override void OnTick(float dt)` | method |
| `OnTickParallel2` | `protected internal override void OnTickParallel2(float dt)` | method |
| `OnTickOccasionally` | `protected internal override void OnTickOccasionally(float currentFrameDeltaTime)` | method |
| `OnPreInit` | `protected internal override void OnPreInit()` | method |
| `OnRemoved` | `protected override void OnRemoved(int removeReason)` | method |
| `AttachWeaponToWeapon` | `public void AttachWeaponToWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachLocalFrame)` | method |
| `IsReadyToBeDeleted` | `public bool IsReadyToBeDeleted()` | method |
| `OnUseStopped` | `public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)` | method |
| `OnUse` | `public override void OnUse(Agent userAgent, sbyte agentBoneIndex)` | method |
| `IsDisabledForAgent` | `public override bool IsDisabledForAgent(Agent agent)` | method |
| `OnPhysicsCollision` | `protected internal override void OnPhysicsCollision(ref PhysicsContact contact, WeakGameEntity entity0, WeakGameEntity entity1)` | method |
| `IsStuckMissile` | `public bool IsStuckMissile()` | method |
| `IsQuiverAndNotEmpty` | `public bool IsQuiverAndNotEmpty()` | method |
| `IsBanner` | `public bool IsBanner()` | method |
| `GetInfoTextForBeingNotInteractable` | `public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)` | method |
| `StopPhysicsAndSetFrameForClient` | `public void StopPhysicsAndSetFrameForClient(MatrixFrame frame, GameEntity parent)` | method |
| `ConsumeWeaponAmount` | `public void ConsumeWeaponAmount(short consumedAmount)` | method |
| `GetDescriptionText` | `public override TextObject GetDescriptionText(WeakGameEntity gameEntity)` | method |
| `RequestDeletionOnNextTick` | `public void RequestDeletionOnNextTick()` | method |
| `OnAfterReadFromNetwork` | `public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord>synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)` | method |
| `SpawnedItemEntity` | `public SpawnedItemEntity() : base(false)` | constructor |
| `WeaponName` | `public string WeaponName` | field |

## See Also

- [↑ bucket index](..//)
- [↑ API reference](../..//)
- [↑ version home](../../..//)
- [base / interface UsableMissionObject](../UsableMissionObject/)
- [same namespace ActionIndexCache](../ActionIndexCache/)
- [same namespace AgentBuildData](../AgentBuildData/)
- [same namespace AgentCapsuleData](../AgentCapsuleData/)
- [same namespace AgentCommonAILogic](../AgentCommonAILogic/)
