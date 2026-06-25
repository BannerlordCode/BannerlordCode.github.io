---
title: "SpawnedItemEntity"
description: "Auto-generated class reference for SpawnedItemEntity."
---
# SpawnedItemEntity

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnedItemEntity : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `TaleWorlds.MountAndBlade/SpawnedItemEntity.cs`

## Overview

`SpawnedItemEntity` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `WeaponCopy` | `public MissionWeapon WeaponCopy { get; set; }` |
| `HasLifeTime` | `public bool HasLifeTime { get; set; }` |
| `IsRemoved` | `public bool IsRemoved { get; }` |
| `SpawnedOnACorpse` | `public bool SpawnedOnACorpse { get; }` |
| `LockUserFrames` | `public override bool LockUserFrames { get; }` |
| `SpawnFlags` | `public Mission.WeaponSpawnFlags SpawnFlags { get; }` |

## Key Methods

### GetActionMessage
`public TextObject GetActionMessage(ItemObject weaponToReplaceWith, bool fillUp)`

**Purpose:** Reads and returns the `action message` value held by the current object.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetActionMessage(weaponToReplaceWith, false);
```

### GetDescriptionMessage
`public TextObject GetDescriptionMessage(bool fillUp)`

**Purpose:** Reads and returns the `description message` value held by the current object.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetDescriptionMessage(false);
```

### Initialize
`public void Initialize(MissionWeapon weapon, bool hasLifeTime, Mission.WeaponSpawnFlags spawnFlags, in Vec3 fakeSimulationVelocity, bool spawnedOnACorpse = false)`

**Purpose:** Prepares the resources, state, or bindings the current object needs before use.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.Initialize(weapon, false, spawnFlags, fakeSimulationVelocity, false);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**Purpose:** Reads and returns the `tick requirement` value held by the current object.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetTickRequirement();
```

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachLocalFrame)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.AttachWeaponToWeapon(attachedWeapon, attachLocalFrame);
```

### IsReadyToBeDeleted
`public bool IsReadyToBeDeleted()`

**Purpose:** Determines whether the current object is in the `ready to be deleted` state or condition.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsReadyToBeDeleted();
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Invoked when the `use stopped` event is raised.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.OnUseStopped(userAgent, false, 0);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Invoked when the `use` event is raised.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.OnUse(userAgent, 0);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Determines whether the current object is in the `disabled for agent` state or condition.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsDisabledForAgent(agent);
```

### IsStuckMissile
`public bool IsStuckMissile()`

**Purpose:** Determines whether the current object is in the `stuck missile` state or condition.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsStuckMissile();
```

### IsQuiverAndNotEmpty
`public bool IsQuiverAndNotEmpty()`

**Purpose:** Determines whether the current object is in the `quiver and not empty` state or condition.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsQuiverAndNotEmpty();
```

### IsBanner
`public bool IsBanner()`

**Purpose:** Determines whether the current object is in the `banner` state or condition.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsBanner();
```

### GetInfoTextForBeingNotInteractable
`public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Reads and returns the `info text for being not interactable` value held by the current object.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetInfoTextForBeingNotInteractable(userAgent);
```

### StopPhysicsAndSetFrameForClient
`public void StopPhysicsAndSetFrameForClient(MatrixFrame frame, GameEntity parent)`

**Purpose:** Stops the `physics and set frame for client` flow or state machine.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.StopPhysicsAndSetFrameForClient(frame, parent);
```

### ConsumeWeaponAmount
`public void ConsumeWeaponAmount(short consumedAmount)`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.ConsumeWeaponAmount(0);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Reads and returns the `description text` value held by the current object.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetDescriptionText(gameEntity);
```

### RequestDeletionOnNextTick
`public void RequestDeletionOnNextTick()`

**Purpose:** Performs the operation described by this method.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.RequestDeletionOnNextTick();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Invoked when the `after read from network` event is raised.

```csharp
// Obtain an instance of SpawnedItemEntity from the subsystem API first
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.OnAfterReadFromNetwork(valueTuple<BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

## Usage Example

```csharp
// Typically call this after obtaining an instance from the subsystem API
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.GetActionMessage(weaponToReplaceWith, false);
```

## See Also

- [Area Index](../)