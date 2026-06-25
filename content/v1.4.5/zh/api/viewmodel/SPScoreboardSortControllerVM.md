---
title: "SPScoreboardSortControllerVM"
description: "SPScoreboardSortControllerVM 的自动生成类参考。"
---
# SPScoreboardSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class SPScoreboardSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `bin/TaleWorlds.MountAndBlade.ViewModelCollection/TaleWorlds.MountAndBlade.ViewModelCollection.Scoreboard/SPScoreboardSortControllerVM.cs`

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

**用途 / Purpose:** 为 sort mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(SPScoreboardUnitVM x, SPScoreboardUnitVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
var result = sPScoreboardSortControllerVM.Compare(x, y);
```

### ExecuteSortByRemaining
`public void ExecuteSortByRemaining()`

**用途 / Purpose:** 执行 sort by remaining 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByRemaining();
```

### ExecuteSortByKill
`public void ExecuteSortByKill()`

**用途 / Purpose:** 执行 sort by kill 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByKill();
```

### ExecuteSortByUpgrade
`public void ExecuteSortByUpgrade()`

**用途 / Purpose:** 执行 sort by upgrade 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByUpgrade();
```

### ExecuteSortByDead
`public void ExecuteSortByDead()`

**用途 / Purpose:** 执行 sort by dead 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByDead();
```

### ExecuteSortByWounded
`public void ExecuteSortByWounded()`

**用途 / Purpose:** 执行 sort by wounded 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByWounded();
```

### ExecuteSortByRouted
`public void ExecuteSortByRouted()`

**用途 / Purpose:** 执行 sort by routed 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 SPScoreboardSortControllerVM 实例
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.ExecuteSortByRouted();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
SPScoreboardSortControllerVM sPScoreboardSortControllerVM = ...;
sPScoreboardSortControllerVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)