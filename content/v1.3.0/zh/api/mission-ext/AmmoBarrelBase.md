---
title: "AmmoBarrelBase"
description: "AmmoBarrelBase 的自动生成类参考。"
---
# AmmoBarrelBase

**Namespace:** TaleWorlds.MountAndBlade.Objects.Usables
**Module:** TaleWorlds.MountAndBlade
**Type:** `public abstract class AmmoBarrelBase : UsableMachine`
**Base:** `UsableMachine`
**File:** `TaleWorlds.MountAndBlade/Objects/Usables/AmmoBarrelBase.cs`

## 概述

`AmmoBarrelBase` 位于 `TaleWorlds.MountAndBlade.Objects.Usables`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Objects.Usables` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要方法

### OnDeploymentFinished
`public override void OnDeploymentFinished()`

**用途 / Purpose:** **用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 AmmoBarrelBase 实例
AmmoBarrelBase ammoBarrelBase = ...;
ammoBarrelBase.OnDeploymentFinished();
```

### GetActionTextForStandingPoint
`public override TextObject GetActionTextForStandingPoint(UsableMissionObject usableGameObject)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 action text for standing point 的结果。

```csharp
// 先通过子系统 API 拿到 AmmoBarrelBase 实例
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetActionTextForStandingPoint(usableGameObject);
```

### GetDescriptionText
`public abstract override TextObject GetDescriptionText(WeakGameEntity gameEntity)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 description text 的结果。

```csharp
// 先通过子系统 API 拿到 AmmoBarrelBase 实例
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetDescriptionText(gameEntity);
```

### GetTickRequirement
`public override ScriptComponentBehavior.TickRequirement GetTickRequirement()`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 tick requirement 的结果。

```csharp
// 先通过子系统 API 拿到 AmmoBarrelBase 实例
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetTickRequirement();
```

### GetOrder
`public override OrderType GetOrder(BattleSideEnum side)`

**用途 / Purpose:** **用途 / Purpose:** 读取并返回当前对象中 order 的结果。

```csharp
// 先通过子系统 API 拿到 AmmoBarrelBase 实例
AmmoBarrelBase ammoBarrelBase = ...;
var result = ammoBarrelBase.GetOrder(side);
```

## 使用示例

```csharp
// 通常通过子系统 API 或工厂获得派生实例
AmmoBarrelBase instance = ...;
```

## 参见

- [本区域目录](../)