<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnedItemEntity`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [🏠 Home v1.4.5](../../)
- [⭐ Version Architecture](../../architecture/)
<!-- END BREADCRUMB -->
# SpawnedItemEntity

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnedItemEntity : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnedItemEntity.cs`

## Overview

`SpawnedItemEntity` lives in `TaleWorlds.MountAndBlade` and exposes the state, behavior, or workflow entry points of that subsystem to mod developers through its public members. Read its properties as “what state it owns” and its methods as “what actions it allows”.

## Mental Model

Start from namespace `TaleWorlds.MountAndBlade` to place it in the stack, then inspect its public methods: if it mainly exposes Get/Set members, it is likely a state object; if it centers on Create/Apply/Execute verbs, it behaves more like a service or workflow entry point.

## Key Properties

| Name | Signature |
|------|-----------|
| `HasLifeTime` | `public bool HasLifeTime { get; set; }` |
| `SpawnedOnACorpse` | `public bool SpawnedOnACorpse { get; }` |
| `SpawnFlags` | `public Mission.WeaponSpawnFlags SpawnFlags { get; }` |

## Key Methods

### GetActionMessage
`public TextObject GetActionMessage(ItemObject weaponToReplaceWith, bool fillUp)`

**Purpose:** Gets the current value of `action message`.

### GetDescriptionMessage
`public TextObject GetDescriptionMessage(bool fillUp)`

**Purpose:** Gets the current value of `description message`.

### Initialize
`public void Initialize(MissionWeapon weapon, bool hasLifeTime, Mission.WeaponSpawnFlags spawnFlags, in Vec3 fakeSimulationVelocity, bool spawnedOnACorpse = false)`

**Purpose:** Initializes the state, resources, or bindings for `initialize`.

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**Purpose:** Gets the current value of `tick requirement`.

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachLocalFrame)`

**Purpose:** Handles logic related to `attach weapon to weapon`.

### IsReadyToBeDeleted
`public bool IsReadyToBeDeleted()`

**Purpose:** Handles logic related to `is ready to be deleted`.

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**Purpose:** Called when the `use stopped` event is raised.

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**Purpose:** Called when the `use` event is raised.

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**Purpose:** Handles logic related to `is disabled for agent`.

### IsStuckMissile
`public bool IsStuckMissile()`

**Purpose:** Handles logic related to `is stuck missile`.

### IsQuiverAndNotEmpty
`public bool IsQuiverAndNotEmpty()`

**Purpose:** Handles logic related to `is quiver and not empty`.

### IsBanner
`public bool IsBanner()`

**Purpose:** Handles logic related to `is banner`.

### GetInfoTextForBeingNotInteractable
`public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**Purpose:** Gets the current value of `info text for being not interactable`.

### StopPhysicsAndSetFrameForClient
`public void StopPhysicsAndSetFrameForClient(MatrixFrame frame, GameEntity parent)`

**Purpose:** Handles logic related to `stop physics and set frame for client`.

### ConsumeWeaponAmount
`public void ConsumeWeaponAmount(short consumedAmount)`

**Purpose:** Handles logic related to `consume weapon amount`.

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**Purpose:** Gets the current value of `description text`.

### RequestDeletionOnNextTick
`public void RequestDeletionOnNextTick()`

**Purpose:** Handles logic related to `request deletion on next tick`.

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**Purpose:** Called when the `after read from network` event is raised.

## Usage Example

```csharp
var value = new SpawnedItemEntity();
value.GetActionMessage(weaponToReplaceWith, false);
```

## See Also

- [Complete Class Catalog](../catalog)