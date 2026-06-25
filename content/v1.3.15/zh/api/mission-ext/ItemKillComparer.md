---
title: "ItemKillComparer"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `ItemKillComparer`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.3.15](../../)
- [⭐ SDK 总览](../../architecture/sdk-overview)
<!-- END BREADCRUMB -->
# ItemKillComparer

**命名空间:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**模块:** TaleWorlds.MountAndBlade
**类型:** `public class ItemKillComparer : SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase`
**Base:** `SPScoreboardSortControllerVM.ScoreboardUnitItemComparerBase`
**领域:** mission-ext

## 概述

`ItemKillComparer` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它的公开成员表明它是这一子系统暴露给 mod 的一个正式扩展或数据入口。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RemainingState` | `public int RemainingState { get; set; }` |
| `IsRemainingSelected` | `public bool IsRemainingSelected { get; set; }` |
| `KillState` | `public int KillState { get; set; }` |
| `IsKillSelected` | `public bool IsKillSelected { get; set; }` |
| `UpgradeState` | `public int UpgradeState { get; set; }` |
| `IsUpgradeSelected` | `public bool IsUpgradeSelected { get; set; }` |
| `DeadState` | `public int DeadState { get; set; }` |
| `IsDeadSelected` | `public bool IsDeadSelected { get; set; }` |
| `WoundedState` | `public int WoundedState { get; set; }` |
| `IsWoundedSelected` | `public bool IsWoundedSelected { get; set; }` |
| `RoutedState` | `public int RoutedState { get; set; }` |
| `IsRoutedSelected` | `public bool IsRoutedSelected { get; set; }` |

## 主要方法

### ExecuteSortByRemaining
`public void ExecuteSortByRemaining()`

**用途 / Purpose:** 执行 `sort by remaining` 操作或流程。

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**用途 / Purpose:** 执行 `sort by kill` 操作或流程。

### ExecuteSortByUpgrade
`public void ExecuteSortByUpgrade()`

**用途 / Purpose:** 执行 `sort by upgrade` 操作或流程。

### ExecuteSortByDead
`public void ExecuteSortByDead()`

**用途 / Purpose:** 执行 `sort by dead` 操作或流程。

### ExecuteSortByWounded
`public void ExecuteSortByWounded()`

**用途 / Purpose:** 执行 `sort by wounded` 操作或流程。

### ExecuteSortByRouted
`public void ExecuteSortByRouted()`

**用途 / Purpose:** 执行 `sort by routed` 操作或流程。

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

## 使用示例

```csharp
// 先从游戏状态中拿到一个 ItemKillComparer 实例，再调用它的公开方法
var value = new ItemKillComparer();
value.ExecuteSortByRemaining();
```

## 参见

- [完整类目录](../catalog)
- [本领域目录](../catalog-mountandblade)
