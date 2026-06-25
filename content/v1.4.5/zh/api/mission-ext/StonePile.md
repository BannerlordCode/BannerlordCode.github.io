---
title: "StonePile"
description: "StonePile 的自动生成类参考。"
---
# StonePile

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class StonePile : UsableMachine, IDetachment`
**Base:** `UsableMachine`
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/StonePile.cs`

## 概述

`StonePile` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `ReadAmmoCount` | `public int ReadAmmoCount { get; }` |
| `this` | `public ThrowingPoint this { get; }` |
| `AmmoCount` | `public int AmmoCount { get; set; }` |
| `HasThrowingPointUsed` | `public bool HasThrowingPointUsed { get; }` |

## 主要方法

### ReadFromNetwork
`public bool ReadFromNetwork(ref bool bufferReadValid)`

**用途 / Purpose:** 读取「from network」的数据或状态。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.ReadFromNetwork(bufferReadValid);
```

### CanUseAttackEntity
`public bool CanUseAttackEntity()`

**用途 / Purpose:** 检查当前对象是否满足 「use attack entity」 的前置条件。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.CanUseAttackEntity();
```

### SetAmmo
`public void SetAmmo(int ammoLeft)`

**用途 / Purpose:** 为 「ammo」 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
stonePile.SetAmmo(0);
```

### AfterMissionStart
`public override void AfterMissionStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
stonePile.AfterMissionStart();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** 读取并返回当前对象中 「action text for standing point」 的结果。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** 读取并返回当前对象中 「description text」 的结果。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.GetDescriptionText(gameEntity);
```

### CreateAIBehaviorObject
`public override UsableMachineAIBase CreateAIBehaviorObject()`

**用途 / Purpose:** 构建一个新的 「a i behavior object」 实体并返回给调用方。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.CreateAIBehaviorObject();
```

### IsInRangeToCheckAlternativePoints
`public override bool IsInRangeToCheckAlternativePoints(Agent agent)`

**用途 / Purpose:** 判断当前对象是否处于 「in range to check alternative points」 状态或条件。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.IsInRangeToCheckAlternativePoints(agent);
```

### GetBestPointAlternativeTo
`public override StandingPoint GetBestPointAlternativeTo(StandingPoint standingPoint, Agent agent)`

**用途 / Purpose:** 读取并返回当前对象中 「best point alternative to」 的结果。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.GetBestPointAlternativeTo(standingPoint, agent);
```

### GetTickRequirement
`public override TickRequirement GetTickRequirement()`

**用途 / Purpose:** 读取并返回当前对象中 「tick requirement」 的结果。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
var result = stonePile.GetTickRequirement();
```

### WriteToNetwork
`public override void WriteToNetwork()`

**用途 / Purpose:** 将「to network」写入目标位置。

```csharp
// 先通过子系统 API 拿到 StonePile 实例
StonePile stonePile = ...;
stonePile.WriteToNetwork();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
StonePile stonePile = ...;
stonePile.ReadFromNetwork(bufferReadValid);
```

## 参见

- [本区域目录](../)