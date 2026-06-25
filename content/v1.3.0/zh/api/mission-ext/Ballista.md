---
title: "Ballista"
description: "Ballista 的自动生成类参考。"
---
# Ballista

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class Ballista : RangedSiegeWeapon, ISpawnable`
**Base:** `RangedSiegeWeapon`
**File:** `TaleWorlds.MountAndBlade/Ballista.cs`

## 概述

`Ballista` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `DirectionRestriction` | `public override float DirectionRestriction { get; }` |
| `CanShootAtPointCheckingOffset` | `public override Vec3 CanShootAtPointCheckingOffset { get; }` |

## 主要方法

### GetSiegeEngineType
`public override SiegeEngineType GetSiegeEngineType()`

**用途 / Purpose:** 读取并返回当前对象中 siege engine type 的结果。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.GetSiegeEngineType();
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 构建一个新的 a i behavior object 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.CreateAIBehaviorObject();
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.GetTickRequirement();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.GetDescriptionText(gameEntity);
```

### ProcessTargetValue
`public override float ProcessTargetValue(float baseValue, TargetFlags flags)`

**用途 / Purpose:** 调用 ProcessTargetValue 对应的操作。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.ProcessTargetValue(0, flags);
```

### GetTargetFlags
`public override TargetFlags GetTargetFlags()`

**用途 / Purpose:** 读取并返回当前对象中 target flags 的结果。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.GetTargetFlags();
```

### GetTargetValue
`public override float GetTargetValue(List<Vec3> weaponPos)`

**用途 / Purpose:** 读取并返回当前对象中 target value 的结果。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
var result = ballista.GetTargetValue(weaponPos);
```

### SetSpawnedFromSpawner
`public void SetSpawnedFromSpawner()`

**用途 / Purpose:** 为 spawned from spawner 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 Ballista 实例
Ballista ballista = ...;
ballista.SetSpawnedFromSpawner();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
Ballista ballista = ...;
ballista.GetSiegeEngineType();
```

## 参见

- [本区域目录](../)