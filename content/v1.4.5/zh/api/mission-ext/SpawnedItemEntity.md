---
title: "SpawnedItemEntity"
description: "SpawnedItemEntity 的自动生成类参考。"
---
# SpawnedItemEntity

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SpawnedItemEntity : UsableMissionObject`
**Base:** `UsableMissionObject`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/SpawnedItemEntity.cs`

## 概述

`SpawnedItemEntity` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `HasLifeTime` | `public bool HasLifeTime { get; set; }` |
| `SpawnedOnACorpse` | `public bool SpawnedOnACorpse { get; }` |
| `SpawnFlags` | `public Mission.WeaponSpawnFlags SpawnFlags { get; }` |

## 主要方法

### GetActionMessage
`public TextObject GetActionMessage(ItemObject weaponToReplaceWith, bool fillUp)`

**用途 / Purpose:** 读取并返回当前对象中 action message 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetActionMessage(weaponToReplaceWith, false);
```

### GetDescriptionMessage
`public TextObject GetDescriptionMessage(bool fillUp)`

**用途 / Purpose:** 读取并返回当前对象中 description message 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetDescriptionMessage(false);
```

### Initialize
`public void Initialize(MissionWeapon weapon, bool hasLifeTime, Mission.WeaponSpawnFlags spawnFlags, in Vec3 fakeSimulationVelocity, bool spawnedOnACorpse = false)`

**用途 / Purpose:** 加载当前对象所需的初始资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.Initialize(weapon, false, spawnFlags, fakeSimulationVelocity, false);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetTickRequirement();
```

### AttachWeaponToWeapon
`public void AttachWeaponToWeapon(MissionWeapon attachedWeapon, ref MatrixFrame attachLocalFrame)`

**用途 / Purpose:** 调用 AttachWeaponToWeapon 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.AttachWeaponToWeapon(attachedWeapon, attachLocalFrame);
```

### IsReadyToBeDeleted
`public bool IsReadyToBeDeleted()`

**用途 / Purpose:** 判断当前对象是否处于 ready to be deleted 状态或条件。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsReadyToBeDeleted();
```

### OnUseStopped
`public override void OnUseStopped(Agent userAgent, bool isSuccessful, int preferenceIndex)`

**用途 / Purpose:** 在 use stopped 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.OnUseStopped(userAgent, false, 0);
```

### OnUse
`public override void OnUse(Agent userAgent, sbyte agentBoneIndex)`

**用途 / Purpose:** 在 use 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.OnUse(userAgent, 0);
```

### IsDisabledForAgent
`public override bool IsDisabledForAgent(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 disabled for agent 状态或条件。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsDisabledForAgent(agent);
```

### IsStuckMissile
`public bool IsStuckMissile()`

**用途 / Purpose:** 判断当前对象是否处于 stuck missile 状态或条件。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsStuckMissile();
```

### IsQuiverAndNotEmpty
`public bool IsQuiverAndNotEmpty()`

**用途 / Purpose:** 判断当前对象是否处于 quiver and not empty 状态或条件。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsQuiverAndNotEmpty();
```

### IsBanner
`public bool IsBanner()`

**用途 / Purpose:** 判断当前对象是否处于 banner 状态或条件。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.IsBanner();
```

### GetInfoTextForBeingNotInteractable
`public override TextObject GetInfoTextForBeingNotInteractable(Agent userAgent)`

**用途 / Purpose:** 读取并返回当前对象中 info text for being not interactable 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetInfoTextForBeingNotInteractable(userAgent);
```

### StopPhysicsAndSetFrameForClient
`public void StopPhysicsAndSetFrameForClient(MatrixFrame frame, GameEntity parent)`

**用途 / Purpose:** 停止physics and set frame for client流程或状态机。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.StopPhysicsAndSetFrameForClient(frame, parent);
```

### ConsumeWeaponAmount
`public void ConsumeWeaponAmount(short consumedAmount)`

**用途 / Purpose:** 调用 ConsumeWeaponAmount 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.ConsumeWeaponAmount(0);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
var result = spawnedItemEntity.GetDescriptionText(gameEntity);
```

### RequestDeletionOnNextTick
`public void RequestDeletionOnNextTick()`

**用途 / Purpose:** 调用 RequestDeletionOnNextTick 对应的操作。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.RequestDeletionOnNextTick();
```

### OnAfterReadFromNetwork
`public override void OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, ISynchedMissionObjectReadableRecord) synchedMissionObjectReadableRecord, bool allowVisibilityUpdate = true)`

**用途 / Purpose:** 在 after read from network 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 SpawnedItemEntity 实例
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.OnAfterReadFromNetwork((BaseSynchedMissionObjectReadableRecord, synchedMissionObjectReadableRecord, false);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SpawnedItemEntity spawnedItemEntity = ...;
spawnedItemEntity.GetActionMessage(weaponToReplaceWith, false);
```

## 参见

- [本区域目录](../)