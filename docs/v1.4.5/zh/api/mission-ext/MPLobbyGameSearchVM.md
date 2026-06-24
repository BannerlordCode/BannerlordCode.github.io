<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPLobbyGameSearchVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPLobbyGameSearchVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPLobbyGameSearchVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPLobbyGameSearchVM.cs`

## 概述

`MPLobbyGameSearchVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `CustomGameMode` | `public MPCustomGameVM.CustomGameMode CustomGameMode { get; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `CanEnterPracticeBattle` | `public bool CanEnterPracticeBattle { get; set; }` |
| `CanCancelSearch` | `public bool CanCancelSearch { get; set; }` |
| `ShowStats` | `public bool ShowStats { get; set; }` |
| `TitleText` | `public string TitleText { get; set; }` |
| `GameTypesText` | `public string GameTypesText { get; set; }` |
| `CancelText` | `public string CancelText { get; set; }` |
| `PracticeText` | `public string PracticeText { get; set; }` |
| `AverageWaitingTime` | `public string AverageWaitingTime { get; set; }` |
| `AverageWaitingTimeDescription` | `public string AverageWaitingTimeDescription { get; set; }` |
| `CurrentWaitingTime` | `public string CurrentWaitingTime { get; set; }` |
| `CurrentWaitingTimeDescription` | `public string CurrentWaitingTimeDescription { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### SetEnabled
`public void SetEnabled(bool enabled)`

**用途 / Purpose:** 设置 `enabled` 的值或状态。

### UpdateData
`public void UpdateData(MatchmakingWaitTimeStats matchmakingWaitTimeStats, string gameTypeInfo)`

**用途 / Purpose:** 更新 `data` 的状态或数据。

### UpdatePremadeGameData
`public void UpdatePremadeGameData()`

**用途 / Purpose:** 更新 `premade game data` 的状态或数据。

### OnJoinPremadeGameRequestSuccessful
`public void OnJoinPremadeGameRequestSuccessful()`

**用途 / Purpose:** 当 `join premade game request successful` 事件触发时调用此方法。

### OnRequestedToCancelSearchBattle
`public void OnRequestedToCancelSearchBattle()`

**用途 / Purpose:** 当 `requested to cancel search battle` 事件触发时调用此方法。

### UpdateCanCancel
`public void UpdateCanCancel()`

**用途 / Purpose:** 更新 `can cancel` 的状态或数据。

## 使用示例

```csharp
var value = new MPLobbyGameSearchVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)