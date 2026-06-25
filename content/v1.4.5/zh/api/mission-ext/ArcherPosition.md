---
title: "ArcherPosition"
description: "ArcherPosition 的自动生成类参考。"
---
# ArcherPosition

**Namespace:** TaleWorlds.MountAndBlade
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class ArcherPosition`
**Base:** 无
**File:** `bin/TaleWorlds.MountAndBlade/TaleWorlds.MountAndBlade/ArcherPosition.cs`

## 概述

`ArcherPosition` 位于 `TaleWorlds.MountAndBlade`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `Entity` | `public GameEntity Entity { get; }` |
| `TacticalArcherPosition` | `public TacticalPosition TacticalArcherPosition { get; }` |
| `ConnectedSides` | `public int ConnectedSides { get; }` |

## 主要方法

### GetLastAssignedFormation
`public Formation GetLastAssignedFormation(int teamIndex)`

**用途 / Purpose:** 读取并返回当前对象中 last assigned formation 的结果。

```csharp
// 先通过子系统 API 拿到 ArcherPosition 实例
ArcherPosition archerPosition = ...;
var result = archerPosition.GetLastAssignedFormation(0);
```

### IsArcherPositionRelatedToSide
`public bool IsArcherPositionRelatedToSide(FormationAI.BehaviorSide side)`

**用途 / Purpose:** 判断当前对象是否处于 archer position related to side 状态或条件。

```csharp
// 先通过子系统 API 拿到 ArcherPosition 实例
ArcherPosition archerPosition = ...;
var result = archerPosition.IsArcherPositionRelatedToSide(side);
```

### GetArcherPositionClosestSide
`public FormationAI.BehaviorSide GetArcherPositionClosestSide()`

**用途 / Purpose:** 读取并返回当前对象中 archer position closest side 的结果。

```csharp
// 先通过子系统 API 拿到 ArcherPosition 实例
ArcherPosition archerPosition = ...;
var result = archerPosition.GetArcherPositionClosestSide();
```

### OnDeploymentFinished
`public void OnDeploymentFinished(SiegeQuerySystem siegeQuerySystem, BattleSideEnum battleSide)`

**用途 / Purpose:** 在 deployment finished 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 ArcherPosition 实例
ArcherPosition archerPosition = ...;
archerPosition.OnDeploymentFinished(siegeQuerySystem, battleSide);
```

### SetLastAssignedFormation
`public void SetLastAssignedFormation(int teamIndex, Formation formation)`

**用途 / Purpose:** 为 last assigned formation 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 ArcherPosition 实例
ArcherPosition archerPosition = ...;
archerPosition.SetLastAssignedFormation(0, formation);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
ArcherPosition archerPosition = ...;
archerPosition.GetLastAssignedFormation(0);
```

## 参见

- [本区域目录](../)