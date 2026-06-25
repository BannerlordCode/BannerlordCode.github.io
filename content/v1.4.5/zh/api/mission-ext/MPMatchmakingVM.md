---
title: "MPMatchmakingVM"
---
<!-- BEGIN BREADCRUMB -->
**首页** → **API 目录** → **本领域** → `MPMatchmakingVM`
- [← 本领域 / 返回 mission-ext](./)
- [↑ API 目录](../)
- [🏠 首页 v1.4.5](../../)
- [⭐ 版本架构](../../architecture/)
<!-- END BREADCRUMB -->
# MPMatchmakingVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingVM : ViewModel`
**Base:** `ViewModel`
**File:** `Bannerlord.Source/Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPMatchmakingVM.cs`

## 概述

`MPMatchmakingVM` 位于 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby`，它通过这组公开成员把对应子系统的状态、行为或流程入口暴露给 mod 开发者。阅读时先看属性代表“它持有什么状态”，再看方法代表“它允许你做什么”。

## 心智模型

先从命名空间 `TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby` 判断它属于哪层系统，再看公开方法：如果以 Get/Set 为主，它多半是状态对象；如果以 Create/Apply/Execute 为主，它更像服务或流程入口。

## 主要属性

| Name | Signature |
|------|-----------|
| `IsEnabled` | `public bool IsEnabled { get; set; }` |
| `HasUnofficialModulesLoaded` | `public bool HasUnofficialModulesLoaded { get; set; }` |
| `IsCustomGameStageFindEnabled` | `public bool IsCustomGameStageFindEnabled { get; set; }` |
| `IsRankedGamesEnabled` | `public bool IsRankedGamesEnabled { get; set; }` |
| `IsCustomGamesEnabled` | `public bool IsCustomGamesEnabled { get; set; }` |
| `IsQuickplayGamesEnabled` | `public bool IsQuickplayGamesEnabled { get; set; }` |
| `IsCustomServerListEnabled` | `public bool IsCustomServerListEnabled { get; set; }` |
| `IsPremadeGamesEnabled` | `public bool IsPremadeGamesEnabled { get; set; }` |
| `IsCustomServerFeatureSupported` | `public bool IsCustomServerFeatureSupported { get; set; }` |
| `IsClansFeatureSupported` | `public bool IsClansFeatureSupported { get; set; }` |
| `CustomServer` | `public MPCustomGameVM CustomServer { get; set; }` |
| `PremadeMatches` | `public MPCustomGameVM PremadeMatches { get; set; }` |
| `IsRanked` | `public bool IsRanked { get; set; }` |
| `RankedGameTypes` | `public MBBindingList<MPMatchmakingItemVM> RankedGameTypes { get; set; }` |
| `QuickplayGameTypes` | `public MBBindingList<MPMatchmakingItemVM> QuickplayGameTypes { get; set; }` |
| `CustomGameTypes` | `public MBBindingList<MPMatchmakingItemVM> CustomGameTypes { get; set; }` |
| `Regions` | `public SelectorVM<MPMatchmakingRegionSelectorItemVM> Regions { get; set; }` |
| `SelectionInfo` | `public MPMatchmakingSelectionInfoVM SelectionInfo { get; set; }` |
| `IsMatchFindPossible` | `public bool IsMatchFindPossible { get; set; }` |
| `IsFindingMatch` | `public bool IsFindingMatch { get; set; }` |
| `PlayText` | `public string PlayText { get; set; }` |
| `QuickPlayText` | `public string QuickPlayText { get; set; }` |
| `CustomGameText` | `public string CustomGameText { get; set; }` |
| `CommunityGameText` | `public string CommunityGameText { get; set; }` |
| `CustomServerListText` | `public string CustomServerListText { get; set; }` |
| `AutoFindText` | `public string AutoFindText { get; set; }` |
| `MatchFindNotPossibleText` | `public string MatchFindNotPossibleText { get; set; }` |
| `RankedText` | `public string RankedText { get; set; }` |
| `CasualText` | `public string CasualText { get; set; }` |
| `SelectionInfoText` | `public string SelectionInfoText { get; set; }` |
| `SelectedSubPageIndex` | `public int SelectedSubPageIndex { get; set; }` |
| `TeamMatchesText` | `public string TeamMatchesText { get; set; }` |
| `RegionsHint` | `public HintViewModel RegionsHint { get; set; }` |

## 主要方法

### RefreshValues
`public override void RefreshValues()`

**用途 / Purpose:** 刷新 `values` 的显示或缓存。

### TrySetMatchmakingSubPage
`public void TrySetMatchmakingSubPage(MatchmakingSubPages newPage)`

**用途 / Purpose:** 尝试获取 `set matchmaking sub page`，通常以 out 参数返回结果。

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 刷新 `player data` 的显示或缓存。

### OnFindingGame
`public void OnFindingGame()`

**用途 / Purpose:** 当 `finding game` 事件触发时调用此方法。

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**用途 / Purpose:** 当 `cancel finding game` 事件触发时调用此方法。

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 当 `finalize` 事件触发时调用此方法。

### GetSelectedGameTypesInfo
`public bool GetSelectedGameTypesInfo(out string gameTypes)`

**用途 / Purpose:** 获取 `selected game types info` 的当前值。

### RefreshWaitingTime
`public void RefreshWaitingTime()`

**用途 / Purpose:** 刷新 `waiting time` 的显示或缓存。

### ExecuteAutoFindGame
`public void ExecuteAutoFindGame()`

**用途 / Purpose:** 执行 `auto find game` 操作或流程。

### RefreshSubPageStates
`public void RefreshSubPageStates()`

**用途 / Purpose:** 刷新 `sub page states` 的显示或缓存。

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**用途 / Purpose:** 当 `premade game eligibility status received` 事件触发时调用此方法。

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**用途 / Purpose:** 当 `supported features refreshed` 事件触发时调用此方法。

## 使用示例

```csharp
var value = new MPMatchmakingVM();
value.RefreshValues();
```

## 参见

- [完整类目录](../catalog)