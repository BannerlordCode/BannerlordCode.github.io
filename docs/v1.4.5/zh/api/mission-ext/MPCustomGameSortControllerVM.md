<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPCustomGameSortControllerVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPCustomGameSortControllerVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameSortControllerVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameSortControllerVM.cs`

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

**用途 / Purpose:** 设置 `sort mode` 的值或状态。

### Compare
`public abstract int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### Compare
`public override int Compare(MPCustomGameItemVM x, MPCustomGameItemVM y)`

**用途 / Purpose:** 处理 `compare` 相关逻辑。

### InitializeWithSortState
`public void InitializeWithSortState(CustomServerSortOption? sortOption, SortState sortState = SortState.Default)`

**用途 / Purpose:** 初始化 `with sort state` 的状态、资源或绑定。

### SortByCurrentState
`public void SortByCurrentState()`

**用途 / Purpose:** 处理 `sort by current state` 相关逻辑。

### ExecuteSortByFavorites
`public void ExecuteSortByFavorites()`

**用途 / Purpose:** 执行 `sort by favorites` 操作或流程。

### ExecuteSortByServerName
`public void ExecuteSortByServerName()`

**用途 / Purpose:** 执行 `sort by server name` 操作或流程。

### ExecuteSortByGameType
`public void ExecuteSortByGameType()`

**用途 / Purpose:** 执行 `sort by game type` 操作或流程。

### ExecuteSortByPlayerCount
`public void ExecuteSortByPlayerCount()`

**用途 / Purpose:** 执行 `sort by player count` 操作或流程。

### ExecuteSortByPassword
`public void ExecuteSortByPassword()`

**用途 / Purpose:** 执行 `sort by password` 操作或流程。

### ExecuteSortByFirstFaction
`public void ExecuteSortByFirstFaction()`

**用途 / Purpose:** 执行 `sort by first faction` 操作或流程。

### ExecuteSortBySecondFaction
`public void ExecuteSortBySecondFaction()`

**用途 / Purpose:** 执行 `sort by second faction` 操作或流程。

### ExecuteSortByRegion
`public void ExecuteSortByRegion()`

**用途 / Purpose:** 执行 `sort by region` 操作或流程。

### ExecuteSortByPremadeMatchType
`public void ExecuteSortByPremadeMatchType()`

**用途 / Purpose:** 执行 `sort by premade match type` 操作或流程。

### ExecuteSortByHost
`public void ExecuteSortByHost()`

**用途 / Purpose:** 执行 `sort by host` 操作或流程。

### ExecuteSortByPing
`public void ExecuteSortByPing()`

**用途 / Purpose:** 执行 `sort by ping` 操作或流程。

## 使用示例

```csharp
var value = new MPCustomGameSortControllerVM();
value.SetSortMode(false);
```

## 参见

- [完整类目录](../catalog)