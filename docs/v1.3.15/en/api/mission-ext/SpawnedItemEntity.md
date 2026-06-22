<!-- BEGIN BREADCRUMB -->
**Home** → **API Index** → **Area** → `SpawnedItemEntity`
- [← Area / Back to mission-ext](./)
- [↑ API Index](../)
- [⭐ SDK Overview](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnedItemEntity

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** class
**Area:** Mount & Blade

## Overview

> This is an auto-generated stub. `SpawnedItemEntity` is a class in the `TaleWorlds.MountAndBlade` namespace.
> For properties, methods, and developer use-cases, refer to source code or contribute documentation.


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

```csharp
public TextObject GetActionMessage(ItemObject weaponToReplaceWith, bool fillUp)
```

### GetDescriptionMessage

```csharp
public TextObject GetDescriptionMessage(bool fillUp)
```

### Initialize

```csharp
public void Initialize(MissionWeapon weapon, bool hasLifeTime, Mission.WeaponSpawnFlags spawnFlags, in Vec3 fakeSimulationVelocity, bool spawnedOnACorpse = false)
```

### GetTickRequirement

```csharp
public override ScriptComponentBehavior.TickRequirement GetTickRequirement()
```

### AttachWeaponToWeapon

```csharp
public void AttachWeaponToWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachLocalFrame)
```

### IsReadyToBeDeleted

```csharp
public bool IsReadyToBeDeleted()
```

### OnUseStopped

```csharp
public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)
```

### OnUse

```csharp
public override void OnUse(Agent userAgent, sbyte agentBoneIndex)
```

### IsDisabledForAgent

```csharp
public override bool IsDisabledForAgent(Agent agent)
```

### IsStuckMissile

```csharp
public bool IsStuckMissile()
```

### IsQuiverAndNotEmpty

```csharp
public bool IsQuiverAndNotEmpty()
```

### IsBanner

```csharp
public bool IsBanner()
```

### GetInfoTextForBeingNotInteractable

```csharp
public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)
```

### StopPhysicsAndSetFrameForClient

```csharp
public void StopPhysicsAndSetFrameForClient(MatrixFrame frame, GameEntity parent)
```

### ConsumeWeaponAmount

```csharp
public void ConsumeWeaponAmount(short consumedAmount)
```

### GetDescriptionText

```csharp
public override TextObject GetDescriptionText(WeakGameEntity gameEntity)
```

### RequestDeletionOnNextTick

```csharp
public void RequestDeletionOnNextTick()
```

### OnAfterReadFromNetwork

```csharp
public override void OnAfterReadFromNetwork(ValueTuple<BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord> synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)
```

## See Also

- [Complete Class Catalog](../catalog)
- [Area catalog](../catalog-mountandblade)