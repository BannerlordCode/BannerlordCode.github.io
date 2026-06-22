<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SpawnedItemEntity`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# SpawnedItemEntity

**命名空间:** TaleWorlds.MountAndBlade
**模块:** TaleWorlds.MountAndBlade
**类型:** 类 class class
**领域:** 战斗系统 MountAndBlade

## 概述

> 本页为自动生成的存根。`SpawnedItemEntity` 是 `TaleWorlds.MountAndBlade` 命名空间下的一个类 class。
> 如需了解其属性、方法和开发者用例，请参考源码或贡
## 主要属性

| Name | Signature |
|------|-----------|
| `WeaponCopy` | `public MissionWeapon WeaponCopy { get; set; }` |
| `HasLifeTime` | `public bool HasLifeTime { get; set; }` |
| `IsRemoved` | `public bool IsRemoved { get; }` |
| `SpawnedOnACorpse` | `public bool SpawnedOnACorpse { get; }` |
| `LockUserFrames` | `public override bool LockUserFrames { get; }` |
| `SpawnFlags` | `public Mission.WeaponSpawnFlags SpawnFlags { get; }` |


## 主要方法

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

献文档。

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)