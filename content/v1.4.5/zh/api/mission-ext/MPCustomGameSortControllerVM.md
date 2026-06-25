---
title: "MPCustomGameSortControllerVM"
description: "MPCustomGameSortControllerVM 的自动生成类参考。"
---
# MPCustomGameSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameSortControllerVM.cs`

## 概述

`MPCustomGameSortControllerVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CurrentSortOption` | `public CustomServerSortOption? CurrentSortOption { get; }` |
| `IsPremadeMatchesList` | `public bool IsPremadeMatchesList { get; set; }` |
| `IsPingInfoAvailable` | `public bool IsPingInfoAvailable { get; set; }` |
| `CurrentSortState` | `public int CurrentSortState { get; set; }` |
| `IsFavoritesSelected` | `public bool IsFavoritesSelected { get; set; }` |
| `IsServerNameSelected` | `public bool IsServerNameSelected { get; set; }` |
| `IsPasswordSelected` | `public bool IsPasswordSelected { get; set; }` |
| `IsPlayerCountSelected` | `public bool IsPlayerCountSelected { get; set; }` |
| `IsFirstFactionSelected` | `public bool IsFirstFactionSelected { get; set; }` |
| `IsGameTypeSelected` | `public bool IsGameTypeSelected { get; set; }` |
| `IsSecondFactionSelected` | `public bool IsSecondFactionSelected { get; set; }` |
| `IsRegionSelected` | `public bool IsRegionSelected { get; set; }` |
| `IsPremadeMatchTypeSelected` | `public bool IsPremadeMatchTypeSelected { get; set; }` |
| `IsHostSelected` | `public bool IsHostSelected { get; set; }` |
| `IsPingSelected` | `public bool IsPingSelected { get; set; }` |

## 主要方法

### SetSortMode
`public void SetSortMode(bool isAscending)`

**用途 / Purpose:** 为 sort mode 赋新值，并同步更新对象内部状态。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.SetSortMode(false);
```

### Compare
`public abstract int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 将当前对象与另一实例比较大小/顺序。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
var result = mPCustomGameSortControllerVM.Compare(x, y);
```

### InitializeWithSortState
`public void InitializeWithSortState(CustomServerSortOption? sortOption, SortState sortState = SortState.Default)`

**用途 / Purpose:** 为 with sort state 初始化必要的资源、状态或绑定。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.InitializeWithSortState(sortOption, sortState.Default);
```

### SortByCurrentState
`public void SortByCurrentState()`

**用途 / Purpose:** 调用 SortByCurrentState 对应的操作。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.SortByCurrentState();
```

### ExecuteSortByFavorites
`public void ExecuteSortByFavorites()`

**用途 / Purpose:** 执行 sort by favorites 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByFavorites();
```

### ExecuteSortByServerName
`public void ExecuteSortByServerName()`

**用途 / Purpose:** 执行 sort by server name 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByServerName();
```

### ExecuteSortByGameType
`public void ExecuteSortByGameType()`

**用途 / Purpose:** 执行 sort by game type 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByGameType();
```

### ExecuteSortByPlayerCount
`public void ExecuteSortByPlayerCount()`

**用途 / Purpose:** 执行 sort by player count 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByPlayerCount();
```

### ExecuteSortByPassword
`public void ExecuteSortByPassword()`

**用途 / Purpose:** 执行 sort by password 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByPassword();
```

### ExecuteSortByFirstFaction
`public void ExecuteSortByFirstFaction()`

**用途 / Purpose:** 执行 sort by first faction 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByFirstFaction();
```

### ExecuteSortBySecondFaction
`public void ExecuteSortBySecondFaction()`

**用途 / Purpose:** 执行 sort by second faction 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortBySecondFaction();
```

### ExecuteSortByRegion
`public void ExecuteSortByRegion()`

**用途 / Purpose:** 执行 sort by region 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByRegion();
```

### ExecuteSortByPremadeMatchType
`public void ExecuteSortByPremadeMatchType()`

**用途 / Purpose:** 执行 sort by premade match type 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByPremadeMatchType();
```

### ExecuteSortByHost
`public void ExecuteSortByHost()`

**用途 / Purpose:** 执行 sort by host 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByHost();
```

### ExecuteSortByPing
`public void ExecuteSortByPing()`

**用途 / Purpose:** 执行 sort by ping 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPCustomGameSortControllerVM 实例
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.ExecuteSortByPing();
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPCustomGameSortControllerVM mPCustomGameSortControllerVM = ...;
mPCustomGameSortControllerVM.SetSortMode(false);
```

## 参见

- [本区域目录](../)