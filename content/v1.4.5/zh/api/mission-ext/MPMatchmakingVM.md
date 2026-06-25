---
title: "MPMatchmakingVM"
description: "MPMatchmakingVM 的自动生成类参考。"
---
# MPMatchmakingVM

**Namespace:** TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby
**Module:** TaleWorlds.MountAndBlade
**Type:** `public class MPMatchmakingVM : ViewModel`
**Base:** `ViewModel`
**File:** `Modules.Multiplayer/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection/TaleWorlds.MountAndBlade.Multiplayer.ViewModelCollection.Lobby/MPMatchmakingVM.cs`

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

**用途 / Purpose:** 使 「values」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshValues();
```

### TrySetMatchmakingSubPage
`public void TrySetMatchmakingSubPage(MatchmakingSubPages newPage)`

**用途 / Purpose:** 尝试获取 「set matchmaking sub page」 的值，通常通过 out 参数返回是否成功。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.TrySetMatchmakingSubPage(newPage);
```

### RefreshPlayerData
`public void RefreshPlayerData(PlayerData playerData)`

**用途 / Purpose:** 使 「player data」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshPlayerData(playerData);
```

### OnFindingGame
`public void OnFindingGame()`

**用途 / Purpose:** 在 「finding game」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnFindingGame();
```

### OnCancelFindingGame
`public void OnCancelFindingGame()`

**用途 / Purpose:** 在 「cancel finding game」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnCancelFindingGame();
```

### OnFinalize
`public override void OnFinalize()`

**用途 / Purpose:** 在 「finalize」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnFinalize();
```

### GetSelectedGameTypesInfo
`public bool GetSelectedGameTypesInfo(out string gameTypes)`

**用途 / Purpose:** 读取并返回当前对象中 「selected game types info」 的结果。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
var result = mPMatchmakingVM.GetSelectedGameTypesInfo(gameTypes);
```

### RefreshWaitingTime
`public void RefreshWaitingTime()`

**用途 / Purpose:** 使 「waiting time」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshWaitingTime();
```

### ExecuteAutoFindGame
`public void ExecuteAutoFindGame()`

**用途 / Purpose:** 执行 「auto find game」 对应的操作或工作流。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.ExecuteAutoFindGame();
```

### RefreshSubPageStates
`public void RefreshSubPageStates()`

**用途 / Purpose:** 使 「sub page states」 的显示或缓存与底层状态保持一致。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshSubPageStates();
```

### OnPremadeGameEligibilityStatusReceived
`public void OnPremadeGameEligibilityStatusReceived(bool isEligible)`

**用途 / Purpose:** 在 「premade game eligibility status received」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnPremadeGameEligibilityStatusReceived(false);
```

### OnSupportedFeaturesRefreshed
`public void OnSupportedFeaturesRefreshed(SupportedFeatures supportedFeatures)`

**用途 / Purpose:** 在 「supported features refreshed」 事件触发时调用此回调。

```csharp
// 先通过子系统 API 拿到 MPMatchmakingVM 实例
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.OnSupportedFeaturesRefreshed(supportedFeatures);
```

## 使用示例

```csharp
// 通常从对应子系统 API 获取实例后调用
MPMatchmakingVM mPMatchmakingVM = ...;
mPMatchmakingVM.RefreshValues();
```

## 参见

- [本区域目录](../)