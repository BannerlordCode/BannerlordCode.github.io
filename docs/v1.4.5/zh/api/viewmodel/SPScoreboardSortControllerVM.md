<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `SPScoreboardSortControllerVM`
- [← 本领域 / 返回 viewmodel](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# SPScoreboardSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSortControllerVM.cs`

## 概述

`SPScoreboardSortControllerVM` 位于 `TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

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

## 使用示例

```csharp
var value = new SPScoreboardSortControllerVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)