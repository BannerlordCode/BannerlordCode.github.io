---
title: "Agent"
description: "Auto-generated class reference for Agent."
---
# Agent

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public sealed class Agent : DotNetObject, IAgent, IFocusable, IUsable, IFormationUnit, ITrackableBase`
**Base:** `DotNetObject`
**File:** `TaleWorlds.MountAndBlade/Agent.cs`

## Overview

`Agent` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `Main` | `public static Agent Main { get; }` |
| `IsPlayerControlled` | `public bool IsPlayerControlled { get; }` |
| `IsMine` | `public bool IsMine { get; }` |
| `IsMainAgent` | `public bool IsMainAgent { get; }` |
| `IsHuman` | `public bool IsHuman { get; }` |
| `IsMount` | `public bool IsMount { get; }` |
| `IsAIControlled` | `public bool IsAIControlled { get; }` |
| `IsPlayerTroop` | `public bool IsPlayerTroop { get; }` |
| `IsUsingGameObject` | `public bool IsUsingGameObject { get; }` |
| `CanLeadFormationsRemotely` | `public bool CanLeadFormationsRemotely { get; }` |
| `IsDetachableFromFormation` | `public bool IsDetachableFromFormation { get; }` |
| `AgentScale` | `public float AgentScale { get; }` |
| `CrouchMode` | `public bool CrouchMode { get; }` |
| `WalkMode` | `public bool WalkMode { get; }` |
| `Position` | `public Vec3 Position { get; }` |
| `MovementMode` | `public AgentMovementMode MovementMode { get; }` |
| `VisualPosition` | `public Vec3 VisualPosition { get; }` |
| `MovementVelocity` | `public Vec2 MovementVelocity { get; }` |
| `AverageVelocity` | `public Vec3 AverageVelocity { get; }` |
| `MovementDirectionAsAngle` | `public float MovementDirectionAsAngle { get; }` |
| `IsLookRotationInSlowMotion` | `public bool IsLookRotationInSlowMotion { get; }` |
| `PropertyModifiers` | `public Agent.AgentPropertiesModifiers PropertyModifiers { get; }` |
| `ActionSet` | `public MBActionSet ActionSet { get; }` |
| `Components` | `public MBReadOnlyList<AgentComponent> Components { get; }` |
| `HitterList` | `public MBReadOnlyList<Agent.Hitter> HitterList { get; }` |
| `CurrentGuardMode` | `public Agent.GuardMode CurrentGuardMode { get; }` |
| `ImmediateEnemy` | `public Agent ImmediateEnemy { get; }` |
| `IsDoingPassiveAttack` | `public bool IsDoingPassiveAttack { get; }` |
| `IsPassiveUsageConditionsAreMet` | `public bool IsPassiveUsageConditionsAreMet { get; }` |
| `CurrentAimingError` | `public float CurrentAimingError { get; }` |
| `CurrentAimingTurbulance` | `public float CurrentAimingTurbulance { get; }` |
| `AttackDirection` | `public Agent.UsageDirection AttackDirection { get; }` |
| `WalkingSpeedLimitOfMountable` | `public float WalkingSpeedLimitOfMountable { get; }` |
| `RiderAgent` | `public Agent RiderAgent { get; }` |
| `HasMount` | `public bool HasMount { get; }` |
| `CanLogCombatFor` | `public bool CanLogCombatFor { get; }` |
| `MissileRangeAdjusted` | `public float MissileRangeAdjusted { get; }` |
| `MaximumMissileRange` | `public float MaximumMissileRange { get; }` |
| `Name` | `public string Name { get; }` |
| `NameTextObject` | `public TextObject NameTextObject { get; }` |
| `MovementLockedState` | `public AgentMovementLockedState MovementLockedState { get; }` |
| `Monster` | `public Monster Monster { get; }` |
| `IsRunningAway` | `public bool IsRunningAway { get; }` |
| `BodyPropertiesValue` | `public BodyProperties BodyPropertiesValue { get; }` |
| `CommonAIComponent` | `public CommonAIComponent CommonAIComponent { get; }` |
| `HumanAIComponent` | `public HumanAIComponent HumanAIComponent { get; }` |
| `BodyPropertiesSeed` | `public int BodyPropertiesSeed { get; }` |
| `LastRangedHitTime` | `public float LastRangedHitTime { get; }` |
| `LastMeleeHitTime` | `public float LastMeleeHitTime { get; }` |
| `LastRangedAttackTime` | `public float LastRangedAttackTime { get; }` |
| `LastMeleeAttackTime` | `public float LastMeleeAttackTime { get; }` |
| `IsFemale` | `public bool IsFemale { get; set; }` |
| `Banner` | `public ItemObject Banner { get; }` |
| `FormationBanner` | `public ItemObject FormationBanner { get; }` |
| `WieldedWeapon` | `public MissionWeapon WieldedWeapon { get; }` |
| `IsItemUseDisabled` | `public bool IsItemUseDisabled { get; }` |
| `SyncHealthToAllClients` | `public bool SyncHealthToAllClients { get; }` |
| `CurrentlyUsedGameObject` | `public UsableMissionObject CurrentlyUsedGameObject { get; }` |
| `CombatActionsEnabled` | `public bool CombatActionsEnabled { get; }` |
| `Mission` | `public Mission Mission { get; }` |
| `IsHero` | `public bool IsHero { get; }` |
| `Index` | `public int Index { get; }` |
| `Equipment` | `public MissionEquipment Equipment { get; }` |
| `AgentRole` | `public TextObject AgentRole { get; }` |
| `HasBeenBuilt` | `public bool HasBeenBuilt { get; }` |
| `CurrentMortalityState` | `public Agent.MortalityState CurrentMortalityState { get; }` |
| `SpawnEquipment` | `public Equipment SpawnEquipment { get; }` |
| `FormationPositionPreference` | `public FormationPositionPreference FormationPositionPreference { get; }` |
| `RandomizeColors` | `public bool RandomizeColors { get; }` |
| `CharacterPowerCached` | `public float CharacterPowerCached { get; }` |
| `WalkSpeedCached` | `public float WalkSpeedCached { get; }` |
| `Origin` | `public IAgentOriginBase Origin { get; }` |
| `Team` | `public Team Team { get; }` |
| `KillCount` | `public int KillCount { get; }` |
| `AgentDrivenProperties` | `public AgentDrivenProperties AgentDrivenProperties { get; }` |
| `BaseHealthLimit` | `public float BaseHealthLimit { get; }` |
| `HorseCreationKey` | `public string HorseCreationKey { get; }` |
| `HealthLimit` | `public float HealthLimit { get; set; }` |
| `IsRangedCached` | `public bool IsRangedCached { get; }` |
| `HasAnyRangedWeaponCached` | `public bool HasAnyRangedWeaponCached { get; }` |
| `HasMeleeWeaponCached` | `public bool HasMeleeWeaponCached { get; }` |
| `HasShieldCached` | `public bool HasShieldCached { get; }` |
| `HasSpearCached` | `public bool HasSpearCached { get; }` |
| `HasThrownCached` | `public bool HasThrownCached { get; set; }` |
| `AIStateFlags` | `public Agent.AIStateFlag AIStateFlags { get; set; }` |
| `Frame` | `public MatrixFrame Frame { get; }` |
| `MovementFlags` | `public Agent.MovementControlFlag MovementFlags { get; set; }` |
| `MovementInputVector` | `public Vec2 MovementInputVector { get; set; }` |
| `CollisionCapsule` | `public CapsuleData CollisionCapsule { get; }` |
| `CollisionCapsuleCenter` | `public Vec3 CollisionCapsuleCenter { get; }` |
| `AgentVisuals` | `public MBAgentVisuals AgentVisuals { get; }` |
| `HeadCameraMode` | `public bool HeadCameraMode { get; set; }` |
| `MountAgent` | `public Agent MountAgent { get; }` |
| `Detachment` | `public IDetachment Detachment { get; set; }` |
| `IsPaused` | `public bool IsPaused { get; set; }` |
| `IsDetachedFromFormation` | `public bool IsDetachedFromFormation { get; }` |
| `CurrentWatchState` | `public Agent.WatchState CurrentWatchState { get; }` |
| `Defensiveness` | `public float Defensiveness { get; set; }` |
| `Formation` | `public Formation Formation { get; set; }` |
| `IsShieldUsageEncouraged` | `public bool IsShieldUsageEncouraged { get; }` |
| `IsPlayerUnit` | `public bool IsPlayerUnit { get; }` |
| `Controller` | `public AgentControllerType Controller { get; set; }` |
| `ClothingColor1` | `public uint ClothingColor1 { get; }` |
| `ClothingColor2` | `public uint ClothingColor2 { get; }` |
| `LookFrame` | `public MatrixFrame LookFrame { get; }` |
| `LookDirectionAsAngle` | `public float LookDirectionAsAngle { get; set; }` |
| `LookRotation` | `public Mat3 LookRotation { get; }` |
| `IsLookDirectionLocked` | `public bool IsLookDirectionLocked { get; set; }` |
| `IsCheering` | `public bool IsCheering { get; }` |
| `IsInBeingStruckAction` | `public bool IsInBeingStruckAction { get; }` |
| `MissionPeer` | `public MissionPeer MissionPeer { get; set; }` |
| `Character` | `public BasicCharacterObject Character { get; set; }` |
| `LastDetachmentTickAgentTime` | `public float LastDetachmentTickAgentTime { get; }` |
| `OwningAgentMissionPeer` | `public MissionPeer OwningAgentMissionPeer { get; }` |
| `MissionRepresentative` | `public MissionRepresentativeBase MissionRepresentative { get; }` |
| `IsInLadderQueue` | `public bool IsInLadderQueue { get; }` |
| `LocalPositionError` | `public Vec2 LocalPositionError { get; }` |
| `DetachmentWeight` | `public float DetachmentWeight { get; }` |
| `DetachmentIndex` | `public int DetachmentIndex { get; }` |
| `IsFormationFrameEnabled` | `public bool IsFormationFrameEnabled { get; }` |
| `LookDirection` | `public Vec3 LookDirection { get; set; }` |
| `IsLookDirectionLow` | `public bool IsLookDirectionLow { get; set; }` |
| `Health` | `public float Health { get; set; }` |
| `Age` | `public float Age { get; set; }` |
| `Velocity` | `public Vec3 Velocity { get; }` |
| `EventControlFlags` | `public Agent.EventControlFlag EventControlFlags { get; set; }` |
| `State` | `public AgentState State { get; set; }` |
| `WieldedOffhandWeapon` | `public MissionWeapon WieldedOffhandWeapon { get; }` |
| `Damage` | `public float Damage { get; }` |
| `LastBlowOwnerId` | `public int LastBlowOwnerId { get; }` |
| `LastBlowAttackType` | `public AgentAttackType LastBlowAttackType { get; }` |
| `CanOverrideBlow` | `public bool CanOverrideBlow { get; }` |
| `this` | `public Agent this { get; }` |

## Key Methods

### GetHasOnAiInputSetCallback
`public bool GetHasOnAiInputSetCallback()`

**Purpose:** Reads and returns the `has on ai input set callback` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetHasOnAiInputSetCallback();
```

### SetHasOnAiInputSetCallback
`public void SetHasOnAiInputSetCallback(bool value)`

**Purpose:** Assigns a new value to `has on ai input set callback` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetHasOnAiInputSetCallback(false);
```

### GetMissileRangeWithHeightDifferenceAux
`public float GetMissileRangeWithHeightDifferenceAux(float targetZ)`

**Purpose:** Reads and returns the `missile range with height difference aux` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetMissileRangeWithHeightDifferenceAux(0);
```

### GetSoundAndCollisionInfoClassName
`public string GetSoundAndCollisionInfoClassName()`

**Purpose:** Reads and returns the `sound and collision info class name` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetSoundAndCollisionInfoClassName();
```

### UpdateAgentStats
`public void UpdateAgentStats()`

**Purpose:** Recalculates and stores the latest representation of `agent stats`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateAgentStats();
```

### GetWeaponInaccuracy
`public float GetWeaponInaccuracy(EquipmentIndex weaponSlotIndex, int weaponUsageIndex)`

**Purpose:** Reads and returns the `weapon inaccuracy` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetWeaponInaccuracy(weaponSlotIndex, 0);
```

### DebugGetHealth
`public float DebugGetHealth()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.DebugGetHealth();
```

### SetTargetPosition
`public void SetTargetPosition(Vec2 value)`

**Purpose:** Assigns a new value to `target position` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetPosition(value);
```

### SetTargetZ
`public void SetTargetZ(float targetZ)`

**Purpose:** Assigns a new value to `target z` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetZ(0);
```

### SetTargetUp
`public void SetTargetUp(in Vec3 targetUp)`

**Purpose:** Assigns a new value to `target up` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetUp(targetUp);
```

### SetCanLeadFormationsRemotely
`public void SetCanLeadFormationsRemotely(bool value)`

**Purpose:** Assigns a new value to `can lead formations remotely` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetCanLeadFormationsRemotely(false);
```

### SetAveragePingInMilliseconds
`public void SetAveragePingInMilliseconds(double averagePingInMilliseconds)`

**Purpose:** Assigns a new value to `average ping in milliseconds` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAveragePingInMilliseconds(0);
```

### SetTargetPositionAndDirection
`public void SetTargetPositionAndDirection(in Vec2 targetPosition, in Vec3 targetDirection)`

**Purpose:** Assigns a new value to `target position and direction` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetPositionAndDirection(targetPosition, targetDirection);
```

### AddAcceleration
`public void AddAcceleration(in Vec3 acceleration)`

**Purpose:** Adds `acceleration` to the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.AddAcceleration(acceleration);
```

### SetWeaponGuard
`public void SetWeaponGuard(Agent.UsageDirection direction)`

**Purpose:** Assigns a new value to `weapon guard` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetWeaponGuard(direction);
```

### SetWatchState
`public void SetWatchState(Agent.WatchState watchState)`

**Purpose:** Assigns a new value to `watch state` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetWatchState(watchState);
```

### IsAlarmStateNormal
`public bool IsAlarmStateNormal()`

**Purpose:** Determines whether the current object is in the `alarm state normal` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsAlarmStateNormal();
```

### IsCautious
`public bool IsCautious()`

**Purpose:** Determines whether the current object is in the `cautious` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsCautious();
```

### IsPatrollingCautious
`public bool IsPatrollingCautious()`

**Purpose:** Determines whether the current object is in the `patrolling cautious` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsPatrollingCautious();
```

### IsAlarmed
`public bool IsAlarmed()`

**Purpose:** Determines whether the current object is in the `alarmed` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsAlarmed();
```

### SetAlarmState
`public bool SetAlarmState(Agent.AIStateFlag alarmStateFlag)`

**Purpose:** Assigns a new value to `alarm state` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.SetAlarmState(alarmStateFlag);
```

### SetTargetFormationIndex
`public void SetTargetFormationIndex(int targetFormationIndex)`

**Purpose:** Assigns a new value to `target formation index` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetFormationIndex(0);
```

### StartRagdollAsCorpse
`public void StartRagdollAsCorpse()`

**Purpose:** Starts the `ragdoll as corpse` flow or state machine.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.StartRagdollAsCorpse();
```

### EndRagdollAsCorpse
`public void EndRagdollAsCorpse()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.EndRagdollAsCorpse();
```

### IsAddedAsCorpse
`public bool IsAddedAsCorpse()`

**Purpose:** Determines whether the current object is in the `added as corpse` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsAddedAsCorpse();
```

### AddAsCorpse
`public void AddAsCorpse()`

**Purpose:** Adds `as corpse` to the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.AddAsCorpse();
```

### SetOverridenStrikeAndDeathAction
`public void SetOverridenStrikeAndDeathAction(in ActionIndexCache strikeAction, in ActionIndexCache deathAction)`

**Purpose:** Assigns a new value to `overriden strike and death action` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetOverridenStrikeAndDeathAction(strikeAction, deathAction);
```

### ApplyForceOnRagdoll
`public void ApplyForceOnRagdoll(sbyte boneIndex, in Vec3 force)`

**Purpose:** Applies the effect of `force on ragdoll` to the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ApplyForceOnRagdoll(0, force);
```

### SetVelocityLimitsOnRagdoll
`public void SetVelocityLimitsOnRagdoll(float linearVelocityLimit, float angularVelocityLimit)`

**Purpose:** Assigns a new value to `velocity limits on ragdoll` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetVelocityLimitsOnRagdoll(0, 0);
```

### GetAILastSuspiciousPosition
`public WorldPosition GetAILastSuspiciousPosition()`

**Purpose:** Reads and returns the `a i last suspicious position` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAILastSuspiciousPosition();
```

### SetAILastSuspiciousPosition
`public void SetAILastSuspiciousPosition(WorldPosition lastSuspiciousPosition, bool checkNavMeshForCorrection)`

**Purpose:** Assigns a new value to `a i last suspicious position` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAILastSuspiciousPosition(lastSuspiciousPosition, false);
```

### GetAIMoveDestination
`public WorldPosition GetAIMoveDestination()`

**Purpose:** Reads and returns the `a i move destination` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAIMoveDestination();
```

### FindLongestDirectMoveToPosition
`public Vec2 FindLongestDirectMoveToPosition(Vec2 targetPosition, bool checkBoundaries, bool checkFriendlyAgents, out bool isCollidedWithAgent)`

**Purpose:** Looks up the matching `longest direct move to position` in the current collection or scope.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.FindLongestDirectMoveToPosition(targetPosition, false, false, isCollidedWithAgent);
```

### GetAIMoveStartTolerance
`public float GetAIMoveStartTolerance()`

**Purpose:** Reads and returns the `a i move start tolerance` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAIMoveStartTolerance();
```

### GetAIMoveStopTolerance
`public float GetAIMoveStopTolerance()`

**Purpose:** Reads and returns the `a i move stop tolerance` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAIMoveStopTolerance();
```

### IsAIAtMoveDestination
`public bool IsAIAtMoveDestination()`

**Purpose:** Determines whether the current object is in the `a i at move destination` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsAIAtMoveDestination();
```

### SetFormationBanner
`public void SetFormationBanner(ItemObject banner)`

**Purpose:** Assigns a new value to `formation banner` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetFormationBanner(banner);
```

### SetIsAIPaused
`public void SetIsAIPaused(bool isPaused)`

**Purpose:** Assigns a new value to `is a i paused` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetIsAIPaused(false);
```

### ResetEnemyCaches
`public void ResetEnemyCaches()`

**Purpose:** Returns `enemy caches` to its default or initial condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ResetEnemyCaches();
```

### SetTargetPositionSynched
`public void SetTargetPositionSynched(ref Vec2 targetPosition)`

**Purpose:** Assigns a new value to `target position synched` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetPositionSynched(targetPosition);
```

### SetTargetPositionAndDirectionSynched
`public void SetTargetPositionAndDirectionSynched(ref Vec2 targetPosition, ref Vec3 targetDirection)`

**Purpose:** Assigns a new value to `target position and direction synched` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetPositionAndDirectionSynched(targetPosition, targetDirection);
```

### SetBodyArmorMaterialType
`public void SetBodyArmorMaterialType(ArmorComponent.ArmorMaterialTypes bodyArmorMaterialType)`

**Purpose:** Assigns a new value to `body armor material type` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetBodyArmorMaterialType(bodyArmorMaterialType);
```

### SetUsedGameObjectForClient
`public void SetUsedGameObjectForClient(UsableMissionObject usedObject)`

**Purpose:** Assigns a new value to `used game object for client` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetUsedGameObjectForClient(usedObject);
```

### SetTeam
`public void SetTeam(Team team, bool sync)`

**Purpose:** Assigns a new value to `team` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTeam(team, false);
```

### SetClothingColor1
`public void SetClothingColor1(uint color)`

**Purpose:** Assigns a new value to `clothing color1` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetClothingColor1(0);
```

### SetClothingColor2
`public void SetClothingColor2(uint color)`

**Purpose:** Assigns a new value to `clothing color2` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetClothingColor2(0);
```

### SetWieldedItemIndexAsClient
`public void SetWieldedItemIndexAsClient(Agent.HandIndex handIndex, EquipmentIndex equipmentIndex, bool isWieldedInstantly, bool isWieldedOnSpawn, int mainHandCurrentUsageIndex)`

**Purpose:** Assigns a new value to `wielded item index as client` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetWieldedItemIndexAsClient(handIndex, equipmentIndex, false, false, 0);
```

### SetPreciseRangedAimingEnabled
`public void SetPreciseRangedAimingEnabled(bool set)`

**Purpose:** Assigns a new value to `precise ranged aiming enabled` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetPreciseRangedAimingEnabled(false);
```

### SetAsConversationAgent
`public void SetAsConversationAgent(bool set)`

**Purpose:** Assigns a new value to `as conversation agent` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAsConversationAgent(false);
```

### SetCrouchMode
`public void SetCrouchMode(bool set)`

**Purpose:** Assigns a new value to `crouch mode` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetCrouchMode(false);
```

### SetWeaponAmountInSlot
`public void SetWeaponAmountInSlot(EquipmentIndex equipmentSlot, short amount, bool enforcePrimaryItem)`

**Purpose:** Assigns a new value to `weapon amount in slot` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetWeaponAmountInSlot(equipmentSlot, 0, false);
```

### SetDraggingMode
`public void SetDraggingMode(bool set)`

**Purpose:** Assigns a new value to `dragging mode` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetDraggingMode(false);
```

### SetWeaponAmmoAsClient
`public void SetWeaponAmmoAsClient(EquipmentIndex equipmentIndex, EquipmentIndex ammoEquipmentIndex, short ammo)`

**Purpose:** Assigns a new value to `weapon ammo as client` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetWeaponAmmoAsClient(equipmentIndex, ammoEquipmentIndex, 0);
```

### SetWeaponReloadPhaseAsClient
`public void SetWeaponReloadPhaseAsClient(EquipmentIndex equipmentIndex, short reloadState)`

**Purpose:** Assigns a new value to `weapon reload phase as client` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetWeaponReloadPhaseAsClient(equipmentIndex, 0);
```

### SetReloadAmmoInSlot
`public void SetReloadAmmoInSlot(EquipmentIndex equipmentIndex, EquipmentIndex ammoSlotIndex, short reloadedAmmo)`

**Purpose:** Assigns a new value to `reload ammo in slot` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetReloadAmmoInSlot(equipmentIndex, ammoSlotIndex, 0);
```

### SetUsageIndexOfWeaponInSlotAsClient
`public void SetUsageIndexOfWeaponInSlotAsClient(EquipmentIndex slotIndex, int usageIndex)`

**Purpose:** Assigns a new value to `usage index of weapon in slot as client` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetUsageIndexOfWeaponInSlotAsClient(slotIndex, 0);
```

### SetRandomizeColors
`public void SetRandomizeColors(bool shouldRandomize)`

**Purpose:** Assigns a new value to `randomize colors` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetRandomizeColors(false);
```

### SetFormationFrameDisabled
`public void SetFormationFrameDisabled()`

**Purpose:** Assigns a new value to `formation frame disabled` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetFormationFrameDisabled();
```

### SetFormationFrameEnabled
`public void SetFormationFrameEnabled(WorldPosition position, Vec2 direction, Vec2 positionVelocity, float formationDirectionEnforcingFactor)`

**Purpose:** Assigns a new value to `formation frame enabled` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetFormationFrameEnabled(position, direction, positionVelocity, 0);
```

### SetShouldCatchUpWithFormation
`public void SetShouldCatchUpWithFormation(bool value)`

**Purpose:** Assigns a new value to `should catch up with formation` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetShouldCatchUpWithFormation(false);
```

### SetFormationIntegrityData
`public void SetFormationIntegrityData(Vec2 position, Vec2 currentFormationDirection, Vec2 averageVelocityOfCloseAgents, float averageMaxUnlimitedSpeedOfCloseAgents, float deviationOfPositions, bool shouldKeepWithFormationInsteadOfMovingToAgent)`

**Purpose:** Assigns a new value to `formation integrity data` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetFormationIntegrityData(position, currentFormationDirection, averageVelocityOfCloseAgents, 0, 0, false);
```

### IsCrouchingAllowed
`public bool IsCrouchingAllowed()`

**Purpose:** Determines whether the current object is in the `crouching allowed` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsCrouchingAllowed();
```

### SetCurrentActionProgress
`public void SetCurrentActionProgress(int channelNo, float progress)`

**Purpose:** Assigns a new value to `current action progress` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetCurrentActionProgress(0, 0);
```

### SetCurrentActionSpeed
`public void SetCurrentActionSpeed(int channelNo, float speed)`

**Purpose:** Assigns a new value to `current action speed` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetCurrentActionSpeed(0, 0);
```

### SetActionChannel
`public bool SetActionChannel(int channelNo, in ActionIndexCache actionIndexCache, bool ignorePriority = false, AnimFlags additionalFlags = (AnimFlags)0UL, float blendWithNextActionFactor = 0f, float actionSpeed = 1f, float blendInPeriod = -0.2f, float blendOutPeriodToNoAnim = 0.4f, float startProgress = 0f, bool useLinearSmoothing = false, float blendOutPeriod = -0.2f, int actionShift = 0, bool forceFaceMorphRestart = true)`

**Purpose:** Assigns a new value to `action channel` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.SetActionChannel(0, actionIndexCache, false, (AnimFlags)0UL, 0, 0, 0, 0, 0, false, 0, 0, false);
```

### SetAttackState
`public void SetAttackState(int attackState)`

**Purpose:** Assigns a new value to `attack state` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAttackState(0);
```

### SetAIBehaviorParams
`public void SetAIBehaviorParams(HumanAIComponent.AISimpleBehaviorKind behavior, float y1, float x2, float y2, float x3, float y3)`

**Purpose:** Assigns a new value to `a i behavior params` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAIBehaviorParams(behavior, 0, 0, 0, 0, 0);
```

### SetAllBehaviorParams
`public void SetAllBehaviorParams(HumanAIComponent.BehaviorValues behaviorParams)`

**Purpose:** Assigns a new value to `all behavior params` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAllBehaviorParams(behaviorParams);
```

### SetMovementDirection
`public void SetMovementDirection(in Vec2 direction)`

**Purpose:** Assigns a new value to `movement direction` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetMovementDirection(direction);
```

### SetScriptedFlags
`public void SetScriptedFlags(Agent.AIScriptedFrameFlags flags)`

**Purpose:** Assigns a new value to `scripted flags` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetScriptedFlags(flags);
```

### SetScriptedCombatFlags
`public void SetScriptedCombatFlags(Agent.AISpecialCombatModeFlags flags)`

**Purpose:** Assigns a new value to `scripted combat flags` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetScriptedCombatFlags(flags);
```

### SetScriptedPositionAndDirection
`public void SetScriptedPositionAndDirection(ref WorldPosition scriptedPosition, float scriptedDirection, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**Purpose:** Assigns a new value to `scripted position and direction` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetScriptedPositionAndDirection(scriptedPosition, 0, false, agent.AIScriptedFrameFlags.None);
```

### SetScriptedPosition
`public void SetScriptedPosition(ref WorldPosition position, bool addHumanLikeDelay, Agent.AIScriptedFrameFlags additionalFlags = Agent.AIScriptedFrameFlags.None)`

**Purpose:** Assigns a new value to `scripted position` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetScriptedPosition(position, false, agent.AIScriptedFrameFlags.None);
```

### SetScriptedTargetEntity
`public void SetScriptedTargetEntity(WeakGameEntity target, Agent.AISpecialCombatModeFlags additionalFlags = Agent.AISpecialCombatModeFlags.None, bool ignoreIfAlreadyAttacking = false)`

**Purpose:** Assigns a new value to `scripted target entity` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetScriptedTargetEntity(target, agent.AISpecialCombatModeFlags.None, false);
```

### SetAgentExcludeStateForFaceGroupId
`public void SetAgentExcludeStateForFaceGroupId(int faceGroupId, bool isExcluded)`

**Purpose:** Assigns a new value to `agent exclude state for face group id` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAgentExcludeStateForFaceGroupId(0, false);
```

### SetLookAgent
`public void SetLookAgent(Agent agent)`

**Purpose:** Assigns a new value to `look agent` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetLookAgent(agent);
```

### SetInteractionAgent
`public void SetInteractionAgent(Agent agent)`

**Purpose:** Assigns a new value to `interaction agent` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetInteractionAgent(agent);
```

### SetLookToPointOfInterest
`public void SetLookToPointOfInterest(Vec3 point)`

**Purpose:** Assigns a new value to `look to point of interest` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetLookToPointOfInterest(point);
```

### SetAgentFlags
`public void SetAgentFlags(AgentFlag agentFlags)`

**Purpose:** Assigns a new value to `agent flags` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAgentFlags(agentFlags);
```

### SetSelectedMountIndex
`public void SetSelectedMountIndex(int mountIndex)`

**Purpose:** Assigns a new value to `selected mount index` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetSelectedMountIndex(0);
```

### GetFiringOrder
`public int GetFiringOrder()`

**Purpose:** Reads and returns the `firing order` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetFiringOrder();
```

### GetRidingOrder
`public int GetRidingOrder()`

**Purpose:** Reads and returns the `riding order` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetRidingOrder();
```

### GetSelectedMountIndex
`public int GetSelectedMountIndex()`

**Purpose:** Reads and returns the `selected mount index` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetSelectedMountIndex();
```

### GetTargetFormationIndex
`public int GetTargetFormationIndex()`

**Purpose:** Reads and returns the `target formation index` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTargetFormationIndex();
```

### SetFiringOrder
`public void SetFiringOrder(FiringOrder.RangedWeaponUsageOrderEnum order)`

**Purpose:** Assigns a new value to `firing order` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetFiringOrder(order);
```

### SetRidingOrder
`public void SetRidingOrder(RidingOrder.RidingOrderEnum order)`

**Purpose:** Assigns a new value to `riding order` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetRidingOrder(order);
```

### SetAgentFacialAnimation
`public void SetAgentFacialAnimation(Agent.FacialAnimChannel channel, string animationName, bool loop)`

**Purpose:** Assigns a new value to `agent facial animation` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAgentFacialAnimation(channel, "example", false);
```

### SetHandInverseKinematicsFrame
`public bool SetHandInverseKinematicsFrame(in MatrixFrame leftGlobalFrame, in MatrixFrame rightGlobalFrame)`

**Purpose:** Assigns a new value to `hand inverse kinematics frame` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.SetHandInverseKinematicsFrame(leftGlobalFrame, rightGlobalFrame);
```

### SetNativeFormationNo
`public void SetNativeFormationNo(int formationNo)`

**Purpose:** Assigns a new value to `native formation no` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetNativeFormationNo(0);
```

### SetDirectionChangeTendency
`public void SetDirectionChangeTendency(float tendency)`

**Purpose:** Assigns a new value to `direction change tendency` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetDirectionChangeTendency(0);
```

### GetBattleImportance
`public float GetBattleImportance()`

**Purpose:** Reads and returns the `battle importance` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetBattleImportance();
```

### GetTraitsMask
`public TroopTraitsMask GetTraitsMask()`

**Purpose:** Reads and returns the `traits mask` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTraitsMask();
```

### SetSynchedPrefabComponentVisibility
`public void SetSynchedPrefabComponentVisibility(int componentIndex, bool visibility)`

**Purpose:** Assigns a new value to `synched prefab component visibility` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetSynchedPrefabComponentVisibility(0, false);
```

### SetActionSet
`public void SetActionSet(ref AnimationSystemData animationSystemData)`

**Purpose:** Assigns a new value to `action set` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetActionSet(animationSystemData);
```

### SetColumnwiseFollowAgent
`public void SetColumnwiseFollowAgent(Agent followAgent, ref Vec2 followPosition)`

**Purpose:** Assigns a new value to `columnwise follow agent` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetColumnwiseFollowAgent(followAgent, followPosition);
```

### SetHandInverseKinematicsFrameForMissionObjectUsage
`public void SetHandInverseKinematicsFrameForMissionObjectUsage(in MatrixFrame localIKFrame, in MatrixFrame boundEntityGlobalFrame, float animationHeightDifference = 0f)`

**Purpose:** Assigns a new value to `hand inverse kinematics frame for mission object usage` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetHandInverseKinematicsFrameForMissionObjectUsage(localIKFrame, boundEntityGlobalFrame, 0);
```

### SetWantsToYell
`public void SetWantsToYell()`

**Purpose:** Assigns a new value to `wants to yell` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetWantsToYell();
```

### SetCapeClothSimulator
`public void SetCapeClothSimulator(GameEntityComponent clothSimulatorComponent)`

**Purpose:** Assigns a new value to `cape cloth simulator` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetCapeClothSimulator(clothSimulatorComponent);
```

### GetTargetPosition
`public Vec2 GetTargetPosition()`

**Purpose:** Reads and returns the `target position` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTargetPosition();
```

### GetTargetDirection
`public Vec3 GetTargetDirection()`

**Purpose:** Reads and returns the `target direction` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTargetDirection();
```

### GetAimingTimer
`public float GetAimingTimer()`

**Purpose:** Reads and returns the `aiming timer` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAimingTimer();
```

### GetInteractionDistanceToUsable
`public float GetInteractionDistanceToUsable(IUsable usable)`

**Purpose:** Reads and returns the `interaction distance to usable` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetInteractionDistanceToUsable(usable);
```

### GetInfoTextForBeingNotInteractable
`public TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Reads and returns the `info text for being not interactable` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetInfoTextForBeingNotInteractable(userAgent);
```

### GetPrimaryWieldedItemIndex
`public EquipmentIndex GetPrimaryWieldedItemIndex()`

**Purpose:** Reads and returns the `primary wielded item index` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetPrimaryWieldedItemIndex();
```

### GetOffhandWieldedItemIndex
`public EquipmentIndex GetOffhandWieldedItemIndex()`

**Purpose:** Reads and returns the `offhand wielded item index` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetOffhandWieldedItemIndex();
```

### GetMaximumForwardUnlimitedSpeed
`public float GetMaximumForwardUnlimitedSpeed()`

**Purpose:** Reads and returns the `maximum forward unlimited speed` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetMaximumForwardUnlimitedSpeed();
```

### GetDescriptionText
`public TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetDescriptionText(gameEntity);
```

### GetWeaponEntityFromEquipmentSlot
`public WeakGameEntity GetWeaponEntityFromEquipmentSlot(EquipmentIndex slotIndex)`

**Purpose:** Reads and returns the `weapon entity from equipment slot` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetWeaponEntityFromEquipmentSlot(slotIndex);
```

### GetRetreatPos
`public WorldPosition GetRetreatPos()`

**Purpose:** Reads and returns the `retreat pos` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetRetreatPos();
```

### GetScriptedFlags
`public Agent.AIScriptedFrameFlags GetScriptedFlags()`

**Purpose:** Reads and returns the `scripted flags` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetScriptedFlags();
```

### GetScriptedCombatFlags
`public Agent.AISpecialCombatModeFlags GetScriptedCombatFlags()`

**Purpose:** Reads and returns the `scripted combat flags` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetScriptedCombatFlags();
```

### GetSteppedEntity
`public WeakGameEntity GetSteppedEntity()`

**Purpose:** Reads and returns the `stepped entity` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetSteppedEntity();
```

### GetSteppedRootEntity
`public WeakGameEntity GetSteppedRootEntity()`

**Purpose:** Reads and returns the `stepped root entity` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetSteppedRootEntity();
```

### GetSteppedBodyFlags
`public BodyFlags GetSteppedBodyFlags()`

**Purpose:** Reads and returns the `stepped body flags` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetSteppedBodyFlags();
```

### GetCurrentAnimationFlag
`public AnimFlags GetCurrentAnimationFlag(int channelNo)`

**Purpose:** Reads and returns the `current animation flag` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentAnimationFlag(0);
```

### GetCurrentAction
`public ActionIndexCache GetCurrentAction(int channelNo)`

**Purpose:** Reads and returns the `current action` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentAction(0);
```

### GetCurrentActionType
`public Agent.ActionCodeType GetCurrentActionType(int channelNo)`

**Purpose:** Reads and returns the `current action type` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentActionType(0);
```

### GetCurrentActionStage
`public Agent.ActionStage GetCurrentActionStage(int channelNo)`

**Purpose:** Reads and returns the `current action stage` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentActionStage(0);
```

### GetCurrentActionDirection
`public Agent.UsageDirection GetCurrentActionDirection(int channelNo)`

**Purpose:** Reads and returns the `current action direction` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentActionDirection(0);
```

### GetCurrentActionPriority
`public int GetCurrentActionPriority(int channelNo)`

**Purpose:** Reads and returns the `current action priority` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentActionPriority(0);
```

### GetCurrentActionProgress
`public float GetCurrentActionProgress(int channelNo)`

**Purpose:** Reads and returns the `current action progress` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentActionProgress(0);
```

### GetActionChannelWeight
`public float GetActionChannelWeight(int channelNo)`

**Purpose:** Reads and returns the `action channel weight` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetActionChannelWeight(0);
```

### GetActionChannelCurrentActionWeight
`public float GetActionChannelCurrentActionWeight(int channelNo)`

**Purpose:** Reads and returns the `action channel current action weight` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetActionChannelCurrentActionWeight(0);
```

### GetWorldFrame
`public WorldFrame GetWorldFrame()`

**Purpose:** Reads and returns the `world frame` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetWorldFrame();
```

### GetLookDownLimit
`public float GetLookDownLimit()`

**Purpose:** Reads and returns the `look down limit` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetLookDownLimit();
```

### GetEyeGlobalHeight
`public float GetEyeGlobalHeight()`

**Purpose:** Reads and returns the `eye global height` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetEyeGlobalHeight();
```

### GetMaximumSpeedLimit
`public float GetMaximumSpeedLimit()`

**Purpose:** Reads and returns the `maximum speed limit` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetMaximumSpeedLimit();
```

### GetCurrentVelocity
`public Vec2 GetCurrentVelocity()`

**Purpose:** Reads and returns the `current velocity` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentVelocity();
```

### GetTurnSpeed
`public float GetTurnSpeed()`

**Purpose:** Reads and returns the `turn speed` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTurnSpeed();
```

### GetCurrentSpeedLimit
`public float GetCurrentSpeedLimit()`

**Purpose:** Reads and returns the `current speed limit` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentSpeedLimit();
```

### GetRealGlobalVelocity
`public Vec3 GetRealGlobalVelocity()`

**Purpose:** Reads and returns the `real global velocity` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetRealGlobalVelocity();
```

### GetAverageRealGlobalVelocity
`public Vec3 GetAverageRealGlobalVelocity()`

**Purpose:** Reads and returns the `average real global velocity` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAverageRealGlobalVelocity();
```

### GetMovementDirection
`public Vec2 GetMovementDirection()`

**Purpose:** Reads and returns the `movement direction` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetMovementDirection();
```

### GetCurWeaponOffset
`public Vec3 GetCurWeaponOffset()`

**Purpose:** Reads and returns the `cur weapon offset` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurWeaponOffset();
```

### GetIsLeftStance
`public bool GetIsLeftStance()`

**Purpose:** Reads and returns the `is left stance` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetIsLeftStance();
```

### GetPathDistanceToPoint
`public float GetPathDistanceToPoint(ref Vec3 point)`

**Purpose:** Reads and returns the `path distance to point` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetPathDistanceToPoint(point);
```

### GetCurrentNavigationFaceId
`public int GetCurrentNavigationFaceId()`

**Purpose:** Reads and returns the `current navigation face id` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetCurrentNavigationFaceId();
```

### GetWorldPosition
`public WorldPosition GetWorldPosition()`

**Purpose:** Reads and returns the `world position` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetWorldPosition();
```

### GetGroundMaterialForCollisionEffect
`public int GetGroundMaterialForCollisionEffect()`

**Purpose:** Reads and returns the `ground material for collision effect` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetGroundMaterialForCollisionEffect();
```

### GetLookAgent
`public Agent GetLookAgent()`

**Purpose:** Reads and returns the `look agent` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetLookAgent();
```

### GetTargetAgent
`public Agent GetTargetAgent()`

**Purpose:** Reads and returns the `target agent` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTargetAgent();
```

### SetTargetAgent
`public void SetTargetAgent(Agent agent)`

**Purpose:** Assigns a new value to `target agent` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetTargetAgent(agent);
```

### SetAutomaticTargetSelection
`public void SetAutomaticTargetSelection(bool enable)`

**Purpose:** Assigns a new value to `automatic target selection` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAutomaticTargetSelection(false);
```

### GetAgentFlags
`public AgentFlag GetAgentFlags()`

**Purpose:** Reads and returns the `agent flags` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAgentFlags();
```

### GetAgentFacialAnimation
`public string GetAgentFacialAnimation()`

**Purpose:** Reads and returns the `agent facial animation` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAgentFacialAnimation();
```

### GetAgentVoiceDefinition
`public string GetAgentVoiceDefinition()`

**Purpose:** Reads and returns the `agent voice definition` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAgentVoiceDefinition();
```

### GetEyeGlobalPosition
`public Vec3 GetEyeGlobalPosition()`

**Purpose:** Reads and returns the `eye global position` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetEyeGlobalPosition();
```

### GetChestGlobalPosition
`public Vec3 GetChestGlobalPosition()`

**Purpose:** Reads and returns the `chest global position` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetChestGlobalPosition();
```

### GetDefendMovementFlag
`public Agent.MovementControlFlag GetDefendMovementFlag()`

**Purpose:** Reads and returns the `defend movement flag` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetDefendMovementFlag();
```

### GetAttackDirection
`public Agent.UsageDirection GetAttackDirection()`

**Purpose:** Reads and returns the `attack direction` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAttackDirection();
```

### GetWieldedWeaponInfo
`public WeaponInfo GetWieldedWeaponInfo(Agent.HandIndex handIndex)`

**Purpose:** Reads and returns the `wielded weapon info` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetWieldedWeaponInfo(handIndex);
```

### GetBodyRotationConstraint
`public Vec2 GetBodyRotationConstraint(int channelIndex = 1)`

**Purpose:** Reads and returns the `body rotation constraint` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetBodyRotationConstraint(0);
```

### GetTotalEncumbrance
`public float GetTotalEncumbrance()`

**Purpose:** Reads and returns the `total encumbrance` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTotalEncumbrance();
```

### GetTotalMass
`public float GetTotalMass()`

**Purpose:** Reads and returns the `total mass` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetTotalMass();
```

### GetAgentDrivenPropertyValue
`public float GetAgentDrivenPropertyValue(DrivenProperty type)`

**Purpose:** Reads and returns the `agent driven property value` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAgentDrivenPropertyValue(type);
```

### GetSteppedMachine
`public UsableMachine GetSteppedMachine()`

**Purpose:** Reads and returns the `stepped machine` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetSteppedMachine();
```

### GetAttachedWeaponsCount
`public int GetAttachedWeaponsCount()`

**Purpose:** Reads and returns the `attached weapons count` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAttachedWeaponsCount();
```

### GetAttachedWeapon
`public MissionWeapon GetAttachedWeapon(int index)`

**Purpose:** Reads and returns the `attached weapon` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAttachedWeapon(0);
```

### GetAttachedWeaponFrame
`public MatrixFrame GetAttachedWeaponFrame(int index)`

**Purpose:** Reads and returns the `attached weapon frame` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAttachedWeaponFrame(0);
```

### GetAttachedWeaponBoneIndex
`public sbyte GetAttachedWeaponBoneIndex(int index)`

**Purpose:** Reads and returns the `attached weapon bone index` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAttachedWeaponBoneIndex(0);
```

### DeleteAttachedWeapon
`public void DeleteAttachedWeapon(int index)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.DeleteAttachedWeapon(0);
```

### HasRangedWeapon
`public bool HasRangedWeapon(bool checkHasAmmo = false)`

**Purpose:** Determines whether the current object already holds `ranged weapon`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HasRangedWeapon(false);
```

### GetBoneEntitialFrameAtAnimationProgress
`public MatrixFrame GetBoneEntitialFrameAtAnimationProgress(sbyte boneIndex, int animationIndex, float progress)`

**Purpose:** Reads and returns the `bone entitial frame at animation progress` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetBoneEntitialFrameAtAnimationProgress(0, 0, 0);
```

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex)`

**Purpose:** Reads and returns the `formation file and rank info` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.GetFormationFileAndRankInfo(fileIndex, rankIndex);
```

### GetFormationFileAndRankInfo
`public void GetFormationFileAndRankInfo(out int fileIndex, out int rankIndex, out int fileCount, out int rankCount)`

**Purpose:** Reads and returns the `formation file and rank info` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.GetFormationFileAndRankInfo(fileIndex, rankIndex, fileCount, rankCount);
```

### SetMortalityState
`public void SetMortalityState(Agent.MortalityState newState)`

**Purpose:** Assigns a new value to `mortality state` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetMortalityState(newState);
```

### ToggleInvulnerable
`public void ToggleInvulnerable()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ToggleInvulnerable();
```

### GetArmLength
`public float GetArmLength()`

**Purpose:** Reads and returns the `arm length` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetArmLength();
```

### GetArmWeight
`public float GetArmWeight()`

**Purpose:** Reads and returns the `arm weight` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetArmWeight();
```

### GetRunningSimulationDataUntilMaximumSpeedReached
`public void GetRunningSimulationDataUntilMaximumSpeedReached(ref float combatAccelerationTime, ref float maxSpeed, float speedValues)`

**Purpose:** Reads and returns the `running simulation data until maximum speed reached` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.GetRunningSimulationDataUntilMaximumSpeedReached(combatAccelerationTime, maxSpeed, 0);
```

### SetMaximumSpeedLimit
`public void SetMaximumSpeedLimit(float maximumSpeedLimit, bool isMultiplier)`

**Purpose:** Assigns a new value to `maximum speed limit` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetMaximumSpeedLimit(0, false);
```

### GetBaseArmorEffectivenessForBodyPart
`public float GetBaseArmorEffectivenessForBodyPart(BoneBodyPartType bodyPart)`

**Purpose:** Reads and returns the `base armor effectiveness for body part` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetBaseArmorEffectivenessForBodyPart(bodyPart);
```

### GetLastTargetVisibilityState
`public AITargetVisibilityState GetLastTargetVisibilityState()`

**Purpose:** Reads and returns the `last target visibility state` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetLastTargetVisibilityState();
```

### GetMissileRange
`public float GetMissileRange()`

**Purpose:** Reads and returns the `missile range` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetMissileRange();
```

### SetAgentIdleAnimationStatus
`public void SetAgentIdleAnimationStatus(bool idleEnabled)`

**Purpose:** Assigns a new value to `agent idle animation status` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAgentIdleAnimationStatus(false);
```

### GetWeaponToReplaceOnQuickAction
`public ItemObject GetWeaponToReplaceOnQuickAction(SpawnedItemEntity spawnedItem, out EquipmentIndex possibleSlotIndex)`

**Purpose:** Reads and returns the `weapon to replace on quick action` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetWeaponToReplaceOnQuickAction(spawnedItem, possibleSlotIndex);
```

### GetAssistingHitter
`public Agent.Hitter GetAssistingHitter(MissionPeer killerPeer)`

**Purpose:** Reads and returns the `assisting hitter` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetAssistingHitter(killerPeer);
```

### CanReachAgent
`public bool CanReachAgent(Agent otherAgent)`

**Purpose:** Checks whether the current object meets the preconditions for `reach agent`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanReachAgent(otherAgent);
```

### CanInteractWithAgent
`public bool CanInteractWithAgent(Agent otherAgent, float userAgentCameraElevation)`

**Purpose:** Checks whether the current object meets the preconditions for `interact with agent`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanInteractWithAgent(otherAgent, 0);
```

### CanBeAssignedForScriptedMovement
`public bool CanBeAssignedForScriptedMovement()`

**Purpose:** Checks whether the current object meets the preconditions for `be assigned for scripted movement`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanBeAssignedForScriptedMovement();
```

### CanReachAndUseObject
`public bool CanReachAndUseObject(UsableMissionObject gameObject, float distanceSq)`

**Purpose:** Checks whether the current object meets the preconditions for `reach and use object`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanReachAndUseObject(gameObject, 0);
```

### CanReachObject
`public bool CanReachObject(UsableMissionObject gameObject, float distanceSq)`

**Purpose:** Checks whether the current object meets the preconditions for `reach object`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanReachObject(gameObject, 0);
```

### CanReachObjectFromPosition
`public bool CanReachObjectFromPosition(UsableMissionObject gameObject, float distanceSq, Vec3 position)`

**Purpose:** Checks whether the current object meets the preconditions for `reach object from position`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanReachObjectFromPosition(gameObject, 0, position);
```

### CanUseObject
`public bool CanUseObject(UsableMissionObject gameObject)`

**Purpose:** Checks whether the current object meets the preconditions for `use object`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanUseObject(gameObject);
```

### CanMoveDirectlyToPosition
`public bool CanMoveDirectlyToPosition(in Vec2 position)`

**Purpose:** Checks whether the current object meets the preconditions for `move directly to position`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanMoveDirectlyToPosition(position);
```

### CanInteractableWeaponBePickedUp
`public bool CanInteractableWeaponBePickedUp(SpawnedItemEntity spawnedItem)`

**Purpose:** Checks whether the current object meets the preconditions for `interactable weapon be picked up`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanInteractableWeaponBePickedUp(spawnedItem);
```

### CanQuickPickUp
`public bool CanQuickPickUp(SpawnedItemEntity spawnedItem)`

**Purpose:** Checks whether the current object meets the preconditions for `quick pick up`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanQuickPickUp(spawnedItem);
```

### CanTeleport
`public unsafe bool CanTeleport()`

**Purpose:** Checks whether the current object meets the preconditions for `teleport`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanTeleport();
```

### IsActive
`public bool IsActive()`

**Purpose:** Determines whether the current object is in the `active` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsActive();
```

### IsRetreating
`public bool IsRetreating()`

**Purpose:** Determines whether the current object is in the `retreating` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsRetreating();
```

### IsFadingOut
`public bool IsFadingOut()`

**Purpose:** Determines whether the current object is in the `fading out` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsFadingOut();
```

### SetAgentDrivenPropertyValueFromConsole
`public void SetAgentDrivenPropertyValueFromConsole(DrivenProperty type, float val)`

**Purpose:** Assigns a new value to `agent driven property value from console` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetAgentDrivenPropertyValueFromConsole(type, 0);
```

### IsOnLand
`public bool IsOnLand()`

**Purpose:** Determines whether the current object is in the `on land` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsOnLand();
```

### IsInWater
`public bool IsInWater()`

**Purpose:** Determines whether the current object is in the `in water` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsInWater();
```

### IsAbleToUseMachine
`public bool IsAbleToUseMachine()`

**Purpose:** Determines whether the current object is in the `able to use machine` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsAbleToUseMachine();
```

### IsAgentParentEntitySameAs
`public bool IsAgentParentEntitySameAs(GameEntity toBeChecked)`

**Purpose:** Determines whether the current object is in the `agent parent entity same as` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsAgentParentEntitySameAs(toBeChecked);
```

### SetExcludedFromGravity
`public void SetExcludedFromGravity(bool exclude, bool applyAverageGlobalVelocity)`

**Purpose:** Assigns a new value to `excluded from gravity` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetExcludedFromGravity(false, false);
```

### SetForceAttachedEntity
`public void SetForceAttachedEntity(WeakGameEntity willBeAttached)`

**Purpose:** Assigns a new value to `force attached entity` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetForceAttachedEntity(willBeAttached);
```

### IsSliding
`public bool IsSliding()`

**Purpose:** Determines whether the current object is in the `sliding` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsSliding();
```

### IsSitting
`public bool IsSitting()`

**Purpose:** Determines whether the current object is in the `sitting` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsSitting();
```

### IsReleasingChainAttackInMultiplayer
`public bool IsReleasingChainAttackInMultiplayer()`

**Purpose:** Determines whether the current object is in the `releasing chain attack in multiplayer` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsReleasingChainAttackInMultiplayer();
```

### IsCameraAttachable
`public bool IsCameraAttachable()`

**Purpose:** Determines whether the current object is in the `camera attachable` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsCameraAttachable();
```

### IsSynchedPrefabComponentVisible
`public bool IsSynchedPrefabComponentVisible(int componentIndex)`

**Purpose:** Determines whether the current object is in the `synched prefab component visible` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsSynchedPrefabComponentVisible(0);
```

### IsEnemyOf
`public bool IsEnemyOf(Agent otherAgent)`

**Purpose:** Determines whether the current object is in the `enemy of` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsEnemyOf(otherAgent);
```

### IsFriendOf
`public bool IsFriendOf(Agent otherAgent)`

**Purpose:** Determines whether the current object is in the `friend of` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsFriendOf(otherAgent);
```

### OnFocusGain
`public void OnFocusGain(Agent userAgent)`

**Purpose:** Invoked when the `focus gain` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnFocusGain(userAgent);
```

### OnFocusLose
`public void OnFocusLose(Agent userAgent)`

**Purpose:** Invoked when the `focus lose` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnFocusLose(userAgent);
```

### OnItemRemovedFromScene
`public void OnItemRemovedFromScene()`

**Purpose:** Invoked when the `item removed from scene` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnItemRemovedFromScene();
```

### OnUse
`public void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the `use` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnUse(userAgent, 0);
```

### OnUseStopped
`public void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the `use stopped` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnUseStopped(userAgent, false, 0);
```

### OnWeaponDrop
`public void OnWeaponDrop(EquipmentIndex equipmentSlot)`

**Purpose:** Invoked when the `weapon drop` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnWeaponDrop(equipmentSlot);
```

### OnItemPickup
`public void OnItemPickup(SpawnedItemEntity spawnedItemEntity, EquipmentIndex weaponPickUpSlotIndex, out bool removeWeapon)`

**Purpose:** Invoked when the `item pickup` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnItemPickup(spawnedItemEntity, weaponPickUpSlotIndex, removeWeapon);
```

### GetDistanceTo
`public float GetDistanceTo(Agent other)`

**Purpose:** Reads and returns the `distance to` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetDistanceTo(other);
```

### CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection
`public bool CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection(int navigationFaceId, in Vec3 direction, float overridenCostForFaceId)`

**Purpose:** Verifies whether `path to a i target agent passes through navigation face id from direction` holds true for the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CheckPathToAITargetAgentPassesThroughNavigationFaceIdFromDirection(0, direction, 0);
```

### IsTargetNavigationFaceIdBetween
`public bool IsTargetNavigationFaceIdBetween(int navigationFaceIdStart, int navigationFaceIdEnd)`

**Purpose:** Determines whether the current object is in the `target navigation face id between` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsTargetNavigationFaceIdBetween(0, 0);
```

### CheckEquipmentForCapeClothSimulationStateChange
`public void CheckEquipmentForCapeClothSimulationStateChange()`

**Purpose:** Verifies whether `equipment for cape cloth simulation state change` holds true for the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.CheckEquipmentForCapeClothSimulationStateChange();
```

### CheckToDropFlaggedItem
`public void CheckToDropFlaggedItem()`

**Purpose:** Verifies whether `to drop flagged item` holds true for the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.CheckToDropFlaggedItem();
```

### CheckSkillForMounting
`public bool CheckSkillForMounting(Agent mountAgent)`

**Purpose:** Verifies whether `skill for mounting` holds true for the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CheckSkillForMounting(mountAgent);
```

### InitializeSpawnEquipment
`public void InitializeSpawnEquipment(Equipment spawnEquipment)`

**Purpose:** Prepares the resources, state, or bindings required by `spawn equipment`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.InitializeSpawnEquipment(spawnEquipment);
```

### InitializeMissionEquipment
`public void InitializeMissionEquipment(MissionEquipment missionEquipment, Banner banner)`

**Purpose:** Prepares the resources, state, or bindings required by `mission equipment`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.InitializeMissionEquipment(missionEquipment, banner);
```

### InitializeAgentProperties
`public void InitializeAgentProperties(Equipment spawnEquipment, AgentBuildData agentBuildData)`

**Purpose:** Prepares the resources, state, or bindings required by `agent properties`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.InitializeAgentProperties(spawnEquipment, agentBuildData);
```

### UpdateFormationOrders
`public void UpdateFormationOrders()`

**Purpose:** Recalculates and stores the latest representation of `formation orders`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateFormationOrders();
```

### UpdateWeapons
`public void UpdateWeapons()`

**Purpose:** Recalculates and stores the latest representation of `weapons`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateWeapons();
```

### UpdateAgentProperties
`public void UpdateAgentProperties()`

**Purpose:** Recalculates and stores the latest representation of `agent properties`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateAgentProperties();
```

### UpdateCustomDrivenProperties
`public void UpdateCustomDrivenProperties()`

**Purpose:** Recalculates and stores the latest representation of `custom driven properties`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateCustomDrivenProperties();
```

### UpdateBodyProperties
`public void UpdateBodyProperties(BodyProperties bodyProperties)`

**Purpose:** Recalculates and stores the latest representation of `body properties`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateBodyProperties(bodyProperties);
```

### UpdateSyncHealthToAllClients
`public void UpdateSyncHealthToAllClients(bool value)`

**Purpose:** Recalculates and stores the latest representation of `sync health to all clients`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateSyncHealthToAllClients(false);
```

### UpdateSpawnEquipmentAndRefreshVisuals
`public void UpdateSpawnEquipmentAndRefreshVisuals(Equipment newSpawnEquipment)`

**Purpose:** Recalculates and stores the latest representation of `spawn equipment and refresh visuals`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateSpawnEquipmentAndRefreshVisuals(newSpawnEquipment);
```

### ForceUpdateCachedAndFormationValues
`public void ForceUpdateCachedAndFormationValues(bool updateOnlyMovement, bool arrangementChangeAllowed)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ForceUpdateCachedAndFormationValues(false, false);
```

### UpdateLastRangedAttackTimeDueToAnAttack
`public void UpdateLastRangedAttackTimeDueToAnAttack(float newTime)`

**Purpose:** Recalculates and stores the latest representation of `last ranged attack time due to an attack`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateLastRangedAttackTimeDueToAnAttack(0);
```

### InvalidateTargetAgent
`public void InvalidateTargetAgent()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.InvalidateTargetAgent();
```

### InvalidateAIWeaponSelections
`public void InvalidateAIWeaponSelections()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.InvalidateAIWeaponSelections();
```

### ResetLookAgent
`public void ResetLookAgent()`

**Purpose:** Returns `look agent` to its default or initial condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ResetLookAgent();
```

### ResetGuard
`public void ResetGuard()`

**Purpose:** Returns `guard` to its default or initial condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ResetGuard();
```

### ResetAgentProperties
`public void ResetAgentProperties()`

**Purpose:** Returns `agent properties` to its default or initial condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ResetAgentProperties();
```

### ResetAiWaitBeforeShootFactor
`public void ResetAiWaitBeforeShootFactor()`

**Purpose:** Returns `ai wait before shoot factor` to its default or initial condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ResetAiWaitBeforeShootFactor();
```

### ClearTargetFrame
`public void ClearTargetFrame()`

**Purpose:** Removes all `target frame` from the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ClearTargetFrame();
```

### ClearEquipment
`public void ClearEquipment()`

**Purpose:** Removes all `equipment` from the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ClearEquipment();
```

### ClearHandInverseKinematics
`public void ClearHandInverseKinematics()`

**Purpose:** Removes all `hand inverse kinematics` from the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ClearHandInverseKinematics();
```

### ClearAttachedWeapons
`public void ClearAttachedWeapons()`

**Purpose:** Removes all `attached weapons` from the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ClearAttachedWeapons();
```

### SetDetachableFromFormation
`public void SetDetachableFromFormation(bool value)`

**Purpose:** Assigns a new value to `detachable from formation` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetDetachableFromFormation(false);
```

### TryAttachToFormation
`public bool TryAttachToFormation()`

**Purpose:** Attempts to retrieve `attach to formation`, usually returning success through an out parameter.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.TryAttachToFormation();
```

### TryRemoveAllDetachmentScores
`public bool TryRemoveAllDetachmentScores()`

**Purpose:** Attempts to retrieve `remove all detachment scores`, usually returning success through an out parameter.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.TryRemoveAllDetachmentScores();
```

### EnforceShieldUsage
`public void EnforceShieldUsage(Agent.UsageDirection shieldDirection)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.EnforceShieldUsage(shieldDirection);
```

### ObjectHasVacantPosition
`public bool ObjectHasVacantPosition(UsableMissionObject gameObject)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.ObjectHasVacantPosition(gameObject);
```

### InteractingWithAnyGameObject
`public bool InteractingWithAnyGameObject()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.InteractingWithAnyGameObject();
```

### StopUsingGameObjectMT
`public void StopUsingGameObjectMT(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**Purpose:** Stops the `using game object m t` flow or state machine.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.StopUsingGameObjectMT(false, agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject);
```

### StopUsingGameObject
`public void StopUsingGameObject(bool isSuccessful = true, Agent.StopUsingGameObjectFlags flags = Agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject)`

**Purpose:** Stops the `using game object` flow or state machine.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.StopUsingGameObject(false, agent.StopUsingGameObjectFlags.AutoAttachAfterStoppingUsingGameObject);
```

### HandleStopUsingAction
`public void HandleStopUsingAction()`

**Purpose:** Executes the response logic associated with `stop using action`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.HandleStopUsingAction();
```

### HandleStartUsingAction
`public void HandleStartUsingAction(UsableMissionObject targetObject, int preferenceIndex)`

**Purpose:** Executes the response logic associated with `start using action`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.HandleStartUsingAction(targetObject, 0);
```

### AddController
`public AgentController AddController(Type type)`

**Purpose:** Adds `controller` to the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.AddController(type);
```

### RemoveController
`public AgentController RemoveController(Type type)`

**Purpose:** Removes `controller` from the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.RemoveController(type);
```

### CanThrustAttackStickToBone
`public bool CanThrustAttackStickToBone(BoneBodyPartType bodyPart)`

**Purpose:** Checks whether the current object meets the preconditions for `thrust attack stick to bone`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.CanThrustAttackStickToBone(bodyPart);
```

### GetOldWieldedItemInfo
`public void GetOldWieldedItemInfo(out int rightHandSlotIndex, out int rightHandUsageIndex, out int leftHandSlotIndex, out int leftHandUsageIndex)`

**Purpose:** Reads and returns the `old wielded item info` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.GetOldWieldedItemInfo(rightHandSlotIndex, rightHandUsageIndex, leftHandSlotIndex, leftHandUsageIndex);
```

### StartSwitchingWeaponUsageIndexAsClient
`public void StartSwitchingWeaponUsageIndexAsClient(EquipmentIndex equipmentIndex, int usageIndex, Agent.UsageDirection currentMovementFlagUsageDirection)`

**Purpose:** Starts the `switching weapon usage index as client` flow or state machine.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.StartSwitchingWeaponUsageIndexAsClient(equipmentIndex, 0, currentMovementFlagUsageDirection);
```

### TryToWieldWeaponInSlot
`public void TryToWieldWeaponInSlot(EquipmentIndex slotIndex, Agent.WeaponWieldActionType type, bool isWieldedOnSpawn)`

**Purpose:** Attempts to retrieve `to wield weapon in slot`, usually returning success through an out parameter.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.TryToWieldWeaponInSlot(slotIndex, type, false);
```

### PrepareWeaponForDropInEquipmentSlot
`public void PrepareWeaponForDropInEquipmentSlot(EquipmentIndex slotIndex, bool dropWithHolster)`

**Purpose:** Finishes prerequisite setup for the upcoming `weapon for drop in equipment slot` operation.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.PrepareWeaponForDropInEquipmentSlot(slotIndex, false);
```

### AddHitter
`public void AddHitter(MissionPeer peer, float damage, bool isFriendlyHit)`

**Purpose:** Adds `hitter` to the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.AddHitter(peer, 0, false);
```

### TryToSheathWeaponInHand
`public void TryToSheathWeaponInHand(Agent.HandIndex handIndex, Agent.WeaponWieldActionType type)`

**Purpose:** Attempts to retrieve `to sheath weapon in hand`, usually returning success through an out parameter.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.TryToSheathWeaponInHand(handIndex, type);
```

### RemoveHitter
`public void RemoveHitter(MissionPeer peer, bool isFriendlyHit)`

**Purpose:** Removes `hitter` from the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.RemoveHitter(peer, false);
```

### Retreat
`public void Retreat(WorldPosition retreatPos)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.Retreat(retreatPos);
```

### StopRetreating
`public void StopRetreating()`

**Purpose:** Stops the `retreating` flow or state machine.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.StopRetreating();
```

### UseGameObject
`public void UseGameObject(UsableMissionObject usedObject, int preferenceIndex = -1)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UseGameObject(usedObject, 0);
```

### SaveEquipmentsOnHand
`public void SaveEquipmentsOnHand()`

**Purpose:** Writes `equipments on hand` to persistent storage or a stream.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SaveEquipmentsOnHand();
```

### StartFadingOut
`public void StartFadingOut()`

**Purpose:** Starts the `fading out` flow or state machine.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.StartFadingOut();
```

### IsWandering
`public bool IsWandering()`

**Purpose:** Determines whether the current object is in the `wandering` state or condition.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.IsWandering();
```

### SetRenderCheckEnabled
`public void SetRenderCheckEnabled(bool value)`

**Purpose:** Assigns a new value to `render check enabled` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetRenderCheckEnabled(false);
```

### GetRenderCheckEnabled
`public bool GetRenderCheckEnabled()`

**Purpose:** Reads and returns the `render check enabled` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetRenderCheckEnabled();
```

### ComputeAnimationDisplacement
`public Vec3 ComputeAnimationDisplacement(float dt)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.ComputeAnimationDisplacement(0);
```

### TickActionChannels
`public void TickActionChannels(float dt)`

**Purpose:** Advances the `action channels` state each frame or update cycle.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.TickActionChannels(0);
```

### SetIsPhysicsForceClosed
`public void SetIsPhysicsForceClosed(bool isPhysicsForceClosed)`

**Purpose:** Assigns a new value to `is physics force closed` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetIsPhysicsForceClosed(false);
```

### LockAgentReplicationTableDataWithCurrentReliableSequenceNo
`public void LockAgentReplicationTableDataWithCurrentReliableSequenceNo(NetworkCommunicator peer)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.LockAgentReplicationTableDataWithCurrentReliableSequenceNo(peer);
```

### TeleportToPosition
`public void TeleportToPosition(Vec3 position)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.TeleportToPosition(position);
```

### FadeOut
`public void FadeOut(bool hideInstantly, bool hideMount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.FadeOut(false, false);
```

### FadeIn
`public void FadeIn()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.FadeIn();
```

### DisableScriptedMovement
`public void DisableScriptedMovement()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.DisableScriptedMovement();
```

### DisableScriptedCombatMovement
`public void DisableScriptedCombatMovement()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.DisableScriptedCombatMovement();
```

### ForceAiBehaviorSelection
`public void ForceAiBehaviorSelection()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ForceAiBehaviorSelection();
```

### HasPathThroughNavigationFaceIdFromDirectionMT
`public bool HasPathThroughNavigationFaceIdFromDirectionMT(int navigationFaceId, Vec2 direction)`

**Purpose:** Determines whether the current object already holds `path through navigation face id from direction m t`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HasPathThroughNavigationFaceIdFromDirectionMT(0, direction);
```

### HasPathThroughNavigationFaceIdFromDirection
`public bool HasPathThroughNavigationFaceIdFromDirection(int navigationFaceId, Vec2 direction)`

**Purpose:** Determines whether the current object already holds `path through navigation face id from direction`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HasPathThroughNavigationFaceIdFromDirection(0, direction);
```

### DisableLookToPointOfInterest
`public void DisableLookToPointOfInterest()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.DisableLookToPointOfInterest();
```

### AddPrefabComponentToBone
`public CompositeComponent AddPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**Purpose:** Adds `prefab component to bone` to the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.AddPrefabComponentToBone("example", 0);
```

### MakeVoice
`public void MakeVoice(SkinVoiceManager.SkinVoiceType voiceType, SkinVoiceManager.CombatVoiceNetworkPredictionType predictionType)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.MakeVoice(voiceType, predictionType);
```

### YellAfterDelay
`public void YellAfterDelay(float delayTimeInSecond)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.YellAfterDelay(0);
```

### WieldNextWeapon
`public void WieldNextWeapon(Agent.HandIndex weaponIndex, Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.WithAnimation)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.WieldNextWeapon(weaponIndex, agent.WeaponWieldActionType.WithAnimation);
```

### AttackDirectionToMovementFlag
`public Agent.MovementControlFlag AttackDirectionToMovementFlag(Agent.UsageDirection direction)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.AttackDirectionToMovementFlag(direction);
```

### DefendDirectionToMovementFlag
`public Agent.MovementControlFlag DefendDirectionToMovementFlag(Agent.UsageDirection direction)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.DefendDirectionToMovementFlag(direction);
```

### KickClear
`public bool KickClear()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.KickClear();
```

### PlayerAttackDirection
`public Agent.UsageDirection PlayerAttackDirection()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.PlayerAttackDirection();
```

### GetRandomPairOfRealBloodBurstBoneIndices
`public ValueTuple<sbyte, sbyte> GetRandomPairOfRealBloodBurstBoneIndices()`

**Purpose:** Reads and returns the `random pair of real blood burst bone indices` value held by the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetRandomPairOfRealBloodBurstBoneIndices();
```

### CreateBloodBurstAtLimb
`public void CreateBloodBurstAtLimb(sbyte realBoneIndex, float scale)`

**Purpose:** Constructs a new `blood burst at limb` entity and returns it to the caller.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.CreateBloodBurstAtLimb(0, 0);
```

### AddComponent
`public void AddComponent(AgentComponent agentComponent)`

**Purpose:** Adds `component` to the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.AddComponent(agentComponent);
```

### RemoveComponent
`public bool RemoveComponent(AgentComponent agentComponent)`

**Purpose:** Removes `component` from the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.RemoveComponent(agentComponent);
```

### HandleTaunt
`public void HandleTaunt(int tauntIndex, bool isDefaultTaunt)`

**Purpose:** Executes the response logic associated with `taunt`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.HandleTaunt(0, false);
```

### HandleBark
`public void HandleBark(int indexOfBark)`

**Purpose:** Executes the response logic associated with `bark`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.HandleBark(0);
```

### HandleDropWeapon
`public void HandleDropWeapon(bool isDefendPressed, EquipmentIndex forcedSlotIndexToDropWeaponFrom)`

**Purpose:** Executes the response logic associated with `drop weapon`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.HandleDropWeapon(false, forcedSlotIndexToDropWeaponFrom);
```

### DropItem
`public void DropItem(EquipmentIndex itemIndex, WeaponClass pickedUpItemType = WeaponClass.Undefined)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.DropItem(itemIndex, weaponClass.Undefined);
```

### EquipItemsFromSpawnEquipment
`public void EquipItemsFromSpawnEquipment(bool neededBatchedItems, bool prepareImmediately, bool useFaceCache, int faceCacheID)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.EquipItemsFromSpawnEquipment(false, false, false, 0);
```

### WieldInitialWeapons
`public void WieldInitialWeapons(Agent.WeaponWieldActionType wieldActionType = Agent.WeaponWieldActionType.InstantAfterPickUp, Equipment.InitialWeaponEquipPreference initialWeaponEquipPreference = TaleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.WieldInitialWeapons(agent.WeaponWieldActionType.InstantAfterPickUp, taleWorlds.Core.Equipment.InitialWeaponEquipPreference.Any);
```

### ChangeWeaponHitPoints
`public void ChangeWeaponHitPoints(EquipmentIndex slotIndex, short hitPoints)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ChangeWeaponHitPoints(slotIndex, 0);
```

### HasWeapon
`public bool HasWeapon()`

**Purpose:** Determines whether the current object already holds `weapon`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HasWeapon();
```

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(EquipmentIndex slotIndex, MissionWeapon weapon, GameEntity weaponEntity, ref MatrixFrame attachLocalFrame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.AttachWeaponToWeapon(slotIndex, weapon, weaponEntity, attachLocalFrame);
```

### AttachWeaponToBone
`public void AttachWeaponToBone(MissionWeapon weapon, GameEntity weaponEntity, sbyte boneIndex, ref MatrixFrame attachLocalFrame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.AttachWeaponToBone(weapon, weaponEntity, 0, attachLocalFrame);
```

### RestoreShieldHitPoints
`public void RestoreShieldHitPoints()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.RestoreShieldHitPoints();
```

### Die
`public void Die(Blow b, Agent.KillInfo overrideKillInfo = Agent.KillInfo.Invalid)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.Die(b, agent.KillInfo.Invalid);
```

### MakeDead
`public void MakeDead(bool isKilled, ActionIndexCache actionIndex, int corpsesToFadeIndex = -1)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.MakeDead(false, actionIndex, 0);
```

### RegisterBlow
`public void RegisterBlow(Blow blow, in AttackCollisionData collisionData)`

**Purpose:** Registers `blow` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.RegisterBlow(blow, collisionData);
```

### CreateBlowFromBlowAsReflection
`public void CreateBlowFromBlowAsReflection(in Blow blow, in AttackCollisionData collisionData, out Blow outBlow, out AttackCollisionData outCollisionData)`

**Purpose:** Constructs a new `blow from blow as reflection` entity and returns it to the caller.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.CreateBlowFromBlowAsReflection(blow, collisionData, outBlow, outCollisionData);
```

### TickParallel
`public void TickParallel(float dt)`

**Purpose:** Advances the `parallel` state each frame or update cycle.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.TickParallel(0);
```

### Tick
`public void Tick(float dt)`

**Purpose:** Advances the current object's state by one frame or update cycle.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.Tick(0);
```

### DebugMore
`public void DebugMore()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.DebugMore();
```

### Mount
`public void Mount(Agent mountAgent)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.Mount(mountAgent);
```

### EquipWeaponToExtraSlotAndWield
`public void EquipWeaponToExtraSlotAndWield(ref MissionWeapon weapon)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.EquipWeaponToExtraSlotAndWield(weapon);
```

### RemoveEquippedWeapon
`public void RemoveEquippedWeapon(EquipmentIndex slotIndex)`

**Purpose:** Removes `equipped weapon` from the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.RemoveEquippedWeapon(slotIndex);
```

### EquipWeaponWithNewEntity
`public void EquipWeaponWithNewEntity(EquipmentIndex slotIndex, ref MissionWeapon weapon)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.EquipWeaponWithNewEntity(slotIndex, weapon);
```

### EquipWeaponFromSpawnedItemEntity
`public void EquipWeaponFromSpawnedItemEntity(EquipmentIndex slotIndex, SpawnedItemEntity spawnedItemEntity, bool removeWeapon)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.EquipWeaponFromSpawnedItemEntity(slotIndex, spawnedItemEntity, false);
```

### PreloadForRendering
`public void PreloadForRendering()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.PreloadForRendering();
```

### AddSynchedPrefabComponentToBone
`public int AddSynchedPrefabComponentToBone(string prefabName, sbyte boneIndex)`

**Purpose:** Adds `synched prefab component to bone` to the current collection or state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.AddSynchedPrefabComponentToBone("example", 0);
```

### WillDropWieldedShield
`public bool WillDropWieldedShield(SpawnedItemEntity spawnedItem)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.WillDropWieldedShield(spawnedItem);
```

### HadSameTypeOfConsumableOrShieldOnSpawn
`public bool HadSameTypeOfConsumableOrShieldOnSpawn(WeaponClass weaponClass)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HadSameTypeOfConsumableOrShieldOnSpawn(weaponClass);
```

### GetHashCode
`public override int GetHashCode()`

**Purpose:** Returns a hash code for the current object, used for fast lookup in dictionaries and hash sets.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.GetHashCode();
```

### TryGetImmediateEnemyAgentMovementData
`public bool TryGetImmediateEnemyAgentMovementData(out float maximumForwardUnlimitedSpeed, out Vec3 position)`

**Purpose:** Attempts to retrieve `get immediate enemy agent movement data`, usually returning success through an out parameter.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.TryGetImmediateEnemyAgentMovementData(maximumForwardUnlimitedSpeed, position);
```

### HasLostShield
`public bool HasLostShield()`

**Purpose:** Determines whether the current object already holds `lost shield`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HasLostShield();
```

### SetLastDetachmentTickAgentTime
`public void SetLastDetachmentTickAgentTime(float lastDetachmentTickAgentTime)`

**Purpose:** Assigns a new value to `last detachment tick agent time` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetLastDetachmentTickAgentTime(0);
```

### SetDetachmentWeight
`public void SetDetachmentWeight(float newDetachmentWeight)`

**Purpose:** Assigns a new value to `detachment weight` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetDetachmentWeight(0);
```

### SetDetachmentIndex
`public void SetDetachmentIndex(int newDetachmentIndex)`

**Purpose:** Assigns a new value to `detachment index` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetDetachmentIndex(0);
```

### SetOwningAgentMissionPeer
`public void SetOwningAgentMissionPeer(MissionPeer owningAgentMissionPeer)`

**Purpose:** Assigns a new value to `owning agent mission peer` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetOwningAgentMissionPeer(owningAgentMissionPeer);
```

### SetMissionRepresentative
`public void SetMissionRepresentative(MissionRepresentativeBase missionRepresentative)`

**Purpose:** Assigns a new value to `mission representative` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetMissionRepresentative(missionRepresentative);
```

### SetIsLadderQueueUsing
`public void SetIsLadderQueueUsing(bool isLadderQueueUsing)`

**Purpose:** Assigns a new value to `is ladder queue using` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetIsLadderQueueUsing(false);
```

### SetIsInLadderQueue
`public void SetIsInLadderQueue(bool isInLadderQueue)`

**Purpose:** Assigns a new value to `is in ladder queue` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetIsInLadderQueue(false);
```

### UpdateLocalPositionError
`public void UpdateLocalPositionError()`

**Purpose:** Recalculates and stores the latest representation of `local position error`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.UpdateLocalPositionError();
```

### YellingBehaviour
`public void YellingBehaviour()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.YellingBehaviour();
```

### HasPathThroughNavigationFacesIDFromDirection
`public bool HasPathThroughNavigationFacesIDFromDirection(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**Purpose:** Determines whether the current object already holds `path through navigation faces i d from direction`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HasPathThroughNavigationFacesIDFromDirection(0, 0, 0, direction);
```

### HasPathThroughNavigationFacesIDFromDirectionMT
`public bool HasPathThroughNavigationFacesIDFromDirectionMT(int navigationFaceID_1, int navigationFaceID_2, int navigationFaceID_3, Vec2 direction)`

**Purpose:** Determines whether the current object already holds `path through navigation faces i d from direction m t`.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
var result = agent.HasPathThroughNavigationFacesIDFromDirectionMT(0, 0, 0, direction);
```

### SetInitialFrame
`public void SetInitialFrame(in Vec3 initialPosition, in Vec2 initialDirection, bool canSpawnOutsideOfMissionBoundary = false)`

**Purpose:** Assigns a new value to `initial frame` and updates the object's internal state.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.SetInitialFrame(initialPosition, initialDirection, false);
```

### ClearTargetZ
`public void ClearTargetZ()`

**Purpose:** Removes all `target z` from the current object.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.ClearTargetZ();
```

### MovementFlagToDirection
`public static Agent.UsageDirection MovementFlagToDirection(Agent.MovementControlFlag flag)`

**Purpose:** Moves `ment flag to direction` to a new position or state.

```csharp
// Static call; no instance required
Agent.MovementFlagToDirection(flag);
```

### GetActionDirection
`public static Agent.UsageDirection GetActionDirection(int actionIndex)`

**Purpose:** Reads and returns the `action direction` value held by the current object.

```csharp
// Static call; no instance required
Agent.GetActionDirection(0);
```

### GetMonsterUsageIndex
`public static int GetMonsterUsageIndex(string monsterUsage)`

**Purpose:** Reads and returns the `monster usage index` value held by the current object.

```csharp
// Static call; no instance required
Agent.GetMonsterUsageIndex("example");
```

### GetSoundParameterForArmorType
`public static float GetSoundParameterForArmorType(ArmorComponent.ArmorMaterialTypes armorMaterialType)`

**Purpose:** Reads and returns the `sound parameter for armor type` value held by the current object.

```csharp
// Static call; no instance required
Agent.GetSoundParameterForArmorType(armorMaterialType);
```

### IncreaseDamage
`public void IncreaseDamage(float amount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.IncreaseDamage(0);
```

### Initialize
`public void Initialize()`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.Initialize();
```

### RegisterLastBlow
`public void RegisterLastBlow(int ownerId, AgentAttackType attackType)`

**Purpose:** Registers `last blow` with the current system so it can later be observed or dispatched.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.RegisterLastBlow(0, attackType);
```

### OnAgentHealthChangedDelegate
`public delegate void OnAgentHealthChangedDelegate(Agent agent, float oldHealth, float newHealth)`

**Purpose:** Invoked when the `agent health changed delegate` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnAgentHealthChangedDelegate(agent, 0, 0);
```

### OnMountHealthChangedDelegate
`public delegate void OnMountHealthChangedDelegate(Agent agent, Agent mount, float oldHealth, float newHealth)`

**Purpose:** Invoked when the `mount health changed delegate` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnMountHealthChangedDelegate(agent, mount, 0, 0);
```

### OnMainAgentWieldedItemChangeDelegate
`public delegate void OnMainAgentWieldedItemChangeDelegate()`

**Purpose:** Invoked when the `main agent wielded item change delegate` event is raised.

```csharp
// Obtain an instance of Agent from the subsystem API first
Agent agent = ...;
agent.OnMainAgentWieldedItemChangeDelegate();
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
Agent agent = ...;
agent.GetHasOnAiInputSetCallback();
```

## See Also

- [Area Index](../)