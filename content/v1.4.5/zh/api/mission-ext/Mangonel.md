---
title: "Mangonel"
description: "Mangonel 的自动生成类参考。"
---
# Mangonel

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Mangonel : RangedSiegeWeapon, ISpawnable`
**Base:** `RangedSiegeWeapon`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/Mangonel.cs`

## 概述

`Mangonel` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 构建一个新的 「a i behavior object」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.CreateAIBehaviorObject();
```

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 读取并返回当前对象中 「siege engine type」 的结果。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.GetSiegeEngineType();
```

### OnPilotAssignedDuringSpawn
`public override void OnPilotAssignedDuringSpawn()`

**用途 / Purpose:** 在 「pilot assigned during spawn」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
mangonel.OnPilotAssignedDuringSpawn();
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.GetTickRequirement();
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.GetDescriptionText(gameEntity);
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 读取并返回当前对象中 「action text for standing point」 的结果。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.GetActionTextForStandingPoint(usableGameObject);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** 读取并返回当前对象中 「target flags」 的结果。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 读取并返回当前对象中 「target value」 的结果。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.GetTargetValue(weaponPos);
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
var result = mangonel.ProcessTargetValue(0, flags);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**用途 / Purpose:** 为 「spawned from spawner」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Mangonel 实例
Mangonel mangonel = ...;
mangonel.SetSpawnedFromSpawner();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Mangonel mangonel = ...;
mangonel.CreateAIBehaviorObject();
```

## 参见

- [本区域目录](../)