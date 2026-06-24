<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPCustomGameVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPCustomGameVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPCustomGameVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame/MPCustomGameVM.cs`

## 概述

`MPCustomGameVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby.CustomGame` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `RefreshInputKey` | `public InputKeyItemVM RefreshInputKey { get; set; }` |
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `IsAnyGameSelected` | `public bool IsAnyGameSelected { get; set; }` |
| `IsCreateGamePanelActive` | `public bool IsCreateGamePanelActive { get; set; }` |
| `CanPlayerCreateGame` | `public bool CanPlayerCreateGame { get; set; }` |
| `IsJoinEnabled` | `public bool IsJoinEnabled { get; set; }` |
| `SelectedGame` | `public MPCustomGameItemVM SelectedGame { get; set; }` |
| `FiltersData` | `public MPCustomGameFiltersVM FiltersData { get; set; }` |
| `HostGame` | `public MPHostGameVM HostGame { get; set; }` |
| `SortController` | `public MPCustomGameSortControllerVM SortController { get; set; }` |
| `GameList` | `public MBBindingList<MPCustomGameItemVM> GameList { get; set; }` |
| `IsPasswordProtectedHint` | `public HintViewModel IsPasswordProtectedHint { get; set; }` |
| `IsRefreshing` | `public bool IsRefreshing { get; set; }` |
| `IsPartyLeader` | `public bool IsPartyLeader { get; set; }` |
| `IsInParty` | `public bool IsInParty { get; set; }` |
| `CreateServerText` | `public string CreateServerText { get; set; }` |
| `IsCustomServerActionsActive` | `public bool IsCustomServerActionsActive { get; set; }` |
| `CloseText` | `public string CloseText { get; set; }` |
| `RefreshText` | `public string RefreshText { get; set; }` |
| `JoinText` | `public string JoinText { get; set; }` |
| `ServerNameText` | `public string ServerNameText { get; set; }` |
| `GameTypeText` | `public string GameTypeText { get; set; }` |
| `MapText` | `public string MapText { get; set; }` |
| `PlayerCountText` | `public string PlayerCountText { get; set; }` |
| `PingText` | `public string PingText { get; set; }` |
| `PasswordText` | `public string PasswordText { get; set; }` |
| `FirstFactionText` | `public string FirstFactionText { get; set; }` |
| `SecondFactionText` | `public string SecondFactionText { get; set; }` |
| `RegionText` | `public string RegionText { get; set; }` |
| `PremadeMatchTypeText` | `public string PremadeMatchTypeText { get; set; }` |
| `HostText` | `public string HostText { get; set; }` |
| `IsPlayerBasedCustomBattleEnabled` | `public bool IsPlayerBasedCustomBattleEnabled { get; set; }` |
| `IsPremadeGameEnabled` | `public bool IsPremadeGameEnabled { get; set; }` |
| `CustomServerActionsList` | `public MBBindingList<StringPairItemWithActionVM> CustomServerActionsList { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### OnTick
`public void OnTick(float dt)`

**用途 / Purpose:** 当 `tick` 事件触发时调用此方法。

### SetPremadeGameList
`public void SetPremadeGameList(PremadeGameEntry entries)`

**用途 / Purpose:** 设置 `premade game list` 的值或状态。

### SetCustomGameServerList
`public void SetCustomGameServerList(AvailableCustomGames availableCustomGames)`

**用途 / Purpose:** 设置 `custom game server list` 的值或状态。

### ExecuteRefresh
`public async void ExecuteRefresh()`

**用途 / Purpose:** 执行 `refresh` 操作或流程。

### ExecuteJoinSelectedGame
`public void ExecuteJoinSelectedGame()`

**用途 / Purpose:** 执行 `join selected game` 操作或流程。

### OnJoinGame
`public void OnJoinGame(MPCustomGameItemVM gameItem)`

**用途 / Purpose:** 当 `join game` 事件触发时调用此方法。

### ExecuteOpenCreateGamePanel
`public void ExecuteOpenCreateGamePanel()`

**用途 / Purpose:** 执行 `open create game panel` 操作或流程。

### ExecuteCloseCreateGamePanel
`public void ExecuteCloseCreateGamePanel()`

**用途 / Purpose:** 执行 `close create game panel` 操作或流程。

### SetRefreshInputKey
`public void SetRefreshInputKey(HotKey hotKey)`

**用途 / Purpose:** 设置 `refresh input key` 的值或状态。

## 使用示例

```csharp
var value = new MPCustomGameVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)