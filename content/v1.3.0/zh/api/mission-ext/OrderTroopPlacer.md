---
title: "OrderTroopPlacer"
description: "OrderTroopPlacer 的自动生成类参考。"
---
# OrderTroopPlacer

**Namespace:** TaleWorlds.MountAndBlade.View.MissionViews.Order
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class OrderTroopPlacer : MissionView`
**Base:** `MissionView`
**File:** `TaleWorlds.MountAndBlade.View/TaleWorlds/MountAndBlade/View/MissionViews/Order/OrderTroopPlacer.cs`

## 概述

`OrderTroopPlacer` 位于 `TaleWorlds.MountAndBlade.View.MissionViews.Order`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.View.MissionViews.Order` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `SuspendTroopPlacer` | `public bool SuspendTroopPlacer { get; set; }` |
| `OrderFlag` | `public OrderFlag OrderFlag { get; }` |

## 主要方法

### AfterStart
`public override void AfterStart()`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 OrderTroopPlacer 实例
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.AfterStart();
```

### OnMissionTick
`public override void OnMissionTick(float dt)`

**用途 / Purpose:** 在 「mission tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderTroopPlacer 实例
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.OnMissionTick(0);
```

### RestrictOrdersToDeploymentBoundaries
`public void RestrictOrdersToDeploymentBoundaries(bool enabled)`

**用途 / Purpose:** 执行此方法所描述的操作。

```csharp
// 先通过子系统 API 拿到 OrderTroopPlacer 实例
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.RestrictOrdersToDeploymentBoundaries(false);
```

### OnMissionScreenTick
`public override void OnMissionScreenTick(float dt)`

**用途 / Purpose:** 在 「mission screen tick」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 OrderTroopPlacer 实例
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.OnMissionScreenTick(0);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
OrderTroopPlacer orderTroopPlacer = ...;
orderTroopPlacer.AfterStart();
```

## 参见

- [本区域目录](../)